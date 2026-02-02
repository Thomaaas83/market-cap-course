import { Lesson } from '../../types'

export const optionsLessons: Lesson[] = [
  {
    id: 'intro-options',
    title: 'Introduction aux options',
    description: 'Qu\'est-ce qu\'une option ? Call vs Put, prime et droit sans obligation',
    duration: '14 min',
    content: [
      {
        type: 'text',
        content: 'Les options sont des produits dérivés : leur valeur "dérive" d\'un actif sous-jacent (action, indice, matière première...). Contrairement aux actions et obligations qui servent à financer, les options servent principalement à gérer le risque ou à spéculer. Leur particularité ? Elles donnent un droit, pas une obligation.'
      },
      {
        type: 'keypoints',
        title: 'Qu\'est-ce qu\'une option ?',
        points: [
          '📜 Contrat qui donne un DROIT (pas une obligation) d\'acheter ou vendre un actif',
          '💰 À un prix fixé à l\'avance (strike price)',
          '📅 Pendant une période donnée ou à une date donnée',
          '💵 En échange du paiement d\'une prime'
        ]
      },
      {
        type: 'keypoints',
        title: 'Les deux types d\'options',
        points: [
          '📈 Call Option : droit d\'ACHETER l\'actif (anticipation haussière)',
          '📉 Put Option : droit de VENDRE l\'actif (anticipation baissière ou protection)',
          '🎯 L\'acheteur a un droit, le vendeur a une obligation',
          '💡 La prime est le prix de ce droit'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Buy Call (anticipation haussière)',
        content: 'Action Total = 50€. Vous pensez qu\'elle va monter. Vous achetez un call strike 50€, échéance 3 mois, prime 3€. Scénario 1 : Total monte à 60€. Vous exercez votre droit d\'acheter à 50€. Gain brut = 10€. Gain net = 10€ - 3€ (prime) = 7€. Scénario 2 : Total reste à 50€ ou baisse. Vous n\'exercez pas. Perte = 3€ (la prime payée).',
        highlight: 'Perte maximale connue à l\'avance (la prime). Gain potentiellement illimité si l\'action monte fort.'
      },
      {
        type: 'example',
        title: 'Exemple : Buy Put (protection ou anticipation baissière)',
        content: 'Vous détenez des actions LVMH à 800€. Vous craignez une baisse. Vous achetez un put strike 800€, échéance 6 mois, prime 40€. Scénario 1 : LVMH chute à 600€. Vous exercez votre droit de vendre à 800€. Gain brut = 200€. Gain net = 200€ - 40€ = 160€. Scénario 2 : LVMH monte à 900€. Vous n\'exercez pas le put. Perte = 40€ (prime), mais vos actions valent 900€.',
        highlight: 'Le put est une assurance : vous payez une prime pour vous protéger contre une baisse.'
      },
      {
        type: 'diagram',
        title: 'Vocabulaire clé des options',
        items: [
          'Underlying (sous-jacent) : l\'actif de référence (ex : action Total)',
          'Strike price (prix d\'exercice) : le prix fixé dans le contrat',
          'Premium (prime) : le prix payé pour acheter l\'option',
          'Expiration (échéance) : la date limite pour exercer l\'option',
          'Exercise (exercer) : utiliser son droit d\'acheter ou vendre'
        ]
      },
      {
        type: 'text',
        content: 'La grande différence avec les actions/obligations : avec une option, votre perte maximale est limitée à la prime payée. Vous ne pouvez pas perdre plus. C\'est un risque borné, ce qui en fait un outil de gestion du risque très puissant.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'une option ?',
        options: [
          'Une obligation d\'acheter ou vendre un actif',
          'Un droit (sans obligation) d\'acheter ou vendre un actif',
          'Une action d\'une entreprise',
          'Un prêt à taux variable'
        ],
        correctAnswer: 1,
        explanation: 'Une option donne un DROIT, pas une obligation. L\'acheteur peut choisir d\'exercer ou non. C\'est ce qui la distingue d\'un contrat à terme (futures) où l\'obligation est ferme.'
      },
      {
        type: 'quiz',
        question: 'Quelle est la différence entre un call et un put ?',
        options: [
          'Le call est plus cher que le put',
          'Le call donne le droit d\'acheter, le put donne le droit de vendre',
          'Le call est pour les actions, le put pour les obligations',
          'Il n\'y a pas de différence'
        ],
        correctAnswer: 1,
        explanation: 'Call = droit d\'ACHETER (anticipation haussière). Put = droit de VENDRE (anticipation baissière ou protection). C\'est la distinction fondamentale.'
      },
      {
        type: 'quiz',
        question: 'Vous achetez un call. Quelle est votre perte maximale ?',
        options: [
          'Illimitée',
          'Le prix du sous-jacent',
          'La prime payée',
          'Le strike price'
        ],
        correctAnswer: 2,
        explanation: 'Quand vous ACHETEZ une option (call ou put), votre perte maximale est la prime payée. Vous ne pouvez pas perdre plus. C\'est un risque borné, un avantage majeur des options.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi acheter un put sur une action que vous détenez ?',
        options: [
          'Pour gagner de l\'argent si l\'action monte',
          'Pour vous protéger contre une baisse',
          'Pour vendre l\'action immédiatement',
          'C\'est inutile'
        ],
        correctAnswer: 1,
        explanation: 'Acheter un put sur une action que vous détenez, c\'est comme prendre une assurance. Si l\'action baisse, le put compense la perte. C\'est une stratégie de protection (hedging).'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que la "prime" d\'une option ?',
        options: [
          'Le gain potentiel',
          'Le prix payé pour acheter l\'option',
          'Le prix d\'exercice',
          'La différence entre le prix du marché et le strike'
        ],
        correctAnswer: 1,
        explanation: 'La prime est le prix que vous payez pour acheter l\'option. C\'est le coût de votre droit. Pour le vendeur, c\'est le revenu qu\'il reçoit.'
      }
    ]
  },
  {
    id: 'quatre-positions',
    title: 'Les 4 positions sur options',
    description: 'Buy Call, Buy Put, Sell Call, Sell Put : profils de gain et de risque',
    duration: '16 min',
    content: [
      {
        type: 'text',
        content: 'Il existe 4 positions fondamentales sur options : acheter ou vendre un call, acheter ou vendre un put. Chaque position a un profil de risque et de gain très différent. Comprendre ces 4 positions, c\'est maîtriser les options.'
      },
      {
        type: 'keypoints',
        title: 'Buy Call : droit d\'acheter',
        points: [
          '📈 Anticipation : le prix va MONTER',
          '💰 Perte maximale : la prime payée (risque limité)',
          '🚀 Gain potentiel : illimité (si le prix monte fort)',
          '🎯 Stratégie : spéculation haussière ou levier'
        ]
      },
      {
        type: 'keypoints',
        title: 'Buy Put : droit de vendre',
        points: [
          '📉 Anticipation : le prix va BAISSER (ou protection)',
          '💰 Perte maximale : la prime payée (risque limité)',
          '📊 Gain potentiel : important (limité par 0, le prix ne peut pas être négatif)',
          '🎯 Stratégie : protection (hedging) ou spéculation baissière'
        ]
      },
      {
        type: 'keypoints',
        title: 'Sell Call : obligation de vendre',
        points: [
          '📊 Anticipation : le prix va rester STABLE ou baisser légèrement',
          '💰 Gain maximum : la prime reçue (limité)',
          '⚠️ Perte potentielle : illimitée (si le prix monte fort)',
          '🎯 Stratégie : générer du revenu sur un actif détenu'
        ]
      },
      {
        type: 'keypoints',
        title: 'Sell Put : obligation d\'acheter',
        points: [
          '📈 Anticipation : le prix va rester STABLE ou monter légèrement',
          '💰 Gain maximum : la prime reçue (limité)',
          '⚠️ Perte potentielle : importante (si le prix chute)',
          '🎯 Stratégie : acheter un actif à prix réduit ou générer du revenu'
        ]
      },
      {
        type: 'diagram',
        title: 'Tableau récapitulatif',
        items: [
          'Buy Call : Perte max = prime | Gain = illimité | Anticipation = hausse',
          'Buy Put : Perte max = prime | Gain = important | Anticipation = baisse',
          'Sell Call : Gain max = prime | Perte = illimitée | Anticipation = stable/baisse',
          'Sell Put : Gain max = prime | Perte = importante | Anticipation = stable/hausse'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Sell Call (covered call)',
        content: 'Vous détenez 100 actions Airbus à 100€. Vous pensez que le prix va stagner. Vous vendez un call strike 110€, échéance 3 mois, prime 5€. Vous recevez 500€ (5€ × 100). Scénario 1 : Airbus reste à 100€. Le call n\'est pas exercé. Vous gardez vos actions + 500€ de prime. Scénario 2 : Airbus monte à 120€. Le call est exercé, vous devez vendre à 110€. Gain = (110-100) × 100 + 500 = 1 500€. Mais vous ratez la hausse au-delà de 110€.',
        highlight: 'Vendre un call sur un actif détenu génère du revenu (la prime), mais limite le gain potentiel.'
      },
      {
        type: 'example',
        title: 'Exemple : Sell Put',
        content: 'Vous voulez acheter des actions Apple, actuellement à 150€, mais vous trouvez ça cher. Vous vendez un put strike 140€, échéance 2 mois, prime 7€. Vous recevez 700€. Scénario 1 : Apple reste au-dessus de 140€. Le put n\'est pas exercé. Vous gardez 700€ sans acheter les actions. Scénario 2 : Apple chute à 130€. Le put est exercé, vous devez acheter à 140€. Prix effectif = 140€ - 7€ (prime) = 133€. Vous achetez à 133€ au lieu de 150€.',
        highlight: 'Vendre un put permet d\'acheter un actif à prix réduit (strike - prime) ou de générer du revenu.'
      },
      {
        type: 'text',
        content: 'Règle d\'or : quand vous ACHETEZ une option, votre risque est limité (la prime). Quand vous VENDEZ une option, votre gain est limité (la prime) mais votre risque peut être important. Vendre des options est plus risqué qu\'en acheter.'
      },
      {
        type: 'quiz',
        question: 'Vous achetez un call. Le prix du sous-jacent monte fortement. Quel est votre profil de gain ?',
        options: [
          'Gain limité à la prime',
          'Gain potentiellement illimité',
          'Pas de gain possible',
          'Gain limité au strike'
        ],
        correctAnswer: 1,
        explanation: 'Avec un call acheté, plus le prix monte, plus vous gagnez. Le gain est théoriquement illimité. C\'est l\'avantage du call : risque limité (prime), gain illimité.'
      },
      {
        type: 'quiz',
        question: 'Vous vendez un call. Quel est votre gain maximum ?',
        options: [
          'Illimité',
          'Le strike price',
          'La prime reçue',
          'Le prix du sous-jacent'
        ],
        correctAnswer: 2,
        explanation: 'Quand vous vendez une option, votre gain maximum est toujours la prime reçue. C\'est votre revenu. En contrepartie, vous prenez le risque que l\'option soit exercée contre vous.'
      },
      {
        type: 'quiz',
        question: 'Quelle position a un risque de perte illimité ?',
        options: [
          'Buy Call',
          'Buy Put',
          'Sell Call',
          'Aucune'
        ],
        correctAnswer: 2,
        explanation: 'Vendre un call (Sell Call) expose à un risque illimité : si le prix du sous-jacent monte très haut, vous devez acheter cher pour livrer à un prix bas (le strike). La perte peut être énorme.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi vendre un put sur une action que vous voulez acheter ?',
        options: [
          'Pour gagner de l\'argent si l\'action monte',
          'Pour acheter l\'action à un prix effectif réduit (strike - prime)',
          'Pour vendre l\'action immédiatement',
          'C\'est une mauvaise stratégie'
        ],
        correctAnswer: 1,
        explanation: 'Vendre un put vous oblige à acheter si le prix baisse sous le strike. Mais vous avez reçu la prime, donc votre prix effectif = strike - prime. C\'est une stratégie pour acheter à prix réduit.'
      },
      {
        type: 'quiz',
        question: 'Quelle affirmation est vraie ?',
        options: [
          'Acheter des options est plus risqué que vendre',
          'Vendre des options est plus risqué qu\'acheter',
          'Le risque est le même',
          'Les options n\'ont pas de risque'
        ],
        correctAnswer: 1,
        explanation: 'Acheter une option = risque limité à la prime. Vendre une option = gain limité à la prime, mais risque potentiellement important (voire illimité pour un call vendu). Vendre est plus risqué.'
      }
    ]
  },
  {
    id: 'strategies-volatilite',
    title: 'Stratégies et volatilité',
    description: 'Straddle, hedging vs spéculation, et le rôle de la volatilité',
    duration: '14 min',
    content: [
      {
        type: 'text',
        content: 'Les options ne servent pas qu\'à parier sur la hausse ou la baisse. On peut aussi parier sur la volatilité (l\'ampleur des mouvements), se protéger contre un risque, ou combiner plusieurs options pour créer des stratégies sophistiquées. Découvrons les stratégies les plus courantes.'
      },
      {
        type: 'keypoints',
        title: 'Hedging vs Spéculation',
        points: [
          '🛡️ Hedging (couverture) : utiliser les options pour SE PROTÉGER contre un risque',
          '🎲 Spéculation : utiliser les options pour PARIER sur un mouvement de prix',
          '💡 Même outil, objectifs différents',
          '🎯 Les entreprises font du hedging, les traders font de la spéculation'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Hedging avec un put',
        content: 'Vous êtes un fonds de pension avec 10 millions d\'euros en actions françaises (CAC 40). Vous craignez une crise. Vous achetez des puts sur l\'indice CAC 40, strike 7000, échéance 6 mois, prime 200 000€. Scénario 1 : Crise, le CAC chute à 6000. Vos actions perdent ~15% (1,5M€), mais vos puts gagnent ~1M€. Perte nette = 500k€ + prime. Scénario 2 : Pas de crise, le CAC monte. Vous perdez la prime (200k€), mais vos actions gagnent.',
        highlight: 'Le put est une assurance : vous payez une prime pour limiter votre perte en cas de crise.'
      },
      {
        type: 'keypoints',
        title: 'Stratégie Straddle : parier sur la volatilité',
        points: [
          '🎯 Objectif : parier sur un GROS mouvement, sans savoir la direction',
          '📊 Méthode : acheter un call ET un put, même strike, même échéance',
          '💰 Coût : deux primes à payer',
          '🚀 Gain : si le prix bouge fortement (hausse OU baisse)',
          '📉 Perte : si le prix reste stable (vous perdez les deux primes)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Straddle avant résultats',
        content: 'Tesla annonce ses résultats trimestriels demain. Action à 200€. Vous savez que le prix va bouger fort, mais vous ne savez pas dans quel sens. Vous achetez : 1 call strike 200€, prime 10€ + 1 put strike 200€, prime 10€. Coût total = 20€. Scénario 1 : Bons résultats, Tesla monte à 240€. Le call gagne 40€, le put perd 10€. Gain net = 40€ - 20€ (primes) = 20€. Scénario 2 : Mauvais résultats, Tesla chute à 170€. Le put gagne 30€, le call perd 10€. Gain net = 30€ - 20€ = 10€. Scénario 3 : Résultats neutres, Tesla reste à 200€. Perte = 20€ (les deux primes).',
        highlight: 'Le straddle gagne si le prix bouge fort, perd si le prix stagne. C\'est un pari sur la volatilité.'
      },
      {
        type: 'text',
        content: 'La volatilité est cruciale pour les options. Plus la volatilité attendue est élevée, plus les options sont chères (les primes augmentent). Pourquoi ? Parce qu\'un actif volatil a plus de chances de bouger fort, donc les options ont plus de valeur.'
      },
      {
        type: 'keypoints',
        title: 'Options et volatilité',
        points: [
          '📊 Volatilité = ampleur des variations de prix',
          '📈 Volatilité élevée → primes d\'options élevées',
          '📉 Volatilité faible → primes d\'options faibles',
          '💡 Les options sont un moyen de trader la volatilité',
          '🎯 Avant un événement important (résultats, élections), la volatilité monte'
        ]
      },
      {
        type: 'diagram',
        title: 'Récapitulatif des stratégies',
        items: [
          'Buy Call : parier sur une hausse',
          'Buy Put : se protéger contre une baisse OU parier sur une baisse',
          'Sell Call (covered) : générer du revenu sur un actif détenu',
          'Sell Put : acheter un actif à prix réduit OU générer du revenu',
          'Straddle : parier sur un gros mouvement (hausse OU baisse)'
        ]
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le hedging avec des options ?',
        options: [
          'Spéculer pour gagner de l\'argent',
          'Se protéger contre un risque',
          'Acheter des actions',
          'Vendre des obligations'
        ],
        correctAnswer: 1,
        explanation: 'Le hedging (couverture) consiste à utiliser les options pour se protéger contre un risque. Par exemple, acheter un put pour protéger un portefeuille d\'actions contre une baisse.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un straddle ?',
        options: [
          'Acheter un call uniquement',
          'Acheter un call ET un put, même strike',
          'Vendre un call ET un put',
          'Acheter une action'
        ],
        correctAnswer: 1,
        explanation: 'Un straddle consiste à acheter un call ET un put avec le même strike et la même échéance. C\'est un pari sur la volatilité : vous gagnez si le prix bouge fort, peu importe la direction.'
      },
      {
        type: 'quiz',
        question: 'Quand un straddle est-il profitable ?',
        options: [
          'Quand le prix reste stable',
          'Quand le prix bouge fortement (hausse OU baisse)',
          'Uniquement si le prix monte',
          'Uniquement si le prix baisse'
        ],
        correctAnswer: 1,
        explanation: 'Le straddle gagne si le prix bouge fortement dans n\'importe quelle direction. Si le prix reste stable, vous perdez les deux primes payées. C\'est un pari sur la volatilité, pas sur la direction.'
      },
      {
        type: 'quiz',
        question: 'Que se passe-t-il pour les primes d\'options quand la volatilité augmente ?',
        options: [
          'Elles baissent',
          'Elles augmentent',
          'Elles ne changent pas',
          'Elles disparaissent'
        ],
        correctAnswer: 1,
        explanation: 'Quand la volatilité augmente, les primes d\'options augmentent. Pourquoi ? Parce qu\'un actif plus volatil a plus de chances de bouger fort, donc les options ont plus de valeur potentielle.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi une entreprise utiliserait-elle des options ?',
        options: [
          'Uniquement pour spéculer',
          'Pour se protéger contre des risques (change, matières premières, taux)',
          'Pour remplacer les actions',
          'C\'est interdit aux entreprises'
        ],
        correctAnswer: 1,
        explanation: 'Les entreprises utilisent les options principalement pour le hedging : se protéger contre le risque de change (ex : Airbus), le risque matières premières (ex : compagnies aériennes et pétrole), etc. C\'est de la gestion du risque, pas de la spéculation.'
      }
    ]
  }
]
