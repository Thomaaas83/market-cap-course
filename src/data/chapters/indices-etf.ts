import { Lesson } from '../../types'

export const indicesEtfLessons: Lesson[] = [
  {
    id: 'indices-etf',
    title: 'Indices boursiers et ETF',
    description: 'Comprendre les indices et comment les répliquer avec des ETF',
    duration: '13 min',
    content: [
      {
        type: 'text',
        content: 'Vous entendez souvent parler du CAC 40, du S&P 500, du Dow Jones... Ce sont des indices boursiers. Mais qu\'est-ce qu\'un indice exactement ? Et comment peut-on investir dessus ? C\'est là qu\'interviennent les ETF. Comprendre cette distinction est essentiel.'
      },
      {
        type: 'keypoints',
        title: 'Qu\'est-ce qu\'un indice boursier ?',
        points: [
          '📊 Outil statistique qui mesure la performance d\'un ensemble d\'actions',
          '📈 Exemple : CAC 40 = performance des 40 plus grandes entreprises françaises',
          '❌ Un indice N\'EST PAS un instrument financier : on ne peut pas l\'acheter',
          '🎯 Rôle : benchmark (référence) pour mesurer la performance du marché'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Le CAC 40',
        content: 'Le CAC 40 regroupe les 40 plus grandes entreprises françaises : LVMH, Total, Airbus, BNP Paribas, etc. Si le CAC 40 est à 7 500 points aujourd\'hui et monte à 7 650 demain, cela signifie que ces 40 entreprises ont globalement gagné 2% de valeur. C\'est un indicateur de la santé du marché français.',
        highlight: 'Le CAC 40 est un chiffre, une mesure. Vous ne pouvez pas "acheter du CAC 40" directement.'
      },
      {
        type: 'keypoints',
        title: 'Exemples d\'indices célèbres',
        points: [
          '🇫🇷 CAC 40 : 40 plus grandes entreprises françaises',
          '🇺🇸 S&P 500 : 500 plus grandes entreprises américaines',
          '🇺🇸 Dow Jones : 30 grandes entreprises américaines',
          '🇪🇺 Euro Stoxx 50 : 50 grandes entreprises de la zone euro',
          '🌍 MSCI World : entreprises des pays développés du monde entier'
        ]
      },
      {
        type: 'text',
        content: 'Problème : si un indice n\'est qu\'un chiffre, comment investir dessus ? C\'est là qu\'interviennent les ETF (Exchange-Traded Funds). Un ETF est un instrument financier qui réplique la performance d\'un indice.'
      },
      {
        type: 'keypoints',
        title: 'Qu\'est-ce qu\'un ETF ?',
        points: [
          '📦 Fonds d\'investissement coté en bourse',
          '🎯 Objectif : répliquer la performance d\'un indice',
          '✅ Achetable et vendable comme une action',
          '💰 Frais très faibles (gestion passive)',
          '🌈 Diversification immédiate : un ETF = des dizaines ou centaines d\'actions'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : ETF CAC 40',
        content: 'Vous voulez investir sur le marché français. Option 1 : acheter les 40 actions du CAC 40 une par une. Compliqué et coûteux. Option 2 : acheter un ETF CAC 40 (ex : Lyxor CAC 40). Vous achetez une seule "part" d\'ETF, et vous êtes instantanément exposé aux 40 entreprises. Si le CAC 40 monte de 5%, votre ETF monte de ~5%. Si le CAC baisse de 3%, votre ETF baisse de ~3%.',
        highlight: 'Un ETF vous donne accès à un indice entier avec un seul achat. C\'est simple, liquide et peu coûteux.'
      },
      {
        type: 'diagram',
        title: 'Indice vs ETF : la différence',
        items: [
          'Indice (ex : CAC 40) : mesure statistique, chiffre, NON achetable',
          'ETF (ex : ETF CAC 40) : instrument financier, achetable en bourse',
          'L\'ETF détient les actions de l\'indice (ou utilise des mécanismes de réplication)',
          'Performance de l\'ETF ≈ Performance de l\'indice (avec de petits écarts)',
          'Vous ne pouvez pas acheter un indice, mais vous pouvez acheter un ETF qui le suit'
        ]
      },
      {
        type: 'keypoints',
        title: 'Avantages des ETF',
        points: [
          '🌈 Diversification : exposition à des dizaines/centaines d\'entreprises',
          '💰 Coûts faibles : frais de gestion de 0,1% à 0,5% par an',
          '📈 Liquidité : achetable/vendable en continu comme une action',
          '🔍 Transparence : composition connue et publiée',
          '🎯 Gestion passive : pas besoin de choisir les actions, l\'ETF suit l\'indice'
        ]
      },
      {
        type: 'text',
        content: 'Les ETF ont révolutionné l\'investissement. Avant, seuls les riches pouvaient se diversifier facilement. Aujourd\'hui, avec 100€, vous pouvez acheter un ETF World et être exposé à des milliers d\'entreprises mondiales. C\'est l\'investissement passif démocratisé.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un indice boursier ?',
        options: [
          'Un instrument financier achetable',
          'Une mesure statistique de la performance d\'un ensemble d\'actions',
          'Une action d\'une entreprise',
          'Un type d\'obligation'
        ],
        correctAnswer: 1,
        explanation: 'Un indice est une mesure statistique, un chiffre qui reflète la performance d\'un groupe d\'actions. Ce n\'est PAS un instrument financier : vous ne pouvez pas acheter un indice directement.'
      },
      {
        type: 'quiz',
        question: 'Peut-on acheter directement un indice comme le CAC 40 ?',
        options: [
          'Oui, sur n\'importe quelle bourse',
          'Non, un indice n\'est pas achetable',
          'Oui, mais uniquement pour les professionnels',
          'Oui, via une banque'
        ],
        correctAnswer: 1,
        explanation: 'Non, un indice est juste un chiffre, une référence. Pour investir sur un indice, il faut acheter un ETF qui le réplique, ou acheter toutes les actions qui le composent.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un ETF ?',
        options: [
          'Un indice boursier',
          'Un fonds coté en bourse qui réplique un indice',
          'Une action d\'une entreprise',
          'Une obligation d\'État'
        ],
        correctAnswer: 1,
        explanation: 'Un ETF (Exchange-Traded Fund) est un fonds d\'investissement coté en bourse dont l\'objectif est de répliquer la performance d\'un indice. C\'est achetable comme une action.'
      },
      {
        type: 'quiz',
        question: 'Quel est le principal avantage d\'un ETF ?',
        options: [
          'Il garantit des profits',
          'Il offre une diversification immédiate à faible coût',
          'Il ne peut jamais perdre de valeur',
          'Il rapporte plus que les actions individuelles'
        ],
        correctAnswer: 1,
        explanation: 'L\'avantage principal d\'un ETF est la diversification : avec un seul achat, vous êtes exposé à des dizaines ou centaines d\'entreprises. Et les frais sont très faibles (gestion passive).'
      },
      {
        type: 'quiz',
        question: 'Si le CAC 40 monte de 10%, que se passe-t-il pour un ETF CAC 40 ?',
        options: [
          'Il monte de 10% environ',
          'Il baisse de 10%',
          'Il ne bouge pas',
          'Il monte de 20%'
        ],
        correctAnswer: 0,
        explanation: 'Un ETF réplique la performance de son indice. Si le CAC 40 monte de 10%, l\'ETF CAC 40 monte d\'environ 10% (avec de petits écarts dus aux frais et à la méthode de réplication).'
      }
    ]
  }
]
