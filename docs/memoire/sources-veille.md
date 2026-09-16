---
name: sources-veille
description: "Sources de veille + sujets prioritaires de Marc pour CryptoLuciole (news, data, protocoles, définitions)"
metadata: 
  node_type: memory
  type: reference
  originSessionId: 90507c6d-d393-4d8b-99c7-5a756f3f0a77
---

À utiliser **à chaque fois qu'on cherche des sources** (news, data, idées de
protocoles/définitions, tout le contenu), EN PLUS des recherches web et de
`../analyste-defi`.

## Sources principales

- **CoinAcademy** — coinacademy.fr (FR). ✅ **RSS gratuit qui marche** :
  `https://coinacademy.fr/feed/` (titres lisibles via curl). Source principale.
- **TodayOnChain** — todayonchain.com
- **CryptoPanic** — cryptopanic.com (agrégateur). ⚠️ **API PAYANTE uniquement**
  (le palier gratuit « Developer » a été supprimé le 2026-04-01 ; pas de RSS
  public gratuit non plus). Clé via Sign In → Developers → Plans & Pricing →
  Dashboard. Endpoint : `https://cryptopanic.com/api/<plan>/v2/posts/?auth_token=XXX&public=true`
  (plans : developer/growth/enterprise). À ne souscrire que si on veut son
  agrégation + « panic_score ». Sinon privilégier les sources gratuites.
- **AskSurf** — asksurf.ai
- **CryptoPulse**

## Sources secondaires (ajoutées après veille 2026-06-25)

- **Yahoo Finance** — finance.yahoo.com. Real-time crypto prices + macro market news. Timestamps précis, couverture large (BTC, ETH, actions, forex).
- **CoinCentral** — coincentral.com. DeFi protocol deep-dives + analyses approfondies. Format pédagogique pour lecteurs intermédiaires.
- **Blockhead** — blockhead.co. News Ethereum + protocoles spécialisés. Sourcing solide, French-friendly.
- **The Block Data** — theblock.co/data. Dashboards temps réel L2/DeFi TVL/métriques. Dashboard par chaîne + protocole.
- **MetaMask News** — metamask.io/news. RWA + tokenization narratives. Angle retail + accessibility.
- **RWA.xyz** — app.rwa.xyz. Analytics dashboard RWA tokenized. Distributed + represented value en direct. **ESSENTIEL pour RWA tracking**.
- **CoinMarketCap AI** — coinmarketcap.com/cmc-ai/. Synthèses token-by-token (TAO, HYPE, MORPHO, etc.). Baseline fact-checking rapide.
- **Cryptopolitain** — cryptopolitain.com (édition FR de Cryptopolitan). News crypto **de volume** en français (couverture large, rapide). Bon pour **ratisser et ne rien rater**, MAIS info brute parfois traduite vite → **à recouper systématiquement avant de citer un chiffre** (ne pas traiter comme source pédagogique comme Deblock). Ajoutée 2026-06-30, pas encore testée par le veilleur.

## Sources FR pédagogiques (ajoutées 2026-06-30)

- **Deblock** — blog FR : `https://deblock.com/fr-FR/deblock-blog/` (fintech FR : compte bancaire + wallet self-custody dans une app, régulée). **Blog ET vidéos** au ton pédagogique/vulgarisé, en français → très aligné avec le lecteur-type « Grégoire ». ✅ **Testée et validée par le veilleur le 2026-06-30** : blog actif, fréquence régulière, contenu DeFi/crypto basics. Bon pour : reformulations grand public, tutos (wallet, self-custody, onramps), angles « comment faire » → alimente aussi les sections tuto/how-to du site. ⚠️ Entreprise commerciale → recouper tout chiffre/comparatif (biais produit possible).

## Sources EN — analyses DeFi actionnables (ajoutées 2026-07-04)

- **The DeFi Investor** — newsletter Substack (EN) : `https://www.thedefinvestor.com` (RSS Substack : `https://www.thedefinvestor.com/feed`). Aussi sur **X/Twitter : `@TheDeFinvestor`** (`https://x.com/TheDeFinvestor`) et **Substack : `https://substack.com/@thedefinvestor`** (des dizaines de milliers d'abonnés, tenu par un analyste crypto). **Hebdomadaire**, gratuite (abo payant optionnel). Angle = **stratégies DeFi actionnables** : stablecoins, airdrops/farming, tokenisation d'actions, protocoles (Hyperliquid…), analyses de tendances. **Très aligné avec l'edge du projet** (DeFi vulgarisée ET actionnable, pas « les news en plus court »). Découverte par Marc le 2026-07-04, qualifiée « superbe ». C'est **probablement la source de l'angle Open USD** du #3 (partage du rendement des réserves). ⚠️ Média d'opinion/stratégie → recouper systématiquement tout chiffre avant de citer. Pas encore testée par le veilleur.

## Sujets prioritaires de Marc (par ordre d'intérêt)

- **Macroéconomie** : taux d'intérêt, marchés actions, FED, économie mondiale,
  inflation.
- **Bitcoin**, **Ethereum**.
- **La DeFi au sens large** (surtout — c'est le cœur).
- **Layers 2**.
- **Bittensor**.
- **Hyperliquid** et les **DEX perp** (perpétuels).
- **RWA (Real-World Assets)** — tokenization, institutional adoption.
- Tout autre **narratif pertinent** au regard du projet (juger au cas par cas).

## À terme — feature site (noté aussi dans ROADMAP)

Marc veut une **section « News IA »** sur le site : un **agent IA** qui récupère
les news depuis ces sources (objectif ~**2 news/jour**). Cette liste servira de
base de sources pour cet agent.

Voir [[etat-projet]], [[vision-site]].
