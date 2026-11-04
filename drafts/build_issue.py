#!/usr/bin/env python3
"""Assemble un numéro depuis drafts/issue-XX/*.md (notation [p] [st] [def|slug] [liste] [tableau]
[avis] [image|chemin|légende] [source]) vers :
  - l'entrée du numéro dans site/app/numeros/issues.ts (remplacée si déjà présente) ;
  - l'email complet site/app/emails/issues/issue-XX.ts (gabarit et styles du #8).
Relançable à volonté : on corrige les brouillons, on relance.
Usage : python3 drafts/build_issue.py 9
Les marqueurs [À VÉRIFIER] / [À RELEVER] sont retirés du texte publié et listés en FACTCHECK.
"""
import html, json, re, sys
from pathlib import Path

N = int(sys.argv[1]) if len(sys.argv) > 1 else 9
ROOT = Path(__file__).resolve().parent.parent
D = ROOT / "drafts" / f"issue-{N:02d}"
SITE = ROOT / "site" / "app"
NB = " "
RAW = f"https://raw.githubusercontent.com/AntoineBatou/cryptoluciole/main/site/public/numeros/{N}/"
FACTCHECK = []

# ---------- config propre au numéro (le reste est lu dans les brouillons) ----------
CFG = json.loads((D / "meta.json").read_text())

# ---------- typo ----------
def typo(s):
    s = s.replace(" ", NB)
    s = re.sub(r" ([:;?!»%])", NB + r"\1", s)
    s = re.sub(r"« ", "«" + NB, s)
    return s

def pull_markers(s, where):
    def keep(m):
        FACTCHECK.append(f"{where} : {m.group(0).strip()}")
        return ""
    return re.sub(r"\s*\[À (?:VÉRIFIER|RELEVER|RAFRAÎCHIR)[^\]]*\]", keep, s)

# ---------- inline : email (HTML) / site (texte brut) ----------
A = 'style="color:#28B092; font-weight:700; text-decoration:none;"'
def to_html(s, dark=False):
    s = typo(s)
    s = html.escape(s, quote=False)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", lambda m: f'<a href="{m.group(2)}" {A}>{m.group(1)}</a>', s)
    strong = '<strong style="color:#ffffff;">' if dark else "<strong>"
    s = re.sub(r"\*\*(.+?)\*\*", lambda m: f"{strong}{m.group(1)}</strong>", s)
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"<em>\1</em>", s)
    return s.replace(NB, "&nbsp;")

def to_txt(s):
    s = typo(s)
    s = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r"\1", s)
    s = s.replace("**", "")
    s = re.sub(r"(?<![\w*])\*(?!\s)(.+?)(?<!\s)\*(?![\w*])", r"\1", s)
    return s

# ---------- parsing des brouillons ----------
MARK = re.compile(r"^\[(p|st|def|liste|tableau|avis|image|source|titre|texte|cta|question|a|b)(?:\s*\|([^\]]*))?\]\s*(.*)$")

def parse(text, where):
    blocks, cur = [], None
    for line in text.split("\n"):
        m = MARK.match(line)
        if m:
            cur = {"k": m.group(1), "arg": (m.group(2) or "").strip(), "lines": []}
            if m.group(3).strip():
                cur["lines"].append(m.group(3).strip())
            blocks.append(cur)
        elif line.startswith("---") or line.startswith("## ") or line.startswith("> "):
            cur = None
        elif cur is not None:
            cur["lines"].append(line.rstrip())
    out = []
    for b in blocks:
        ls = [pull_markers(l, where) for l in b["lines"]]
        while ls and not ls[-1].strip():
            ls.pop()
        while ls and not ls[0].strip():
            ls.pop(0)
        k = b["k"]
        if k == "p":
            t = " ".join(l.strip() for l in ls if l.strip())
            if t:
                out.append({"k": "p", "t": t})
        elif k == "st":
            out.append({"k": "st", "t": " ".join(l.strip() for l in ls).strip()})
        elif k == "def":
            slug = b["arg"].strip("` ")
            terme = ls[0].strip().strip("*")
            out.append({"k": "def", "slug": slug, "terme": terme, "t": " ".join(l.strip() for l in ls[1:] if l.strip())})
        elif k == "liste":
            out.append({"k": "liste", "items": [l.strip()[2:].strip() for l in ls if l.strip().startswith("- ")]})
        elif k == "tableau":
            rows = [[c.strip() for c in l.strip().strip("|").split("|")] for l in ls if l.strip().startswith("|")]
            rows = [r for r in rows if not all(re.fullmatch(r":?-+:?", c) for c in r)]
            out.append({"k": "tableau", "head": rows[0], "rows": rows[1:]})
        elif k == "avis":
            body = "\n".join(ls)
            body = re.sub(r"^💡\s*\*\*Notre avis\s*:?\s*\*\*\s*:?\s*", "", body.strip())
            items = [l.strip()[2:].strip() for l in body.split("\n") if l.strip().startswith("- ")]
            texte = " ".join(l.strip() for l in body.split("\n") if l.strip() and not l.strip().startswith("- "))
            out.append({"k": "avis", "t": texte, "items": items})
        elif k == "image":
            path, _, leg = b["arg"].partition("|")
            out.append({"k": "image", "file": Path(path.strip()).name, "leg": leg.strip()})
        else:
            out.append({"k": k, "t": " ".join(l.strip() for l in ls if l.strip())})
    return out

