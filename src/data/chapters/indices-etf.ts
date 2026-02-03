import { Lesson } from '../../types'

export const indicesEtfLessons: Lesson[] = [
  {
    id: 'indices-etf',
    title: 'Indices boursiers et ETF',
    titleEn: 'Stock Indices and ETFs',
    description: 'Comprendre les indices et comment les répliquer avec des ETF',
    descriptionEn: 'Understanding indices and how to replicate them with ETFs',
    duration: '13 min',
    content: [
      {
        type: 'text',
        content: 'Vous entendez souvent parler du CAC 40, du S&P 500, du Dow Jones... Ce sont des indices boursiers. Mais qu\'est-ce qu\'un indice exactement ? Et comment peut-on investir dessus ? C\'est là qu\'interviennent les ETF. Comprendre cette distinction est essentiel.',
        contentEn: 'You often hear about the CAC 40, S&P 500, Dow Jones... These are stock indices. But what exactly is an index? And how can you invest in it? That\'s where ETFs come in. Understanding this distinction is essential.'
      },
      {
        type: 'keypoints',
        title: 'Qu\'est-ce qu\'un indice boursier ?',
        titleEn: 'What is a Stock Index?',
        points: [
          '📊 Outil statistique qui mesure la performance d\'un ensemble d\'actions',
          '📈 Exemple : CAC 40 = performance des 40 plus grandes entreprises françaises',
          '❌ Un indice N\'EST PAS un instrument financier : on ne peut pas l\'acheter',
          '🎯 Rôle : benchmark (référence) pour mesurer la performance du marché'
        ],
        pointsEn: [
          '📊 Statistical tool that measures the performance of a set of stocks',
          '📈 Example: CAC 40 = performance of the 40 largest French companies',
          '❌ An index IS NOT a financial instrument: you cannot buy it',
          '🎯 Role: benchmark (reference) to measure market performance'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Le CAC 40',
        titleEn: 'Example: The CAC 40',
        content: 'Le CAC 40 regroupe les 40 plus grandes entreprises françaises : LVMH, Total, Airbus, BNP Paribas, etc. Si le CAC 40 est à 7 500 points aujourd\'hui et monte à 7 650 demain, cela signifie que ces 40 entreprises ont globalement gagné 2% de valeur. C\'est un indicateur de la santé du marché français.',
        contentEn: 'The CAC 40 groups the 40 largest French companies: LVMH, Total, Airbus, BNP Paribas, etc. If the CAC 40 is at 7,500 points today and rises to 7,650 tomorrow, it means these 40 companies have globally gained 2% in value. It\'s an indicator of French market health.',
        highlight: 'Le CAC 40 est un chiffre, une mesure. Vous ne pouvez pas "acheter du CAC 40" directement.',
        highlightEn: 'The CAC 40 is a number, a measure. You cannot "buy CAC 40" directly.'
      },
      {
        type: 'keypoints',
        title: 'Exemples d\'indices célèbres',
        titleEn: 'Examples of Famous Indices',
        points: [
          '🇫🇷 CAC 40 : 40 plus grandes entreprises françaises',
          '🇺🇸 S&P 500 : 500 plus grandes entreprises américaines',
          '🇺🇸 Dow Jones : 30 grandes entreprises américaines',
          '🇪🇺 Euro Stoxx 50 : 50 grandes entreprises de la zone euro',
          '🌍 MSCI World : entreprises des pays développés du monde entier'
        ],
        pointsEn: [
          '🇫🇷 CAC 40: 40 largest French companies',
          '🇺🇸 S&P 500: 500 largest American companies',
          '🇺🇸 Dow Jones: 30 large American companies',
          '🇪🇺 Euro Stoxx 50: 50 large eurozone companies',
          '🌍 MSCI World: companies from developed countries worldwide'
        ]
      },
      {
        type: 'text',
        content: 'Problème : si un indice n\'est qu\'un chiffre, comment investir dessus ? C\'est là qu\'interviennent les ETF (Exchange-Traded Funds). Un ETF est un instrument financier qui réplique la performance d\'un indice.',
        contentEn: 'Problem: if an index is just a number, how do you invest in it? That\'s where ETFs (Exchange-Traded Funds) come in. An ETF is a financial instrument that replicates an index\'s performance.'
      },
      {
        type: 'keypoints',
        title: 'Qu\'est-ce qu\'un ETF ?',
        titleEn: 'What is an ETF?',
        points: [
          '📦 Fonds d\'investissement coté en bourse',
          '🎯 Objectif : répliquer la performance d\'un indice',
          '✅ Achetable et vendable comme une action',
          '💰 Frais très faibles (gestion passive)',
          '🌈 Diversification immédiate : un ETF = des dizaines ou centaines d\'actions'
        ],
        pointsEn: [
          '📦 Investment fund listed on stock exchange',
          '🎯 Objective: replicate an index\'s performance',
          '✅ Buyable and sellable like a stock',
          '💰 Very low fees (passive management)',
          '🌈 Immediate diversification: one ETF = dozens or hundreds of stocks'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : ETF CAC 40',
        titleEn: 'Example: CAC 40 ETF',
        content: 'Vous voulez investir sur le marché français. Option 1 : acheter les 40 actions du CAC 40 une par une. Compliqué et coûteux. Option 2 : acheter un ETF CAC 40 (ex : Lyxor CAC 40). Vous achetez une seule "part" d\'ETF, et vous êtes instantanément exposé aux 40 entreprises. Si le CAC 40 monte de 5%, votre ETF monte de ~5%. Si le CAC baisse de 3%, votre ETF baisse de ~3%.',
        contentEn: 'You want to invest in the French market. Option 1: buy the 40 CAC 40 stocks one by one. Complicated and expensive. Option 2: buy a CAC 40 ETF (e.g., Lyxor CAC 40). You buy a single ETF "share," and you\'re instantly exposed to the 40 companies. If CAC 40 rises 5%, your ETF rises ~5%. If CAC falls 3%, your ETF falls ~3%.',
        highlight: 'Un ETF vous donne accès à un indice entier avec un seul achat. C\'est simple, liquide et peu coûteux.',
        highlightEn: 'An ETF gives you access to an entire index with a single purchase. It\'s simple, liquid, and inexpensive.'
      },
      {
        type: 'diagram',
        title: 'Indice vs ETF : la différence',
        titleEn: 'Index vs ETF: The Difference',
        items: [
          'Indice (ex : CAC 40) : mesure statistique, chiffre, NON achetable',
          'ETF (ex : ETF CAC 40) : instrument financier, achetable en bourse',
          'L\'ETF détient les actions de l\'indice (ou utilise des mécanismes de réplication)',
          'Performance de l\'ETF ≈ Performance de l\'indice (avec de petits écarts)',
          'Vous ne pouvez pas acheter un indice, mais vous pouvez acheter un ETF qui le suit'
        ],
        itemsEn: [
          'Index (e.g., CAC 40): statistical measure, number, NOT buyable',
          'ETF (e.g., CAC 40 ETF): financial instrument, buyable on exchange',
          'The ETF holds the index stocks (or uses replication mechanisms)',
          'ETF performance ≈ Index performance (with small differences)',
          'You cannot buy an index, but you can buy an ETF that tracks it'
        ]
      },
      {
        type: 'keypoints',
        title: 'Avantages des ETF',
        titleEn: 'ETF Advantages',
        points: [
          '🌈 Diversification : exposition à des dizaines/centaines d\'entreprises',
          '💰 Coûts faibles : frais de gestion de 0,1% à 0,5% par an',
          '📈 Liquidité : achetable/vendable en continu comme une action',
          '🔍 Transparence : composition connue et publiée',
          '🎯 Gestion passive : pas besoin de choisir les actions, l\'ETF suit l\'indice'
        ],
        pointsEn: [
          '🌈 Diversification: exposure to dozens/hundreds of companies',
          '💰 Low costs: management fees of 0.1% to 0.5% per year',
          '📈 Liquidity: buyable/sellable continuously like a stock',
          '🔍 Transparency: composition known and published',
          '🎯 Passive management: no need to choose stocks, ETF follows the index'
        ]
      },
      {
        type: 'text',
        content: 'Les ETF ont révolutionné l\'investissement. Avant, seuls les riches pouvaient se diversifier facilement. Aujourd\'hui, avec 100€, vous pouvez acheter un ETF World et être exposé à des milliers d\'entreprises mondiales. C\'est l\'investissement passif démocratisé.',
        contentEn: 'ETFs have revolutionized investing. Before, only the wealthy could easily diversify. Today, with €100, you can buy a World ETF and be exposed to thousands of global companies. It\'s democratized passive investing.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un indice boursier ?',
        questionEn: 'What is a stock index?',
        options: [
          'Un instrument financier achetable',
          'Une mesure statistique de la performance d\'un ensemble d\'actions',
          'Une action d\'une entreprise',
          'Un type d\'obligation'
        ],
        optionsEn: [
          'A buyable financial instrument',
          'A statistical measure of a set of stocks\' performance',
          'A company stock',
          'A type of bond'
        ],
        correctAnswer: 1,
        explanation: 'Un indice est une mesure statistique, un chiffre qui reflète la performance d\'un groupe d\'actions. Ce n\'est PAS un instrument financier : vous ne pouvez pas acheter un indice directement.',
        explanationEn: 'An index is a statistical measure, a number that reflects the performance of a group of stocks. It is NOT a financial instrument: you cannot buy an index directly.'
      },
      {
        type: 'quiz',
        question: 'Peut-on acheter directement un indice comme le CAC 40 ?',
        questionEn: 'Can you directly buy an index like the CAC 40?',
        options: [
          'Oui, sur n\'importe quelle bourse',
          'Non, un indice n\'est pas achetable',
          'Oui, mais uniquement pour les professionnels',
          'Oui, via une banque'
        ],
        optionsEn: [
          'Yes, on any exchange',
          'No, an index is not buyable',
          'Yes, but only for professionals',
          'Yes, through a bank'
        ],
        correctAnswer: 1,
        explanation: 'Non, un indice est juste un chiffre, une référence. Pour investir sur un indice, il faut acheter un ETF qui le réplique, ou acheter toutes les actions qui le composent.',
        explanationEn: 'No, an index is just a number, a reference. To invest in an index, you must buy an ETF that replicates it, or buy all the stocks that compose it.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un ETF ?',
        questionEn: 'What is an ETF?',
        options: [
          'Un indice boursier',
          'Un fonds coté en bourse qui réplique un indice',
          'Une action d\'une entreprise',
          'Une obligation d\'État'
        ],
        optionsEn: [
          'A stock index',
          'An exchange-listed fund that replicates an index',
          'A company stock',
          'A government bond'
        ],
        correctAnswer: 1,
        explanation: 'Un ETF (Exchange-Traded Fund) est un fonds d\'investissement coté en bourse dont l\'objectif est de répliquer la performance d\'un indice. C\'est achetable comme une action.',
        explanationEn: 'An ETF (Exchange-Traded Fund) is an exchange-listed investment fund whose objective is to replicate an index\'s performance. It\'s buyable like a stock.'
      },
      {
        type: 'quiz',
        question: 'Quel est le principal avantage d\'un ETF ?',
        questionEn: 'What is the main advantage of an ETF?',
        options: [
          'Il garantit des profits',
          'Il offre une diversification immédiate à faible coût',
          'Il ne peut jamais perdre de valeur',
          'Il rapporte plus que les actions individuelles'
        ],
        optionsEn: [
          'It guarantees profits',
          'It offers immediate diversification at low cost',
          'It can never lose value',
          'It yields more than individual stocks'
        ],
        correctAnswer: 1,
        explanation: 'L\'avantage principal d\'un ETF est la diversification : avec un seul achat, vous êtes exposé à des dizaines ou centaines d\'entreprises. Et les frais sont très faibles (gestion passive).',
        explanationEn: 'The main advantage of an ETF is diversification: with a single purchase, you\'re exposed to dozens or hundreds of companies. And fees are very low (passive management).'
      },
      {
        type: 'quiz',
        question: 'Si le CAC 40 monte de 10%, que se passe-t-il pour un ETF CAC 40 ?',
        questionEn: 'If the CAC 40 rises 10%, what happens to a CAC 40 ETF?',
        options: [
          'Il monte de 10% environ',
          'Il baisse de 10%',
          'Il ne bouge pas',
          'Il monte de 20%'
        ],
        optionsEn: [
          'It rises about 10%',
          'It falls 10%',
          'It doesn\'t move',
          'It rises 20%'
        ],
        correctAnswer: 0,
        explanation: 'Un ETF réplique la performance de son indice. Si le CAC 40 monte de 10%, l\'ETF CAC 40 monte d\'environ 10% (avec de petits écarts dus aux frais et à la méthode de réplication).',
        explanationEn: 'An ETF replicates its index\'s performance. If the CAC 40 rises 10%, the CAC 40 ETF rises about 10% (with small differences due to fees and replication method).'
      }
    ]
  }
]
