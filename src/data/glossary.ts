export interface GlossaryTerm {
  term: string
  termEn: string
  definition: string
  definitionEn: string
  category: string
  categoryEn: string
}

export const glossary: GlossaryTerm[] = [
  // Marché des capitaux
  {
    term: 'Marché des capitaux',
    termEn: 'Capital market',
    definition: 'Ensemble de mécanismes qui permet de faire circuler l\'argent de ceux qui en ont vers ceux qui en ont besoin',
    definitionEn: 'Set of mechanisms that allows money to flow from those who have it to those who need it',
    category: 'Marché',
    categoryEn: 'Market'
  },
  {
    term: 'Agent en surplus',
    termEn: 'Surplus agent',
    definition: 'Agent économique qui a de l\'épargne à placer (ex: fonds de pension, assurances)',
    definitionEn: 'Economic agent who has savings to invest (e.g., pension funds, insurance companies)',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  {
    term: 'Agent en déficit',
    termEn: 'Deficit agent',
    definition: 'Agent économique qui a besoin de financement (ex: entreprise, État)',
    definitionEn: 'Economic agent who needs financing (e.g., company, government)',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  
  // Instruments financiers
  {
    term: 'Instrument financier',
    termEn: 'Financial instrument',
    definition: 'Contrat qui crée un droit de propriété, un droit à recevoir des flux financiers, ou un engagement conditionnel',
    definitionEn: 'Contract that creates an ownership right, a right to receive financial flows, or a conditional commitment',
    category: 'Instruments',
    categoryEn: 'Instruments'
  },
  {
    term: 'Equity (Actions)',
    termEn: 'Equity (Stocks)',
    definition: 'Titre de propriété représentant une part du capital d\'une entreprise',
    definitionEn: 'Ownership security representing a share of a company\'s capital',
    category: 'Instruments',
    categoryEn: 'Instruments'
  },
  {
    term: 'Debt (Dette)',
    termEn: 'Debt',
    definition: 'Instrument financier représentant un prêt, où l\'investisseur est créancier',
    definitionEn: 'Financial instrument representing a loan, where the investor is a creditor',
    category: 'Instruments',
    categoryEn: 'Instruments'
  },
  
  // Obligations
  {
    term: 'Obligation',
    termEn: 'Bond',
    definition: 'Instrument de dette donnant droit à des paiements d\'intérêts et au remboursement du capital',
    definitionEn: 'Debt instrument giving right to interest payments and capital repayment',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  {
    term: 'Nominal (Principal)',
    termEn: 'Face Value (Principal)',
    definition: 'Montant remboursé à l\'échéance d\'une obligation',
    definitionEn: 'Amount repaid at bond maturity',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  {
    term: 'Coupon',
    termEn: 'Coupon',
    definition: 'Paiement d\'intérêt périodique d\'une obligation, fixé à l\'émission',
    definitionEn: 'Periodic interest payment of a bond, fixed at issuance',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  {
    term: 'Maturité',
    termEn: 'Maturity',
    definition: 'Date de remboursement du principal d\'une obligation',
    definitionEn: 'Date of bond principal repayment',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  {
    term: 'Yield (Rendement)',
    termEn: 'Yield',
    definition: 'Rendement effectif d\'une obligation tenant compte du prix de marché et des flux futurs',
    definitionEn: 'Effective return of a bond considering market price and future flows',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  {
    term: 'Risque de crédit',
    termEn: 'Credit risk',
    definition: 'Risque que l\'émetteur ne puisse pas respecter ses engagements de paiement',
    definitionEn: 'Risk that the issuer cannot meet its payment obligations',
    category: 'Risques',
    categoryEn: 'Risks'
  },
  {
    term: 'Risque de taux',
    termEn: 'Interest rate risk',
    definition: 'Risque lié à l\'évolution des taux d\'intérêt sur le marché',
    definitionEn: 'Risk related to market interest rate changes',
    category: 'Risques',
    categoryEn: 'Risks'
  },
  {
    term: 'Investment Grade',
    termEn: 'Investment Grade',
    definition: 'Obligations de qualité de crédit élevée (notation BBB- et au-dessus)',
    definitionEn: 'High credit quality bonds (BBB- rating and above)',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  {
    term: 'High Yield',
    termEn: 'High Yield',
    definition: 'Obligations à risque plus élevé offrant un rendement supérieur (notation BB+ et en dessous)',
    definitionEn: 'Higher risk bonds offering superior returns (BB+ rating and below)',
    category: 'Obligations',
    categoryEn: 'Bonds'
  },
  
  // Options et dérivés
  {
    term: 'Produit dérivé',
    termEn: 'Derivative',
    definition: 'Instrument dont la valeur dépend d\'un actif sous-jacent',
    definitionEn: 'Instrument whose value depends on an underlying asset',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Option',
    termEn: 'Option',
    definition: 'Contrat donnant un droit (sans obligation) d\'acheter ou vendre un actif',
    definitionEn: 'Contract giving a right (without obligation) to buy or sell an asset',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Call option',
    termEn: 'Call option',
    definition: 'Option donnant le droit d\'acheter l\'actif sous-jacent',
    definitionEn: 'Option giving the right to buy the underlying asset',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Put option',
    termEn: 'Put option',
    definition: 'Option donnant le droit de vendre l\'actif sous-jacent',
    definitionEn: 'Option giving the right to sell the underlying asset',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Strike price (Prix d\'exercice)',
    termEn: 'Strike price',
    definition: 'Prix fixé dans le contrat d\'option pour acheter ou vendre',
    definitionEn: 'Price fixed in the option contract to buy or sell',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Prime',
    termEn: 'Premium',
    definition: 'Prix payé pour acheter une option',
    definitionEn: 'Price paid to buy an option',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Sous-jacent',
    termEn: 'Underlying asset',
    definition: 'Actif de référence d\'un produit dérivé (action, indice, devise, matière première)',
    definitionEn: 'Reference asset of a derivative (stock, index, currency, commodity)',
    category: 'Dérivés',
    categoryEn: 'Derivatives'
  },
  {
    term: 'Hedging (Couverture)',
    termEn: 'Hedging',
    definition: 'Stratégie utilisant les dérivés pour se protéger contre un risque',
    definitionEn: 'Strategy using derivatives to protect against risk',
    category: 'Stratégies',
    categoryEn: 'Strategies'
  },
  {
    term: 'Volatilité',
    termEn: 'Volatility',
    definition: 'Mesure de l\'ampleur des variations de prix d\'un actif',
    definitionEn: 'Measure of the magnitude of price variations of an asset',
    category: 'Risques',
    categoryEn: 'Risks'
  },
  {
    term: 'Straddle',
    termEn: 'Straddle',
    definition: 'Stratégie consistant à acheter un call et un put avec même strike et échéance',
    definitionEn: 'Strategy of buying a call and a put with same strike and expiration',
    category: 'Stratégies',
    categoryEn: 'Strategies'
  },
  
  // Indices et ETF
  {
    term: 'Indice boursier',
    termEn: 'Stock market index',
    definition: 'Outil statistique mesurant la performance d\'un ensemble de titres',
    definitionEn: 'Statistical tool measuring the performance of a set of securities',
    category: 'Indices',
    categoryEn: 'Indices'
  },
  {
    term: 'Benchmark',
    termEn: 'Benchmark',
    definition: 'Référence utilisée pour comparer la performance d\'un portefeuille',
    definitionEn: 'Reference used to compare portfolio performance',
    category: 'Indices',
    categoryEn: 'Indices'
  },
  {
    term: 'ETF',
    termEn: 'ETF (Exchange-Traded Fund)',
    definition: 'Fonds coté en bourse répliquant la performance d\'un indice',
    definitionEn: 'Exchange-traded fund replicating the performance of an index',
    category: 'Indices',
    categoryEn: 'Indices'
  },
  {
    term: 'Gestion passive',
    termEn: 'Passive management',
    definition: 'Stratégie visant à répliquer un indice plutôt qu\'à le surperformer',
    definitionEn: 'Strategy aiming to replicate an index rather than outperform it',
    category: 'Stratégies',
    categoryEn: 'Strategies'
  },
  {
    term: 'Diversification',
    termEn: 'Diversification',
    definition: 'Réduction du risque par la détention de plusieurs actifs différents',
    definitionEn: 'Risk reduction through holding multiple different assets',
    category: 'Stratégies',
    categoryEn: 'Strategies'
  },
  
  // Agents économiques - Chapitre 3
  {
    term: 'Agent économique',
    termEn: 'Economic agent',
    definition: 'Individu ou institution participant à l\'activité économique et financière',
    definitionEn: 'Individual or institution participating in economic and financial activity',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  {
    term: 'Conseil d\'Administration',
    termEn: 'Board of Directors',
    definition: 'Organe représentant les actionnaires et approuvant les décisions stratégiques et financières majeures',
    definitionEn: 'Body representing shareholders and approving major strategic and financial decisions',
    category: 'Gouvernance',
    categoryEn: 'Governance'
  },
  {
    term: 'CEO (Directeur Général)',
    termEn: 'CEO (Chief Executive Officer)',
    definition: 'Dirigeant en charge de l\'exécution de la stratégie et de la gestion des opérations quotidiennes',
    definitionEn: 'Executive in charge of strategy execution and daily operations management',
    category: 'Gouvernance',
    categoryEn: 'Governance'
  },
  {
    term: 'CFO (Directeur Financier)',
    termEn: 'CFO (Chief Financial Officer)',
    definition: 'Dirigeant responsable de la structure financière, du choix entre financement par actions ou dette, et des relations avec investisseurs',
    definitionEn: 'Executive responsible for financial structure, choice between equity and debt financing, and investor relations',
    category: 'Gouvernance',
    categoryEn: 'Governance'
  },
  {
    term: 'Financement par actions',
    termEn: 'Equity financing',
    definition: 'Lever des capitaux en émettant des actions, créant une dilution de propriété mais sans obligation de remboursement',
    definitionEn: 'Raising capital by issuing shares, creating ownership dilution but without repayment obligation',
    category: 'Financement',
    categoryEn: 'Financing'
  },
  {
    term: 'Financement par dette',
    termEn: 'Debt financing',
    definition: 'Lever des capitaux en émettant des obligations, avec obligation de payer des intérêts et de rembourser le capital',
    definitionEn: 'Raising capital by issuing bonds, with obligation to pay interest and repay principal',
    category: 'Financement',
    categoryEn: 'Financing'
  },
  {
    term: 'Investisseur institutionnel',
    termEn: 'Institutional investor',
    definition: 'Investisseur professionnel gérant de grandes quantités de capital (fonds de pension, assurances, fonds souverains)',
    definitionEn: 'Professional investor managing large pools of capital (pension funds, insurance companies, sovereign wealth funds)',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  {
    term: 'Horizon d\'investissement',
    termEn: 'Investment horizon',
    definition: 'Période pendant laquelle un investisseur peut garder son argent investi sans avoir besoin de liquidité',
    definitionEn: 'Period over which an investor can keep money invested without needing liquidity',
    category: 'Investissement',
    categoryEn: 'Investment'
  },
  {
    term: 'Gestion d\'actifs',
    termEn: 'Asset management',
    definition: 'Gestion professionnelle de portefeuilles d\'investissement pour le compte de clients',
    definitionEn: 'Professional management of investment portfolios on behalf of clients',
    category: 'Investissement',
    categoryEn: 'Investment'
  },
  {
    term: 'Gérant de fonds',
    termEn: 'Fund manager',
    definition: 'Professionnel prenant les décisions d\'investissement : analyse des marchés, sélection d\'actifs, construction de portefeuilles',
    definitionEn: 'Professional making investment decisions: market analysis, asset selection, portfolio construction',
    category: 'Investissement',
    categoryEn: 'Investment'
  },
  {
    term: 'Middle Office',
    termEn: 'Middle Office',
    definition: 'Fonction de contrôle des risques, vérification de conformité et surveillance des limites d\'exposition',
    definitionEn: 'Risk control function, compliance verification and exposure limit monitoring',
    category: 'Gestion d\'actifs',
    categoryEn: 'Asset Management'
  },
  {
    term: 'Dépositaire',
    termEn: 'Custodian',
    definition: 'Institution indépendante responsable de la conservation des actifs, du règlement des transactions et du calcul de la valeur liquidative',
    definitionEn: 'Independent institution responsible for asset safekeeping, transaction settlement and net asset value calculation',
    category: 'Gestion d\'actifs',
    categoryEn: 'Asset Management'
  },
  {
    term: 'VL (Valeur Liquidative)',
    termEn: 'NAV (Net Asset Value)',
    definition: 'Valeur des actifs d\'un fonds moins les passifs, divisée par le nombre de parts',
    definitionEn: 'Value of a fund\'s assets minus liabilities, divided by number of shares',
    category: 'Gestion d\'actifs',
    categoryEn: 'Asset Management'
  },
  {
    term: 'KYC (Know Your Customer)',
    termEn: 'KYC (Know Your Customer)',
    definition: 'Règles obligeant à identifier les clients, comprendre l\'origine des fonds et évaluer les profils de risque',
    definitionEn: 'Rules requiring client identification, understanding fund origin and risk profile assessment',
    category: 'Régulation',
    categoryEn: 'Regulation'
  },
  {
    term: 'AML (Anti-Money Laundering)',
    termEn: 'AML (Anti-Money Laundering)',
    definition: 'Règles visant à prévenir le blanchiment d\'argent et le financement du terrorisme',
    definitionEn: 'Rules aimed at preventing money laundering and terrorist financing',
    category: 'Régulation',
    categoryEn: 'Regulation'
  },
  {
    term: 'Banque de détail',
    termEn: 'Retail banking',
    definition: 'Services bancaires pour particuliers et PME : dépôts, crédits, services de paiement, produits d\'épargne',
    definitionEn: 'Banking services for individuals and SMEs: deposits, loans, payment services, savings products',
    category: 'Banques',
    categoryEn: 'Banks'
  },
  {
    term: 'Banque d\'investissement',
    termEn: 'Investment banking',
    definition: 'Services bancaires pour grandes entreprises et institutions : levées de capitaux, conseil en M&A, trading',
    definitionEn: 'Banking services for large corporates and institutions: capital raising, M&A advisory, trading',
    category: 'Banques',
    categoryEn: 'Banks'
  },
  {
    term: 'ECM (Equity Capital Markets)',
    termEn: 'ECM (Equity Capital Markets)',
    definition: 'Activités d\'émission d\'actions : introductions en bourse (IPO), augmentations de capital',
    definitionEn: 'Share issuance activities: initial public offerings (IPO), capital increases',
    category: 'Banques',
    categoryEn: 'Banks'
  },
  {
    term: 'DCM (Debt Capital Markets)',
    termEn: 'DCM (Debt Capital Markets)',
    definition: 'Activités d\'émission d\'obligations : émission de dette, refinancement, structuration d\'instruments de dette',
    definitionEn: 'Bond issuance activities: debt issuance, refinancing, debt instrument structuring',
    category: 'Banques',
    categoryEn: 'Banks'
  },
  {
    term: 'M&A (Fusions & Acquisitions)',
    termEn: 'M&A (Mergers & Acquisitions)',
    definition: 'Services de conseil en transactions d\'entreprise : fusions, acquisitions, cessions, valorisation, négociation',
    definitionEn: 'Advisory services for corporate transactions: mergers, acquisitions, divestitures, valuation, negotiation',
    category: 'Banques',
    categoryEn: 'Banks'
  },
  {
    term: 'Market Making',
    termEn: 'Market making',
    definition: 'Activité consistant à fournir de la liquidité en cotant en permanence des prix d\'achat et de vente',
    definitionEn: 'Activity of providing liquidity by continuously quoting buy and sell prices',
    category: 'Banques',
    categoryEn: 'Banks'
  },
  {
    term: 'Banque centrale',
    termEn: 'Central bank',
    definition: 'Autorité monétaire responsable de la stabilité des prix, de la stabilité financière et de la politique monétaire',
    definitionEn: 'Monetary authority responsible for price stability, financial stability and monetary policy',
    category: 'Régulation',
    categoryEn: 'Regulation'
  },
  {
    term: 'Politique monétaire',
    termEn: 'Monetary policy',
    definition: 'Actions de la banque centrale pour influencer les conditions économiques via les taux d\'intérêt et la liquidité',
    definitionEn: 'Central bank actions to influence economic conditions through interest rates and liquidity',
    category: 'Régulation',
    categoryEn: 'Regulation'
  },
  {
    term: 'Taux directeur',
    termEn: 'Key interest rate',
    definition: 'Taux d\'intérêt fixé par la banque centrale qui influence tous les taux de marché et les coûts d\'emprunt',
    definitionEn: 'Interest rate set by the central bank that influences all market rates and borrowing costs',
    category: 'Régulation',
    categoryEn: 'Regulation'
  },
  {
    term: 'Risque systémique',
    termEn: 'Systemic risk',
    definition: 'Risque d\'effondrement du système financier dans son ensemble, nécessitant une supervision réglementaire',
    definitionEn: 'Risk of collapse of the financial system as a whole, requiring regulatory supervision',
    category: 'Risques',
    categoryEn: 'Risks'
  },
  {
    term: 'Intermédiaire financier',
    termEn: 'Financial intermediary',
    definition: 'Institution facilitant les transactions financières entre agents : banques, courtiers, plateformes de trading',
    definitionEn: 'Institution facilitating financial transactions between agents: banks, brokers, trading platforms',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  {
    term: 'Fonds de pension',
    termEn: 'Pension fund',
    definition: 'Investisseur institutionnel gérant les cotisations pour payer les retraites futures, avec horizon très long terme',
    definitionEn: 'Institutional investor managing contributions to pay future retirement benefits, with very long-term horizon',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  {
    term: 'Fonds souverain',
    termEn: 'Sovereign wealth fund',
    definition: 'Fonds d\'investissement détenu par un État, souvent financé par les revenus de ressources naturelles',
    definitionEn: 'Investment fund owned by a state, often financed by natural resource revenues',
    category: 'Agents',
    categoryEn: 'Agents'
  },
  {
    term: 'IPO (Introduction en bourse)',
    termEn: 'IPO (Initial Public Offering)',
    definition: 'Première émission d\'actions d\'une entreprise sur un marché public, permettant de lever des capitaux',
    definitionEn: 'First issuance of a company\'s shares on a public market, allowing capital raising',
    category: 'Financement',
    categoryEn: 'Financing'
  }
]
