// ===== Fiches Protocoles : source unique =====
// Chaque protocole décrypté dans la newsletter y est détaillé.
// Contenu vulgarisé à partir des analyses de veille (projet analyste-defi).
// `iaGenere: true` => bandeau « rédigé avec l'aide de l'IA » sur la page du site
// (jamais dans l'email). Slug invariable (minuscules, sans accent, tirets).

export type ProtocoleFiche = {
  slug: string;
  nom: string;
  type: string;
  chains?: string;
  resume: string;
  sections: { titre: string; texte: string }[];
  verdict?: string;
  iaGenere: boolean;
  sourceNumero?: number;
};

export const PROTOCOLES: ProtocoleFiche[] = [
  {
    slug: "re",
    nom: "Re Protocol (reUSD & reUSDe)",
    type: "Réassurance tokenisée (RWA / assurance)",
    chains: "Ethereum (principal), Avalanche, Arbitrum, Base",
    resume:
      "Re est un réassureur sur blockchain : ton argent finance de vraies compagnies d'assurance, et en échange tu touches une partie des primes payées par leurs clients. Deux jetons selon le risque voulu — reUSD (prudent) et reUSDe (risqué).",
    sections: [
      {
        titre: "Équipe & origine",
        texte:
          "Équipe identifiée, menée par Karn Saroya (ex-fondateur de l'assurtech Cover, diplômé du MIT). Bailleurs solides : Framework Ventures, Electric Capital, Morgan Creek — et de vrais acteurs de l'assurance comme SiriusPoint et Exor. Environ 21 M$ levés depuis 2022.",
      },
      {
        titre: "Comment ça marche",
        texte:
          "Tu déposes un stablecoin (comme l'USDC). Ton dépôt sert de réserve de sécurité pour de vraies assurances du monde réel (auto, responsabilité d'entreprises…). Tant que les sinistres restent normaux, tu touches une part des primes encaissées. En attendant d'être mobilisé, le capital génère un rendement de base (placé via Ethena).",
      },
      {
        titre: "Deux jetons, deux niveaux de risque",
        texte:
          "C'est un mécanisme de tranches. reUSD = tranche senior (prudente) : capital protégé en priorité, rendement modéré (~6,7 %/an). reUSDe = tranche junior (risquée) : premier à éponger les pertes en cas de sinistres, mais bien mieux payé (~12 %/an).",
      },
      {
        titre: "Le rendement",
        texte:
          "reUSD ~6,7 % et reUSDe ~12 % par an (source DeFiLlama, juin 2026). Sa force : il vient d'une vraie activité économique (les primes d'assurance), pas d'une simple émission de jetons qui finit souvent par s'effondrer.",
      },
      {
        titre: "Les risques",
        texte:
          "Si les assureurs doivent indemniser beaucoup de sinistres d'un coup, une partie des dépôts est consommée — les détenteurs de reUSDe perdent en premier, ceux de reUSD seulement en dernier recours. S'ajoutent le risque de bug du protocole (récent) et la dépendance à des structures encadrées (inscription d'identité obligatoire). ⚠️ À ne pas confondre avec le reUSD de Resupply, un autre protocole victime d'un exploit en 2025.",
      },
    ],
    verdict:
      "Score maison 54/100 — modéré. L'un des rares vrais rendements « du monde réel » en DeFi, intéressant pour diversifier ses stablecoins au-delà des stratégies classiques. À doser, surtout pour reUSDe : un rendement de 12 % n'est jamais un cadeau, c'est le prix d'un risque. Ce contenu n'est pas un conseil en investissement.",
    iaGenere: true,
    sourceNumero: 2,
  },
];

export function getProtocole(slug: string): ProtocoleFiche | undefined {
  return PROTOCOLES.find((p) => p.slug === slug);
}
