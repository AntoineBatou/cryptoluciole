"""Convertit un dossier markdown (drafts/articles/<slug>/dossier.md) en blocs TS.

Usage : python3 drafts/articles/convert_dossier.py <md> <ts_sortie> <NOM_CONST>

Le texte est repris VERBATIM : ce script ne fait que découper en blocs.
Syntaxe reconnue :
  # INTRO | titre            partie d'introduction (titre H1, pas de bandeau)
  # PARTIE I — Nom           partie avec bandeau ; ligne suivante "> sous-titre"
  # VERDICT | titre          partie de verdict
  ## I.1 Titre               section (chapitre si numérotée, sinon sous-partie)
  ### Titre                  sous-titre interne (st)
  - item / 1. item           liste / liste numérotée
  | a | b |                  tableau (1re ligne = en-têtes)
  :::def Terme | slug        encadré définition (slug facultatif) … :::
  :::essentiel|piege|exemple Titre   encadré … ::: (lignes "- " = puces)
  [[FIGURE n | titre | légende]]     figure SVG (clé "<slug>-n")
  [[IMAGE /chemin.png | légende]]    capture d'écran
"""
import json
import re
import sys
import unicodedata


def slugify(t):
    t = unicodedata.normalize("NFD", t).encode("ascii", "ignore").decode()
    t = re.sub(r"[^a-zA-Z0-9]+", "-", t.lower()).strip("-")
    return t[:60] or "section"


NBSP, NNBSP = "\u00a0", "\u202f"


def typo(t):
    """Espaces insécables à la française, hors URL : avant % $ € : ; ? ! », après «,
    et entre les groupes de chiffres (2 000 $). Le texte lui-même ne change pas."""
    morceaux = re.split(r"(\]\([^)]+\))", t)  # ne pas toucher aux (url) des liens
    out = []
    for m in morceaux:
        if m.startswith("]("):
            out.append(m); continue
        m = re.sub(r"(?<=\d) (?=\d{3}(?!\d))", NNBSP, m)
        m = re.sub(r" (?=[%$€:;?!»])", NBSP, m)
        m = re.sub(r"« ", "«" + NBSP, m)
        m = re.sub(r"(?<=\d) (?=(?:M|Md|k)\$|h\b|j\b|min\b|pb\b|ETH\b|USDC\b|USDG\b|USDT\b|WETH\b)", NBSP, m)
        out.append(m)
    return "".join(out)


def js(s):
    # Typo sur le texte seulement : ni les nombres, ni les chemins (/dossiers/…).
    if isinstance(s, str) and not s.startswith("/"):
        s = typo(s)
    return json.dumps(s, ensure_ascii=False)