def body_of(md):
    """Texte entre le 1er '---' et les notes du rédacteur."""
    md = md.split("## Notes du Rédacteur")[0]
    return md

AMORCE = re.compile(r"^\*\*⬡\s*(.+?)\*\*\s*(.*)$")

# ---------- rendu SITE (NotionEl) ----------
def site_els(blocks):
    els = []
    for b in blocks:
        k = b["k"]
        if k == "p":
            if b["t"].startswith("[→"):
                continue
            m = AMORCE.match(b["t"])
            if m:
                els.append({"type": "st", "texte": to_txt(m.group(1)).rstrip(".")})
                if m.group(2):
                    els.append({"type": "p", "texte": to_txt(m.group(2))})
            else:
                els.append({"type": "p", "texte": to_txt(b["t"])})
        elif k == "st":
            els.append({"type": "st", "texte": to_txt(b["t"].replace("⬡", "")).strip().rstrip(".")})
        elif k == "def":
            els.append({"type": "def", "terme": to_txt(b["terme"]), "slug": b["slug"], "texte": to_txt(b["t"])})
        elif k == "liste":
            els.append({"type": "liste", "items": [to_txt(i) for i in b["items"]]})
        elif k == "tableau":
            els.append({"type": "tableau", "entetes": [to_txt(h) for h in b["head"]], "lignes": [[to_txt(c) for c in r] for r in b["rows"]]})
        elif k == "avis":
            e = {"type": "avis", "texte": to_txt(b["t"])}
            if b["items"]:
                e["items"] = [to_txt(i) for i in b["items"]]
            els.append(e)
        elif k == "image":
            els.append({"type": "image", "src": f"/numeros/{N}/{b['file']}", "legende": to_txt(b["leg"])})
    return els

# ---------- rendu EMAIL ----------
P = '<p style="margin:0 0 14px 0; font-size:16px; line-height:1.7;">'
ST = '<p style="margin:18px 0 10px 0; font-size:16px; font-weight:800; color:#28B092;">'
GOLD = '<strong style="color:#F5A623;">'
UL = '<ul style="margin:0 0 14px 0; padding-left:20px; font-size:16px; line-height:1.7;">'
LI = '<li style="margin-bottom:6px;">'
DEF = ('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f6f6; border-radius:8px; margin:0 0 14px 0;">'
       '<tr><td style="padding:12px 16px; font-size:14px; line-height:1.6; color:#475569;">')
AVIS = ('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-left:4px solid #28B092; border-radius:8px; margin-bottom:14px;">'
        '<tr><td style="padding:14px 18px; font-size:16px; line-height:1.65; color:#1A2332;">')
SRC = '<p style="margin:0 0 4px 0; font-size:11px; line-height:1.5; color:#94a3b8;">'
TH = '<td valign="bottom" style="padding:10px 10px; font-size:13px; font-weight:700; color:#ffffff; line-height:1.35;">'
TD0 = '<td valign="top" style="padding:10px 10px; font-size:14px; line-height:1.5; color:#1A2332; border-top:1px solid #e2e8f0;">'
TD = '<td valign="top" style="padding:10px 10px; font-size:14px; line-height:1.5; color:#334155; border-top:1px solid #e2e8f0;">'

def ul(items):
    lis = [f"{LI}{to_html(i)}</li>" for i in items]
    if lis:
        lis[-1] = lis[-1].replace(LI, "<li>", 1)
    return UL + "".join(lis) + "</ul>"

