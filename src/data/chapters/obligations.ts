import { Lesson } from '../../types'

export const obligationsLessons: Lesson[] = [
  {
    id: 'definition-obligation',
    title: 'Qu\'est-ce qu\'une obligation ?',
    description: 'Comprendre le fonctionnement d\'une obligation et ses composantes',
    duration: '12 min',
    content: [
      {
        type: 'text',
        content: 'Imaginez que vous prêtez 1 000€ à une entreprise. En échange, elle s\'engage à vous payer des intérêts chaque année et à vous rembourser vos 1 000€ dans 5 ans. C\'est exactement ce qu\'est une obligation : un prêt structuré et négociable sur le marché.'
      },
      {
        type: 'keypoints',
        title: 'Obligation : les 3 éléments clés',
        points: [
          '💰 Nominal (Principal) : le montant que vous prêtez et qui sera remboursé à la fin',
          '💵 Coupon : l\'intérêt que vous recevez régulièrement (généralement chaque année)',
          '📅 Maturité : la date à laquelle l\'emprunteur vous rembourse le nominal',
          '🏢 Émetteur : celui qui emprunte (État, entreprise, banque)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Une obligation d\'entreprise',
        content: 'Renault émet une obligation : Nominal = 1 000€, Coupon = 5%, Maturité = 3 ans. Vous achetez cette obligation pour 1 000€. Année 1 : vous recevez 50€ (5% de 1 000€). Année 2 : vous recevez 50€. Année 3 : vous recevez 50€ + 1 000€ (remboursement du nominal). Total reçu : 1 150€ sur 3 ans.',
        highlight: 'Vous êtes créancier de Renault. L\'entreprise vous doit de l\'argent, contrairement à une action où vous seriez copropriétaire.'
      },
      {
        type: 'diagram',
        title: 'Flux de paiement d\'une obligation',
        items: [
          'Année 0 : Vous prêtez 1 000€ → Renault reçoit 1 000€',
          'Année 1 : Renault vous paie 50€ (coupon)',
          'Année 2 : Renault vous paie 50€ (coupon)',
          'Année 3 : Renault vous paie 50€ (coupon) + 1 000€ (remboursement)',
          'Vous avez récupéré votre capital + les intérêts'
        ]
      },
      {
        type: 'text',
        content: 'Contrairement à une action, une obligation a une durée de vie limitée (la maturité). À l\'échéance, le contrat se termine : vous récupérez votre argent et c\'est fini. Avec une action, vous restez propriétaire tant que vous ne vendez pas.'
      },
      {
        type: 'keypoints',
        title: 'Obligation vs Action : rappel',
        points: [
          '📜 Obligation = Dette : vous prêtez, vous êtes créancier',
          '📈 Action = Capital : vous achetez une part, vous êtes propriétaire',
          '💰 Obligation : flux prévisibles (coupons + remboursement)',
          '🎲 Action : flux incertains (dividendes variables, pas de remboursement)',
          '🛡️ Obligation : priorité en cas de faillite'
        ]
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le "nominal" d\'une obligation ?',
        options: [
          'Le prix actuel de l\'obligation sur le marché',
          'Le montant qui sera remboursé à l\'échéance',
          'L\'intérêt annuel versé',
          'La durée de l\'obligation'
        ],
        correctAnswer: 1,
        explanation: 'Le nominal (ou principal) est le montant que l\'émetteur s\'engage à rembourser à la maturité. C\'est la "valeur faciale" de l\'obligation, souvent 1 000€ ou 100€.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le coupon d\'une obligation ?',
        options: [
          'Le prix d\'achat de l\'obligation',
          'L\'intérêt périodique versé à l\'investisseur',
          'La date de remboursement',
          'Le risque de l\'obligation'
        ],
        correctAnswer: 1,
        explanation: 'Le coupon est l\'intérêt que l\'émetteur verse régulièrement (généralement chaque année) à l\'investisseur. Si le coupon est de 5% sur un nominal de 1 000€, vous recevez 50€ par an.'
      },
      {
        type: 'quiz',
        question: 'Une obligation avec maturité 5 ans signifie :',
        options: [
          'L\'obligation paie des intérêts pendant 5 ans',
          'Le nominal sera remboursé dans 5 ans',
          'Les deux réponses précédentes',
          'L\'obligation ne peut pas être vendue avant 5 ans'
        ],
        correctAnswer: 2,
        explanation: 'La maturité indique quand le nominal sera remboursé (dans 5 ans). Pendant ces 5 ans, l\'obligation paie des coupons. Vous pouvez vendre l\'obligation avant l\'échéance sur le marché secondaire.'
      },
      {
        type: 'quiz',
        question: 'Quand vous achetez une obligation, vous devenez :',
        options: [
          'Propriétaire de l\'entreprise',
          'Créancier de l\'entreprise',
          'Employé de l\'entreprise',
          'Actionnaire de l\'entreprise'
        ],
        correctAnswer: 1,
        explanation: 'En achetant une obligation, vous prêtez de l\'argent : vous devenez créancier. L\'entreprise vous doit de l\'argent. Vous n\'êtes pas propriétaire comme avec une action.'
      },
      {
        type: 'quiz',
        question: 'Obligation de 1 000€, coupon 4%, maturité 3 ans. Combien recevez-vous au total ?',
        options: [
          '1 000€',
          '1 040€',
          '1 120€',
          '1 200€'
        ],
        correctAnswer: 2,
        explanation: 'Vous recevez : 40€ (an 1) + 40€ (an 2) + 40€ + 1 000€ (an 3) = 1 120€ au total. Les coupons (3 × 40€ = 120€) + le remboursement du nominal (1 000€).'
      }
    ]
  },
  {
    id: 'prix-rendement',
    title: 'Prix et rendement : la relation clé',
    description: 'Comprendre la différence entre coupon et yield, et pourquoi les prix varient',
    duration: '14 min',
    content: [
      {
        type: 'text',
        content: 'Voici un point crucial : le coupon d\'une obligation ne change jamais, mais son prix sur le marché varie constamment. Cette variation de prix change le rendement réel (yield) pour celui qui achète l\'obligation. Comprendre cette mécanique est essentiel.'
      },
      {
        type: 'keypoints',
        title: 'Coupon vs Yield : la différence fondamentale',
        points: [
          '💵 Coupon : fixé à l\'émission, ne change JAMAIS (ex : 5% = 50€/an sur 1 000€)',
          '📊 Yield (rendement) : varie selon le prix d\'achat sur le marché',
          '🔄 Si le prix baisse, le yield augmente (même coupon, prix plus bas)',
          '🔄 Si le prix monte, le yield baisse (même coupon, prix plus élevé)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Même obligation, rendements différents',
        content: 'Obligation : Nominal 1 000€, Coupon 5% (= 50€/an). Cas 1 - Achat au pair : Vous payez 1 000€. Vous recevez 50€/an. Yield = 50/1000 = 5%. Cas 2 - Achat sur le marché : Le prix a baissé à 900€. Vous payez 900€. Vous recevez toujours 50€/an (le coupon ne change pas !). Yield = 50/900 = 5,56%. Cas 3 - Prix monté à 1 100€ : Vous payez 1 100€. Vous recevez toujours 50€/an. Yield = 50/1100 = 4,55%.',
        highlight: 'Le coupon reste à 50€ dans tous les cas. C\'est le prix qui change, et donc le rendement effectif pour l\'acheteur.'
      },
      {
        type: 'diagram',
        title: 'La relation inverse prix-rendement',
        items: [
          'Prix de l\'obligation BAISSE → Yield AUGMENTE',
          'Prix de l\'obligation MONTE → Yield BAISSE',
          'Pourquoi ? Le coupon est fixe, donc si vous payez moins cher, votre rendement est meilleur',
          'Si vous payez plus cher, votre rendement est moins bon',
          'C\'est une relation mathématique inverse fondamentale'
        ]
      },
      {
        type: 'text',
        content: 'Pourquoi le prix d\'une obligation varie-t-il ? Deux raisons principales : (1) Les taux d\'intérêt du marché changent, (2) La perception du risque de l\'émetteur change. Nous verrons ces risques en détail dans la prochaine leçon.'
      },
      {
        type: 'keypoints',
        title: 'Achat "au pair" vs sur le marché',
        points: [
          '💯 Au pair : prix = nominal (ex : 1 000€). Le yield = coupon',
          '📉 Sous le pair : prix < nominal (ex : 950€). Le yield > coupon',
          '📈 Au-dessus du pair : prix > nominal (ex : 1 050€). Le yield < coupon',
          '🎯 Le marché ajuste le prix pour que le yield reflète le risque et les taux actuels'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Pourquoi acheter au-dessus du pair ?',
        content: 'Une obligation émise il y a 5 ans a un coupon de 6%. Aujourd\'hui, les nouvelles obligations similaires ont des coupons de 3% (les taux ont baissé). Votre obligation à 6% est très attractive ! Les investisseurs sont prêts à payer plus cher (ex : 1 200€ au lieu de 1 000€) pour obtenir ce coupon élevé. Le prix monte au-dessus du pair, et le yield s\'ajuste à environ 3% pour être cohérent avec le marché.',
        highlight: 'Le marché ajuste automatiquement les prix pour que les yields soient cohérents entre obligations comparables.'
      },
      {
        type: 'quiz',
        question: 'Le coupon d\'une obligation peut-il changer après l\'émission ?',
        options: [
          'Oui, il varie selon le marché',
          'Non, il est fixé à l\'émission et ne change jamais',
          'Oui, si l\'entreprise décide de le modifier',
          'Oui, si les taux d\'intérêt changent'
        ],
        correctAnswer: 1,
        explanation: 'Le coupon est fixé contractuellement à l\'émission et ne change JAMAIS. C\'est un engagement ferme de l\'émetteur. Seul le prix de l\'obligation varie sur le marché, ce qui fait varier le yield.'
      },
      {
        type: 'quiz',
        question: 'Obligation : nominal 1 000€, coupon 4%, prix actuel 800€. Quel est le yield approximatif ?',
        options: [
          '4%',
          '3,2%',
          '5%',
          '8%'
        ],
        correctAnswer: 2,
        explanation: 'Coupon annuel = 40€ (4% de 1 000€). Prix payé = 800€. Yield simplifié = 40/800 = 5%. Le prix a baissé, donc le yield a augmenté par rapport au coupon de 4%.'
      },
      {
        type: 'quiz',
        question: 'Quelle est la relation entre prix et yield d\'une obligation ?',
        options: [
          'Ils varient dans le même sens',
          'Ils varient en sens inverse',
          'Ils sont indépendants',
          'Le yield ne varie jamais'
        ],
        correctAnswer: 1,
        explanation: 'C\'est une relation inverse fondamentale : quand le prix monte, le yield baisse. Quand le prix baisse, le yield monte. Le coupon étant fixe, un prix plus bas signifie un meilleur rendement pour l\'acheteur.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'acheter une obligation "au pair" ?',
        options: [
          'L\'acheter au prix du marché',
          'L\'acheter à son nominal (ex : 1 000€)',
          'L\'acheter avec une décote',
          'L\'acheter à deux'
        ],
        correctAnswer: 1,
        explanation: 'Acheter au pair signifie payer le nominal (la valeur faciale). Si le nominal est 1 000€ et vous payez 1 000€, vous achetez au pair. Dans ce cas, le yield = coupon.'
      },
      {
        type: 'quiz',
        question: 'Une obligation se vend 1 100€ pour un nominal de 1 000€. Que peut-on dire ?',
        options: [
          'Son yield est supérieur à son coupon',
          'Son yield est inférieur à son coupon',
          'Son yield égale son coupon',
          'L\'obligation est en défaut'
        ],
        correctAnswer: 1,
        explanation: 'Prix au-dessus du pair (1 100€ > 1 000€) signifie que le yield est inférieur au coupon. L\'obligation est attractive (coupon élevé par rapport au marché), donc les investisseurs paient plus cher, ce qui réduit le yield effectif.'
      }
    ]
  },
  {
    id: 'risques-obligations',
    title: 'Les risques des obligations',
    description: 'Risque de crédit, risque de taux et impact de la maturité',
    duration: '15 min',
    content: [
      {
        type: 'text',
        content: 'Une obligation n\'est pas un placement sans risque. Son prix fluctue pour deux raisons principales : le risque que l\'émetteur ne puisse pas rembourser (risque de crédit), et l\'évolution des taux d\'intérêt sur le marché (risque de taux). Comprendre ces risques est essentiel pour investir intelligemment.'
      },
      {
        type: 'keypoints',
        title: 'Risque de crédit (Credit Risk)',
        points: [
          '⚠️ Risque que l\'émetteur fasse défaut (ne paie pas les coupons ou ne rembourse pas)',
          '📉 Plus le risque de défaut est élevé, plus le yield exigé est élevé',
          '💰 Donc : prix plus bas pour compenser le risque',
          '🏛️ Exemple : obligation d\'État allemand (AAA) vs entreprise fragile (BB)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Risque de crédit en action',
        content: 'Deux obligations, même maturité (5 ans), même nominal (1 000€). Obligation A : État allemand (AAA), coupon 2%, prix 1 000€, yield 2%. Obligation B : Entreprise en difficulté (BB), coupon 8%, prix 1 000€, yield 8%. Pourquoi cette différence ? L\'Allemagne a une probabilité de défaut quasi nulle. L\'entreprise risque de faire faillite. Les investisseurs exigent 8% pour compenser ce risque, contre seulement 2% pour l\'Allemagne.',
        highlight: 'Higher credit risk requires higher expected return. C\'est la compensation du risque.'
      },
      {
        type: 'keypoints',
        title: 'Risque de taux d\'intérêt (Interest Rate Risk)',
        points: [
          '📊 Risque lié à l\'évolution des taux d\'intérêt sur le marché',
          '📈 Taux du marché MONTENT → Prix des obligations BAISSENT',
          '📉 Taux du marché BAISSENT → Prix des obligations MONTENT',
          '🔄 Relation inverse fondamentale'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Impact d\'une hausse des taux',
        content: 'Vous détenez une obligation avec coupon 2%, achetée à 1 000€. Les taux du marché passent de 2% à 4% (la banque centrale a remonté ses taux). Problème : les nouvelles obligations émises aujourd\'hui offrent 4%. Votre obligation à 2% devient moins attractive. Pour la vendre, vous devez baisser le prix à environ 950€. À ce prix, le yield pour l\'acheteur sera proche de 4%, cohérent avec le marché.',
        highlight: 'Quand les taux montent, les obligations existantes perdent de la valeur. C\'est mécanique.'
      },
      {
        type: 'diagram',
        title: 'Pourquoi les taux font bouger les prix ?',
        items: [
          'Taux du marché à 2% → Obligation coupon 2% vaut 1 000€ (au pair)',
          'Taux du marché montent à 4% → Nouvelles obligations offrent 4%',
          'Votre obligation à 2% est moins attractive',
          'Son prix baisse à ~950€ pour que son yield atteigne ~4%',
          'Le marché ajuste les prix pour égaliser les yields'
        ]
      },
      {
        type: 'text',
        content: 'La maturité joue un rôle crucial dans l\'exposition au risque de taux. Plus la maturité est longue, plus l\'obligation est sensible aux variations de taux. Pourquoi ? Parce que vous êtes "coincé" plus longtemps avec un coupon qui peut devenir obsolète.'
      },
      {
        type: 'keypoints',
        title: 'Impact de la maturité',
        points: [
          '⏱️ Maturité courte (1-3 ans) : faible sensibilité aux taux, vous récupérez vite votre capital',
          '⏳ Maturité longue (10-30 ans) : forte sensibilité aux taux, exposition prolongée',
          '📊 Règle : plus la maturité est longue, plus le prix varie quand les taux changent',
          '🎯 Les obligations longues offrent généralement un yield plus élevé pour compenser ce risque'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Maturité courte vs longue',
        content: 'Les taux montent de 2% à 4%. Obligation A (maturité 2 ans, coupon 2%) : prix baisse de 1 000€ à ~980€ (-2%). Obligation B (maturité 20 ans, coupon 2%) : prix baisse de 1 000€ à ~700€ (-30%). Pourquoi cette différence ? Avec l\'obligation A, vous récupérez votre capital dans 2 ans, vous pouvez réinvestir aux nouveaux taux. Avec l\'obligation B, vous êtes "coincé" avec 2% pendant 20 ans alors que le marché offre 4%.',
        highlight: 'Plus la maturité est longue, plus le risque de taux est important.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le risque de crédit ?',
        options: [
          'Le risque que les taux d\'intérêt augmentent',
          'Le risque que l\'émetteur ne puisse pas rembourser',
          'Le risque que l\'obligation perde de la valeur',
          'Le risque de change'
        ],
        correctAnswer: 1,
        explanation: 'Le risque de crédit (ou risque de défaut) est le risque que l\'émetteur ne soit pas en mesure de payer les coupons ou de rembourser le nominal. Plus ce risque est élevé, plus le yield exigé est important.'
      },
      {
        type: 'quiz',
        question: 'Les taux d\'intérêt du marché augmentent. Que se passe-t-il pour le prix des obligations existantes ?',
        options: [
          'Il augmente',
          'Il diminue',
          'Il ne change pas',
          'Cela dépend du coupon'
        ],
        correctAnswer: 1,
        explanation: 'Quand les taux montent, les nouvelles obligations offrent des coupons plus élevés. Les obligations existantes avec des coupons plus bas deviennent moins attractives, donc leur prix baisse. C\'est la relation inverse taux-prix.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi une obligation d\'entreprise risquée offre-t-elle un yield plus élevé ?',
        options: [
          'Parce que l\'entreprise est généreuse',
          'Pour compenser le risque de défaut plus élevé',
          'Parce que sa maturité est plus longue',
          'C\'est une erreur du marché'
        ],
        correctAnswer: 1,
        explanation: 'Les investisseurs exigent un rendement plus élevé pour compenser le risque de défaut. Si l\'entreprise risque de faire faillite, vous voulez être payé davantage pour prendre ce risque. C\'est la logique risque-rendement.'
      },
      {
        type: 'quiz',
        question: 'Quelle obligation est la plus sensible aux variations de taux ?',
        options: [
          'Obligation maturité 2 ans',
          'Obligation maturité 30 ans',
          'Elles sont toutes aussi sensibles',
          'Cela dépend du coupon uniquement'
        ],
        correctAnswer: 1,
        explanation: 'Plus la maturité est longue, plus l\'obligation est sensible aux variations de taux. Avec une maturité de 30 ans, vous êtes exposé longtemps au risque que les taux changent, donc le prix varie davantage.'
      },
      {
        type: 'quiz',
        question: 'Les taux du marché baissent de 4% à 2%. Que se passe-t-il pour votre obligation à coupon 4% ?',
        options: [
          'Son prix baisse',
          'Son prix monte',
          'Son coupon baisse à 2%',
          'Rien ne change'
        ],
        correctAnswer: 1,
        explanation: 'Votre obligation à 4% devient très attractive quand les nouvelles obligations n\'offrent que 2%. Les investisseurs sont prêts à payer plus cher pour obtenir votre coupon de 4%. Le prix monte au-dessus du pair.'
      }
    ]
  },
  {
    id: 'types-notation',
    title: 'Types d\'obligations et notation',
    description: 'Investment Grade, High Yield et catégories d\'émetteurs',
    duration: '13 min',
    content: [
      {
        type: 'text',
        content: 'Toutes les obligations ne se valent pas. Elles sont classées selon la qualité de crédit de leur émetteur, et selon qui les émet. Comprendre ces catégories vous aide à évaluer le risque et le rendement attendu.'
      },
      {
        type: 'keypoints',
        title: 'Investment Grade vs High Yield',
        points: [
          '⭐ Investment Grade (BBB- et au-dessus) : obligations de qualité, risque faible',
          '⚠️ High Yield (BB+ et en dessous) : obligations plus risquées, rendement plus élevé',
          '💰 Logique : plus le risque est élevé, plus le yield est élevé',
          '📊 Les agences de notation (S&P, Moody\'s, Fitch) évaluent la qualité de crédit'
        ]
      },
      {
        type: 'diagram',
        title: 'Échelle de notation simplifiée',
        items: [
          'AAA : Qualité maximale (ex : Allemagne, Suisse)',
          'AA, A : Très bonne qualité (ex : France, grandes entreprises solides)',
          'BBB : Bonne qualité (limite Investment Grade)',
          '--- Frontière Investment Grade / High Yield ---',
          'BB, B : Qualité spéculative (High Yield)',
          'CCC et en dessous : Risque élevé de défaut'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Même entreprise, notation qui change',
        content: 'En 2019, une entreprise a une notation A (Investment Grade). Ses obligations à 10 ans offrent un yield de 3%. En 2020, la crise COVID frappe. L\'entreprise perd de l\'argent, sa notation passe à BB (High Yield). Le prix de ses obligations chute de 1 000€ à 800€. Le yield monte à 6%. Pourquoi ? Le marché anticipe un risque de défaut plus élevé et exige une compensation.',
        highlight: 'Une dégradation de notation fait baisser le prix et monter le yield. C\'est le risque de crédit en action.'
      },
      {
        type: 'keypoints',
        title: 'Les 3 grandes catégories d\'émetteurs',
        points: [
          '🏛️ Government Bonds (obligations d\'État) : États souverains, généralement faible risque',
          '🏢 Corporate Bonds (obligations d\'entreprise) : entreprises privées, risque variable',
          '🏙️ Municipal Bonds (obligations municipales) : collectivités locales, villes, régions'
        ]
      },
      {
        type: 'text',
        content: 'Les obligations d\'État des pays développés (Allemagne, France, USA) sont considérées comme très sûres. Les obligations d\'entreprise varient énormément : Apple (AAA) est plus sûr qu\'une startup endettée (B). Les obligations municipales dépendent de la santé financière de la collectivité.'
      },
      {
        type: 'example',
        title: 'Exemple : Comparaison de yields',
        content: 'Obligations à 10 ans, même date : OAT France (AA) : yield 2,5%. Obligation Total Energies (A) : yield 3%. Obligation entreprise moyenne (BBB) : yield 4%. Obligation entreprise risquée (BB) : yield 7%. Plus on descend dans la qualité de crédit, plus le yield augmente. C\'est la prime de risque que les investisseurs exigent.',
        highlight: 'Le yield reflète directement la perception du risque par le marché.'
      },
      {
        type: 'keypoints',
        title: 'Obligations convertibles (bonus)',
        points: [
          '🔄 Convertible Bonds : obligations qui peuvent être converties en actions',
          '💡 Avantage : sécurité de l\'obligation + potentiel de gain de l\'action',
          '📊 Yield généralement plus faible qu\'une obligation classique (car option de conversion)',
          '🎯 Utilisées par les entreprises en croissance'
        ]
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'une obligation Investment Grade ?',
        options: [
          'Une obligation qui rapporte beaucoup',
          'Une obligation de qualité de crédit élevée (BBB- et au-dessus)',
          'Une obligation d\'État uniquement',
          'Une obligation à court terme'
        ],
        correctAnswer: 1,
        explanation: 'Investment Grade désigne les obligations de bonne qualité de crédit, notées BBB- ou mieux. Elles présentent un risque de défaut relativement faible.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi les obligations High Yield offrent-elles un rendement plus élevé ?',
        options: [
          'Parce qu\'elles sont plus liquides',
          'Pour compenser le risque de défaut plus élevé',
          'Parce qu\'elles ont une maturité plus longue',
          'C\'est une erreur de marché'
        ],
        correctAnswer: 1,
        explanation: 'Les obligations High Yield (BB+ et en dessous) sont plus risquées. Les investisseurs exigent un rendement plus élevé pour compenser ce risque accru de défaut. C\'est la prime de risque.'
      },
      {
        type: 'quiz',
        question: 'Une entreprise voit sa notation passer de A à BB. Que se passe-t-il pour ses obligations ?',
        options: [
          'Le prix monte, le yield baisse',
          'Le prix baisse, le yield monte',
          'Rien ne change',
          'Le coupon augmente'
        ],
        correctAnswer: 1,
        explanation: 'Une dégradation de notation signale un risque accru. Les investisseurs exigent un yield plus élevé, donc le prix des obligations baisse. Le coupon, lui, ne change jamais.'
      },
      {
        type: 'quiz',
        question: 'Quelle obligation est généralement la plus sûre ?',
        options: [
          'Obligation d\'une startup',
          'Obligation d\'État allemand (AAA)',
          'Obligation High Yield',
          'Obligation d\'une entreprise en difficulté'
        ],
        correctAnswer: 1,
        explanation: 'Les obligations d\'État des pays développés et bien notés (comme l\'Allemagne AAA) sont considérées comme les plus sûres. Le risque de défaut est quasi nul.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'une obligation convertible ?',
        options: [
          'Une obligation qui change de coupon',
          'Une obligation qui peut être convertie en actions',
          'Une obligation qui change de maturité',
          'Une obligation en devise étrangère'
        ],
        correctAnswer: 1,
        explanation: 'Une obligation convertible peut être transformée en actions de l\'entreprise émettrice, selon des conditions définies. Elle combine la sécurité de l\'obligation et le potentiel de gain de l\'action.'
      }
    ]
  }
]
