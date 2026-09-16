---
name: vision-site
description: "Vision long terme CryptoLuciole — site = \"Obsidian intelligent\" (tutos vidéo + fiches protocoles + glossaire)"
metadata: 
  node_type: memory
  type: project
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

Marc veut que la newsletter + le site deviennent à terme une sorte d'**« Obsidian
complet et intelligent »** pour comprendre/apprendre la DeFi — dans l'esprit du
**projet wiki global** (`../projet`, alimenté par `../analyste-defi`).

Chantiers consignés dans `newsletter/ROADMAP.md` (2026-06-24) :
1. **Section « Vidéos / Tutos »** — 1 vidéo/semaine, format **~15 min**, en
   direct (ex. « Comment utiliser un protocole de restaking »).
2. **Section « Protocoles »** — chaque protocole traité y est ajouté. Contenu
   tiré des analyses d'`../analyste-defi` (Wiki) puis vulgarisé. **Le mail
   renvoie vers la fiche site** (SOUS LA LOUPE = résumé + lien). **Mention
   « rédigé avec l'aide de l'IA » obligatoire SUR LE SITE, jamais dans le mail.**
3. **Articles & analyses longues** sur le site (au-delà du format newsletter).
4. Glossaire (cf. [[glossaire]]) — agrège les termes des newsletters ET des
   articles ; brique de liaison entre notions.

Esprit : tout se relie (glossaire ⇄ protocoles ⇄ tutos ⇄ numéros). Voir
[[etat-projet]].

**Avancement (2026-06-24, en prod) :**
- ✅ Glossaire construit (cf. [[glossaire]]) : `/glossaire` + `/glossaire/[terme]`.
- ✅ Protocoles : `site/app/protocoles/protocols.ts` (source) + `/protocoles` +
  `/protocoles/[id]`. Fiche **Re** publiée (vulgarisée depuis `analyste-defi`,
  bandeau « rédigé avec l'IA » sur le site, jamais dans le mail). Ajouter un
  protocole = l'ajouter à `protocols.ts`.
- ✅ Tutos : page `/tutos` « à venir » (vraies vidéos ~15 min = à faire).
- ✅ Nav d'accueil enrichie (Numéros, Glossaire, Protocoles, Tutos).
- ⏳ Reste : section News IA (agent), vraies vidéos tutos, articles longs.