def avis_html(b):
    s = AVIS + "💡 <strong>Notre avis&nbsp;:</strong>"
    if b["t"]:
        s += " " + to_html(b["t"])
    if b["items"]:
        s += '<ul style="margin:8px 0 0 0; padding-left:20px;">' + "".join(
            f'<li style="margin-bottom:6px;">{to_html(i)}</li>' for i in b["items"]) + "</ul>"
    return s + "</td></tr></table>"

def mail_els(blocks):
    out = []
    for b in blocks:
        k = b["k"]
        if k == "p":
            t = b["t"]
            if t.startswith("[→"):
                out.append('<p style="margin:0 0 4px 0; font-size:16px; line-height:1.7;">' + to_html(t) + "</p>")
                continue
            m = AMORCE.match(t)
            if m:
                out.append(P + GOLD + "⬡ " + to_html(m.group(1)) + "</strong> " + to_html(m.group(2)) + "</p>")
            else:
                out.append(P + to_html(t) + "</p>")
        elif k == "st":
            t = b["t"]
            if "⬡" in t:
                out.append(P + GOLD + to_html(t.replace("**", "")) + "</strong></p>")
            else:
                out.append(ST + to_html(t.replace("**", "")) + "</p>")
        elif k == "def":
            out.append(DEF + f'📖 <a href="https://www.cryptoluciole.com/glossaire/{b["slug"]}" {A}>{to_html(b["terme"])}</a> — {to_html(b["t"])}</td></tr></table>')
        elif k == "liste":
            out.append(ul(b["items"]))
        elif k == "tableau":
            rows = [f'<tr style="background-color:#1d8870;">' + "".join(TH + to_html(h) + "</td>" for h in b["head"]) + "</tr>"]
            for j, r in enumerate(b["rows"]):
                bg = ' style="background-color:#f7fafa;"' if j % 2 else ""
                rows.append(f"<tr{bg}>" + TD0 + "<strong>" + to_html(r[0]) + "</strong></td>" + "".join(TD + to_html(c) + "</td>" for c in r[1:]) + "</tr>")
            out.append('<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #e2e8f0; border-radius:10px; overflow:hidden; margin:0 0 16px 0;">\n      '
                       + "\n      ".join(rows) + "\n    </table>")
        elif k == "avis":
            out.append(avis_html(b))
        elif k == "image":
            out.append(f'<img src="{RAW}{b["file"]}" width="528" alt="{html.escape(to_txt(b["leg"]))}" style="display:block; width:100%; max-width:528px; height:auto; border:0; border-radius:8px;">'
                       f'<div style="font-size:11px; line-height:1.5; color:#94a3b8; margin:6px 0 16px 0;">{to_html(b["leg"])}</div>')
        elif k == "source":
            out.append(SRC + "Source&nbsp;: " + to_html(b["t"]) + "</p>")
    return "\n    ".join(out)

def pill(txt, bg, fg):
    return (f'<table role="presentation" cellpadding="0" cellspacing="0"><tr><td style="background-color:{bg}; border-radius:30px; padding:6px 16px; '
            f'font-size:12px; font-weight:700; color:{fg}; letter-spacing:1.2px;">{txt}</td></tr></table>')

HR = '  <tr><td style="padding:26px 36px 0 36px;"><div style="border-top:1px solid #eef2f2;"></div></td></tr>\n'

# ---------- lecture des sections ----------
def split_at(blocks, pred):
    for i, b in enumerate(blocks):
        if pred(b):
            return blocks[:i], blocks[i:]
    return blocks, []

# ON ÉCLAIRE
oe = parse(body_of((D / "on-eclaire.md").read_text()), "ON ÉCLAIRE")
oe_avis = [b for b in oe if b["k"] == "avis"]
oe = [b for b in oe if b["k"] != "avis"] + ([oe_avis[0]] if CFG.get("onEclaireAvis") == "premier" else oe_avis[-1:])

# DANS LE FAISCEAU
fx_md = (D / "dans-le-faisceau.md").read_text().split("## Notes du Rédacteur")[0]
actus = []
for part in fx_md.split("## ✦ Actu")[1:]:
    titre = re.search(r"\*\*Titre \(proposition\)\*\*\s*:\s*(.+)", part).group(1).strip().lstrip("✦").strip()
    bl = parse(part, f"Actu « {titre[:30]} »")
    actus.append({"titre": titre, "blocks": bl})

