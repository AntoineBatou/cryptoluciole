# ✨ DANS LE FAISCEAU — #7 — Actu : Bittensor « Null Consensus »

> ✍️ Brouillon du Rédacteur (v2 : 7,5 puis 8,5/10 au vérificateur, boucle 2 + 2 retouches mineures) — à valider par Marc. Notation des blocs : `[p]` paragraphe · `[st]` sous-titre · `[def | slug]` encadré de définition · `[tableau]` tableau · `[liste]` puces · `[avis]` encadré vert « 💡 Notre avis ». `[À VÉRIFIER]` = point à confirmer par le fact-checker.

**Titre (proposition)** : ✦ Bittensor : des subnets dix fois plus grands, notés par un seul acteur

---

[p]
**Bittensor** est une blockchain qui rémunère du travail d'intelligence artificielle avec son token, le **TAO**. Elle est découpée en ***subnets*** : chacun est un marché spécialisé dans une tâche (générer du texte, entraîner un modèle, fournir de la puissance de calcul…).

[p]
Sur chaque subnet, deux rôles :

[liste]
- **les mineurs** produisent le travail ;
- **les validateurs** le notent, en publiant des ***weights*** (poids), c'est-à-dire une note attribuée à chaque mineur.

[p]
Les TAO nouvellement créés à chaque bloc sont ensuite répartis selon ces notes. (Rien à voir avec les validateurs d'une blockchain en *proof of stake* : ici, ils évaluent un travail, ils ne valident pas des blocs.)

[def | `yuma-consensus`] **Yuma Consensus**
Le mécanisme standard de Bittensor pour transformer les notes des validateurs en récompenses. Plusieurs validateurs notent les mêmes mineurs, et c'est le consensus entre leurs notes, pondéré par le stake de chacun, qui compte. Un validateur isolé ou malhonnête pèse donc peu : s'il surnote un mineur ami, les autres ne suivent pas.

[st] **Ce que change Null Consensus**

[p]
Début octobre (mise à jour publiée le 7 octobre [À VÉRIFIER]), Bittensor a ajouté un second mode, **Null Consensus**. Il est **optionnel** : c'est le propriétaire de chaque subnet qui décide de l'activer, et Yuma reste le mode par défaut, y compris pour les nouveaux subnets.

[p]
**Pourquoi ce mode ?** Yuma a un coût : pour comparer les notes de tous les validateurs, le réseau fait un calcul qui grossit très vite avec leur nombre (de façon quadratique : deux fois plus de validateurs, environ quatre fois plus de calcul). C'est ce qui plafonne un subnet à 256 participants. Null supprime ce calcul, et donc ce plafond. Il vise les subnets où le travail se mesure sans débat, comme de la puissance de calcul fournie : là, croiser plusieurs notes apporte peu, et le nombre de participants compte davantage.

[tableau]
| | Yuma Consensus | Null Consensus |
|---|---|---|
| **Qui note les mineurs** | Tous les validateurs, consensus pondéré par le stake | Un seul : le validateur qui détient le plus de stake sur le subnet |
| **Garde-fou** | Le consensus entre validateurs : une note isolée est corrigée par celles des autres | Aucun : le calcul de consensus est contourné |
| **Participants max par subnet** | 256 | 2 500 (à partager si le subnet a plusieurs mécanismes d'émission) |
| **Par défaut ?** | Oui | Non, activé par le propriétaire du subnet |

[p]
**Dit simplement : un subnet peut accueillir environ dix fois plus de participants (2 500 ÷ 256 ≈ 10), mais il dépend alors de l'honnêteté d'un seul validateur.** C'est utile pour les tâches qui demandent beaucoup de mineurs, par exemple un subnet de puissance de calcul qui veut réunir 2 000 machines au lieu de 250. En contrepartie, plus rien ne corrige ce validateur s'il favorise certains mineurs.

[liste]
- Ceux qui ont staké leurs TAO auprès d'un validateur du subnet continuent de toucher leur part [À VÉRIFIER].
- Revenir à Yuma est possible, mais suppose de redescendre à 256 participants au plus.

[st] **Six mois après une crise sur la centralisation**

[p]
En avril, **Covenant AI**, l'un des plus gros opérateurs de subnets, a quitté Bittensor en dénonçant une « décentralisation de façade » : selon lui, le cofondateur du réseau contrôlait de fait le **triumvirat**, l'organe qui décide des mises à jour. Le cofondateur a démenti plusieurs de ces accusations. La question de la concentration du pouvoir sur le réseau était donc déjà posée.

[avis]
💡 **Notre avis** :
- **Le propriétaire choisit, le plus gros validateur note.** Le propriétaire qui active Null y gagne de la capacité : plus de mineurs, donc plus de travail produit. Le pouvoir de noter, lui, revient au validateur qui détient le plus de stake, et rien ne garantit que ce soit le propriétaire. Ce n'est pas forcément un défaut si la tâche exige beaucoup de participants et que ce validateur est compétent.
- **Six mois après des accusations de centralisation de la gouvernance, le réseau ajoute un mode qui centralise, lui, la notation.** L'option a au moins le mérite d'être choisie subnet par subnet, sans toucher au reste du réseau.
- **La métrique à suivre : combien de subnets passent en Null, et lesquels.** Quelques petits subnets, c'est une option de niche. Si ceux qui reçoivent le plus de TAO basculent, la critique prendra du poids.

**Source** : notes de version Opentensor (Runtime 475) [À VÉRIFIER] · The Block, Cointelegraph, Decrypt (avril 2026, départ de Covenant AI)

---

## Notes du Rédacteur (hors texte, à ne pas assembler)

### Notes pour le fact-checker
- **Date** : Runtime 475 publié le 7/10/2026 (code fusionné le 6/10, médiatisation vers le 16/10). Le texte dit « début octobre (publiée le 7 octobre [À VÉRIFIER]) » ; si la date n'est pas confirmée, garder seulement « début octobre ». Le titre ne présente pas la mise à jour comme datant de cette semaine.
- **Mécanisme Null** : un seul identifiant (le validateur au plus gros stake du subnet) fixe les poids ; consensus et bonds contournés (les bonds ne sont plus mentionnés dans le texte depuis la v2) ; opt-in par le propriétaire ; Yuma par défaut y compris pour les nouveaux subnets. À confirmer dans les notes de version / la doc Opentensor (source primaire à citer dans la ligne Source à la place du « [À VÉRIFIER] »).
- **Capacité** : 256 UID (Yuma) → 2 500 (Null), répartis 2 × 1 250 ou 4 × 625 si plusieurs mécanismes d'émission (le détail est volontairement résumé en « à partager »). Calcul affiché : 2 500 ÷ 256 ≈ 9,8, arrondi à « environ dix fois ».
- **Retour à Yuma** : redescendre sous 256 UID (l'élagage de 64 par transaction est coupé du texte en v2).
- **Dividendes** : « ceux qui ont staké leurs TAO auprès d'un validateur du subnet continuent de toucher leur part » = reformulation de « les détenteurs de stake gardent leur part de dividendes ». Vérifier qu'il s'agit bien des stakers délégants (et pas seulement des validateurs).
- **Encadré Yuma** : « s'il surnote un mineur ami, les autres ne suivent pas » = vulgarisation du fait fourni (le consensus pondéré par le stake limite l'influence d'un validateur isolé). Vérifier que ça ne trahit pas le mécanisme réel (écrêtage des notes au-dessus du consensus).
- **Avril 2026 (9-10/04)** : départ de Covenant AI, « decentralization theatre », contrôle du triumvirat par le cofondateur, démenti (la baisse de TAO de 15 à 20 % est coupée du texte en v2). Les noms des subnets (Templar, Basilica, Grail) et la vente d'environ 37 000 TAO de tokens de subnet sont **volontairement coupés** (noms inutiles ; la vente aurait demandé d'expliquer les tokens de subnet de dTAO). Vérifier que le triumvirat est bien « l'organe qui décide des mises à jour ».
- **Aucun cours de TAO** dans le texte (285 $ le 16/10, ~270 $ le 19-20/10 non cités : pas d'analyse de cours ici).
- **Volontairement absents** (élagage) : l'enregistrement par preuve de travail (option désactivée par défaut, même runtime) et l'exclusion du root network. Une ligne possible si Marc le souhaite.
- **Sources promotionnelles** (KuCoin flash, openpr, CMC AI) : rien n'en est repris.

### Termes glossaire proposés
| Terme | Slug | Forme dans le texte | Statut |
|---|---|---|---|
| Yuma Consensus | `yuma-consensus` | encadré | NOUVEAU |
| Subnet | `subnet` | défini dans le corps (1er paragraphe), sans encadré | NOUVEAU (à créer) |
| Weights (poids) | `weights` | défini dans le corps (puce validateurs) | à créer plus tard si besoin |
| TAO / Bittensor | `tao` | simple mention présentée dans le corps | à créer plus tard si besoin |
| Validateur | `validateur` | **NE PAS lier** : la définition existante vise le *proof of stake*, pas les validateurs Bittensor (d'où la parenthèse dans le texte) | EXISTANT, sens différent |

### Renvois
- Bittensor, TAO, subnets et dTAO n'ont jamais été traités dans un numéro (recherche dans `site/app/numeros/issues.ts` : aucune occurrence) → aucun renvoi « notre numéro X ». Aucun slug `subnet` / `tao` / `dtao` dans `site/app/glossaire/terms.ts`.

### Longueur
≈ 500 mots du premier paragraphe à la fin de l'avis (encadré et tableau compris). Coupe possible : la parenthèse sur les validateurs en *proof of stake*.
- **Exemple « 2 000 machines au lieu de 250 »** : illustration inventée (chiffres ronds sous les plafonds 2 500 / 256), pas un subnet réel.
- **« Rien ne garantit que ce soit le propriétaire »** (avis) : déduction prudente ; on n'affirme ni que c'est lui, ni que ce n'est pas lui.
