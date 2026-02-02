import { Chapter } from '../types'
import { Building2, FileText, TrendingUp, Percent, Shield, Repeat } from 'lucide-react'

export const chapters: Chapter[] = [
  {
    id: 'introduction',
    title: 'Organisation du Marché des Capitaux',
    description: 'Comprendre les bases : qu\'est-ce qu\'un marché financier, ses acteurs et son rôle dans l\'économie',
    icon: Building2,
    color: 'bg-blue-100',
    lessons: [
      {
        id: 'definition-marche-capitaux',
        title: 'Qu\'est-ce que le marché des capitaux ?',
        description: 'Définition, rôle et fonctionnement du marché des capitaux',
        duration: '12 min',
        content: [
          {
            type: 'text',
            content: 'Imaginez un immense système de mise en relation : d\'un côté, des personnes ou organisations qui ont de l\'argent à placer (épargne). De l\'autre, des personnes ou organisations qui ont besoin d\'argent pour financer leurs projets. Le marché des capitaux, c\'est exactement ça : un ensemble de mécanismes qui permet de faire circuler l\'argent de ceux qui en ont vers ceux qui en ont besoin.'
          },
          {
            type: 'keypoints',
            title: 'Les deux types d\'agents',
            points: [
              'Agents en surplus : ils ont de l\'épargne à placer (ex : vous avec votre compte épargne, les assurances, les fonds de pension)',
              'Agents en déficit : ils ont besoin de financement (ex : une entreprise qui veut construire une usine, un État qui finance ses dépenses)',
              'Le marché des capitaux les met en relation en échangeant de l\'argent contre des titres financiers'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : Financer une nouvelle usine',
            content: 'Renault veut construire une usine de batteries électriques pour 500 millions d\'euros. Plutôt que d\'emprunter uniquement à sa banque, Renault émet des obligations sur le marché des capitaux. Des investisseurs (assurances, fonds de pension, particuliers) achètent ces obligations. Renault obtient ses 500 millions, et les investisseurs recevront des intérêts chaque année.',
            highlight: 'Le marché des capitaux a permis de faire circuler l\'épargne vers un projet d\'investissement concret.'
          },
          {
            type: 'keypoints',
            title: 'Les 3 fonctions essentielles du marché des capitaux',
            points: [
              '💰 Financer l\'économie : permettre aux entreprises, États et banques d\'obtenir les fonds nécessaires',
              '🎯 Allouer le capital : orienter l\'épargne vers les projets jugés les plus intéressants par le marché',
              '🛡️ Gérer le risque : via des instruments comme les produits dérivés, transférer certains risques'
            ]
          },
          {
            type: 'text',
            content: 'Sans marché des capitaux, l\'économie fonctionnerait au ralenti : les entreprises auraient du mal à financer leur croissance, les États à construire des infrastructures, et votre épargne dormirait sans être utile à personne.'
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce qu\'un "agent en déficit" ?',
            options: [
              'Un agent qui a de l\'épargne à placer',
              'Un agent qui a besoin de financement',
              'Un agent qui gère les échanges sur le marché',
              'Un agent qui a fait faillite'
            ],
            correctAnswer: 1,
            explanation: 'Un agent en déficit a des dépenses supérieures à ses recettes : il a donc besoin d\'emprunter ou de lever des fonds. C\'est le cas d\'une entreprise qui veut investir ou d\'un État qui a un déficit budgétaire.'
          },
          {
            type: 'quiz',
            question: 'Quelle est la fonction principale du marché des capitaux ?',
            options: [
              'Créer de l\'argent',
              'Faire circuler l\'épargne vers l\'investissement',
              'Garantir des profits aux investisseurs',
              'Remplacer les banques'
            ],
            correctAnswer: 1,
            explanation: 'Le marché des capitaux ne crée pas d\'argent, il le fait circuler. Il met en relation ceux qui ont de l\'épargne avec ceux qui ont besoin de financement, permettant ainsi de financer l\'économie réelle.'
          },
          {
            type: 'quiz',
            question: 'Parmi ces acteurs, lequel est typiquement un "agent en surplus" ?',
            options: [
              'Une startup qui lève des fonds',
              'Un État avec un déficit budgétaire',
              'Un fonds de pension qui gère l\'épargne retraite',
              'Une entreprise qui construit une usine'
            ],
            correctAnswer: 2,
            explanation: 'Un fonds de pension collecte l\'épargne de ses adhérents et doit la placer : c\'est un agent en surplus. Les autres exemples sont des agents en déficit qui cherchent à se financer.'
          },
          {
            type: 'quiz',
            question: 'Qu\'échange-t-on sur le marché des capitaux ?',
            options: [
              'Uniquement de l\'argent liquide',
              'De l\'argent contre des titres financiers',
              'Des biens et services',
              'Des devises étrangères uniquement'
            ],
            correctAnswer: 1,
            explanation: 'Sur le marché des capitaux, on échange de l\'argent (capital) contre des titres financiers (actions, obligations, etc.). C\'est ce qui permet aux agents en déficit d\'obtenir des fonds.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi dit-on que le marché des capitaux "alloue" le capital ?',
            options: [
              'Parce qu\'il distribue l\'argent de manière égale',
              'Parce qu\'il oriente l\'épargne vers les projets jugés intéressants',
              'Parce qu\'il crée de nouveaux capitaux',
              'Parce qu\'il fixe les prix de tous les produits'
            ],
            correctAnswer: 1,
            explanation: 'Le marché "alloue" le capital en orientant l\'épargne vers certains projets plutôt que d\'autres. Les investisseurs choisissent où placer leur argent selon le rendement attendu et le risque, ce qui dirige les fonds vers les projets jugés les plus prometteurs.'
          }
        ]
      },
      {
        id: 'instruments-financiers',
        title: 'Les instruments financiers : que peut-on échanger ?',
        description: 'Découvrir les trois grandes familles de titres financiers',
        duration: '10 min',
        content: [
          {
            type: 'text',
            content: 'Sur le marché des capitaux, on n\'échange pas directement de l\'argent contre de l\'argent. On échange de l\'argent contre des titres financiers, c\'est-à-dire des contrats qui donnent des droits à l\'investisseur. Il existe trois grandes familles d\'instruments.'
          },
          {
            type: 'keypoints',
            title: 'Les 3 grandes familles d\'instruments',
            points: [
              '📜 Titres de dette (obligations) : vous prêtez de l\'argent, on vous rembourse avec des intérêts',
              '📈 Titres de capital (actions) : vous achetez une part de l\'entreprise, vous devenez copropriétaire',
              '🔄 Produits dérivés : contrats pour gérer ou transférer des risques (change, taux, matières premières...)'
            ]
          },
          {
            type: 'diagram',
            title: 'Comment ça fonctionne ?',
            items: [
              'L\'émetteur (entreprise, État) a besoin de financement',
              'Il émet des titres financiers sur le marché',
              'Les investisseurs achètent ces titres avec leur épargne',
              'L\'émetteur reçoit l\'argent, l\'investisseur reçoit le titre',
              'Le titre donne des droits : intérêts, dividendes, ou protection contre un risque'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : Les trois instruments en action',
            content: 'Total Energies veut financer un projet de 1 milliard d\'euros. Elle peut : (1) Émettre des obligations : elle emprunte et s\'engage à rembourser avec intérêts. (2) Émettre des actions : elle vend des parts de l\'entreprise, les acheteurs deviennent actionnaires. (3) Utiliser des dérivés : elle peut se protéger contre la variation du prix du pétrole avec des contrats à terme.',
            highlight: 'Chaque instrument répond à un besoin différent : emprunter, partager la propriété, ou gérer un risque.'
          },
          {
            type: 'text',
            content: 'Ces trois familles ne sont pas en concurrence, elles sont complémentaires. Une entreprise utilise souvent les trois : elle émet des actions pour lever des fonds permanents, des obligations pour emprunter, et des dérivés pour gérer ses risques opérationnels.'
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce qu\'un titre de dette ?',
            options: [
              'Un contrat où vous devenez propriétaire d\'une entreprise',
              'Un contrat où vous prêtez de l\'argent contre remboursement avec intérêts',
              'Un contrat pour gérer le risque de change',
              'Un contrat pour acheter des matières premières'
            ],
            correctAnswer: 1,
            explanation: 'Un titre de dette (comme une obligation) est un prêt : vous donnez de l\'argent à un émetteur qui s\'engage à vous rembourser avec des intérêts. Vous êtes créancier, pas propriétaire.'
          },
          {
            type: 'quiz',
            question: 'Quelle est la différence principale entre une action et une obligation ?',
            options: [
              'L\'action est un prêt, l\'obligation est une part de propriété',
              'L\'action donne la propriété, l\'obligation est un prêt',
              'Il n\'y a pas de différence',
              'L\'action est moins risquée que l\'obligation'
            ],
            correctAnswer: 1,
            explanation: 'L\'action fait de vous un copropriétaire de l\'entreprise (capital), tandis que l\'obligation fait de vous un créancier (dette). L\'action est généralement plus risquée mais offre un potentiel de gain plus élevé.'
          },
          {
            type: 'quiz',
            question: 'À quoi servent principalement les produits dérivés ?',
            options: [
              'À financer les entreprises',
              'À devenir propriétaire d\'une entreprise',
              'À gérer et transférer des risques',
              'À remplacer les actions et obligations'
            ],
            correctAnswer: 2,
            explanation: 'Les produits dérivés servent principalement à gérer des risques : risque de change, de taux d\'intérêt, de prix des matières premières, etc. Ils permettent de se protéger ou de transférer ces risques.'
          },
          {
            type: 'quiz',
            question: 'Quand une entreprise émet une obligation, que se passe-t-il ?',
            options: [
              'Elle vend une partie de sa propriété',
              'Elle emprunte de l\'argent qu\'elle devra rembourser',
              'Elle achète des actions d\'autres entreprises',
              'Elle se protège contre un risque'
            ],
            correctAnswer: 1,
            explanation: 'Émettre une obligation, c\'est emprunter : l\'entreprise reçoit de l\'argent maintenant et s\'engage à rembourser plus tard avec des intérêts (coupons). C\'est du financement par la dette.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi une entreprise utiliserait-elle les trois types d\'instruments ?',
            options: [
              'C\'est obligatoire par la loi',
              'Pour diversifier ses sources de financement et gérer ses risques',
              'Pour compliquer sa comptabilité',
              'Elle ne peut utiliser qu\'un seul type à la fois'
            ],
            correctAnswer: 1,
            explanation: 'Les trois instruments sont complémentaires : les actions pour lever des fonds permanents, les obligations pour emprunter à moindre coût, et les dérivés pour gérer les risques opérationnels (change, taux, matières premières). C\'est une stratégie financière équilibrée.'
          }
        ]
      },
      {
        id: 'regulation-risques',
        title: 'Régulation et gestion des risques',
        description: 'Rôle de la banque centrale et introduction aux produits dérivés',
        duration: '14 min',
        content: [
          {
            type: 'text',
            content: 'Le marché des capitaux ne fonctionne pas en vase clos. Il est influencé par la banque centrale qui fixe le "prix de l\'argent", et il offre des outils pour gérer les risques via les produits dérivés. Ces deux éléments sont essentiels pour comprendre le fonctionnement global du système.'
          },
          {
            type: 'keypoints',
            title: 'Rôle de la banque centrale',
            points: [
              '💰 Fixe les taux directeurs (le "prix de l\'argent")',
              '💧 Gère la liquidité sur les marchés (ajoute ou retire de l\'argent)',
              '📊 Influence l\'activité économique et l\'inflation',
              '🎯 Objectif : stabilité des prix et soutien à l\'économie'
            ]
          },
          {
            type: 'diagram',
            title: 'Comment les taux directeurs influencent l\'économie',
            items: [
              'Taux élevés → emprunter coûte cher → moins d\'investissements → ralentissement économique → baisse de l\'inflation',
              'Taux bas → emprunter coûte peu → plus d\'investissements → stimulation économique → risque d\'inflation',
              'La banque centrale ajuste les taux selon la situation économique',
              'C\'est un équilibre délicat entre croissance et inflation',
              'Les marchés financiers réagissent immédiatement aux décisions de la banque centrale'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : La BCE face à l\'inflation (2022-2023)',
            content: 'En 2022, l\'inflation en Europe atteint 10%. La BCE (Banque Centrale Européenne) décide de remonter ses taux directeurs de 0% à 4% en quelques mois. Conséquence : emprunter devient plus cher pour les entreprises et les États. Les investissements ralentissent. La demande baisse. L\'inflation commence à redescendre vers 2-3%. Mais la croissance économique ralentit aussi.',
            highlight: 'Les taux directeurs sont un outil puissant mais à double tranchant : ils peuvent freiner l\'inflation mais aussi ralentir l\'économie.'
          },
          {
            type: 'text',
            content: 'La liquidité, c\'est la quantité d\'argent disponible sur les marchés. La banque centrale peut injecter de la liquidité (en achetant des titres) ou en retirer (en vendant des titres). Plus il y a de liquidité, plus il est facile d\'emprunter et d\'investir.'
          },
          {
            type: 'keypoints',
            title: 'Les produits dérivés : gérer les risques',
            points: [
              '🔄 Contrats qui "dérivent" d\'un actif sous-jacent (action, taux, devise, matière première)',
              '🛡️ Permettent de se couvrir contre différents risques',
              '⚠️ Risque de change : protéger contre les variations de devises',
              '📉 Risque de taux : protéger contre les variations de taux d\'intérêt',
              '🌾 Risque matières premières : protéger contre les variations de prix (pétrole, blé...)',
              '📈 Risque actions : protéger contre les baisses de cours'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : Airbus se protège contre le risque de change',
            content: 'Airbus vend ses avions en dollars mais paie ses employés en euros. Si le dollar baisse face à l\'euro, Airbus perd de l\'argent. Solution : Airbus utilise des contrats dérivés (forwards, options) pour fixer à l\'avance le taux de change dollar/euro. Ainsi, même si le dollar baisse, Airbus est protégé.',
            highlight: 'Les dérivés permettent de transférer le risque : Airbus transfère son risque de change à un autre acteur (banque, fonds) qui accepte de le porter.'
          },
          {
            type: 'text',
            content: 'Les produits dérivés sont des outils puissants mais complexes. Ils peuvent servir à se protéger (hedging) ou à spéculer. Nous les étudierons en détail dans un chapitre dédié. Retenez pour l\'instant qu\'ils sont une des trois fonctions clés du marché des capitaux : gérer et transférer les risques.'
          },
          {
            type: 'quiz',
            question: 'Quel est le rôle principal de la banque centrale ?',
            options: [
              'Prêter directement aux entreprises',
              'Fixer les taux directeurs et gérer la liquidité',
              'Acheter des actions en bourse',
              'Garantir les profits des investisseurs'
            ],
            correctAnswer: 1,
            explanation: 'La banque centrale fixe les taux directeurs (le "prix de l\'argent") et gère la liquidité sur les marchés. Elle influence ainsi l\'activité économique et l\'inflation, mais ne prête pas directement aux entreprises.'
          },
          {
            type: 'quiz',
            question: 'Que se passe-t-il quand la banque centrale augmente ses taux directeurs ?',
            options: [
              'Emprunter devient moins cher, l\'économie accélère',
              'Emprunter devient plus cher, l\'économie ralentit',
              'Rien ne change',
              'Les actions montent automatiquement'
            ],
            correctAnswer: 1,
            explanation: 'Quand les taux augmentent, emprunter coûte plus cher. Les entreprises investissent moins, les ménages consomment moins. L\'économie ralentit, ce qui peut freiner l\'inflation. C\'est un outil pour "refroidir" l\'économie.'
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce qu\'un produit dérivé ?',
            options: [
              'Une action d\'une entreprise dérivée d\'une autre',
              'Un contrat qui dérive d\'un actif sous-jacent et sert à gérer des risques',
              'Une obligation à taux variable',
              'Un compte d\'épargne'
            ],
            correctAnswer: 1,
            explanation: 'Un produit dérivé est un contrat financier dont la valeur "dérive" d\'un actif sous-jacent (action, taux, devise, matière première). Il sert principalement à gérer ou transférer des risques.'
          },
          {
            type: 'quiz',
            question: 'Airbus vend en dollars mais paie en euros. Quel risque court-elle ?',
            options: [
              'Risque de taux d\'intérêt',
              'Risque de change',
              'Risque actions',
              'Risque matières premières'
            ],
            correctAnswer: 1,
            explanation: 'Airbus court un risque de change : si le dollar baisse face à l\'euro, ses revenus en dollars valent moins en euros, mais ses coûts en euros restent les mêmes. Elle peut se protéger avec des dérivés de change.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi la banque centrale injecte-t-elle parfois de la liquidité sur les marchés ?',
            options: [
              'Pour enrichir les banques',
              'Pour stimuler l\'économie en facilitant l\'accès au crédit',
              'Pour augmenter l\'inflation',
              'Pour punir les épargnants'
            ],
            correctAnswer: 1,
            explanation: 'En injectant de la liquidité (en achetant des titres), la banque centrale rend l\'argent plus disponible et moins cher. Cela facilite l\'accès au crédit, stimule les investissements et soutient l\'économie, notamment en période de crise.'
          }
        ]
      },
      {
        id: 'acteurs-marche',
        title: 'Les acteurs du marché des capitaux',
        description: 'Qui demande des capitaux ? Qui en offre ?',
        duration: '13 min',
        content: [
          {
            type: 'text',
            content: 'Le marché des capitaux, c\'est un écosystème avec deux grandes catégories d\'acteurs : ceux qui ont besoin d\'argent (demande de capitaux) et ceux qui ont de l\'argent à placer (offre de capitaux). Connaître ces acteurs, c\'est comprendre qui fait tourner le système financier.'
          },
          {
            type: 'keypoints',
            title: 'Demande de capitaux : qui a besoin d\'argent ?',
            points: [
              '🏛️ États : financent leurs déficits en émettant des obligations (ex : OAT en France)',
              '🏢 Entreprises : financent leur croissance, investissements, R&D, développement international',
              '🏦 Banques : se refinancent en émettant des titres sur le marché',
              '🏠 (Parfois) Ménages/PME : mais souvent via le circuit bancaire plutôt que le marché'
            ]
          },
          {
            type: 'keypoints',
            title: 'Offre de capitaux : qui a de l\'argent à placer ?',
            points: [
              '🛡️ Assurances : investissent les primes collectées (horizon long terme)',
              '👴 Fonds de pension : gèrent l\'épargne retraite, investisseurs de long terme',
              '💼 Asset managers : gèrent l\'argent de leurs clients (particuliers, institutions)',
              '🌍 Fonds souverains : États qui investissent leurs ressources (ex : pétrole norvégien)'
            ]
          },
          {
            type: 'diagram',
            title: 'Le circuit complet',
            items: [
              'Épargnants → placent leur argent via assurances, fonds de pension, asset managers',
              'Ces institutions → achètent des titres sur le marché des capitaux',
              'Émetteurs (États, entreprises) → reçoivent les fonds',
              'Émetteurs → utilisent les fonds pour investir, se développer, financer leurs projets',
              'Retour : intérêts, dividendes → investisseurs → épargnants'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : Le parcours de votre épargne retraite',
            content: 'Vous cotisez 200€/mois à votre fonds de pension. Ce fonds collecte des milliards d\'euros de milliers de personnes. Il investit cet argent : il achète des obligations d\'État français (OAT), des actions LVMH, des obligations d\'entreprises comme Orange. L\'État français utilise cet argent pour construire des infrastructures. LVMH l\'utilise pour ouvrir des boutiques en Asie. Orange l\'utilise pour déployer la 5G. En échange, vous recevrez (à la retraite) les intérêts et dividendes générés par ces investissements.',
            highlight: 'Votre épargne finance l\'économie réelle, et en retour, vous recevez un rendement.'
          },
          {
            type: 'keypoints',
            title: 'Surplus vs Déficit budgétaire',
            points: [
              '✅ Surplus : recettes > dépenses (l\'agent peut épargner ou investir)',
              '❌ Déficit : dépenses > recettes (l\'agent doit emprunter)',
              '🏛️ Exemple : la France a un déficit budgétaire → elle émet des OAT pour se financer',
              '🏢 Exemple : une startup en croissance a un déficit → elle lève des fonds'
            ]
          },
          {
            type: 'text',
            content: 'Les fonds de pension et les assurances sont des investisseurs de long terme : ils peuvent garder des titres pendant 10, 20, 30 ans. C\'est idéal pour financer des projets de long terme comme les infrastructures ou la R&D. Les asset managers gèrent des stratégies plus variées selon les besoins de leurs clients.'
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce qu\'un agent en déficit budgétaire ?',
            options: [
              'Un agent dont les recettes dépassent les dépenses',
              'Un agent dont les dépenses dépassent les recettes',
              'Un agent qui a fait faillite',
              'Un agent qui ne paie pas ses impôts'
            ],
            correctAnswer: 1,
            explanation: 'Un agent en déficit a des dépenses supérieures à ses recettes : il doit donc emprunter ou lever des fonds. C\'est le cas de la France qui a un déficit budgétaire et émet des obligations (OAT) pour se financer.'
          },
          {
            type: 'quiz',
            question: 'Que sont les OAT ?',
            options: [
              'Des actions de l\'État français',
              'Des obligations émises par l\'État français',
              'Des produits dérivés',
              'Des fonds de pension'
            ],
            correctAnswer: 1,
            explanation: 'Les OAT (Obligations Assimilables du Trésor) sont des obligations émises par l\'État français pour financer son déficit budgétaire. Les investisseurs prêtent de l\'argent à l\'État qui s\'engage à rembourser avec intérêts.'
          },
          {
            type: 'quiz',
            question: 'Quel acteur est typiquement un investisseur de très long terme ?',
            options: [
              'Un trader qui achète et vend dans la journée',
              'Un fonds de pension qui gère l\'épargne retraite',
              'Une banque qui prête à court terme',
              'Un particulier qui spécule'
            ],
            correctAnswer: 1,
            explanation: 'Les fonds de pension gèrent l\'épargne retraite sur des horizons de 20, 30, 40 ans. Ce sont des investisseurs de très long terme, idéaux pour financer des projets de long terme comme les infrastructures.'
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce qu\'un fonds souverain ?',
            options: [
              'Un fonds géré par des particuliers',
              'Un fonds d\'État qui investit les ressources nationales',
              'Un fonds qui investit uniquement en obligations',
              'Un fonds qui gère les retraites'
            ],
            correctAnswer: 1,
            explanation: 'Un fonds souverain est un fonds d\'investissement détenu par un État, qui investit une partie de ses ressources (souvent issues de matières premières). Exemple : le fonds norvégien alimenté par les revenus du pétrole et du gaz.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi les assurances investissent-elles sur le marché des capitaux ?',
            options: [
              'Pour spéculer et faire des profits rapides',
              'Pour placer les primes collectées et générer des rendements',
              'Parce que c\'est obligatoire par la loi',
              'Pour aider les entreprises gratuitement'
            ],
            correctAnswer: 1,
            explanation: 'Les assurances collectent des primes auprès de leurs clients. Elles doivent placer cet argent pour générer des rendements qui leur permettront de payer les sinistres futurs et de rémunérer leurs clients. Elles investissent donc sur le marché des capitaux.'
          }
        ]
      },
      {
        id: 'intermediation-desintermediation',
        title: 'Intermédiation vs Désintermédiation',
        description: 'Financement bancaire ou financement de marché ?',
        duration: '12 min',
        content: [
          {
            type: 'text',
            content: 'Quand une entreprise a besoin d\'argent, elle peut passer par sa banque (intermédiation) ou aller directement sur le marché des capitaux (désintermédiation). Ces deux circuits de financement coexistent et se complètent. Comprendre leur différence, c\'est comprendre l\'architecture du système financier.'
          },
          {
            type: 'keypoints',
            title: 'Financement bancaire : l\'intermédiation',
            points: [
              '🏦 La banque joue le rôle d\'intermédiaire entre épargnants et emprunteurs',
              '💰 La banque collecte l\'épargne (dépôts) et prête aux entreprises',
              '🛡️ La banque porte le risque sur son bilan',
              '📊 Circuit : Épargnant → Banque → Emprunteur'
            ]
          },
          {
            type: 'keypoints',
            title: 'Financement de marché : la désintermédiation',
            points: [
              '📈 L\'entreprise émet des titres directement sur le marché',
              '🤝 Les investisseurs achètent ces titres sans passer par une banque',
              '⚠️ Les investisseurs portent directement le risque',
              '📊 Circuit : Épargnant → Marché → Emprunteur (plus direct)'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : Carrefour a besoin de 200 millions d\'euros',
            content: 'Scénario 1 (Intermédiation) : Carrefour emprunte 200M€ à BNP Paribas. La banque a collecté cet argent via les dépôts de ses clients. Si Carrefour ne rembourse pas, c\'est la banque qui perd de l\'argent (elle porte le risque). Scénario 2 (Désintermédiation) : Carrefour émet des obligations pour 200M€ sur le marché. Des investisseurs (assurances, fonds) achètent ces obligations. Si Carrefour ne rembourse pas, ce sont ces investisseurs qui perdent de l\'argent (ils portent le risque directement).',
            highlight: 'Dans le financement bancaire, la banque est un "tampon" qui porte le risque. Dans le financement de marché, l\'investisseur porte le risque directement.'
          },
          {
            type: 'text',
            content: 'Attention : même dans le financement de marché, il existe des intermédiaires ! Les banques d\'investissement organisent les émissions, les brokers facilitent les échanges, les bourses fournissent l\'infrastructure. Mais ces intermédiaires ne portent pas le risque de crédit sur leur bilan, contrairement aux banques de dépôt.'
          },
          {
            type: 'diagram',
            title: 'Les deux circuits de financement',
            items: [
              'Circuit bancaire : Épargnant → Dépôt → Banque (porte le risque) → Prêt → Entreprise',
              'Circuit de marché : Épargnant → Investissement → Marché → Titre → Entreprise',
              'Dans les deux cas, l\'épargne finance l\'économie',
              'Mais le porteur du risque change : banque vs investisseur',
              'Les deux circuits coexistent et se complètent'
            ]
          },
          {
            type: 'keypoints',
            title: 'Pourquoi les deux coexistent ?',
            points: [
              '🏦 Banques : pratiques pour les PME, prêts personnalisés, relation de proximité',
              '📈 Marché : adapté aux grandes entreprises, volumes importants, diversification des sources',
              '⚖️ Les entreprises utilisent souvent les deux pour optimiser leur financement',
              '🌍 Le marché permet aussi de financer à l\'international plus facilement'
            ]
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce que l\'intermédiation financière ?',
            options: [
              'Le financement direct sur le marché des capitaux',
              'Le financement via une banque qui joue le rôle d\'intermédiaire',
              'L\'achat d\'actions en bourse',
              'La gestion de risques avec des dérivés'
            ],
            correctAnswer: 1,
            explanation: 'L\'intermédiation, c\'est quand une banque se place entre les épargnants et les emprunteurs. Elle collecte l\'épargne et prête aux entreprises, en portant le risque sur son bilan.'
          },
          {
            type: 'quiz',
            question: 'Dans le financement de marché, qui porte le risque de crédit ?',
            options: [
              'La banque centrale',
              'La banque d\'investissement qui organise l\'émission',
              'Les investisseurs qui achètent les titres',
              'L\'État'
            ],
            correctAnswer: 2,
            explanation: 'Dans le financement de marché (désintermédiation), ce sont les investisseurs qui portent directement le risque. Si l\'émetteur fait défaut, ils perdent leur argent. Les banques d\'investissement facilitent l\'opération mais ne portent pas le risque.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi parle-t-on de "désintermédiation" pour le marché des capitaux ?',
            options: [
              'Parce qu\'il n\'y a aucun intermédiaire',
              'Parce que le financement est plus direct, sans banque qui porte le risque',
              'Parce que c\'est interdit aux banques',
              'Parce que c\'est moins cher'
            ],
            correctAnswer: 1,
            explanation: 'On parle de désintermédiation car le financement est plus direct : l\'entreprise émet des titres, les investisseurs les achètent. Il y a toujours des intermédiaires (bourses, brokers), mais pas de banque qui porte le risque comme dans le prêt bancaire classique.'
          },
          {
            type: 'quiz',
            question: 'Une PME de 50 employés a besoin de 500 000€. Quel circuit est le plus adapté ?',
            options: [
              'Émettre des obligations sur le marché',
              'Faire une introduction en bourse',
              'Emprunter à sa banque (intermédiation)',
              'Émettre des produits dérivés'
            ],
            correctAnswer: 2,
            explanation: 'Pour une PME et un montant modeste, le financement bancaire est plus adapté : plus simple, plus rapide, et la banque peut proposer un prêt personnalisé. Le marché des capitaux est plutôt réservé aux grandes entreprises et aux montants importants.'
          },
          {
            type: 'quiz',
            question: 'Quelle affirmation est vraie ?',
            options: [
              'Le marché des capitaux va remplacer les banques',
              'Les banques vont remplacer le marché des capitaux',
              'Les deux circuits coexistent et se complètent',
              'Il faut choisir entre les deux'
            ],
            correctAnswer: 2,
            explanation: 'Les deux circuits sont complémentaires. Les banques sont adaptées aux PME et aux prêts personnalisés. Le marché est adapté aux grandes entreprises et aux volumes importants. Les grandes entreprises utilisent souvent les deux pour diversifier leurs sources de financement.'
          }
        ]
      },
      {
        id: 'dette-vs-capital',
        title: 'Dette vs Capital : deux logiques de financement',
        description: 'Comprendre la différence entre prêter et devenir propriétaire',
        duration: '14 min',
        content: [
          {
            type: 'text',
            content: 'Quand une entreprise a besoin d\'argent, elle a deux grandes options : emprunter (dette) ou vendre des parts de propriété (capital). Ces deux choix ont des conséquences très différentes pour l\'entreprise et pour l\'investisseur. Comprendre cette distinction est fondamental en finance de marché.'
          },
          {
            type: 'keypoints',
            title: 'Dette (Obligation) : vous êtes créancier',
            points: [
              '💰 Vous prêtez de l\'argent, l\'entreprise s\'engage à rembourser',
              '📅 Rendement prévisible : coupons (intérêts) + remboursement à l\'échéance',
              '🛡️ Priorité en cas de problème : les créanciers sont payés avant les actionnaires',
              '⚖️ Risque modéré (sauf si l\'émetteur fait défaut)'
            ]
          },
          {
            type: 'keypoints',
            title: 'Capital (Action) : vous êtes copropriétaire',
            points: [
              '🏢 Vous achetez une part de l\'entreprise, vous devenez actionnaire',
              '📈 Rendement incertain : dividendes + variation du prix de l\'action',
              '🎢 Gain potentiel illimité, mais perte limitée à votre mise',
              '⚠️ Dernier servi : en cas de liquidation, les actionnaires passent après les créanciers'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : Airbus a besoin de 100 millions d\'euros',
            content: 'Option 1 (Dette) : Airbus émet des obligations à 3% sur 5 ans. Vous prêtez 10 000€. Chaque année, vous recevez 300€ d\'intérêts. Au bout de 5 ans, on vous rembourse vos 10 000€. Peu importe si Airbus fait des profits ou non, vous recevez vos 300€ (sauf défaut). Option 2 (Capital) : Airbus émet des actions. Vous achetez pour 10 000€. Si Airbus prospère, vos actions peuvent valoir 15 000€ ou plus. Si Airbus va mal, elles peuvent tomber à 5 000€. Vous recevez des dividendes seulement si l\'entreprise décide d\'en verser.',
            highlight: 'Avec la dette, vous êtes prêteur (rendement fixe, risque modéré). Avec le capital, vous êtes propriétaire (rendement variable, risque plus élevé).'
          },
          {
            type: 'diagram',
            title: 'Ordre de priorité en cas de liquidation',
            items: [
              '1️⃣ Créanciers garantis (prêts avec garantie)',
              '2️⃣ Obligataires (créanciers non garantis)',
              '3️⃣ Actionnaires privilégiés',
              '4️⃣ Actionnaires ordinaires (les derniers servis)',
              'Si l\'argent manque, les derniers de la liste ne récupèrent rien'
            ]
          },
          {
            type: 'text',
            content: 'Cette différence de priorité explique pourquoi les obligations sont généralement moins risquées que les actions. En contrepartie, le rendement attendu sur les actions est plus élevé : c\'est la relation risque-rendement.'
          },
          {
            type: 'keypoints',
            title: 'La relation risque-rendement (principe fondamental)',
            points: [
              '📊 Plus un investissement est risqué, plus le rendement exigé est élevé',
              '💡 Ce n\'est pas une garantie de gain, mais une logique de marché',
              '⚖️ Les investisseurs demandent une compensation pour prendre plus de risque',
              '🎯 Actions > Obligations > Livret A (en termes de risque ET de rendement attendu)'
            ]
          },
          {
            type: 'quiz',
            question: 'Quelle est la différence principale entre une obligation et une action ?',
            options: [
              'L\'obligation est plus chère que l\'action',
              'L\'obligation est un prêt, l\'action est une part de propriété',
              'L\'obligation rapporte toujours plus que l\'action',
              'Il n\'y a pas de différence'
            ],
            correctAnswer: 1,
            explanation: 'L\'obligation représente une dette (vous prêtez), tandis que l\'action représente du capital (vous devenez copropriétaire). Cette distinction fondamentale change tout : rendement, risque, et priorité de paiement.'
          },
          {
            type: 'quiz',
            question: 'En cas de liquidation d\'une entreprise, qui est payé en premier ?',
            options: [
              'Les actionnaires',
              'Les créanciers (dont les obligataires)',
              'Les employés',
              'Tout le monde en même temps'
            ],
            correctAnswer: 1,
            explanation: 'Les créanciers (dont les obligataires) ont la priorité sur les actionnaires. C\'est pourquoi la dette est généralement moins risquée : même si l\'entreprise va mal, les créanciers sont remboursés en premier.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi le rendement attendu d\'une action est-il généralement plus élevé que celui d\'une obligation ?',
            options: [
              'Parce que les actions sont plus faciles à vendre',
              'Parce que les actions sont plus risquées',
              'Parce que les entreprises préfèrent les actionnaires',
              'Ce n\'est pas vrai, les obligations rapportent plus'
            ],
            correctAnswer: 1,
            explanation: 'C\'est la relation risque-rendement : les actions sont plus risquées (pas de garantie de remboursement, dernier servi en cas de problème), donc les investisseurs exigent un rendement potentiel plus élevé en compensation.'
          },
          {
            type: 'quiz',
            question: 'Vous achetez une obligation à 4% sur 10 ans. Que recevez-vous ?',
            options: [
              'Uniquement le remboursement dans 10 ans',
              'Des intérêts chaque année + le remboursement à la fin',
              'Des dividendes si l\'entreprise fait des profits',
              'Une part de propriété de l\'entreprise'
            ],
            correctAnswer: 1,
            explanation: 'Avec une obligation, vous recevez des coupons (intérêts) régulièrement (ici 4% par an) et le remboursement du capital à l\'échéance (dans 10 ans). C\'est un flux de paiement prévisible, contrairement aux actions.'
          },
          {
            type: 'quiz',
            question: 'Quelle affirmation est vraie concernant les actions ?',
            options: [
              'Le gain est limité mais la perte peut être illimitée',
              'Le gain est illimité mais la perte est limitée à la mise',
              'Gain et perte sont tous deux illimités',
              'Gain et perte sont tous deux limités'
            ],
            correctAnswer: 1,
            explanation: 'Sur une action classique, vous ne pouvez pas perdre plus que votre investissement initial (perte maximale = 100% de votre mise), mais le gain potentiel est théoriquement illimité si l\'entreprise prospère. C\'est l\'asymétrie du capital.'
          }
        ]
      },
      {
        id: 'primaire-secondaire',
        title: 'Marché primaire vs marché secondaire',
        description: 'Comprendre la différence entre émission et échange de titres',
        duration: '12 min',
        content: [
          {
            type: 'text',
            content: 'Quand on parle de marchés financiers, il y a en fait deux "étages" : le marché primaire (où naissent les titres) et le marché secondaire (où ils s\'échangent). Comprendre cette distinction est essentiel pour saisir comment fonctionne le financement des entreprises.'
          },
          {
            type: 'keypoints',
            title: 'Les différences clés',
            points: [
              'Marché primaire : émission de nouveaux titres, l\'argent va à l\'entreprise',
              'Marché secondaire : échange entre investisseurs, l\'entreprise ne reçoit rien',
              'Le secondaire assure la liquidité : on peut revendre facilement',
              'Sans marché secondaire, personne n\'achèterait sur le primaire'
            ]
          },
          {
            type: 'diagram',
            title: 'Le parcours d\'une action',
            items: [
              'Émission : l\'entreprise crée 1000 actions à 10€ (marché primaire)',
              'Vente initiale : des investisseurs achètent ces actions, l\'entreprise reçoit 10 000€',
              'Échanges : les investisseurs revendent entre eux à 12€, 15€, 8€... (marché secondaire)',
              'L\'entreprise garde ses 10 000€ initiaux, seul le prix entre investisseurs change'
            ]
          },
          {
            type: 'example',
            title: 'Exemple : L\'introduction en bourse (IPO)',
            content: 'Airbnb décide d\'entrer en bourse en 2020. Elle émet 50 millions d\'actions à 68$ chacune sur le marché primaire. Elle lève 3,4 milliards de dollars. Le lendemain, ces actions s\'échangent à 144$ sur le marché secondaire (Nasdaq). Airbnb ne reçoit pas cet argent supplémentaire : ce sont les premiers acheteurs qui font une plus-value.',
            highlight: 'L\'IPO est le passage du marché primaire au secondaire. L\'entreprise ne lève de l\'argent qu\'une seule fois, lors de l\'émission initiale.'
          },
          {
            type: 'text',
            content: 'Pourquoi le marché secondaire est-il crucial ? Parce qu\'il offre de la liquidité. Si vous ne pouviez jamais revendre vos actions, vous n\'en achèteriez jamais ! Le secondaire rend le primaire possible.'
          },
          {
            type: 'quiz',
            question: 'Une entreprise émet 1000 obligations à 100€. Un an après, ces obligations s\'échangent à 110€. Combien l\'entreprise a-t-elle levé au total ?',
            options: [
              '100 000€ (uniquement l\'émission initiale)',
              '110 000€ (le nouveau prix)',
              '210 000€ (émission + échanges)',
              'Cela dépend du nombre d\'échanges'
            ],
            correctAnswer: 0,
            explanation: 'L\'entreprise ne lève de l\'argent que sur le marché primaire, lors de l\'émission. Les échanges ultérieurs sur le marché secondaire se font entre investisseurs, l\'entreprise n\'en tire aucun revenu supplémentaire.'
          },
          {
            type: 'quiz',
            question: 'Quel est le rôle principal du marché secondaire ?',
            options: [
              'Permettre aux entreprises de lever des fonds',
              'Assurer la liquidité des titres',
              'Fixer le prix d\'émission des actions',
              'Réguler les entreprises cotées'
            ],
            correctAnswer: 1,
            explanation: 'Le marché secondaire permet aux investisseurs de revendre leurs titres facilement. Cette liquidité est essentielle : sans elle, personne n\'achèterait sur le marché primaire car on serait "coincé" avec ses titres.'
          },
          {
            type: 'quiz',
            question: 'Qu\'est-ce qu\'une IPO (Introduction en Bourse) ?',
            options: [
              'Le premier échange d\'une action sur le marché secondaire',
              'Le passage d\'une entreprise du marché primaire au secondaire',
              'Une augmentation de capital d\'une entreprise déjà cotée',
              'La fermeture du marché primaire'
            ],
            correctAnswer: 1,
            explanation: 'L\'IPO est le moment où une entreprise émet ses actions pour la première fois (marché primaire) et où ces actions deviennent ensuite échangeables sur le marché secondaire. C\'est la "naissance boursière" de l\'entreprise.'
          },
          {
            type: 'quiz',
            question: 'Si le cours d\'une action passe de 50€ à 80€ sur le marché secondaire, que se passe-t-il pour l\'entreprise ?',
            options: [
              'Elle gagne 30€ par action',
              'Elle peut lever plus d\'argent automatiquement',
              'Rien, elle ne reçoit pas cet argent',
              'Elle doit rembourser la différence'
            ],
            correctAnswer: 2,
            explanation: 'Les variations de prix sur le marché secondaire n\'affectent pas directement les finances de l\'entreprise. Elle a déjà reçu son argent lors de l\'émission. Seuls les investisseurs qui revendent font des gains ou des pertes.'
          },
          {
            type: 'quiz',
            question: 'Pourquoi une entreprise s\'intéresse-t-elle au marché secondaire si elle n\'en tire pas d\'argent ?',
            options: [
              'Elle n\'y a aucun intérêt',
              'Un marché secondaire actif facilite les futures levées de fonds',
              'Elle peut racheter ses propres actions',
              'Les deux réponses précédentes sont vraies'
            ],
            correctAnswer: 3,
            explanation: 'Même si l\'entreprise ne tire pas d\'argent direct du secondaire, un marché actif et liquide rend ses titres attractifs. Cela facilite les futures augmentations de capital. De plus, l\'entreprise peut racheter ses propres actions sur le secondaire pour diverses raisons stratégiques.'
          }
        ]
      }
    ]
  },
  {
    id: 'instruments',
    title: 'Les Instruments Financiers',
    description: 'Actions, obligations, produits dérivés : comprendre les différents types de titres',
    icon: FileText,
    color: 'bg-green-100',
    lessons: []
  },
  {
    id: 'obligations',
    title: 'Les Obligations',
    description: 'Fonctionnement, valorisation et risques des titres de dette',
    icon: FileText,
    color: 'bg-purple-100',
    lessons: [
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
      }
    ]
  },
  {
    id: 'actions',
    title: 'Les Actions',
    description: 'Titres de propriété, dividendes et valorisation',
    icon: TrendingUp,
    color: 'bg-red-100',
    lessons: []
  },
  {
    id: 'taux',
    title: 'Les Taux d\'Intérêt',
    description: 'Comprendre les taux, leur impact et leur évolution',
    icon: Percent,
    color: 'bg-yellow-100',
    lessons: []
  },
  {
    id: 'risques',
    title: 'Gestion des Risques',
    description: 'Identifier, mesurer et gérer les différents types de risques',
    icon: Shield,
    color: 'bg-orange-100',
    lessons: []
  },
  {
    id: 'derives',
    title: 'Produits Dérivés',
    description: 'Options, futures, swaps : comprendre ces instruments complexes',
    icon: Repeat,
    color: 'bg-indigo-100',
    lessons: []
  }
]