# SOUS LA LOUPE
sl = parse(body_of((D / "sous-la-loupe.md").read_text()), "SOUS LA LOUPE")
def is_st(name):
    return lambda b: b["k"] == "st" and b["t"].startswith(name)
_, rest = split_at(sl, is_st("En bref"))
rest = rest[1:]
bref_b, rest = rest[0], rest[1:]
etapes, rest = split_at(rest, is_st("Le rendement"))
etapes = [b for b in etapes if not (b["k"] == "st" and b["t"].startswith("Comment ça marche"))]
rend, rest = split_at(rest[1:], is_st("Les risques"))
risq, rest = split_at(rest[1:], is_st("Pourquoi ça compte"))
imp = rest[1:]

# LES REPÈRES
rp_md = (D / "reperes.md").read_text()
cours = []
for l in rp_md.split("## Tableau")[1].split("\n"):
    c = [x.strip() for x in l.strip().strip("|").split("|")]
    if len(c) == 4 and c[0] not in ("Actif",) and not c[0].startswith("-"):
        sens = "up" if "▲" in c[3] else "down" if "▼" in c[3] else "flat"
        cours.append({"actif": c[0], "nom": c[1] if c[1] != c[0] else "", "prix": typo(c[2]), "var7j": typo(c[3]), "sens": sens})
rp = parse(rp_md.split("## Notes")[0], "LES REPÈRES")

# FIN : ÇA BRILLE / DÉFINITIONS / JEU / ERRATUM
fin_md = (D / "fin.md").read_text().split("## Notes du Rédacteur")[0]
cb_md = fin_md.split("## 💡 ÇA BRILLE")[1].split("## 📖 DÉFINITIONS")[0]
cb = parse(cb_md, "ÇA BRILLE")
defs_md = fin_md.split("## 📖 DÉFINITIONS")[1].split("## ✉️")[0]
defs = []
for m in re.finditer(r"^- \*\*(.+?)\*\*\s*—\s*`slug:\s*([\w-]+)`\s*\n((?:  .+\n?)+)", defs_md, re.M):
    defs.append({"terme": m.group(1), "slug": m.group(2), "t": pull_markers(" ".join(x.strip() for x in m.group(3).split("\n") if x.strip()), "DÉFINITIONS")})
jeu_b = {b["k"]: b["t"] for b in parse(fin_md.split("## ✉️")[1].split("## 📌")[0], "À toi de jouer")}
err = parse(fin_md.split("## 📌")[1], "Erratum") if "## 📌" in fin_md else []

# ---------- SITE : objet Issue ----------
def cb_title(): return next(b["t"] for b in cb if b["k"] == "titre")
def cb_text(): return next(b["t"] for b in cb if b["k"] == "texte")
cb_corps = [b for b in cb if b["k"] not in ("titre", "texte")]

issue = {
    "id": str(N), "numero": N, "vignette": CFG["vignette"], "date": CFG["date"], "titre": CFG["titre"],
    "excerpt": typo(CFG["excerpt"]),
    "notion": {"titre": to_txt(CFG["notionTitreTexte"]), "corps": site_els(oe)},
    "actus": [],
    "protocole": {
        "nom": CFG["loupeNom"], "slug": CFG["loupeSlug"], "bref": to_txt(bref_b["t"]), "etapes": [],
        "etapesCorps": site_els(etapes), "rendement": "", "rendementCorps": site_els(rend),
        "risqueNiveau": CFG["risqueNiveau"], "risqueSens": CFG["risqueSens"],
        "risques": to_txt(risq[0]["t"]), "risquesCorps": site_els(risq[1:]),
        "importance": to_txt(imp[0]["t"]), "importanceCorps": site_els(imp[1:]),
    },
    "cours": cours, "cours7jLabel": CFG["cours7jLabel"], "coursHeure": CFG["coursHeure"],
    "coursAvisCorps": site_els(rp),
    "data": {"titre": to_txt(cb_title()), "texte": to_txt(cb_text()),
             "corps": site_els([b for b in cb_corps if b["k"] != "source"]) + [{"type": "p", "texte": "Sources : " + to_txt(b["t"])} for b in cb_corps if b["k"] == "source"]},
    "jeu": {"cta": to_txt(jeu_b["cta"]), **({"question": to_txt(jeu_b["question"]), "a": to_txt(jeu_b["a"]), "b": to_txt(jeu_b["b"])} if "question" in jeu_b else {})},
    "definitions": [{"terme": to_txt(d["terme"]), "def": to_txt(d["t"]), "slug": d["slug"]} for d in defs],
}
for a in actus:
    bl = a["blocks"]
    av = [b for b in bl if b["k"] == "avis"]
    src = [b for b in bl if b["k"] == "source"]
    corps = [b for b in bl if b["k"] not in ("avis", "source")]
    e = {"titre": to_txt(a["titre"]), "corps": site_els(corps), "avis": to_txt(av[0]["t"]) if av else "",
         "source": to_txt(src[0]["t"]) if src else ""}
    if av and av[0]["items"]:
        e["avisItems"] = [to_txt(i) for i in av[0]["items"]]
    issue["actus"].append(e)

