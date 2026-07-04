## 🔍 SOUS LA LOUPE
### Ethena (USDe & sUSDe)

**En bref.** Ethena émet l'**USDe**, un « dollar synthétique » qui vaut environ 1 $. Contrairement aux stablecoins classiques (adossés à du vrai cash ou des bons du Trésor), l'USDe n'est pas garanti par des dollars en banque : il tient sa valeur grâce à une stratégie de marché.

> **📖 Encadré définition — Dollar synthétique** (lien → `/glossaire/dollar-synthetique`)
> Un jeton qui vise 1 $ sans détenir de vrais dollars en réserve. Sa stabilité vient d'une combinaison de placements et de paris de marché qui se compensent, pas d'un compte en banque.

**Comment ça marche.** Le protocole détient de l'ETH et, en même temps, parie à la baisse sur l'ETH pour le même montant (une position « short » sur des contrats à terme). Résultat : si le prix de l'ETH monte, il gagne d'un côté et perd de l'autre ; s'il baisse, l'inverse. Les deux se neutralisent, et la valeur reste stable — c'est la stratégie dite **« delta-neutre »**.

**Le rendement.** En stakant ton USDe, tu reçois du **sUSDe** — c'est lui qui capte le rendement. Celui-ci vient de deux sources : les intérêts que paient les traders qui parient à la hausse sur l'ETH (ce qu'on appelle le *funding*), et le rendement du staking de l'ETH détenu. Le sUSDe rapporte actuellement **~3,8 % par an** `[LIVE / À VÉRIFIER]` — un niveau bas, cohérent avec la correction de marché du moment. Ce rendement **suit le sentiment du marché** : il grimpe quand tout le monde est haussier (beaucoup de traders paient pour parier à la hausse). Historiquement, il a été beaucoup plus élevé en période de hausse des marchés.

**Les risques.** &nbsp; 🟡 **Moyen** *(pastille — bg #fef9c3 / txt #a16207)*

- **Funding négatif.** En marché baissier durable, le *funding* peut devenir négatif : le rendement s'effondre, voire coûte au protocole. Un fonds de réserve (environ 1 % de la taille) amortit ce genre de passage, mais seulement de façon temporaire.
- **Dépendance aux plateformes.** Les positions sont ouvertes sur des plateformes d'échange : si l'une fait défaut, une partie du dispositif est menacée.
- **Dépeg.** En cas de stress extrême, l'USDe peut décrocher de son dollar (voir `/glossaire/depeg`).

Pourquoi « moyen » et pas « élevé » ? L'USDe n'est pas un stablecoin algorithmique bancal : il est réellement collatéralisé, c'est l'un des plus gros du secteur, il a traversé plusieurs cycles sans casser son ancrage et dispose d'un fonds de réserve. Ce qui l'empêche d'être « faible », c'est surtout sa **dépendance à des plateformes d'échange centralisées** et à un *funding* qui peut se tarir. Bref : une stratégie de marché, pas un dollar dormant à la banque — un risque réel, mais maîtrisé.

**Pourquoi ça compte.** Cette semaine, l'USDe est désormais intégré chez **BlackRock**, via **Aladdin**, sa plateforme de gestion d'actifs (~20 000 milliards de dollars d'actifs suivis sur Aladdin `[À VÉRIFIER]` — à distinguer des encours gérés par BlackRock), avec son fonds tokenisé **BUIDL** comme collatéral `[À VÉRIFIER : détails de l'intégration au fact-check]`.

[→ Voir la fiche complète d'Ethena](https://www.cryptoluciole.com/protocoles/ethena)
