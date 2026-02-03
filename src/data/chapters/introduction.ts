import { Lesson } from '../../types'

export const introductionLessons: Lesson[] = [
  {
    id: 'definition-marche-capitaux',
    title: 'Qu\'est-ce que le marché des capitaux ?',
    titleEn: 'What is the capital market?',
    description: 'Définition, rôle et fonctionnement du marché des capitaux',
    descriptionEn: 'Definition, role and functioning of the capital market',
    duration: '12 min',
    content: [
      {
        type: 'text',
        content: 'Imaginez un immense système de mise en relation : d\'un côté, des personnes ou organisations qui ont de l\'argent à placer (épargne). De l\'autre, des personnes ou organisations qui ont besoin d\'argent pour financer leurs projets. Le marché des capitaux, c\'est exactement ça : un ensemble de mécanismes qui permet de faire circuler l\'argent de ceux qui en ont vers ceux qui en ont besoin.',
        contentEn: 'Imagine a huge connection system: on one side, people or organizations who have money to invest (savings). On the other, people or organizations who need money to finance their projects. The capital market is exactly that: a set of mechanisms that allows money to flow from those who have it to those who need it.'
      },
      {
        type: 'keypoints',
        title: 'Les deux types d\'agents',
        titleEn: 'The two types of agents',
        points: [
          'Agents en surplus : ils ont de l\'épargne à placer (ex : vous avec votre compte épargne, les assurances, les fonds de pension)',
          'Agents en déficit : ils ont besoin de financement (ex : une entreprise qui veut construire une usine, un État qui finance ses dépenses)',
          'Le marché des capitaux les met en relation en échangeant de l\'argent contre des titres financiers'
        ],
        pointsEn: [
          'Surplus agents: they have savings to invest (e.g., you with your savings account, insurance companies, pension funds)',
          'Deficit agents: they need financing (e.g., a company wanting to build a factory, a government financing its expenses)',
          'The capital market connects them by exchanging money for financial securities'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Financer une nouvelle usine',
        titleEn: 'Example: Financing a new factory',
        content: 'Renault veut construire une usine de batteries électriques pour 500 millions d\'euros. Plutôt que d\'emprunter uniquement à sa banque, Renault émet des obligations sur le marché des capitaux. Des investisseurs (assurances, fonds de pension, particuliers) achètent ces obligations. Renault obtient ses 500 millions, et les investisseurs recevront des intérêts chaque année.',
        contentEn: 'Renault wants to build an electric battery factory for 500 million euros. Rather than borrowing only from its bank, Renault issues bonds on the capital market. Investors (insurance companies, pension funds, individuals) buy these bonds. Renault gets its 500 million, and investors will receive interest each year.',
        highlight: 'Le marché des capitaux a permis de faire circuler l\'épargne vers un projet d\'investissement concret.',
        highlightEn: 'The capital market enabled savings to flow toward a concrete investment project.'
      },
      {
        type: 'keypoints',
        title: 'Les 3 fonctions essentielles du marché des capitaux',
        titleEn: 'The 3 essential functions of the capital market',
        points: [
          '💰 Financer l\'économie : permettre aux entreprises, États et banques d\'obtenir les fonds nécessaires',
          '🎯 Allouer le capital : orienter l\'épargne vers les projets jugés les plus intéressants par le marché',
          '🛡️ Gérer le risque : via des instruments comme les produits dérivés, transférer certains risques'
        ],
        pointsEn: [
          '💰 Finance the economy: enable companies, governments and banks to obtain necessary funds',
          '🎯 Allocate capital: direct savings toward projects deemed most interesting by the market',
          '🛡️ Manage risk: through instruments like derivatives, transfer certain risks'
        ]
      },
      {
        type: 'text',
        content: 'Sans marché des capitaux, l\'économie fonctionnerait au ralenti : les entreprises auraient du mal à financer leur croissance, les États à construire des infrastructures, et votre épargne dormirait sans être utile à personne.',
        contentEn: 'Without capital markets, the economy would run in slow motion: companies would struggle to finance their growth, governments to build infrastructure, and your savings would sit idle without being useful to anyone.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un "agent en déficit" ?',
        questionEn: 'What is a "deficit agent"?',
        options: [
          'Un agent qui a de l\'épargne à placer',
          'Un agent qui a besoin de financement',
          'Un agent qui gère les échanges sur le marché',
          'Un agent qui a fait faillite'
        ],
        optionsEn: [
          'An agent who has savings to invest',
          'An agent who needs financing',
          'An agent who manages market exchanges',
          'An agent who has gone bankrupt'
        ],
        correctAnswer: 1,
        explanation: 'Un agent en déficit a des dépenses supérieures à ses recettes : il a donc besoin d\'emprunter ou de lever des fonds. C\'est le cas d\'une entreprise qui veut investir ou d\'un État qui a un déficit budgétaire.',
        explanationEn: 'A deficit agent has expenses greater than revenues: they therefore need to borrow or raise funds. This is the case for a company wanting to invest or a government with a budget deficit.'
      },
      {
        type: 'quiz',
        question: 'Quelle est la fonction principale du marché des capitaux ?',
        questionEn: 'What is the main function of the capital market?',
        options: [
          'Créer de l\'argent',
          'Faire circuler l\'épargne vers l\'investissement',
          'Garantir des profits aux investisseurs',
          'Remplacer les banques'
        ],
        optionsEn: [
          'Create money',
          'Channel savings toward investment',
          'Guarantee profits to investors',
          'Replace banks'
        ],
        correctAnswer: 1,
        explanation: 'Le marché des capitaux ne crée pas d\'argent, il le fait circuler. Il met en relation ceux qui ont de l\'épargne avec ceux qui ont besoin de financement, permettant ainsi de financer l\'économie réelle.',
        explanationEn: 'The capital market doesn\'t create money, it circulates it. It connects those who have savings with those who need financing, thus enabling the real economy to be financed.'
      },
      {
        type: 'quiz',
        question: 'Parmi ces acteurs, lequel est typiquement un "agent en surplus" ?',
        questionEn: 'Among these actors, which is typically a "surplus agent"?',
        options: [
          'Une startup qui lève des fonds',
          'Un État avec un déficit budgétaire',
          'Un fonds de pension qui gère l\'épargne retraite',
          'Une entreprise qui construit une usine'
        ],
        optionsEn: [
          'A startup raising funds',
          'A government with a budget deficit',
          'A pension fund managing retirement savings',
          'A company building a factory'
        ],
        correctAnswer: 2,
        explanation: 'Un fonds de pension collecte l\'épargne de ses adhérents et doit la placer : c\'est un agent en surplus. Les autres exemples sont des agents en déficit qui cherchent à se financer.',
        explanationEn: 'A pension fund collects savings from its members and must invest it: it\'s a surplus agent. The other examples are deficit agents seeking financing.'
      },
      {
        type: 'quiz',
        question: 'Qu\'échange-t-on sur le marché des capitaux ?',
        questionEn: 'What is exchanged on the capital market?',
        options: [
          'Uniquement de l\'argent liquide',
          'De l\'argent contre des titres financiers',
          'Des biens et services',
          'Des devises étrangères uniquement'
        ],
        optionsEn: [
          'Only cash',
          'Money for financial securities',
          'Goods and services',
          'Foreign currencies only'
        ],
        correctAnswer: 1,
        explanation: 'Sur le marché des capitaux, on échange de l\'argent (capital) contre des titres financiers (actions, obligations, etc.). C\'est ce qui permet aux agents en déficit d\'obtenir des fonds.',
        explanationEn: 'On the capital market, money (capital) is exchanged for financial securities (stocks, bonds, etc.). This is what allows deficit agents to obtain funds.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi dit-on que le marché des capitaux "alloue" le capital ?',
        questionEn: 'Why do we say the capital market "allocates" capital?',
        options: [
          'Parce qu\'il distribue l\'argent de manière égale',
          'Parce qu\'il oriente l\'épargne vers les projets jugés intéressants',
          'Parce qu\'il crée de nouveaux capitaux',
          'Parce qu\'il fixe les prix de tous les produits'
        ],
        optionsEn: [
          'Because it distributes money equally',
          'Because it directs savings toward projects deemed interesting',
          'Because it creates new capital',
          'Because it sets prices for all products'
        ],
        correctAnswer: 1,
        explanation: 'Le marché "alloue" le capital en orientant l\'épargne vers certains projets plutôt que d\'autres. Les investisseurs choisissent où placer leur argent selon le rendement attendu et le risque, ce qui dirige les fonds vers les projets jugés les plus prometteurs.',
        explanationEn: 'The market "allocates" capital by directing savings toward certain projects rather than others. Investors choose where to place their money based on expected return and risk, which directs funds toward projects deemed most promising.'
      }
    ]
  },
  {
    id: 'instruments-financiers',
    title: 'Les instruments financiers : que peut-on échanger ?',
    titleEn: 'Financial instruments: what can be exchanged?',
    description: 'Découvrir les trois grandes familles de titres financiers',
    descriptionEn: 'Discover the three main families of financial securities',
    duration: '10 min',
    content: [
      {
        type: 'text',
        content: 'Sur le marché des capitaux, on n\'échange pas directement de l\'argent contre de l\'argent. On échange de l\'argent contre des titres financiers, c\'est-à-dire des contrats qui donnent des droits à l\'investisseur. Il existe trois grandes familles d\'instruments.',
        contentEn: 'On the capital market, money is not directly exchanged for money. Money is exchanged for financial securities, i.e., contracts that give rights to the investor. There are three main families of instruments.'
      },
      {
        type: 'keypoints',
        title: 'Les 3 grandes familles d\'instruments',
        titleEn: 'The 3 main families of instruments',
        points: [
          '📜 Titres de dette (obligations) : vous prêtez de l\'argent, on vous rembourse avec des intérêts',
          '📈 Titres de capital (actions) : vous achetez une part de l\'entreprise, vous devenez copropriétaire',
          '🔄 Produits dérivés : contrats pour gérer ou transférer des risques (change, taux, matières premières...)'
        ],
        pointsEn: [
          '📜 Debt securities (bonds): you lend money, you are repaid with interest',
          '📈 Equity securities (stocks): you buy a share of the company, you become a co-owner',
          '🔄 Derivatives: contracts to manage or transfer risks (exchange rates, interest rates, commodities...)'
        ]
      },
      {
        type: 'diagram',
        title: 'Comment ça fonctionne ?',
        titleEn: 'How does it work?',
        items: [
          'L\'émetteur (entreprise, État) a besoin de financement',
          'Il émet des titres financiers sur le marché',
          'Les investisseurs achètent ces titres avec leur épargne',
          'L\'émetteur reçoit l\'argent, l\'investisseur reçoit le titre',
          'Le titre donne des droits : intérêts, dividendes, ou protection contre un risque'
        ],
        itemsEn: [
          'The issuer (company, government) needs financing',
          'It issues financial securities on the market',
          'Investors buy these securities with their savings',
          'The issuer receives the money, the investor receives the security',
          'The security grants rights: interest, dividends, or protection against a risk'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Les trois instruments en action',
        titleEn: 'Example: The three instruments in action',
        content: 'Total Energies veut financer un projet de 1 milliard d\'euros. Elle peut : (1) Émettre des obligations : elle emprunte et s\'engage à rembourser avec intérêts. (2) Émettre des actions : elle vend des parts de l\'entreprise, les acheteurs deviennent actionnaires. (3) Utiliser des dérivés : elle peut se protéger contre la variation du prix du pétrole avec des contrats à terme.',
        contentEn: 'Total Energies wants to finance a 1 billion euro project. It can: (1) Issue bonds: it borrows and commits to repay with interest. (2) Issue stocks: it sells shares of the company, buyers become shareholders. (3) Use derivatives: it can protect itself against oil price variations with futures contracts.',
        highlight: 'Chaque instrument répond à un besoin différent : emprunter, partager la propriété, ou gérer un risque.',
        highlightEn: 'Each instrument meets a different need: borrowing, sharing ownership, or managing risk.'
      },
      {
        type: 'text',
        content: 'Ces trois familles ne sont pas en concurrence, elles sont complémentaires. Une entreprise utilise souvent les trois : elle émet des actions pour lever des fonds permanents, des obligations pour emprunter, et des dérivés pour gérer ses risques opérationnels.',
        contentEn: 'These three families are not competing, they are complementary. A company often uses all three: it issues stocks to raise permanent funds, bonds to borrow, and derivatives to manage its operational risks.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un titre de dette ?',
        questionEn: 'What is a debt security?',
        options: [
          'Un contrat où vous devenez propriétaire d\'une entreprise',
          'Un contrat où vous prêtez de l\'argent contre remboursement avec intérêts',
          'Un contrat pour gérer le risque de change',
          'Un contrat pour acheter des matières premières'
        ],
        optionsEn: [
          'A contract where you become owner of a company',
          'A contract where you lend money in exchange for repayment with interest',
          'A contract to manage exchange rate risk',
          'A contract to buy commodities'
        ],
        correctAnswer: 1,
        explanation: 'Un titre de dette (comme une obligation) est un prêt : vous donnez de l\'argent à un émetteur qui s\'engage à vous rembourser avec des intérêts. Vous êtes créancier, pas propriétaire.',
        explanationEn: 'A debt security (like a bond) is a loan: you give money to an issuer who commits to repay you with interest. You are a creditor, not an owner.'
      },
      {
        type: 'quiz',
        question: 'Quelle est la différence principale entre une action et une obligation ?',
        questionEn: 'What is the main difference between a stock and a bond?',
        options: [
          'L\'action est un prêt, l\'obligation est une part de propriété',
          'L\'action donne la propriété, l\'obligation est un prêt',
          'Il n\'y a pas de différence',
          'L\'action est moins risquée que l\'obligation'
        ],
        optionsEn: [
          'The stock is a loan, the bond is an ownership share',
          'The stock gives ownership, the bond is a loan',
          'There is no difference',
          'The stock is less risky than the bond'
        ],
        correctAnswer: 1,
        explanation: 'L\'action fait de vous un copropriétaire de l\'entreprise (capital), tandis que l\'obligation fait de vous un créancier (dette). L\'action est généralement plus risquée mais offre un potentiel de gain plus élevé.',
        explanationEn: 'The stock makes you a co-owner of the company (equity), while the bond makes you a creditor (debt). The stock is generally riskier but offers higher potential gains.'
      },
      {
        type: 'quiz',
        question: 'À quoi servent principalement les produits dérivés ?',
        questionEn: 'What are derivatives mainly used for?',
        options: [
          'À financer les entreprises',
          'À devenir propriétaire d\'une entreprise',
          'À gérer et transférer des risques',
          'À remplacer les actions et obligations'
        ],
        optionsEn: [
          'To finance companies',
          'To become owner of a company',
          'To manage and transfer risks',
          'To replace stocks and bonds'
        ],
        correctAnswer: 2,
        explanation: 'Les produits dérivés servent principalement à gérer des risques : risque de change, de taux d\'intérêt, de prix des matières premières, etc. Ils permettent de se protéger ou de transférer ces risques.',
        explanationEn: 'Derivatives are mainly used to manage risks: exchange rate risk, interest rate risk, commodity price risk, etc. They allow protection or transfer of these risks.'
      },
      {
        type: 'quiz',
        question: 'Quand une entreprise émet une obligation, que se passe-t-il ?',
        questionEn: 'When a company issues a bond, what happens?',
        options: [
          'Elle vend une partie de sa propriété',
          'Elle emprunte de l\'argent qu\'elle devra rembourser',
          'Elle achète des actions d\'autres entreprises',
          'Elle se protège contre un risque'
        ],
        optionsEn: [
          'It sells part of its ownership',
          'It borrows money that it will have to repay',
          'It buys stocks of other companies',
          'It protects itself against a risk'
        ],
        correctAnswer: 1,
        explanation: 'Émettre une obligation, c\'est emprunter : l\'entreprise reçoit de l\'argent maintenant et s\'engage à rembourser plus tard avec des intérêts (coupons). C\'est du financement par la dette.',
        explanationEn: 'Issuing a bond means borrowing: the company receives money now and commits to repay later with interest (coupons). It\'s debt financing.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi une entreprise utiliserait-elle les trois types d\'instruments ?',
        questionEn: 'Why would a company use all three types of instruments?',
        options: [
          'C\'est obligatoire par la loi',
          'Pour diversifier ses sources de financement et gérer ses risques',
          'Pour compliquer sa comptabilité',
          'Elle ne peut utiliser qu\'un seul type à la fois'
        ],
        optionsEn: [
          'It\'s required by law',
          'To diversify its financing sources and manage its risks',
          'To complicate its accounting',
          'It can only use one type at a time'
        ],
        correctAnswer: 1,
        explanation: 'Les trois instruments sont complémentaires : les actions pour lever des fonds permanents, les obligations pour emprunter à moindre coût, et les dérivés pour gérer les risques opérationnels (change, taux, matières premières). C\'est une stratégie financière équilibrée.',
        explanationEn: 'The three instruments are complementary: stocks to raise permanent funds, bonds to borrow at lower cost, and derivatives to manage operational risks (exchange rates, interest rates, commodities). It\'s a balanced financial strategy.'
      }
    ]
  },
  {
    id: 'regulation-risques',
    title: 'Régulation et gestion des risques',
    titleEn: 'Regulation and risk management',
    description: 'Rôle de la banque centrale et introduction aux produits dérivés',
    descriptionEn: 'Role of the central bank and introduction to derivatives',
    duration: '14 min',
    content: [
      {
        type: 'text',
        content: 'Le marché des capitaux ne fonctionne pas en vase clos. Il est influencé par la banque centrale qui fixe le "prix de l\'argent", et il offre des outils pour gérer les risques via les produits dérivés. Ces deux éléments sont essentiels pour comprendre le fonctionnement global du système.',
        contentEn: 'The capital market doesn\'t operate in a vacuum. It is influenced by the central bank which sets the "price of money", and it offers tools to manage risks through derivatives. These two elements are essential to understand the overall functioning of the system.'
      },
      {
        type: 'keypoints',
        title: 'Rôle de la banque centrale',
        titleEn: 'Role of the central bank',
        points: [
          '💰 Fixe les taux directeurs (le "prix de l\'argent")',
          '💧 Gère la liquidité sur les marchés (ajoute ou retire de l\'argent)',
          '📊 Influence l\'activité économique et l\'inflation',
          '🎯 Objectif : stabilité des prix et soutien à l\'économie'
        ],
        pointsEn: [
          '💰 Sets key interest rates (the "price of money")',
          '💧 Manages liquidity in markets (adds or withdraws money)',
          '📊 Influences economic activity and inflation',
          '🎯 Objective: price stability and economic support'
        ]
      },
      {
        type: 'diagram',
        title: 'Comment les taux directeurs influencent l\'économie',
        titleEn: 'How key interest rates influence the economy',
        items: [
          'Taux élevés → emprunter coûte cher → moins d\'investissements → ralentissement économique → baisse de l\'inflation',
          'Taux bas → emprunter coûte peu → plus d\'investissements → stimulation économique → risque d\'inflation',
          'La banque centrale ajuste les taux selon la situation économique',
          'C\'est un équilibre délicat entre croissance et inflation',
          'Les marchés financiers réagissent immédiatement aux décisions de la banque centrale'
        ],
        itemsEn: [
          'High rates → borrowing is expensive → fewer investments → economic slowdown → inflation decrease',
          'Low rates → borrowing is cheap → more investments → economic stimulation → inflation risk',
          'The central bank adjusts rates according to economic situation',
          'It\'s a delicate balance between growth and inflation',
          'Financial markets react immediately to central bank decisions'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : La BCE face à l\'inflation (2022-2023)',
        titleEn: 'Example: The ECB facing inflation (2022-2023)',
        content: 'En 2022, l\'inflation en Europe atteint 10%. La BCE (Banque Centrale Européenne) décide de remonter ses taux directeurs de 0% à 4% en quelques mois. Conséquence : emprunter devient plus cher pour les entreprises et les États. Les investissements ralentissent. La demande baisse. L\'inflation commence à redescendre vers 2-3%. Mais la croissance économique ralentit aussi.',
        contentEn: 'In 2022, inflation in Europe reaches 10%. The ECB (European Central Bank) decides to raise its key rates from 0% to 4% in a few months. Consequence: borrowing becomes more expensive for companies and governments. Investments slow down. Demand decreases. Inflation starts to fall back to 2-3%. But economic growth also slows down.',
        highlight: 'Les taux directeurs sont un outil puissant mais à double tranchant : ils peuvent freiner l\'inflation mais aussi ralentir l\'économie.',
        highlightEn: 'Key interest rates are a powerful but double-edged tool: they can curb inflation but also slow down the economy.'
      },
      {
        type: 'text',
        content: 'La liquidité, c\'est la quantité d\'argent disponible sur les marchés. La banque centrale peut injecter de la liquidité (en achetant des titres) ou en retirer (en vendant des titres). Plus il y a de liquidité, plus il est facile d\'emprunter et d\'investir.',
        contentEn: 'Liquidity is the amount of money available in markets. The central bank can inject liquidity (by buying securities) or withdraw it (by selling securities). The more liquidity there is, the easier it is to borrow and invest.'
      },
      {
        type: 'keypoints',
        title: 'Les produits dérivés : gérer les risques',
        titleEn: 'Derivatives: managing risks',
        points: [
          '🔄 Contrats qui "dérivent" d\'un actif sous-jacent (action, taux, devise, matière première)',
          '🛡️ Permettent de se couvrir contre différents risques',
          '⚠️ Risque de change : protéger contre les variations de devises',
          '📉 Risque de taux : protéger contre les variations de taux d\'intérêt',
          '🌾 Risque matières premières : protéger contre les variations de prix (pétrole, blé...)',
          '📈 Risque actions : protéger contre les baisses de cours'
        ],
        pointsEn: [
          '🔄 Contracts that "derive" from an underlying asset (stock, rate, currency, commodity)',
          '🛡️ Allow hedging against different risks',
          '⚠️ Exchange rate risk: protect against currency variations',
          '📉 Interest rate risk: protect against interest rate variations',
          '🌾 Commodity risk: protect against price variations (oil, wheat...)',
          '📈 Stock risk: protect against price declines'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Airbus se protège contre le risque de change',
        titleEn: 'Example: Airbus protects itself against exchange rate risk',
        content: 'Airbus vend ses avions en dollars mais paie ses employés en euros. Si le dollar baisse face à l\'euro, Airbus perd de l\'argent. Solution : Airbus utilise des contrats dérivés (forwards, options) pour fixer à l\'avance le taux de change dollar/euro. Ainsi, même si le dollar baisse, Airbus est protégé.',
        contentEn: 'Airbus sells its planes in dollars but pays its employees in euros. If the dollar falls against the euro, Airbus loses money. Solution: Airbus uses derivative contracts (forwards, options) to fix the dollar/euro exchange rate in advance. Thus, even if the dollar falls, Airbus is protected.',
        highlight: 'Les dérivés permettent de transférer le risque : Airbus transfère son risque de change à un autre acteur (banque, fonds) qui accepte de le porter.',
        highlightEn: 'Derivatives allow risk transfer: Airbus transfers its exchange rate risk to another party (bank, fund) who agrees to bear it.'
      },
      {
        type: 'text',
        content: 'Les produits dérivés sont des outils puissants mais complexes. Ils peuvent servir à se protéger (hedging) ou à spéculer. Nous les étudierons en détail dans un chapitre dédié. Retenez pour l\'instant qu\'ils sont une des trois fonctions clés du marché des capitaux : gérer et transférer les risques.',
        contentEn: 'Derivatives are powerful but complex tools. They can be used for protection (hedging) or speculation. We will study them in detail in a dedicated chapter. Remember for now that they are one of the three key functions of the capital market: managing and transferring risks.'
      },
      {
        type: 'quiz',
        question: 'Quel est le rôle principal de la banque centrale ?',
        questionEn: 'What is the main role of the central bank?',
        options: [
          'Prêter directement aux entreprises',
          'Fixer les taux directeurs et gérer la liquidité',
          'Acheter des actions en bourse',
          'Garantir les profits des investisseurs'
        ],
        optionsEn: [
          'Lend directly to companies',
          'Set key interest rates and manage liquidity',
          'Buy stocks on the stock market',
          'Guarantee investor profits'
        ],
        correctAnswer: 1,
        explanation: 'La banque centrale fixe les taux directeurs (le "prix de l\'argent") et gère la liquidité sur les marchés. Elle influence ainsi l\'activité économique et l\'inflation, mais ne prête pas directement aux entreprises.',
        explanationEn: 'The central bank sets key interest rates (the "price of money") and manages liquidity in markets. It thus influences economic activity and inflation, but doesn\'t lend directly to companies.'
      },
      {
        type: 'quiz',
        question: 'Que se passe-t-il quand la banque centrale augmente ses taux directeurs ?',
        questionEn: 'What happens when the central bank raises its key interest rates?',
        options: [
          'Emprunter devient moins cher, l\'économie accélère',
          'Emprunter devient plus cher, l\'économie ralentit',
          'Rien ne change',
          'Les actions montent automatiquement'
        ],
        optionsEn: [
          'Borrowing becomes cheaper, the economy accelerates',
          'Borrowing becomes more expensive, the economy slows down',
          'Nothing changes',
          'Stocks automatically rise'
        ],
        correctAnswer: 1,
        explanation: 'Quand les taux augmentent, emprunter coûte plus cher. Les entreprises investissent moins, les ménages consomment moins. L\'économie ralentit, ce qui peut freiner l\'inflation. C\'est un outil pour "refroidir" l\'économie.',
        explanationEn: 'When rates increase, borrowing becomes more expensive. Companies invest less, households consume less. The economy slows down, which can curb inflation. It\'s a tool to "cool down" the economy.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un produit dérivé ?',
        questionEn: 'What is a derivative?',
        options: [
          'Une action d\'une entreprise dérivée d\'une autre',
          'Un contrat qui dérive d\'un actif sous-jacent et sert à gérer des risques',
          'Une obligation à taux variable',
          'Un compte d\'épargne'
        ],
        optionsEn: [
          'A stock of a company derived from another',
          'A contract that derives from an underlying asset and is used to manage risks',
          'A variable-rate bond',
          'A savings account'
        ],
        correctAnswer: 1,
        explanation: 'Un produit dérivé est un contrat financier dont la valeur "dérive" d\'un actif sous-jacent (action, taux, devise, matière première). Il sert principalement à gérer ou transférer des risques.',
        explanationEn: 'A derivative is a financial contract whose value "derives" from an underlying asset (stock, rate, currency, commodity). It is mainly used to manage or transfer risks.'
      },
      {
        type: 'quiz',
        question: 'Airbus vend en dollars mais paie en euros. Quel risque court-elle ?',
        questionEn: 'Airbus sells in dollars but pays in euros. What risk does it face?',
        options: [
          'Risque de taux d\'intérêt',
          'Risque de change',
          'Risque actions',
          'Risque matières premières'
        ],
        optionsEn: [
          'Interest rate risk',
          'Exchange rate risk',
          'Stock risk',
          'Commodity risk'
        ],
        correctAnswer: 1,
        explanation: 'Airbus court un risque de change : si le dollar baisse face à l\'euro, ses revenus en dollars valent moins en euros, mais ses coûts en euros restent les mêmes. Elle peut se protéger avec des dérivés de change.',
        explanationEn: 'Airbus faces exchange rate risk: if the dollar falls against the euro, its dollar revenues are worth less in euros, but its euro costs remain the same. It can protect itself with currency derivatives.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi la banque centrale injecte-t-elle parfois de la liquidité sur les marchés ?',
        questionEn: 'Why does the central bank sometimes inject liquidity into markets?',
        options: [
          'Pour enrichir les banques',
          'Pour stimuler l\'économie en facilitant l\'accès au crédit',
          'Pour augmenter l\'inflation',
          'Pour punir les épargnants'
        ],
        optionsEn: [
          'To enrich banks',
          'To stimulate the economy by facilitating access to credit',
          'To increase inflation',
          'To punish savers'
        ],
        correctAnswer: 1,
        explanation: 'En injectant de la liquidité (en achetant des titres), la banque centrale rend l\'argent plus disponible et moins cher. Cela facilite l\'accès au crédit, stimule les investissements et soutient l\'économie, notamment en période de crise.',
        explanationEn: 'By injecting liquidity (by buying securities), the central bank makes money more available and cheaper. This facilitates access to credit, stimulates investments and supports the economy, especially during crises.'
      }
    ]
  },
  {
    id: 'acteurs-marche',
    title: 'Les acteurs du marché des capitaux',
    titleEn: 'Capital market actors',
    description: 'Qui demande des capitaux ? Qui en offre ?',
    descriptionEn: 'Who demands capital? Who supplies it?',
    duration: '13 min',
    content: [
      {
        type: 'text',
        content: 'Le marché des capitaux, c\'est un écosystème avec deux grandes catégories d\'acteurs : ceux qui ont besoin d\'argent (demande de capitaux) et ceux qui ont de l\'argent à placer (offre de capitaux). Connaître ces acteurs, c\'est comprendre qui fait tourner le système financier.',
        contentEn: 'The capital market is an ecosystem with two main categories of actors: those who need money (capital demand) and those who have money to invest (capital supply). Knowing these actors means understanding who runs the financial system.'
      },
      {
        type: 'keypoints',
        title: 'Demande de capitaux : qui a besoin d\'argent ?',
        titleEn: 'Capital demand: who needs money?',
        points: [
          '🏛️ États : financent leurs déficits en émettant des obligations (ex : OAT en France)',
          '🏢 Entreprises : financent leur croissance, investissements, R&D, développement international',
          '🏦 Banques : se refinancent en émettant des titres sur le marché',
          '🏠 (Parfois) Ménages/PME : mais souvent via le circuit bancaire plutôt que le marché'
        ],
        pointsEn: [
          '🏛️ Governments: finance their deficits by issuing bonds (e.g., OAT in France)',
          '🏢 Companies: finance their growth, investments, R&D, international development',
          '🏦 Banks: refinance themselves by issuing securities on the market',
          '🏠 (Sometimes) Households/SMEs: but often through banking circuit rather than the market'
        ]
      },
      {
        type: 'keypoints',
        title: 'Offre de capitaux : qui a de l\'argent à placer ?',
        titleEn: 'Capital supply: who has money to invest?',
        points: [
          '🛡️ Assurances : investissent les primes collectées (horizon long terme)',
          '👴 Fonds de pension : gèrent l\'épargne retraite, investisseurs de long terme',
          '💼 Asset managers : gèrent l\'argent de leurs clients (particuliers, institutions)',
          '🌍 Fonds souverains : États qui investissent leurs ressources (ex : pétrole norvégien)'
        ],
        pointsEn: [
          '🛡️ Insurance companies: invest collected premiums (long-term horizon)',
          '👴 Pension funds: manage retirement savings, long-term investors',
          '💼 Asset managers: manage their clients\' money (individuals, institutions)',
          '🌍 Sovereign wealth funds: governments investing their resources (e.g., Norwegian oil)'
        ]
      },
      {
        type: 'diagram',
        title: 'Le circuit complet',
        titleEn: 'The complete circuit',
        items: [
          'Épargnants → placent leur argent via assurances, fonds de pension, asset managers',
          'Ces institutions → achètent des titres sur le marché des capitaux',
          'Émetteurs (États, entreprises) → reçoivent les fonds',
          'Émetteurs → utilisent les fonds pour investir, se développer, financer leurs projets',
          'Retour : intérêts, dividendes → investisseurs → épargnants'
        ],
        itemsEn: [
          'Savers → place their money through insurance, pension funds, asset managers',
          'These institutions → buy securities on the capital market',
          'Issuers (governments, companies) → receive the funds',
          'Issuers → use the funds to invest, develop, finance their projects',
          'Return: interest, dividends → investors → savers'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Le parcours de votre épargne retraite',
        titleEn: 'Example: The journey of your retirement savings',
        content: 'Vous cotisez 200€/mois à votre fonds de pension. Ce fonds collecte des milliards d\'euros de milliers de personnes. Il investit cet argent : il achète des obligations d\'État français (OAT), des actions LVMH, des obligations d\'entreprises comme Orange. L\'État français utilise cet argent pour construire des infrastructures. LVMH l\'utilise pour ouvrir des boutiques en Asie. Orange l\'utilise pour déployer la 5G. En échange, vous recevrez (à la retraite) les intérêts et dividendes générés par ces investissements.',
        contentEn: 'You contribute €200/month to your pension fund. This fund collects billions of euros from thousands of people. It invests this money: it buys French government bonds (OAT), LVMH stocks, corporate bonds like Orange. The French government uses this money to build infrastructure. LVMH uses it to open stores in Asia. Orange uses it to deploy 5G. In return, you will receive (at retirement) the interest and dividends generated by these investments.',
        highlight: 'Votre épargne finance l\'économie réelle, et en retour, vous recevez un rendement.',
        highlightEn: 'Your savings finance the real economy, and in return, you receive a return.'
      },
      {
        type: 'keypoints',
        title: 'Surplus vs Déficit budgétaire',
        titleEn: 'Surplus vs Budget deficit',
        points: [
          '✅ Surplus : recettes > dépenses (l\'agent peut épargner ou investir)',
          '❌ Déficit : dépenses > recettes (l\'agent doit emprunter)',
          '🏛️ Exemple : la France a un déficit budgétaire → elle émet des OAT pour se financer',
          '🏢 Exemple : une startup en croissance a un déficit → elle lève des fonds'
        ],
        pointsEn: [
          '✅ Surplus: revenues > expenses (the agent can save or invest)',
          '❌ Deficit: expenses > revenues (the agent must borrow)',
          '🏛️ Example: France has a budget deficit → it issues OATs to finance itself',
          '🏢 Example: a growing startup has a deficit → it raises funds'
        ]
      },
      {
        type: 'text',
        content: 'Les fonds de pension et les assurances sont des investisseurs de long terme : ils peuvent garder des titres pendant 10, 20, 30 ans. C\'est idéal pour financer des projets de long terme comme les infrastructures ou la R&D. Les asset managers gèrent des stratégies plus variées selon les besoins de leurs clients.',
        contentEn: 'Pension funds and insurance companies are long-term investors: they can hold securities for 10, 20, 30 years. This is ideal for financing long-term projects like infrastructure or R&D. Asset managers manage more varied strategies according to their clients\' needs.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un agent en déficit budgétaire ?',
        questionEn: 'What is a budget deficit agent?',
        options: [
          'Un agent dont les recettes dépassent les dépenses',
          'Un agent dont les dépenses dépassent les recettes',
          'Un agent qui a fait faillite',
          'Un agent qui ne paie pas ses impôts'
        ],
        optionsEn: [
          'An agent whose revenues exceed expenses',
          'An agent whose expenses exceed revenues',
          'An agent who has gone bankrupt',
          'An agent who doesn\'t pay taxes'
        ],
        correctAnswer: 1,
        explanation: 'Un agent en déficit a des dépenses supérieures à ses recettes : il doit donc emprunter ou lever des fonds. C\'est le cas de la France qui a un déficit budgétaire et émet des obligations (OAT) pour se financer.',
        explanationEn: 'A deficit agent has expenses greater than revenues: it must therefore borrow or raise funds. This is the case for France which has a budget deficit and issues bonds (OAT) to finance itself.'
      },
      {
        type: 'quiz',
        question: 'Que sont les OAT ?',
        questionEn: 'What are OATs?',
        options: [
          'Des actions de l\'État français',
          'Des obligations émises par l\'État français',
          'Des produits dérivés',
          'Des fonds de pension'
        ],
        optionsEn: [
          'French government stocks',
          'Bonds issued by the French government',
          'Derivatives',
          'Pension funds'
        ],
        correctAnswer: 1,
        explanation: 'Les OAT (Obligations Assimilables du Trésor) sont des obligations émises par l\'État français pour financer son déficit budgétaire. Les investisseurs prêtent de l\'argent à l\'État qui s\'engage à rembourser avec intérêts.',
        explanationEn: 'OATs (Obligations Assimilables du Trésor) are bonds issued by the French government to finance its budget deficit. Investors lend money to the government which commits to repay with interest.'
      },
      {
        type: 'quiz',
        question: 'Quel acteur est typiquement un investisseur de très long terme ?',
        questionEn: 'Which actor is typically a very long-term investor?',
        options: [
          'Un trader qui achète et vend dans la journée',
          'Un fonds de pension qui gère l\'épargne retraite',
          'Une banque qui prête à court terme',
          'Un particulier qui spécule'
        ],
        optionsEn: [
          'A trader who buys and sells within the day',
          'A pension fund managing retirement savings',
          'A bank lending short-term',
          'An individual who speculates'
        ],
        correctAnswer: 1,
        explanation: 'Les fonds de pension gèrent l\'épargne retraite sur des horizons de 20, 30, 40 ans. Ce sont des investisseurs de très long terme, idéaux pour financer des projets de long terme comme les infrastructures.',
        explanationEn: 'Pension funds manage retirement savings over horizons of 20, 30, 40 years. They are very long-term investors, ideal for financing long-term projects like infrastructure.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'un fonds souverain ?',
        questionEn: 'What is a sovereign wealth fund?',
        options: [
          'Un fonds géré par des particuliers',
          'Un fonds d\'État qui investit les ressources nationales',
          'Un fonds qui investit uniquement en obligations',
          'Un fonds qui gère les retraites'
        ],
        optionsEn: [
          'A fund managed by individuals',
          'A government fund that invests national resources',
          'A fund that invests only in bonds',
          'A fund that manages pensions'
        ],
        correctAnswer: 1,
        explanation: 'Un fonds souverain est un fonds d\'investissement détenu par un État, qui investit une partie de ses ressources (souvent issues de matières premières). Exemple : le fonds norvégien alimenté par les revenus du pétrole et du gaz.',
        explanationEn: 'A sovereign wealth fund is an investment fund owned by a government, which invests part of its resources (often from commodities). Example: the Norwegian fund fed by oil and gas revenues.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi les assurances investissent-elles sur le marché des capitaux ?',
        questionEn: 'Why do insurance companies invest in capital markets?',
        options: [
          'Pour spéculer et faire des profits rapides',
          'Pour placer les primes collectées et générer des rendements',
          'Parce que c\'est obligatoire par la loi',
          'Pour aider les entreprises gratuitement'
        ],
        optionsEn: [
          'To speculate and make quick profits',
          'To invest collected premiums and generate returns',
          'Because it\'s required by law',
          'To help companies for free'
        ],
        correctAnswer: 1,
        explanation: 'Les assurances collectent des primes auprès de leurs clients. Elles doivent placer cet argent pour générer des rendements qui leur permettront de payer les sinistres futurs et de rémunérer leurs clients. Elles investissent donc sur le marché des capitaux.',
        explanationEn: 'Insurance companies collect premiums from their clients. They must invest this money to generate returns that will allow them to pay future claims and compensate their clients. They therefore invest in capital markets.'
      }
    ]
  },
  {
    id: 'intermediation-desintermediation',
    title: 'Intermédiation vs Désintermédiation',
    titleEn: 'Intermediation vs Disintermediation',
    description: 'Financement bancaire ou financement de marché ?',
    descriptionEn: 'Bank financing or market financing?',
    duration: '12 min',
    content: [
      {
        type: 'text',
        content: 'Quand une entreprise a besoin d\'argent, elle peut passer par sa banque (intermédiation) ou aller directement sur le marché des capitaux (désintermédiation). Ces deux circuits de financement coexistent et se complètent. Comprendre leur différence, c\'est comprendre l\'architecture du système financier.',
        contentEn: 'When a company needs money, it can go through its bank (intermediation) or go directly to the capital market (disintermediation). These two financing circuits coexist and complement each other. Understanding their difference means understanding the architecture of the financial system.'
      },
      {
        type: 'keypoints',
        title: 'Financement bancaire : l\'intermédiation',
        titleEn: 'Bank financing: intermediation',
        points: [
          '🏦 La banque joue le rôle d\'intermédiaire entre épargnants et emprunteurs',
          '💰 La banque collecte l\'épargne (dépôts) et prête aux entreprises',
          '🛡️ La banque porte le risque sur son bilan',
          '📊 Circuit : Épargnant → Banque → Emprunteur'
        ],
        pointsEn: [
          '🏦 The bank acts as intermediary between savers and borrowers',
          '💰 The bank collects savings (deposits) and lends to companies',
          '🛡️ The bank bears the risk on its balance sheet',
          '📊 Circuit: Saver → Bank → Borrower'
        ]
      },
      {
        type: 'keypoints',
        title: 'Financement de marché : la désintermédiation',
        titleEn: 'Market financing: disintermediation',
        points: [
          '📈 L\'entreprise émet des titres directement sur le marché',
          '🤝 Les investisseurs achètent ces titres sans passer par une banque',
          '⚠️ Les investisseurs portent directement le risque',
          '📊 Circuit : Épargnant → Marché → Emprunteur (plus direct)'
        ],
        pointsEn: [
          '📈 The company issues securities directly on the market',
          '🤝 Investors buy these securities without going through a bank',
          '⚠️ Investors directly bear the risk',
          '📊 Circuit: Saver → Market → Borrower (more direct)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Carrefour a besoin de 200 millions d\'euros',
        titleEn: 'Example: Carrefour needs 200 million euros',
        content: 'Scénario 1 (Intermédiation) : Carrefour emprunte 200M€ à BNP Paribas. La banque a collecté cet argent via les dépôts de ses clients. Si Carrefour ne rembourse pas, c\'est la banque qui perd de l\'argent (elle porte le risque). Scénario 2 (Désintermédiation) : Carrefour émet des obligations pour 200M€ sur le marché. Des investisseurs (assurances, fonds) achètent ces obligations. Si Carrefour ne rembourse pas, ce sont ces investisseurs qui perdent de l\'argent (ils portent le risque directement).',
        contentEn: 'Scenario 1 (Intermediation): Carrefour borrows €200M from BNP Paribas. The bank collected this money through its clients\' deposits. If Carrefour doesn\'t repay, it\'s the bank that loses money (it bears the risk). Scenario 2 (Disintermediation): Carrefour issues bonds for €200M on the market. Investors (insurance companies, funds) buy these bonds. If Carrefour doesn\'t repay, it\'s these investors who lose money (they bear the risk directly).',
        highlight: 'Dans le financement bancaire, la banque est un "tampon" qui porte le risque. Dans le financement de marché, l\'investisseur porte le risque directement.',
        highlightEn: 'In bank financing, the bank is a "buffer" that bears the risk. In market financing, the investor bears the risk directly.'
      },
      {
        type: 'text',
        content: 'Attention : même dans le financement de marché, il existe des intermédiaires ! Les banques d\'investissement organisent les émissions, les brokers facilitent les échanges, les bourses fournissent l\'infrastructure. Mais ces intermédiaires ne portent pas le risque de crédit sur leur bilan, contrairement aux banques de dépôt.',
        contentEn: 'Caution: even in market financing, there are intermediaries! Investment banks organize issuances, brokers facilitate exchanges, stock exchanges provide infrastructure. But these intermediaries don\'t bear credit risk on their balance sheet, unlike deposit banks.'
      },
      {
        type: 'diagram',
        title: 'Les deux circuits de financement',
        titleEn: 'The two financing circuits',
        items: [
          'Circuit bancaire : Épargnant → Dépôt → Banque (porte le risque) → Prêt → Entreprise',
          'Circuit de marché : Épargnant → Investissement → Marché → Titre → Entreprise',
          'Dans les deux cas, l\'épargne finance l\'économie',
          'Mais le porteur du risque change : banque vs investisseur',
          'Les deux circuits coexistent et se complètent'
        ],
        itemsEn: [
          'Banking circuit: Saver → Deposit → Bank (bears risk) → Loan → Company',
          'Market circuit: Saver → Investment → Market → Security → Company',
          'In both cases, savings finance the economy',
          'But the risk bearer changes: bank vs investor',
          'The two circuits coexist and complement each other'
        ]
      },
      {
        type: 'keypoints',
        title: 'Pourquoi les deux coexistent ?',
        titleEn: 'Why do both coexist?',
        points: [
          '🏦 Banques : pratiques pour les PME, prêts personnalisés, relation de proximité',
          '📈 Marché : adapté aux grandes entreprises, volumes importants, diversification des sources',
          '⚖️ Les entreprises utilisent souvent les deux pour optimiser leur financement',
          '🌍 Le marché permet aussi de financer à l\'international plus facilement'
        ],
        pointsEn: [
          '🏦 Banks: practical for SMEs, customized loans, close relationship',
          '📈 Market: suited for large companies, large volumes, source diversification',
          '⚖️ Companies often use both to optimize their financing',
          '🌍 The market also allows easier international financing'
        ]
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que l\'intermédiation financière ?',
        questionEn: 'What is financial intermediation?',
        options: [
          'Le financement direct sur le marché des capitaux',
          'Le financement via une banque qui joue le rôle d\'intermédiaire',
          'L\'achat d\'actions en bourse',
          'La gestion de risques avec des dérivés'
        ],
        optionsEn: [
          'Direct financing on the capital market',
          'Financing through a bank acting as intermediary',
          'Buying stocks on the stock market',
          'Risk management with derivatives'
        ],
        correctAnswer: 1,
        explanation: 'L\'intermédiation, c\'est quand une banque se place entre les épargnants et les emprunteurs. Elle collecte l\'épargne et prête aux entreprises, en portant le risque sur son bilan.',
        explanationEn: 'Intermediation is when a bank positions itself between savers and borrowers. It collects savings and lends to companies, bearing the risk on its balance sheet.'
      },
      {
        type: 'quiz',
        question: 'Dans le financement de marché, qui porte le risque de crédit ?',
        questionEn: 'In market financing, who bears the credit risk?',
        options: [
          'La banque centrale',
          'La banque d\'investissement qui organise l\'émission',
          'Les investisseurs qui achètent les titres',
          'L\'État'
        ],
        optionsEn: [
          'The central bank',
          'The investment bank organizing the issuance',
          'The investors who buy the securities',
          'The government'
        ],
        correctAnswer: 2,
        explanation: 'Dans le financement de marché (désintermédiation), ce sont les investisseurs qui portent directement le risque. Si l\'émetteur fait défaut, ils perdent leur argent. Les banques d\'investissement facilitent l\'opération mais ne portent pas le risque.',
        explanationEn: 'In market financing (disintermediation), it\'s the investors who directly bear the risk. If the issuer defaults, they lose their money. Investment banks facilitate the operation but don\'t bear the risk.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi parle-t-on de "désintermédiation" pour le marché des capitaux ?',
        questionEn: 'Why do we speak of "disintermediation" for capital markets?',
        options: [
          'Parce qu\'il n\'y a aucun intermédiaire',
          'Parce que le financement est plus direct, sans banque qui porte le risque',
          'Parce que c\'est interdit aux banques',
          'Parce que c\'est moins cher'
        ],
        optionsEn: [
          'Because there are no intermediaries',
          'Because financing is more direct, without a bank bearing the risk',
          'Because it\'s forbidden to banks',
          'Because it\'s cheaper'
        ],
        correctAnswer: 1,
        explanation: 'On parle de désintermédiation car le financement est plus direct : l\'entreprise émet des titres, les investisseurs les achètent. Il y a toujours des intermédiaires (bourses, brokers), mais pas de banque qui porte le risque comme dans le prêt bancaire classique.',
        explanationEn: 'We speak of disintermediation because financing is more direct: the company issues securities, investors buy them. There are still intermediaries (exchanges, brokers), but no bank bearing the risk as in traditional bank lending.'
      },
      {
        type: 'quiz',
        question: 'Une PME de 50 employés a besoin de 500 000€. Quel circuit est le plus adapté ?',
        questionEn: 'An SME with 50 employees needs €500,000. Which circuit is most suitable?',
        options: [
          'Émettre des obligations sur le marché',
          'Faire une introduction en bourse',
          'Emprunter à sa banque (intermédiation)',
          'Émettre des produits dérivés'
        ],
        optionsEn: [
          'Issue bonds on the market',
          'Do an IPO',
          'Borrow from its bank (intermediation)',
          'Issue derivatives'
        ],
        correctAnswer: 2,
        explanation: 'Pour une PME et un montant modeste, le financement bancaire est plus adapté : plus simple, plus rapide, et la banque peut proposer un prêt personnalisé. Le marché des capitaux est plutôt réservé aux grandes entreprises et aux montants importants.',
        explanationEn: 'For an SME and a modest amount, bank financing is more suitable: simpler, faster, and the bank can offer a customized loan. Capital markets are rather reserved for large companies and significant amounts.'
      },
      {
        type: 'quiz',
        question: 'Quelle affirmation est vraie ?',
        questionEn: 'Which statement is true?',
        options: [
          'Le marché des capitaux va remplacer les banques',
          'Les banques vont remplacer le marché des capitaux',
          'Les deux circuits coexistent et se complètent',
          'Il faut choisir entre les deux'
        ],
        optionsEn: [
          'Capital markets will replace banks',
          'Banks will replace capital markets',
          'The two circuits coexist and complement each other',
          'You must choose between the two'
        ],
        correctAnswer: 2,
        explanation: 'Les deux circuits sont complémentaires. Les banques sont adaptées aux PME et aux prêts personnalisés. Le marché est adapté aux grandes entreprises et aux volumes importants. Les grandes entreprises utilisent souvent les deux pour diversifier leurs sources de financement.',
        explanationEn: 'The two circuits are complementary. Banks are suited for SMEs and customized loans. The market is suited for large companies and large volumes. Large companies often use both to diversify their financing sources.'
      }
    ]
  },
  {
    id: 'dette-vs-capital',
    title: 'Dette vs Capital : deux logiques de financement',
    titleEn: 'Debt vs Equity: two financing logics',
    description: 'Comprendre la différence entre prêter et devenir propriétaire',
    descriptionEn: 'Understanding the difference between lending and becoming an owner',
    duration: '14 min',
    content: [
      {
        type: 'text',
        content: 'Quand une entreprise a besoin d\'argent, elle a deux grandes options : emprunter (dette) ou vendre des parts de propriété (capital). Ces deux choix ont des conséquences très différentes pour l\'entreprise et pour l\'investisseur. Comprendre cette distinction est fondamental en finance de marché.',
        contentEn: 'When a company needs money, it has two main options: borrow (debt) or sell ownership shares (equity). These two choices have very different consequences for the company and the investor. Understanding this distinction is fundamental in market finance.'
      },
      {
        type: 'keypoints',
        title: 'Dette (Obligation) : vous êtes créancier',
        titleEn: 'Debt (Bond): you are a creditor',
        points: [
          '💰 Vous prêtez de l\'argent, l\'entreprise s\'engage à rembourser',
          '📅 Rendement prévisible : coupons (intérêts) + remboursement à l\'échéance',
          '🛡️ Priorité en cas de problème : les créanciers sont payés avant les actionnaires',
          '⚖️ Risque modéré (sauf si l\'émetteur fait défaut)'
        ],
        pointsEn: [
          '💰 You lend money, the company commits to repay',
          '📅 Predictable return: coupons (interest) + repayment at maturity',
          '🛡️ Priority in case of problems: creditors are paid before shareholders',
          '⚖️ Moderate risk (unless the issuer defaults)'
        ]
      },
      {
        type: 'keypoints',
        title: 'Capital (Action) : vous êtes copropriétaire',
        titleEn: 'Equity (Stock): you are a co-owner',
        points: [
          '🏢 Vous achetez une part de l\'entreprise, vous devenez actionnaire',
          '📈 Rendement incertain : dividendes + variation du prix de l\'action',
          '🎢 Gain potentiel illimité, mais perte limitée à votre mise',
          '⚠️ Dernier servi : en cas de liquidation, les actionnaires passent après les créanciers'
        ],
        pointsEn: [
          '🏢 You buy a share of the company, you become a shareholder',
          '📈 Uncertain return: dividends + stock price variation',
          '🎢 Unlimited potential gain, but loss limited to your investment',
          '⚠️ Last served: in case of liquidation, shareholders come after creditors'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Airbus a besoin de 100 millions d\'euros',
        titleEn: 'Example: Airbus needs 100 million euros',
        content: 'Option 1 (Dette) : Airbus émet des obligations à 3% sur 5 ans. Vous prêtez 10 000€. Chaque année, vous recevez 300€ d\'intérêts. Au bout de 5 ans, on vous rembourse vos 10 000€. Peu importe si Airbus fait des profits ou non, vous recevez vos 300€ (sauf défaut). Option 2 (Capital) : Airbus émet des actions. Vous achetez pour 10 000€. Si Airbus prospère, vos actions peuvent valoir 15 000€ ou plus. Si Airbus va mal, elles peuvent tomber à 5 000€. Vous recevez des dividendes seulement si l\'entreprise décide d\'en verser.',
        contentEn: 'Option 1 (Debt): Airbus issues bonds at 3% for 5 years. You lend €10,000. Each year, you receive €300 in interest. After 5 years, you are repaid your €10,000. Regardless of whether Airbus makes profits or not, you receive your €300 (except in default). Option 2 (Equity): Airbus issues stocks. You buy for €10,000. If Airbus prospers, your stocks can be worth €15,000 or more. If Airbus does poorly, they can fall to €5,000. You receive dividends only if the company decides to pay them.',
        highlight: 'Avec la dette, vous êtes prêteur (rendement fixe, risque modéré). Avec le capital, vous êtes propriétaire (rendement variable, risque plus élevé).',
        highlightEn: 'With debt, you are a lender (fixed return, moderate risk). With equity, you are an owner (variable return, higher risk).'
      },
      {
        type: 'diagram',
        title: 'Ordre de priorité en cas de liquidation',
        titleEn: 'Priority order in case of liquidation',
        items: [
          '1️⃣ Créanciers garantis (prêts avec garantie)',
          '2️⃣ Obligataires (créanciers non garantis)',
          '3️⃣ Actionnaires privilégiés',
          '4️⃣ Actionnaires ordinaires (les derniers servis)',
          'Si l\'argent manque, les derniers de la liste ne récupèrent rien'
        ],
        itemsEn: [
          '1️⃣ Secured creditors (loans with collateral)',
          '2️⃣ Bondholders (unsecured creditors)',
          '3️⃣ Preferred shareholders',
          '4️⃣ Common shareholders (last served)',
          'If money runs out, those at the end of the list get nothing'
        ]
      },
      {
        type: 'text',
        content: 'Cette différence de priorité explique pourquoi les obligations sont généralement moins risquées que les actions. En contrepartie, le rendement attendu sur les actions est plus élevé : c\'est la relation risque-rendement.',
        contentEn: 'This difference in priority explains why bonds are generally less risky than stocks. In return, the expected return on stocks is higher: this is the risk-return relationship.'
      },
      {
        type: 'keypoints',
        title: 'La relation risque-rendement (principe fondamental)',
        titleEn: 'The risk-return relationship (fundamental principle)',
        points: [
          '📊 Plus un investissement est risqué, plus le rendement exigé est élevé',
          '💡 Ce n\'est pas une garantie de gain, mais une logique de marché',
          '⚖️ Les investisseurs demandent une compensation pour prendre plus de risque',
          '🎯 Actions > Obligations > Livret A (en termes de risque ET de rendement attendu)'
        ],
        pointsEn: [
          '📊 The riskier an investment, the higher the required return',
          '💡 It\'s not a guarantee of gain, but a market logic',
          '⚖️ Investors demand compensation for taking more risk',
          '🎯 Stocks > Bonds > Savings account (in terms of risk AND expected return)'
        ]
      },
      {
        type: 'quiz',
        question: 'Quelle est la différence principale entre une obligation et une action ?',
        questionEn: 'What is the main difference between a bond and a stock?',
        options: [
          'L\'obligation est plus chère que l\'action',
          'L\'obligation est un prêt, l\'action est une part de propriété',
          'L\'obligation rapporte toujours plus que l\'action',
          'Il n\'y a pas de différence'
        ],
        optionsEn: [
          'The bond is more expensive than the stock',
          'The bond is a loan, the stock is an ownership share',
          'The bond always returns more than the stock',
          'There is no difference'
        ],
        correctAnswer: 1,
        explanation: 'L\'obligation représente une dette (vous prêtez), tandis que l\'action représente du capital (vous devenez copropriétaire). Cette distinction fondamentale change tout : rendement, risque, et priorité de paiement.',
        explanationEn: 'The bond represents debt (you lend), while the stock represents equity (you become a co-owner). This fundamental distinction changes everything: return, risk, and payment priority.'
      },
      {
        type: 'quiz',
        question: 'En cas de liquidation d\'une entreprise, qui est payé en premier ?',
        questionEn: 'In case of company liquidation, who is paid first?',
        options: [
          'Les actionnaires',
          'Les créanciers (dont les obligataires)',
          'Les employés',
          'Tout le monde en même temps'
        ],
        optionsEn: [
          'The shareholders',
          'The creditors (including bondholders)',
          'The employees',
          'Everyone at the same time'
        ],
        correctAnswer: 1,
        explanation: 'Les créanciers (dont les obligataires) ont la priorité sur les actionnaires. C\'est pourquoi la dette est généralement moins risquée : même si l\'entreprise va mal, les créanciers sont remboursés en premier.',
        explanationEn: 'Creditors (including bondholders) have priority over shareholders. This is why debt is generally less risky: even if the company does poorly, creditors are repaid first.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi le rendement attendu d\'une action est-il généralement plus élevé que celui d\'une obligation ?',
        questionEn: 'Why is the expected return on a stock generally higher than that of a bond?',
        options: [
          'Parce que les actions sont plus faciles à vendre',
          'Parce que les actions sont plus risquées',
          'Parce que les entreprises préfèrent les actionnaires',
          'Ce n\'est pas vrai, les obligations rapportent plus'
        ],
        optionsEn: [
          'Because stocks are easier to sell',
          'Because stocks are riskier',
          'Because companies prefer shareholders',
          'It\'s not true, bonds return more'
        ],
        correctAnswer: 1,
        explanation: 'C\'est la relation risque-rendement : les actions sont plus risquées (pas de garantie de remboursement, dernier servi en cas de problème), donc les investisseurs exigent un rendement potentiel plus élevé en compensation.',
        explanationEn: 'It\'s the risk-return relationship: stocks are riskier (no repayment guarantee, last served in case of problems), so investors demand a higher potential return as compensation.'
      },
      {
        type: 'quiz',
        question: 'Vous achetez une obligation à 4% sur 10 ans. Que recevez-vous ?',
        questionEn: 'You buy a 4% bond for 10 years. What do you receive?',
        options: [
          'Uniquement le remboursement dans 10 ans',
          'Des intérêts chaque année + le remboursement à la fin',
          'Des dividendes si l\'entreprise fait des profits',
          'Une part de propriété de l\'entreprise'
        ],
        optionsEn: [
          'Only the repayment in 10 years',
          'Interest each year + repayment at the end',
          'Dividends if the company makes profits',
          'An ownership share of the company'
        ],
        correctAnswer: 1,
        explanation: 'Avec une obligation, vous recevez des coupons (intérêts) régulièrement (ici 4% par an) et le remboursement du capital à l\'échéance (dans 10 ans). C\'est un flux de paiement prévisible, contrairement aux actions.',
        explanationEn: 'With a bond, you receive coupons (interest) regularly (here 4% per year) and capital repayment at maturity (in 10 years). It\'s a predictable payment flow, unlike stocks.'
      },
      {
        type: 'quiz',
        question: 'Quelle affirmation est vraie concernant les actions ?',
        questionEn: 'Which statement is true about stocks?',
        options: [
          'Le gain est limité mais la perte peut être illimitée',
          'Le gain est illimité mais la perte est limitée à la mise',
          'Gain et perte sont tous deux illimités',
          'Gain et perte sont tous deux limités'
        ],
        optionsEn: [
          'The gain is limited but the loss can be unlimited',
          'The gain is unlimited but the loss is limited to the investment',
          'Both gain and loss are unlimited',
          'Both gain and loss are limited'
        ],
        correctAnswer: 1,
        explanation: 'Sur une action classique, vous ne pouvez pas perdre plus que votre investissement initial (perte maximale = 100% de votre mise), mais le gain potentiel est théoriquement illimité si l\'entreprise prospère. C\'est l\'asymétrie du capital.',
        explanationEn: 'On a regular stock, you cannot lose more than your initial investment (maximum loss = 100% of your stake), but the potential gain is theoretically unlimited if the company prospers. This is the asymmetry of equity.'
      }
    ]
  },
  {
    id: 'primaire-secondaire',
    title: 'Marché primaire vs marché secondaire',
    titleEn: 'Primary market vs secondary market',
    description: 'Comprendre la différence entre émission et échange de titres',
    descriptionEn: 'Understanding the difference between issuance and trading of securities',
    duration: '12 min',
    content: [
      {
        type: 'text',
        content: 'Quand on parle de marchés financiers, il y a en fait deux "étages" : le marché primaire (où naissent les titres) et le marché secondaire (où ils s\'échangent). Comprendre cette distinction est essentiel pour saisir comment fonctionne le financement des entreprises.',
        contentEn: 'When we talk about financial markets, there are actually two "levels": the primary market (where securities are born) and the secondary market (where they are traded). Understanding this distinction is essential to grasp how company financing works.'
      },
      {
        type: 'keypoints',
        title: 'Les différences clés',
        titleEn: 'Key differences',
        points: [
          'Marché primaire : émission de nouveaux titres, l\'argent va à l\'entreprise',
          'Marché secondaire : échange entre investisseurs, l\'entreprise ne reçoit rien',
          'Le secondaire assure la liquidité : on peut revendre facilement',
          'Sans marché secondaire, personne n\'achèterait sur le primaire'
        ],
        pointsEn: [
          'Primary market: issuance of new securities, money goes to the company',
          'Secondary market: exchange between investors, the company receives nothing',
          'The secondary ensures liquidity: you can resell easily',
          'Without a secondary market, no one would buy on the primary'
        ]
      },
      {
        type: 'diagram',
        title: 'Le parcours d\'une action',
        titleEn: 'The journey of a stock',
        items: [
          'Émission : l\'entreprise crée 1000 actions à 10€ (marché primaire)',
          'Vente initiale : des investisseurs achètent ces actions, l\'entreprise reçoit 10 000€',
          'Échanges : les investisseurs revendent entre eux à 12€, 15€, 8€... (marché secondaire)',
          'L\'entreprise garde ses 10 000€ initiaux, seul le prix entre investisseurs change'
        ],
        itemsEn: [
          'Issuance: the company creates 1000 stocks at €10 (primary market)',
          'Initial sale: investors buy these stocks, the company receives €10,000',
          'Exchanges: investors resell among themselves at €12, €15, €8... (secondary market)',
          'The company keeps its initial €10,000, only the price between investors changes'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : L\'introduction en bourse (IPO)',
        titleEn: 'Example: The Initial Public Offering (IPO)',
        content: 'Airbnb décide d\'entrer en bourse en 2020. Elle émet 50 millions d\'actions à 68$ chacune sur le marché primaire. Elle lève 3,4 milliards de dollars. Le lendemain, ces actions s\'échangent à 144$ sur le marché secondaire (Nasdaq). Airbnb ne reçoit pas cet argent supplémentaire : ce sont les premiers acheteurs qui font une plus-value.',
        contentEn: 'Airbnb decides to go public in 2020. It issues 50 million shares at $68 each on the primary market. It raises 3.4 billion dollars. The next day, these shares trade at $144 on the secondary market (Nasdaq). Airbnb doesn\'t receive this additional money: it\'s the first buyers who make a capital gain.',
        highlight: 'L\'IPO est le passage du marché primaire au secondaire. L\'entreprise ne lève de l\'argent qu\'une seule fois, lors de l\'émission initiale.',
        highlightEn: 'The IPO is the transition from primary to secondary market. The company raises money only once, during the initial issuance.'
      },
      {
        type: 'text',
        content: 'Pourquoi le marché secondaire est-il crucial ? Parce qu\'il offre de la liquidité. Si vous ne pouviez jamais revendre vos actions, vous n\'en achèteriez jamais ! Le secondaire rend le primaire possible.',
        contentEn: 'Why is the secondary market crucial? Because it offers liquidity. If you could never resell your stocks, you would never buy them! The secondary makes the primary possible.'
      },
      {
        type: 'quiz',
        question: 'Une entreprise émet 1000 obligations à 100€. Un an après, ces obligations s\'échangent à 110€. Combien l\'entreprise a-t-elle levé au total ?',
        questionEn: 'A company issues 1000 bonds at €100. One year later, these bonds trade at €110. How much has the company raised in total?',
        options: [
          '100 000€ (uniquement l\'émission initiale)',
          '110 000€ (le nouveau prix)',
          '210 000€ (émission + échanges)',
          'Cela dépend du nombre d\'échanges'
        ],
        optionsEn: [
          '€100,000 (only the initial issuance)',
          '€110,000 (the new price)',
          '€210,000 (issuance + exchanges)',
          'It depends on the number of exchanges'
        ],
        correctAnswer: 0,
        explanation: 'L\'entreprise ne lève de l\'argent que sur le marché primaire, lors de l\'émission. Les échanges ultérieurs sur le marché secondaire se font entre investisseurs, l\'entreprise n\'en tire aucun revenu supplémentaire.',
        explanationEn: 'The company only raises money on the primary market, during issuance. Subsequent exchanges on the secondary market occur between investors, the company derives no additional revenue from them.'
      },
      {
        type: 'quiz',
        question: 'Quel est le rôle principal du marché secondaire ?',
        questionEn: 'What is the main role of the secondary market?',
        options: [
          'Permettre aux entreprises de lever des fonds',
          'Assurer la liquidité des titres',
          'Fixer le prix d\'émission des actions',
          'Réguler les entreprises cotées'
        ],
        optionsEn: [
          'Allow companies to raise funds',
          'Ensure liquidity of securities',
          'Set the issuance price of stocks',
          'Regulate listed companies'
        ],
        correctAnswer: 1,
        explanation: 'Le marché secondaire permet aux investisseurs de revendre leurs titres facilement. Cette liquidité est essentielle : sans elle, personne n\'achèterait sur le marché primaire car on serait "coincé" avec ses titres.',
        explanationEn: 'The secondary market allows investors to resell their securities easily. This liquidity is essential: without it, no one would buy on the primary market because they would be "stuck" with their securities.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'une IPO (Introduction en Bourse) ?',
        questionEn: 'What is an IPO (Initial Public Offering)?',
        options: [
          'Le premier échange d\'une action sur le marché secondaire',
          'Le passage d\'une entreprise du marché primaire au secondaire',
          'Une augmentation de capital d\'une entreprise déjà cotée',
          'La fermeture du marché primaire'
        ],
        optionsEn: [
          'The first exchange of a stock on the secondary market',
          'A company\'s transition from primary to secondary market',
          'A capital increase of an already listed company',
          'The closure of the primary market'
        ],
        correctAnswer: 1,
        explanation: 'L\'IPO est le moment où une entreprise émet ses actions pour la première fois (marché primaire) et où ces actions deviennent ensuite échangeables sur le marché secondaire. C\'est la "naissance boursière" de l\'entreprise.',
        explanationEn: 'The IPO is when a company issues its shares for the first time (primary market) and these shares then become tradable on the secondary market. It\'s the company\'s "stock market birth".'
      },
      {
        type: 'quiz',
        question: 'Si le cours d\'une action passe de 50€ à 80€ sur le marché secondaire, que se passe-t-il pour l\'entreprise ?',
        questionEn: 'If a stock price goes from €50 to €80 on the secondary market, what happens to the company?',
        options: [
          'Elle gagne 30€ par action',
          'Elle peut lever plus d\'argent automatiquement',
          'Rien, elle ne reçoit pas cet argent',
          'Elle doit rembourser la différence'
        ],
        optionsEn: [
          'It gains €30 per share',
          'It can raise more money automatically',
          'Nothing, it doesn\'t receive this money',
          'It must reimburse the difference'
        ],
        correctAnswer: 2,
        explanation: 'Les variations de prix sur le marché secondaire n\'affectent pas directement les finances de l\'entreprise. Elle a déjà reçu son argent lors de l\'émission. Seuls les investisseurs qui revendent font des gains ou des pertes.',
        explanationEn: 'Price variations on the secondary market don\'t directly affect the company\'s finances. It already received its money during issuance. Only investors who resell make gains or losses.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi une entreprise s\'intéresse-t-elle au marché secondaire si elle n\'en tire pas d\'argent ?',
        questionEn: 'Why does a company care about the secondary market if it doesn\'t get money from it?',
        options: [
          'Elle n\'y a aucun intérêt',
          'Un marché secondaire actif facilite les futures levées de fonds',
          'Elle peut racheter ses propres actions',
          'Les deux réponses précédentes sont vraies'
        ],
        optionsEn: [
          'It has no interest in it',
          'An active secondary market facilitates future fundraising',
          'It can buy back its own shares',
          'The two previous answers are true'
        ],
        correctAnswer: 3,
        explanation: 'Même si l\'entreprise ne tire pas d\'argent direct du secondaire, un marché actif et liquide rend ses titres attractifs. Cela facilite les futures augmentations de capital. De plus, l\'entreprise peut racheter ses propres actions sur le secondaire pour diverses raisons stratégiques.',
        explanationEn: 'Even if the company doesn\'t get direct money from the secondary, an active and liquid market makes its securities attractive. This facilitates future capital increases. Moreover, the company can buy back its own shares on the secondary for various strategic reasons.'
      }
    ]
  }
]