obj = json.dumps(issue, ensure_ascii=False, indent=2)
obj = "\n".join("  " + l for l in obj.split("\n"))
fc = "\n".join(f"  // FACTCHECK: {x}" for x in FACTCHECK)
entry = f"  // ===== Numéro {N} (généré par drafts/build_issue.py depuis drafts/issue-{N:02d}/) =====\n{fc}\n{obj}"
ip = SITE / "numeros" / "issues.ts"
s = ip.read_text()
END = "\n];\n\n// Petite fonction utilitaire"
s = re.sub(rf",\n  // ===== Numéro {N} \(généré.*?(?={re.escape(END)})", "", s, flags=re.S)
assert s.count(END) == 1
s = s.replace(END, ",\n" + entry + END, 1)
ip.write_text(s)

# ---------- EMAIL ----------
def sec_pill(t, gold=False):
    return pill(t, "#fff4e0", "#b9770f") if gold else pill(t, "#e8f7f3", "#1d8870")

h = []
h.append(f"""  <tr>
    <td style="padding:26px 36px 0 36px;">
      <p style="margin:0; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.6px;">#{N} · {CFG['date'].upper()}</p>
      <h1 style="margin:6px 0 0 0; font-size:26px; font-weight:800; color:#1A2332; line-height:1.25;">{to_html(CFG['titre'])}</h1>
    </td>
  </tr>

  <tr>
    <td style="padding:20px 36px 10px 36px; color:#1A2332;">
      <p style="margin:0 0 16px 0; font-size:16px; line-height:1.65;">Bonjour à toi 👋,</p>
      <p style="margin:0 0 14px 0; font-size:16px; line-height:1.65;">{to_html(CFG['intro'])}</p>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7fafa; border-radius:12px;">
        <tr><td style="padding:18px 22px; font-size:15px; line-height:2; color:#475569;">
          <strong style="color:#1A2332;">Au menu&nbsp;:</strong><br>
          """ + "<br>\n          ".join(to_html(x) for x in CFG["menu"]) + """
        </td></tr>
      </table>
    </td>
  </tr>
""")
# ON ÉCLAIRE
h.append(f"""  <tr><td style="padding:28px 36px 0 36px;">
    {sec_pill('🔦 ON ÉCLAIRE')}
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">{CFG['notionTitreHtml']}</p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    {mail_els(oe)}
  </td></tr>
""" + HR)
# ACTUS
h.append(f"""  <tr><td style="padding:24px 36px 0 36px;">
    {sec_pill('✨ DANS LE FAISCEAU', gold=True)}
  </td></tr>
""")
for i, a in enumerate(actus):
    bl = [b for b in a["blocks"] if b["k"] != "source"] + [b for b in a["blocks"] if b["k"] == "source"]
    h.append(f"""  <tr><td style="padding:18px 36px 0 36px; color:#1A2332;">
    <p style="margin:0 0 10px 0; font-size:17px; font-weight:700;"><span style="color:#F5A623;">✦</span>&nbsp; {to_html(a['titre'])}</p>
    {mail_els(bl)}
  </td></tr>
""")
h.append(HR)
# SOUS LA LOUPE
badge = {"eleve": ("#fee2e2", "#b91c1c", "🔴 Élevé"), "moyen": ("#fef9c3", "#a16207", "🟡 Moyen"), "faible": ("#dcfce7", "#15803d", "🟢 Faible")}[CFG["risqueSens"]]
h.append(f"""  <tr><td style="padding:24px 36px 0 36px;">
    {sec_pill('🔍 SOUS LA LOUPE')}
    <p style="margin:14px 0 16px 0; font-size:22px; font-weight:800; color:#1A2332;">{CFG['loupeNom']} <span style="color:#94a3b8; font-weight:600; font-size:18px;">{to_html(CFG['loupeSousTitre'])}</span></p>
  </td></tr>
  <tr><td style="padding:0 36px; color:#1A2332;">
    {P}<strong style="color:#28B092;">En bref.</strong> {to_html(bref_b['t'])}</p>
    {ST}Comment ça marche</p>
    {mail_els(etapes)}
    {ST}Le rendement</p>
    {mail_els(rend)}
    {ST}Les risques &nbsp;<span style="background-color:{badge[0]}; color:{badge[1]}; border-radius:20px; padding:3px 12px; font-size:13px; font-weight:700;">{badge[2]}</span></p>
    {mail_els(risq)}
    {ST}Pourquoi ça compte</p>
    {mail_els(imp)}
  </td></tr>
""" + HR)
# REPÈRES
rows = []
for j, c in enumerate(cours):
    col = {"up": "#16a34a", "down": "#dc2626", "flat": "#94a3b8"}[c["sens"]]
    bg = ' style="background-color:#f7fafa;"' if j % 2 else ""
    rows.append(f'<tr{bg}><td style="padding:13px 12px; font-size:16px; color:#1A2332;"><strong style="color:{col};">{c["actif"]}</strong> <span style="color:#94a3b8;">{c["nom"]}</span></td>'
                f'<td align="right" style="padding:13px 12px; font-size:16px; font-weight:700; color:#1A2332;">{to_html(c["prix"])}</td>'
                f'<td align="right" style="padding:13px 12px; font-size:15px; font-weight:700; color:{col};">{to_html(c["var7j"])}</td></tr>')