def convert(md, slug):
    lignes = md.split("\n")
    parties, partie, section = [], None, None
    used_ids = set()

    def new_section(titre=None):
        nonlocal section
        base = slugify(titre) if titre else f"{partie['id']}-chapo"
        sid, k = base, 2
        while sid in used_ids:
            sid, k = f"{base}-{k}", k + 1
        used_ids.add(sid)
        section = {"id": sid, "titre": titre, "blocs": []}
        partie["sections"].append(section)

    def add(bloc):
        if section is None:
            new_section()
        section["blocs"].append(bloc)

    i = 0
    para = []

    def flush():
        if para:
            add({"type": "p", "texte": " ".join(para).strip()})
            para.clear()

    while i < len(lignes):
        l = lignes[i]
        s = l.strip()
        if not s:
            flush(); i += 1; continue
        if s.startswith("# "):
            flush()
            h = s[2:]
            if h.startswith("INTRO |") or h.startswith("VERDICT |"):
                kind, titre = [x.strip() for x in h.split("|", 1)]
                partie = {"id": "introduction" if kind == "INTRO" else "verdict", "titre": titre, "sections": []}
            else:
                m = re.match(r"PARTIE (\w+)", h)
                partie = {"id": f"partie-{len(m.group(1)) if m else len(parties)}", "bandeau": h, "sections": []}
                if i + 1 < len(lignes) and lignes[i + 1].startswith("> "):
                    partie["sousTitre"] = lignes[i + 1][2:].strip(); i += 1
            parties.append(partie); section = None; i += 1; continue
        if s.startswith("## "):
            flush(); new_section(s[3:].strip()); i += 1; continue
        if s.startswith("### "):
            flush(); add({"type": "st", "texte": s[4:].strip()}); i += 1; continue
        if s.startswith(":::"):
            flush()
            head = s[3:].strip()
            corps = []
            i += 1
            while lignes[i].strip() != ":::":
                corps.append(lignes[i].rstrip()); i += 1
            i += 1
            kind, _, reste = head.partition(" ")
            if kind == "def":
                terme, _, sl = reste.partition("|")
                b = {"type": "def", "terme": terme.strip(), "texte": " ".join(c.strip() for c in corps if c.strip())}
                if sl.strip():
                    b["slug"] = sl.strip()
                add(b)
            else:
                b = {"type": "box", "ton": kind}
                if reste.strip():
                    b["titre"] = reste.strip()
                items = [c.strip()[2:] for c in corps if c.strip().startswith("- ")]
                texte = [c.strip() for c in corps if c.strip() and not c.strip().startswith("- ")]
                if texte:
                    b["texte"] = "\n".join(texte)
                if items:
                    b["items"] = items
                add(b)
            continue
        m = re.match(r"\[\[FIGURE (\d+) \| (.+?) \| (.+)\]\]$", s)
        if m:
            flush(); add({"type": "figure", "id": int(m.group(1)), "cle": f"{slug}-{m.group(1)}", "titre": m.group(2), "legende": m.group(3)}); i += 1; continue
        m = re.match(r"\[\[IMAGE (\S+) \| (.+)\]\]$", s)
        if m:
            flush(); add({"type": "image", "src": m.group(1), "legende": m.group(2)}); i += 1; continue
        if s.startswith("|"):
            flush()
            rows = []
            while i < len(lignes) and lignes[i].strip().startswith("|"):
                cells = [c.strip() for c in lignes[i].strip().strip("|").split("|")]
                if not all(re.fullmatch(r":?-+:?", c) for c in cells):
                    rows.append(cells)
                i += 1
            add({"type": "tableau", "entetes": rows[0], "lignes": rows[1:]}); continue
        if re.match(r"^(- |\d+\. )", s):
            flush()
            num = bool(re.match(r"^\d+\. ", s))
            items = []
            while i < len(lignes) and re.match(r"^(- |\d+\. )", lignes[i].strip()):
                items.append(re.sub(r"^(- |\d+\. )", "", lignes[i].strip())); i += 1
            add({"type": "listenum" if num else "liste", "items": items}); continue
        para.append(s); i += 1
    flush()
    return parties


def to_ts(obj, ind=0):
    pad = "  " * ind
    if isinstance(obj, dict):
        inner = ",\n".join(f"{pad}  {k}: {to_ts(v, ind + 1)}" for k, v in obj.items() if v is not None)
        return "{\n" + inner + f",\n{pad}}}"
    if isinstance(obj, list):
        if not obj:
            return "[]"
        inner = ",\n".join(f"{pad}  {to_ts(v, ind + 1)}" for v in obj)
        return "[\n" + inner + f",\n{pad}]"
    return js(obj)


if __name__ == "__main__":
    md_path, ts_path, const = sys.argv[1:4]
    slug = md_path.rstrip("/").split("/")[-2]
    parties = convert(open(md_path, encoding="utf-8").read(), slug)
    out = (
        "// GÉNÉRÉ par drafts/articles/convert_dossier.py depuis "
        f"drafts/articles/{slug}/dossier.md — ne pas éditer à la main,\n"
        "// modifier le markdown puis relancer le script.\n"
        'import type { DossierPartie } from "./dossiers";\n\n'
        f"export const {const}: DossierPartie[] = {to_ts(parties)};\n"
    )
    open(ts_path, "w", encoding="utf-8").write(out)
    n = sum(len(sec["blocs"]) for p in parties for sec in p["sections"])
    print(f"{len(parties)} parties, {sum(len(p['sections']) for p in parties)} sections, {n} blocs -> {ts_path}")