TDH = '<td align="right" style="padding:11px 12px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">'
h.append(f"""  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" cellpadding="0" cellspacing="0"><tr>
      <td style="background-color:#eef0ff; border-radius:30px; padding:6px 16px; font-size:12px; font-weight:700; color:#4338ca; letter-spacing:1.2px;">📊 LES REPÈRES</td>
      <td style="padding-left:12px; font-size:12px; color:#94a3b8; white-space:nowrap;">{CFG['reperesDate']}</td>
    </tr></table>
  </td></tr>
  <tr><td style="padding:16px 36px 0 36px; color:#1A2332;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eef2f2; border-radius:12px; overflow:hidden;">
      <tr style="background-color:#1A2332;">
        <td style="padding:11px 12px; font-size:12px; font-weight:600; color:#94a3b8; letter-spacing:0.5px;">ACTIF</td>
        {TDH}PRIX</td>
        {TDH}{CFG['cours7jLabel'].upper()}</td>
      </tr>
      """ + "\n      ".join(rows) + f"""
    </table>
    <p style="margin:8px 0 14px 0; font-size:11px; line-height:1.5; color:#94a3b8;">{to_html(CFG['coursNote'])}</p>
    {mail_els(rp)}
  </td></tr>
""")
# ÇA BRILLE (carte sombre) + avis/source dessous
def card_els(bl):
    o = []
    for b in bl:
        if b["k"] == "st":
            o.append(f'<div style="font-size:15px; font-weight:800; color:#F5A623; margin:16px 0 8px 0;">{to_html(b["t"])}</div>')
        elif b["k"] == "p":
            o.append(f'<div style="font-size:14px; line-height:1.7; color:#cbd5e1; margin-bottom:12px;">{to_html(b["t"], dark=True)}</div>')
        elif b["k"] == "liste":
            o.append('<ul style="margin:0 0 12px 0; padding-left:18px; font-size:14px; line-height:1.7; color:#cbd5e1;">' + "".join(
                f'<li style="margin-bottom:4px;">{to_html(i, dark=True)}</li>' for i in b["items"]) + "</ul>")
    return "\n        ".join(o)
inner = [b for b in cb_corps if b["k"] in ("st", "p", "liste")]
after = [b for b in cb_corps if b["k"] in ("avis", "source")]
h.append(f"""  <tr><td style="padding:24px 36px 0 36px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#1A2332; background:linear-gradient(135deg,#1A2332,#2e1b8b); border-radius:14px;">
      <tr><td style="padding:22px 24px;">
        <div style="font-size:12px; font-weight:700; color:#F5A623; letter-spacing:1.2px; margin-bottom:8px;">💡 ÇA BRILLE</div>
        <div style="font-size:22px; font-weight:800; color:#ffffff; margin-bottom:12px; line-height:1.3;">{to_html(cb_title())}</div>
        <div style="font-size:14px; line-height:1.7; color:#cbd5e1; margin-bottom:12px;">{to_html(cb_text(), dark=True)}</div>
        {card_els(inner)}
      </td></tr>
    </table>
    <div style="height:18px;"></div>
    {mail_els(after)}
  </td></tr>
""" + HR)
# DÉFINITIONS
h.append(f"""  <tr><td style="padding:24px 36px 0 36px;">
    {sec_pill('📖 DÉFINITIONS', gold=True)}
  </td></tr>
""")
for i, d in enumerate(defs):
    h.append(f"""  <tr><td style="padding:{16 if i == 0 else 14}px 36px 0 36px; color:#1A2332;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0"><tr>
      <td valign="top" width="20" style="font-size:16px; color:#F5A623; line-height:1.6;">•</td>
      <td style="font-size:16px; line-height:1.6;"><a href="https://www.cryptoluciole.com/glossaire/{d['slug']}" {A}>{to_html(d['terme'])}</a> — {to_html(d['t'])}</td>
    </tr></table>
  </td></tr>
""")
h.append(HR)
# JEU + erratum
q = to_html(jeu_b.get("question", ""))
h.append(f"""  <tr><td style="padding:24px 36px 28px 36px; color:#1A2332;">
    <p style="margin:0 0 12px 0; font-size:18px; font-weight:800;">✉️ À toi de jouer</p>
    <p style="margin:0 0 16px 0; font-size:16px; line-height:1.6;">{to_html(jeu_b['cta'])}</p>
""" + (f"""    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f0fdf4; border-radius:12px;">
      <tr><td style="padding:18px 20px; font-size:16px; line-height:1.8;">
        🗳️ <strong>{q}</strong> Réponds <strong>A</strong> ou <strong>B</strong>&nbsp;:<br>
        <strong style="color:#28B092;">A.</strong> {to_html(jeu_b['a'])}<br>
        <strong style="color:#28B092;">B.</strong> {to_html(jeu_b['b'])}
      </td></tr>
    </table>
""" if "question" in jeu_b else "") + f"""""" + "".join(f'    <p style="margin:18px 0 0 0; font-size:13px; line-height:1.6; color:#64748b;">📌 {to_html(b["t"])}</p>\n' for b in err if b["k"] == "p") + """  </td></tr>
""")

tpl = (SITE / "emails" / "issues" / "issue-08.ts").read_text()
head = tpl.split("  <tr>\n    <td style=\"padding:26px 36px 0 36px;\">")[0]
foot = tpl[tpl.index('  <tr><td style="background-color:#1A2332; padding:24px 36px;">'):]
head = re.sub(r"// ===== Numéro #8.*?export const issue08", f"""// ===== Numéro #{N} — version email (charte CryptoLuciole) =====
// GÉNÉRÉ par drafts/build_issue.py depuis drafts/issue-{N:02d}/*.md (ne pas éditer à la main :
// corriger les brouillons puis relancer). Les [À VÉRIFIER] sont listés en FACTCHECK dans issues.ts.
// Le lien de désinscription est le placeholder %UNSUBSCRIBE_URL% (voir latest.ts).
export const issue{N:02d}""", head, flags=re.S)
head = head.replace("number: 8,", f"number: {N},").replace('subject: "CryptoLuciole #8 — La Proof of Useful Work"', f'subject: {json.dumps(CFG["subject"], ensure_ascii=False)}')
head = head.replace("<title>CryptoLuciole #8</title>", f"<title>CryptoLuciole #{N}</title>")
head = re.sub(r'(font-size:1px;">\n).*?(\n</div>)', lambda m: m.group(1) + to_html(CFG["excerpt"]) + m.group(2), head, flags=re.S)
mail = head + "".join(h) + "\n" + foot
body = "".join(h)
assert "`" not in body and "${" not in body, "backtick ou ${ dans le corps du mail"
(SITE / "emails" / "issues" / f"issue-{N:02d}.ts").write_text(mail)
print(f"OK : issues.ts + issue-{N:02d}.ts ({len(mail.encode())/1024:.1f} Ko)")
print("FACTCHECK :", len(FACTCHECK))
for x in FACTCHECK:
    print(" -", x)
