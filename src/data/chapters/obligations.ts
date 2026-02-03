import { Lesson } from '../../types'

export const obligationsLessons: Lesson[] = [
  {
    id: 'definition-obligation',
    title: 'Qu\'est-ce qu\'une obligation ?',
    titleEn: 'What is a Bond?',
    description: 'Comprendre le fonctionnement d\'une obligation et ses composantes',
    descriptionEn: 'Understanding how a bond works and its components',
    duration: '12 min',
    content: [
      {
        type: 'text',
        content: 'Imaginez que vous prêtez 1 000€ à une entreprise. En échange, elle s\'engage à vous payer des intérêts chaque année et à vous rembourser vos 1 000€ dans 5 ans. C\'est exactement ce qu\'est une obligation : un prêt structuré et négociable sur le marché.',
        contentEn: 'Imagine you lend €1,000 to a company. In return, it commits to paying you interest each year and reimbursing your €1,000 in 5 years. That\'s exactly what a bond is: a structured and tradable loan on the market.'
      },
      {
        type: 'keypoints',
        title: 'Obligation : les 3 éléments clés',
        titleEn: 'Bond: The 3 Key Elements',
        points: [
          '💰 Nominal (Principal) : le montant que vous prêtez et qui sera remboursé à la fin',
          '💵 Coupon : l\'intérêt que vous recevez régulièrement (généralement chaque année)',
          '📅 Maturité : la date à laquelle l\'emprunteur vous rembourse le nominal',
          '🏢 Émetteur : celui qui emprunte (État, entreprise, banque)'
        ],
        pointsEn: [
          '💰 Face Value (Principal): the amount you lend that will be repaid at the end',
          '💵 Coupon: the interest you receive regularly (usually annually)',
          '📅 Maturity: the date when the borrower repays you the principal',
          '🏢 Issuer: the one who borrows (Government, company, bank)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Une obligation d\'entreprise',
        titleEn: 'Example: A Corporate Bond',
        content: 'Renault émet une obligation : Nominal = 1 000€, Coupon = 5%, Maturité = 3 ans. Vous achetez cette obligation pour 1 000€. Année 1 : vous recevez 50€ (5% de 1 000€). Année 2 : vous recevez 50€. Année 3 : vous recevez 50€ + 1 000€ (remboursement du nominal). Total reçu : 1 150€ sur 3 ans.',
        contentEn: 'Renault issues a bond: Face Value = €1,000, Coupon = 5%, Maturity = 3 years. You buy this bond for €1,000. Year 1: you receive €50 (5% of €1,000). Year 2: you receive €50. Year 3: you receive €50 + €1,000 (principal repayment). Total received: €1,150 over 3 years.',
        highlight: 'Vous êtes créancier de Renault. L\'entreprise vous doit de l\'argent, contrairement à une action où vous seriez copropriétaire.',
        highlightEn: 'You are a creditor of Renault. The company owes you money, unlike a stock where you would be a co-owner.'
      },
      {
        type: 'diagram',
        title: 'Flux de paiement d\'une obligation',
        titleEn: 'Bond Payment Flow',
        items: [
          'Année 0 : Vous prêtez 1 000€ → Renault reçoit 1 000€',
          'Année 1 : Renault vous paie 50€ (coupon)',
          'Année 2 : Renault vous paie 50€ (coupon)',
          'Année 3 : Renault vous paie 50€ (coupon) + 1 000€ (remboursement)',
          'Vous avez récupéré votre capital + les intérêts'
        ],
        itemsEn: [
          'Year 0: You lend €1,000 → Renault receives €1,000',
          'Year 1: Renault pays you €50 (coupon)',
          'Year 2: Renault pays you €50 (coupon)',
          'Year 3: Renault pays you €50 (coupon) + €1,000 (repayment)',
          'You have recovered your capital + interest'
        ]
      },
      {
        type: 'text',
        content: 'Contrairement à une action, une obligation a une durée de vie limitée (la maturité). À l\'échéance, le contrat se termine : vous récupérez votre argent et c\'est fini. Avec une action, vous restez propriétaire tant que vous ne vendez pas.',
        contentEn: 'Unlike a stock, a bond has a limited lifespan (the maturity). At maturity, the contract ends: you get your money back and that\'s it. With a stock, you remain an owner as long as you don\'t sell.'
      },
      {
        type: 'keypoints',
        title: 'Obligation vs Action : rappel',
        titleEn: 'Bond vs Stock: Reminder',
        points: [
          '📜 Obligation = Dette : vous prêtez, vous êtes créancier',
          '📈 Action = Capital : vous achetez une part, vous êtes propriétaire',
          '💰 Obligation : flux prévisibles (coupons + remboursement)',
          '🎲 Action : flux incertains (dividendes variables, pas de remboursement)',
          '🛡️ Obligation : priorité en cas de faillite'
        ],
        pointsEn: [
          '📜 Bond = Debt: you lend, you are a creditor',
          '📈 Stock = Equity: you buy a share, you are an owner',
          '💰 Bond: predictable cash flows (coupons + repayment)',
          '🎲 Stock: uncertain cash flows (variable dividends, no repayment)',
          '🛡️ Bond: priority in case of bankruptcy'
        ]
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le "nominal" d\'une obligation ?',
        questionEn: 'What is the "face value" of a bond?',
        options: [
          'Le prix actuel de l\'obligation sur le marché',
          'Le montant qui sera remboursé à l\'échéance',
          'L\'intérêt annuel versé',
          'La durée de l\'obligation'
        ],
        optionsEn: [
          'The current market price of the bond',
          'The amount that will be repaid at maturity',
          'The annual interest paid',
          'The duration of the bond'
        ],
        correctAnswer: 1,
        explanation: 'Le nominal (ou principal) est le montant que l\'émetteur s\'engage à rembourser à la maturité. C\'est la "valeur faciale" de l\'obligation, souvent 1 000€ ou 100€.',
        explanationEn: 'The face value (or principal) is the amount the issuer commits to repay at maturity. It\'s the "face value" of the bond, often €1,000 or €100.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le coupon d\'une obligation ?',
        questionEn: 'What is the coupon of a bond?',
        options: [
          'Le prix d\'achat de l\'obligation',
          'L\'intérêt périodique versé à l\'investisseur',
          'La date de remboursement',
          'Le risque de l\'obligation'
        ],
        optionsEn: [
          'The purchase price of the bond',
          'The periodic interest paid to the investor',
          'The repayment date',
          'The risk of the bond'
        ],
        correctAnswer: 1,
        explanation: 'Le coupon est l\'intérêt que l\'émetteur verse régulièrement (généralement chaque année) à l\'investisseur. Si le coupon est de 5% sur un nominal de 1 000€, vous recevez 50€ par an.',
        explanationEn: 'The coupon is the interest the issuer pays regularly (usually annually) to the investor. If the coupon is 5% on a face value of €1,000, you receive €50 per year.'
      },
      {
        type: 'quiz',
        question: 'Une obligation avec maturité 5 ans signifie :',
        questionEn: 'A bond with 5-year maturity means:',
        options: [
          'L\'obligation paie des intérêts pendant 5 ans',
          'Le nominal sera remboursé dans 5 ans',
          'Les deux réponses précédentes',
          'L\'obligation ne peut pas être vendue avant 5 ans'
        ],
        optionsEn: [
          'The bond pays interest for 5 years',
          'The principal will be repaid in 5 years',
          'Both previous answers',
          'The bond cannot be sold before 5 years'
        ],
        correctAnswer: 2,
        explanation: 'La maturité indique quand le nominal sera remboursé (dans 5 ans). Pendant ces 5 ans, l\'obligation paie des coupons. Vous pouvez vendre l\'obligation avant l\'échéance sur le marché secondaire.',
        explanationEn: 'Maturity indicates when the principal will be repaid (in 5 years). During these 5 years, the bond pays coupons. You can sell the bond before maturity on the secondary market.'
      },
      {
        type: 'quiz',
        question: 'Quand vous achetez une obligation, vous devenez :',
        questionEn: 'When you buy a bond, you become:',
        options: [
          'Propriétaire de l\'entreprise',
          'Créancier de l\'entreprise',
          'Employé de l\'entreprise',
          'Actionnaire de l\'entreprise'
        ],
        optionsEn: [
          'Owner of the company',
          'Creditor of the company',
          'Employee of the company',
          'Shareholder of the company'
        ],
        correctAnswer: 1,
        explanation: 'En achetant une obligation, vous prêtez de l\'argent : vous devenez créancier. L\'entreprise vous doit de l\'argent. Vous n\'êtes pas propriétaire comme avec une action.',
        explanationEn: 'By buying a bond, you lend money: you become a creditor. The company owes you money. You are not an owner like with a stock.'
      },
      {
        type: 'quiz',
        question: 'Obligation de 1 000€, coupon 4%, maturité 3 ans. Combien recevez-vous au total ?',
        questionEn: '€1,000 bond, 4% coupon, 3-year maturity. How much do you receive in total?',
        options: [
          '1 000€',
          '1 040€',
          '1 120€',
          '1 200€'
        ],
        optionsEn: [
          '€1,000',
          '€1,040',
          '€1,120',
          '€1,200'
        ],
        correctAnswer: 2,
        explanation: 'Vous recevez : 40€ (an 1) + 40€ (an 2) + 40€ + 1 000€ (an 3) = 1 120€ au total. Les coupons (3 × 40€ = 120€) + le remboursement du nominal (1 000€).',
        explanationEn: 'You receive: €40 (year 1) + €40 (year 2) + €40 + €1,000 (year 3) = €1,120 total. The coupons (3 × €40 = €120) + principal repayment (€1,000).'
      }
    ]
  },
  {
    id: 'prix-rendement',
    title: 'Prix et rendement : la relation clé',
    titleEn: 'Price and Yield: The Key Relationship',
    description: 'Comprendre la différence entre coupon et yield, et pourquoi les prix varient',
    descriptionEn: 'Understanding the difference between coupon and yield, and why prices vary',
    duration: '14 min',
    content: [
      {
        type: 'text',
        content: 'Voici un point crucial : le coupon d\'une obligation ne change jamais, mais son prix sur le marché varie constamment. Cette variation de prix change le rendement réel (yield) pour celui qui achète l\'obligation. Comprendre cette mécanique est essentiel.',
        contentEn: 'Here\'s a crucial point: a bond\'s coupon never changes, but its market price varies constantly. This price variation changes the actual yield for whoever buys the bond. Understanding this mechanism is essential.'
      },
      {
        type: 'keypoints',
        title: 'Coupon vs Yield : la différence fondamentale',
        titleEn: 'Coupon vs Yield: The Fundamental Difference',
        points: [
          '💵 Coupon : fixé à l\'émission, ne change JAMAIS (ex : 5% = 50€/an sur 1 000€)',
          '📊 Yield (rendement) : varie selon le prix d\'achat sur le marché',
          '🔄 Si le prix baisse, le yield augmente (même coupon, prix plus bas)',
          '🔄 Si le prix monte, le yield baisse (même coupon, prix plus élevé)'
        ],
        pointsEn: [
          '💵 Coupon: fixed at issuance, NEVER changes (e.g., 5% = €50/year on €1,000)',
          '📊 Yield (return): varies according to the purchase price on the market',
          '🔄 If price falls, yield increases (same coupon, lower price)',
          '🔄 If price rises, yield decreases (same coupon, higher price)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Même obligation, rendements différents',
        titleEn: 'Example: Same Bond, Different Yields',
        content: 'Obligation : Nominal 1 000€, Coupon 5% (= 50€/an). Cas 1 - Achat au pair : Vous payez 1 000€. Vous recevez 50€/an. Yield = 50/1000 = 5%. Cas 2 - Achat sur le marché : Le prix a baissé à 900€. Vous payez 900€. Vous recevez toujours 50€/an (le coupon ne change pas !). Yield = 50/900 = 5,56%. Cas 3 - Prix monté à 1 100€ : Vous payez 1 100€. Vous recevez toujours 50€/an. Yield = 50/1100 = 4,55%.',
        contentEn: 'Bond: Face Value €1,000, Coupon 5% (= €50/year). Case 1 - Purchase at par: You pay €1,000. You receive €50/year. Yield = 50/1000 = 5%. Case 2 - Market purchase: Price dropped to €900. You pay €900. You still receive €50/year (coupon doesn\'t change!). Yield = 50/900 = 5.56%. Case 3 - Price rose to €1,100: You pay €1,100. You still receive €50/year. Yield = 50/1100 = 4.55%.',
        highlight: 'Le coupon reste à 50€ dans tous les cas. C\'est le prix qui change, et donc le rendement effectif pour l\'acheteur.',
        highlightEn: 'The coupon remains at €50 in all cases. It\'s the price that changes, and therefore the effective yield for the buyer.'
      },
      {
        type: 'diagram',
        title: 'La relation inverse prix-rendement',
        titleEn: 'The Inverse Price-Yield Relationship',
        items: [
          'Prix de l\'obligation BAISSE → Yield AUGMENTE',
          'Prix de l\'obligation MONTE → Yield BAISSE',
          'Pourquoi ? Le coupon est fixe, donc si vous payez moins cher, votre rendement est meilleur',
          'Si vous payez plus cher, votre rendement est moins bon',
          'C\'est une relation mathématique inverse fondamentale'
        ],
        itemsEn: [
          'Bond price FALLS → Yield INCREASES',
          'Bond price RISES → Yield DECREASES',
          'Why? The coupon is fixed, so if you pay less, your return is better',
          'If you pay more, your return is lower',
          'It\'s a fundamental inverse mathematical relationship'
        ]
      },
      {
        type: 'text',
        content: 'Pourquoi le prix d\'une obligation varie-t-il ? Deux raisons principales : (1) Les taux d\'intérêt du marché changent, (2) La perception du risque de l\'émetteur change. Nous verrons ces risques en détail dans la prochaine leçon.',
        contentEn: 'Why does a bond\'s price vary? Two main reasons: (1) Market interest rates change, (2) The perception of the issuer\'s risk changes. We\'ll see these risks in detail in the next lesson.'
      },
      {
        type: 'keypoints',
        title: 'Achat "au pair" vs sur le marché',
        titleEn: 'Buying "At Par" vs On the Market',
        points: [
          '💯 Au pair : prix = nominal (ex : 1 000€). Le yield = coupon',
          '📉 Sous le pair : prix < nominal (ex : 950€). Le yield > coupon',
          '📈 Au-dessus du pair : prix > nominal (ex : 1 050€). Le yield < coupon',
          '🎯 Le marché ajuste le prix pour que le yield reflète le risque et les taux actuels'
        ],
        pointsEn: [
          '💯 At par: price = face value (e.g., €1,000). Yield = coupon',
          '📉 Below par: price < face value (e.g., €950). Yield > coupon',
          '📈 Above par: price > face value (e.g., €1,050). Yield < coupon',
          '🎯 The market adjusts the price so the yield reflects current risk and rates'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Pourquoi acheter au-dessus du pair ?',
        titleEn: 'Example: Why Buy Above Par?',
        content: 'Une obligation émise il y a 5 ans a un coupon de 6%. Aujourd\'hui, les nouvelles obligations similaires ont des coupons de 3% (les taux ont baissé). Votre obligation à 6% est très attractive ! Les investisseurs sont prêts à payer plus cher (ex : 1 200€ au lieu de 1 000€) pour obtenir ce coupon élevé. Le prix monte au-dessus du pair, et le yield s\'ajuste à environ 3% pour être cohérent avec le marché.',
        contentEn: 'A bond issued 5 years ago has a 6% coupon. Today, similar new bonds have 3% coupons (rates have fallen). Your 6% bond is very attractive! Investors are willing to pay more (e.g., €1,200 instead of €1,000) to get this high coupon. The price rises above par, and the yield adjusts to about 3% to be consistent with the market.',
        highlight: 'Le marché ajuste automatiquement les prix pour que les yields soient cohérents entre obligations comparables.',
        highlightEn: 'The market automatically adjusts prices so yields are consistent between comparable bonds.'
      },
      {
        type: 'quiz',
        question: 'Le coupon d\'une obligation peut-il changer après l\'émission ?',
        questionEn: 'Can a bond\'s coupon change after issuance?',
        options: [
          'Oui, il varie selon le marché',
          'Non, il est fixé à l\'émission et ne change jamais',
          'Oui, si l\'entreprise décide de le modifier',
          'Oui, si les taux d\'intérêt changent'
        ],
        optionsEn: [
          'Yes, it varies with the market',
          'No, it is fixed at issuance and never changes',
          'Yes, if the company decides to modify it',
          'Yes, if interest rates change'
        ],
        correctAnswer: 1,
        explanation: 'Le coupon est fixé contractuellement à l\'émission et ne change JAMAIS. C\'est un engagement ferme de l\'émetteur. Seul le prix de l\'obligation varie sur le marché, ce qui fait varier le yield.',
        explanationEn: 'The coupon is contractually fixed at issuance and NEVER changes. It\'s a firm commitment from the issuer. Only the bond\'s price varies on the market, which makes the yield vary.'
      },
      {
        type: 'quiz',
        question: 'Obligation : nominal 1 000€, coupon 4%, prix actuel 800€. Quel est le yield approximatif ?',
        questionEn: 'Bond: €1,000 face value, 4% coupon, current price €800. What is the approximate yield?',
        options: [
          '4%',
          '3,2%',
          '5%',
          '8%'
        ],
        optionsEn: [
          '4%',
          '3.2%',
          '5%',
          '8%'
        ],
        correctAnswer: 2,
        explanation: 'Coupon annuel = 40€ (4% de 1 000€). Prix payé = 800€. Yield simplifié = 40/800 = 5%. Le prix a baissé, donc le yield a augmenté par rapport au coupon de 4%.',
        explanationEn: 'Annual coupon = €40 (4% of €1,000). Price paid = €800. Simplified yield = 40/800 = 5%. The price fell, so the yield increased compared to the 4% coupon.'
      },
      {
        type: 'quiz',
        question: 'Quelle est la relation entre prix et yield d\'une obligation ?',
        questionEn: 'What is the relationship between a bond\'s price and yield?',
        options: [
          'Ils varient dans le même sens',
          'Ils varient en sens inverse',
          'Ils sont indépendants',
          'Le yield ne varie jamais'
        ],
        optionsEn: [
          'They vary in the same direction',
          'They vary in opposite directions',
          'They are independent',
          'Yield never varies'
        ],
        correctAnswer: 1,
        explanation: 'C\'est une relation inverse fondamentale : quand le prix monte, le yield baisse. Quand le prix baisse, le yield monte. Le coupon étant fixe, un prix plus bas signifie un meilleur rendement pour l\'acheteur.',
        explanationEn: 'It\'s a fundamental inverse relationship: when price rises, yield falls. When price falls, yield rises. Since the coupon is fixed, a lower price means a better return for the buyer.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'acheter une obligation "au pair" ?',
        questionEn: 'What does buying a bond "at par" mean?',
        options: [
          'L\'acheter au prix du marché',
          'L\'acheter à son nominal (ex : 1 000€)',
          'L\'acheter avec une décote',
          'L\'acheter à deux'
        ],
        optionsEn: [
          'Buying it at market price',
          'Buying it at its face value (e.g., €1,000)',
          'Buying it at a discount',
          'Buying it with someone else'
        ],
        correctAnswer: 1,
        explanation: 'Acheter au pair signifie payer le nominal (la valeur faciale). Si le nominal est 1 000€ et vous payez 1 000€, vous achetez au pair. Dans ce cas, le yield = coupon.',
        explanationEn: 'Buying at par means paying the face value. If the face value is €1,000 and you pay €1,000, you buy at par. In this case, yield = coupon.'
      },
      {
        type: 'quiz',
        question: 'Une obligation se vend 1 100€ pour un nominal de 1 000€. Que peut-on dire ?',
        questionEn: 'A bond sells for €1,100 with a face value of €1,000. What can we say?',
        options: [
          'Son yield est supérieur à son coupon',
          'Son yield est inférieur à son coupon',
          'Son yield égale son coupon',
          'L\'obligation est en défaut'
        ],
        optionsEn: [
          'Its yield is higher than its coupon',
          'Its yield is lower than its coupon',
          'Its yield equals its coupon',
          'The bond is in default'
        ],
        correctAnswer: 1,
        explanation: 'Prix au-dessus du pair (1 100€ > 1 000€) signifie que le yield est inférieur au coupon. L\'obligation est attractive (coupon élevé par rapport au marché), donc les investisseurs paient plus cher, ce qui réduit le yield effectif.',
        explanationEn: 'Price above par (€1,100 > €1,000) means the yield is lower than the coupon. The bond is attractive (high coupon relative to the market), so investors pay more, which reduces the effective yield.'
      }
    ]
  },
  {
    id: 'risques-obligations',
    title: 'Les risques des obligations',
    titleEn: 'Bond Risks',
    description: 'Risque de crédit, risque de taux et impact de la maturité',
    descriptionEn: 'Credit risk, interest rate risk and maturity impact',
    duration: '15 min',
    content: [
      {
        type: 'text',
        content: 'Une obligation n\'est pas un placement sans risque. Son prix fluctue pour deux raisons principales : le risque que l\'émetteur ne puisse pas rembourser (risque de crédit), et l\'évolution des taux d\'intérêt sur le marché (risque de taux). Comprendre ces risques est essentiel pour investir intelligemment.',
        contentEn: 'A bond is not a risk-free investment. Its price fluctuates for two main reasons: the risk that the issuer cannot repay (credit risk), and the evolution of market interest rates (interest rate risk). Understanding these risks is essential for smart investing.'
      },
      {
        type: 'keypoints',
        title: 'Risque de crédit (Credit Risk)',
        titleEn: 'Credit Risk',
        points: [
          '⚠️ Risque que l\'émetteur fasse défaut (ne paie pas les coupons ou ne rembourse pas)',
          '📉 Plus le risque de défaut est élevé, plus le yield exigé est élevé',
          '💰 Donc : prix plus bas pour compenser le risque',
          '🏛️ Exemple : obligation d\'État allemand (AAA) vs entreprise fragile (BB)'
        ],
        pointsEn: [
          '⚠️ Risk that the issuer defaults (doesn\'t pay coupons or doesn\'t repay)',
          '📉 The higher the default risk, the higher the required yield',
          '💰 Therefore: lower price to compensate for risk',
          '🏛️ Example: German government bond (AAA) vs fragile company (BB)'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Risque de crédit en action',
        titleEn: 'Example: Credit Risk in Action',
        content: 'Deux obligations, même maturité (5 ans), même nominal (1 000€). Obligation A : État allemand (AAA), coupon 2%, prix 1 000€, yield 2%. Obligation B : Entreprise en difficulté (BB), coupon 8%, prix 1 000€, yield 8%. Pourquoi cette différence ? L\'Allemagne a une probabilité de défaut quasi nulle. L\'entreprise risque de faire faillite. Les investisseurs exigent 8% pour compenser ce risque, contre seulement 2% pour l\'Allemagne.',
        contentEn: 'Two bonds, same maturity (5 years), same face value (€1,000). Bond A: German government (AAA), 2% coupon, €1,000 price, 2% yield. Bond B: Struggling company (BB), 8% coupon, €1,000 price, 8% yield. Why this difference? Germany has almost zero default probability. The company risks bankruptcy. Investors demand 8% to compensate for this risk, versus only 2% for Germany.',
        highlight: 'Higher credit risk requires higher expected return. C\'est la compensation du risque.',
        highlightEn: 'Higher credit risk requires higher expected return. It\'s risk compensation.'
      },
      {
        type: 'keypoints',
        title: 'Risque de taux d\'intérêt (Interest Rate Risk)',
        titleEn: 'Interest Rate Risk',
        points: [
          '📊 Risque lié à l\'évolution des taux d\'intérêt sur le marché',
          '📈 Taux du marché MONTENT → Prix des obligations BAISSENT',
          '📉 Taux du marché BAISSENT → Prix des obligations MONTENT',
          '🔄 Relation inverse fondamentale'
        ],
        pointsEn: [
          '📊 Risk related to market interest rate changes',
          '📈 Market rates RISE → Bond prices FALL',
          '📉 Market rates FALL → Bond prices RISE',
          '🔄 Fundamental inverse relationship'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Impact d\'une hausse des taux',
        titleEn: 'Example: Impact of Rising Rates',
        content: 'Vous détenez une obligation avec coupon 2%, achetée à 1 000€. Les taux du marché passent de 2% à 4% (la banque centrale a remonté ses taux). Problème : les nouvelles obligations émises aujourd\'hui offrent 4%. Votre obligation à 2% devient moins attractive. Pour la vendre, vous devez baisser le prix à environ 950€. À ce prix, le yield pour l\'acheteur sera proche de 4%, cohérent avec le marché.',
        contentEn: 'You hold a bond with a 2% coupon, bought at €1,000. Market rates rise from 2% to 4% (the central bank raised rates). Problem: new bonds issued today offer 4%. Your 2% bond becomes less attractive. To sell it, you must lower the price to about €950. At this price, the yield for the buyer will be close to 4%, consistent with the market.',
        highlight: 'Quand les taux montent, les obligations existantes perdent de la valeur. C\'est mécanique.',
        highlightEn: 'When rates rise, existing bonds lose value. It\'s mechanical.'
      },
      {
        type: 'diagram',
        title: 'Pourquoi les taux font bouger les prix ?',
        titleEn: 'Why Do Rates Move Prices?',
        items: [
          'Taux du marché à 2% → Obligation coupon 2% vaut 1 000€ (au pair)',
          'Taux du marché montent à 4% → Nouvelles obligations offrent 4%',
          'Votre obligation à 2% est moins attractive',
          'Son prix baisse à ~950€ pour que son yield atteigne ~4%',
          'Le marché ajuste les prix pour égaliser les yields'
        ],
        itemsEn: [
          'Market rate at 2% → 2% coupon bond worth €1,000 (at par)',
          'Market rates rise to 4% → New bonds offer 4%',
          'Your 2% bond is less attractive',
          'Its price falls to ~€950 so its yield reaches ~4%',
          'The market adjusts prices to equalize yields'
        ]
      },
      {
        type: 'text',
        content: 'La maturité joue un rôle crucial dans l\'exposition au risque de taux. Plus la maturité est longue, plus l\'obligation est sensible aux variations de taux. Pourquoi ? Parce que vous êtes "coincé" plus longtemps avec un coupon qui peut devenir obsolète.',
        contentEn: 'Maturity plays a crucial role in interest rate risk exposure. The longer the maturity, the more sensitive the bond is to rate changes. Why? Because you\'re "stuck" longer with a coupon that can become obsolete.'
      },
      {
        type: 'keypoints',
        title: 'Impact de la maturité',
        titleEn: 'Maturity Impact',
        points: [
          '⏱️ Maturité courte (1-3 ans) : faible sensibilité aux taux, vous récupérez vite votre capital',
          '⏳ Maturité longue (10-30 ans) : forte sensibilité aux taux, exposition prolongée',
          '📊 Règle : plus la maturité est longue, plus le prix varie quand les taux changent',
          '🎯 Les obligations longues offrent généralement un yield plus élevé pour compenser ce risque'
        ],
        pointsEn: [
          '⏱️ Short maturity (1-3 years): low rate sensitivity, you quickly recover your capital',
          '⏳ Long maturity (10-30 years): high rate sensitivity, prolonged exposure',
          '📊 Rule: the longer the maturity, the more the price varies when rates change',
          '🎯 Long bonds generally offer higher yield to compensate for this risk'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Maturité courte vs longue',
        titleEn: 'Example: Short vs Long Maturity',
        content: 'Les taux montent de 2% à 4%. Obligation A (maturité 2 ans, coupon 2%) : prix baisse de 1 000€ à ~980€ (-2%). Obligation B (maturité 20 ans, coupon 2%) : prix baisse de 1 000€ à ~700€ (-30%). Pourquoi cette différence ? Avec l\'obligation A, vous récupérez votre capital dans 2 ans, vous pouvez réinvestir aux nouveaux taux. Avec l\'obligation B, vous êtes "coincé" avec 2% pendant 20 ans alors que le marché offre 4%.',
        contentEn: 'Rates rise from 2% to 4%. Bond A (2-year maturity, 2% coupon): price falls from €1,000 to ~€980 (-2%). Bond B (20-year maturity, 2% coupon): price falls from €1,000 to ~€700 (-30%). Why this difference? With bond A, you recover your capital in 2 years, you can reinvest at new rates. With bond B, you\'re "stuck" with 2% for 20 years while the market offers 4%.',
        highlight: 'Plus la maturité est longue, plus le risque de taux est important.',
        highlightEn: 'The longer the maturity, the greater the interest rate risk.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce que le risque de crédit ?',
        questionEn: 'What is credit risk?',
        options: [
          'Le risque que les taux d\'intérêt augmentent',
          'Le risque que l\'émetteur ne puisse pas rembourser',
          'Le risque que l\'obligation perde de la valeur',
          'Le risque de change'
        ],
        optionsEn: [
          'The risk that interest rates increase',
          'The risk that the issuer cannot repay',
          'The risk that the bond loses value',
          'Currency risk'
        ],
        correctAnswer: 1,
        explanation: 'Le risque de crédit (ou risque de défaut) est le risque que l\'émetteur ne soit pas en mesure de payer les coupons ou de rembourser le nominal. Plus ce risque est élevé, plus le yield exigé est important.',
        explanationEn: 'Credit risk (or default risk) is the risk that the issuer is unable to pay coupons or repay the principal. The higher this risk, the higher the required yield.'
      },
      {
        type: 'quiz',
        question: 'Les taux d\'intérêt du marché augmentent. Que se passe-t-il pour le prix des obligations existantes ?',
        questionEn: 'Market interest rates increase. What happens to the price of existing bonds?',
        options: [
          'Il augmente',
          'Il diminue',
          'Il ne change pas',
          'Cela dépend du coupon'
        ],
        optionsEn: [
          'It increases',
          'It decreases',
          'It doesn\'t change',
          'It depends on the coupon'
        ],
        correctAnswer: 1,
        explanation: 'Quand les taux montent, les nouvelles obligations offrent des coupons plus élevés. Les obligations existantes avec des coupons plus bas deviennent moins attractives, donc leur prix baisse. C\'est la relation inverse taux-prix.',
        explanationEn: 'When rates rise, new bonds offer higher coupons. Existing bonds with lower coupons become less attractive, so their price falls. It\'s the inverse rate-price relationship.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi une obligation d\'entreprise risquée offre-t-elle un yield plus élevé ?',
        questionEn: 'Why does a risky corporate bond offer a higher yield?',
        options: [
          'Parce que l\'entreprise est généreuse',
          'Pour compenser le risque de défaut plus élevé',
          'Parce que sa maturité est plus longue',
          'C\'est une erreur du marché'
        ],
        optionsEn: [
          'Because the company is generous',
          'To compensate for higher default risk',
          'Because its maturity is longer',
          'It\'s a market error'
        ],
        correctAnswer: 1,
        explanation: 'Les investisseurs exigent un rendement plus élevé pour compenser le risque de défaut. Si l\'entreprise risque de faire faillite, vous voulez être payé davantage pour prendre ce risque. C\'est la logique risque-rendement.',
        explanationEn: 'Investors demand a higher return to compensate for default risk. If the company risks bankruptcy, you want to be paid more for taking that risk. It\'s the risk-return logic.'
      },
      {
        type: 'quiz',
        question: 'Quelle obligation est la plus sensible aux variations de taux ?',
        questionEn: 'Which bond is most sensitive to rate changes?',
        options: [
          'Obligation maturité 2 ans',
          'Obligation maturité 30 ans',
          'Elles sont toutes aussi sensibles',
          'Cela dépend du coupon uniquement'
        ],
        optionsEn: [
          '2-year maturity bond',
          '30-year maturity bond',
          'They are all equally sensitive',
          'It depends only on the coupon'
        ],
        correctAnswer: 1,
        explanation: 'Plus la maturité est longue, plus l\'obligation est sensible aux variations de taux. Avec une maturité de 30 ans, vous êtes exposé longtemps au risque que les taux changent, donc le prix varie davantage.',
        explanationEn: 'The longer the maturity, the more sensitive the bond is to rate changes. With a 30-year maturity, you\'re exposed for a long time to the risk of rate changes, so the price varies more.'
      },
      {
        type: 'quiz',
        question: 'Les taux du marché baissent de 4% à 2%. Que se passe-t-il pour votre obligation à coupon 4% ?',
        questionEn: 'Market rates fall from 4% to 2%. What happens to your 4% coupon bond?',
        options: [
          'Son prix baisse',
          'Son prix monte',
          'Son coupon baisse à 2%',
          'Rien ne change'
        ],
        optionsEn: [
          'Its price falls',
          'Its price rises',
          'Its coupon falls to 2%',
          'Nothing changes'
        ],
        correctAnswer: 1,
        explanation: 'Votre obligation à 4% devient très attractive quand les nouvelles obligations n\'offrent que 2%. Les investisseurs sont prêts à payer plus cher pour obtenir votre coupon de 4%. Le prix monte au-dessus du pair.',
        explanationEn: 'Your 4% bond becomes very attractive when new bonds only offer 2%. Investors are willing to pay more to get your 4% coupon. The price rises above par.'
      }
    ]
  },
  {
    id: 'types-notation',
    title: 'Types d\'obligations et notation',
    titleEn: 'Bond Types and Ratings',
    description: 'Investment Grade, High Yield et catégories d\'émetteurs',
    descriptionEn: 'Investment Grade, High Yield and issuer categories',
    duration: '13 min',
    content: [
      {
        type: 'text',
        content: 'Toutes les obligations ne se valent pas. Elles sont classées selon la qualité de crédit de leur émetteur, et selon qui les émet. Comprendre ces catégories vous aide à évaluer le risque et le rendement attendu.',
        contentEn: 'Not all bonds are equal. They are classified according to their issuer\'s credit quality and who issues them. Understanding these categories helps you assess risk and expected return.'
      },
      {
        type: 'keypoints',
        title: 'Investment Grade vs High Yield',
        titleEn: 'Investment Grade vs High Yield',
        points: [
          '⭐ Investment Grade (BBB- et au-dessus) : obligations de qualité, risque faible',
          '⚠️ High Yield (BB+ et en dessous) : obligations plus risquées, rendement plus élevé',
          '💰 Logique : plus le risque est élevé, plus le yield est élevé',
          '📊 Les agences de notation (S&P, Moody\'s, Fitch) évaluent la qualité de crédit'
        ],
        pointsEn: [
          '⭐ Investment Grade (BBB- and above): quality bonds, low risk',
          '⚠️ High Yield (BB+ and below): riskier bonds, higher return',
          '💰 Logic: the higher the risk, the higher the yield',
          '📊 Rating agencies (S&P, Moody\'s, Fitch) assess credit quality'
        ]
      },
      {
        type: 'diagram',
        title: 'Échelle de notation simplifiée',
        titleEn: 'Simplified Rating Scale',
        items: [
          'AAA : Qualité maximale (ex : Allemagne, Suisse)',
          'AA, A : Très bonne qualité (ex : France, grandes entreprises solides)',
          'BBB : Bonne qualité (limite Investment Grade)',
          '--- Frontière Investment Grade / High Yield ---',
          'BB, B : Qualité spéculative (High Yield)',
          'CCC et en dessous : Risque élevé de défaut'
        ],
        itemsEn: [
          'AAA: Maximum quality (e.g., Germany, Switzerland)',
          'AA, A: Very good quality (e.g., France, large solid companies)',
          'BBB: Good quality (Investment Grade threshold)',
          '--- Investment Grade / High Yield Boundary ---',
          'BB, B: Speculative quality (High Yield)',
          'CCC and below: High default risk'
        ]
      },
      {
        type: 'example',
        title: 'Exemple : Même entreprise, notation qui change',
        titleEn: 'Example: Same Company, Changing Rating',
        content: 'En 2019, une entreprise a une notation A (Investment Grade). Ses obligations à 10 ans offrent un yield de 3%. En 2020, la crise COVID frappe. L\'entreprise perd de l\'argent, sa notation passe à BB (High Yield). Le prix de ses obligations chute de 1 000€ à 800€. Le yield monte à 6%. Pourquoi ? Le marché anticipe un risque de défaut plus élevé et exige une compensation.',
        contentEn: 'In 2019, a company has an A rating (Investment Grade). Its 10-year bonds offer a 3% yield. In 2020, the COVID crisis hits. The company loses money, its rating drops to BB (High Yield). Its bond price falls from €1,000 to €800. Yield rises to 6%. Why? The market anticipates higher default risk and demands compensation.',
        highlight: 'Une dégradation de notation fait baisser le prix et monter le yield. C\'est le risque de crédit en action.',
        highlightEn: 'A rating downgrade lowers the price and raises the yield. It\'s credit risk in action.'
      },
      {
        type: 'keypoints',
        title: 'Les 3 grandes catégories d\'émetteurs',
        titleEn: 'The 3 Main Issuer Categories',
        points: [
          '🏛️ Government Bonds (obligations d\'État) : États souverains, généralement faible risque',
          '🏢 Corporate Bonds (obligations d\'entreprise) : entreprises privées, risque variable',
          '🏙️ Municipal Bonds (obligations municipales) : collectivités locales, villes, régions'
        ],
        pointsEn: [
          '🏛️ Government Bonds: Sovereign states, generally low risk',
          '🏢 Corporate Bonds: Private companies, variable risk',
          '🏙️ Municipal Bonds: Local authorities, cities, regions'
        ]
      },
      {
        type: 'text',
        content: 'Les obligations d\'État des pays développés (Allemagne, France, USA) sont considérées comme très sûres. Les obligations d\'entreprise varient énormément : Apple (AAA) est plus sûr qu\'une startup endettée (B). Les obligations municipales dépendent de la santé financière de la collectivité.',
        contentEn: 'Government bonds from developed countries (Germany, France, USA) are considered very safe. Corporate bonds vary enormously: Apple (AAA) is safer than an indebted startup (B). Municipal bonds depend on the financial health of the local authority.'
      },
      {
        type: 'example',
        title: 'Exemple : Comparaison de yields',
        titleEn: 'Example: Yield Comparison',
        content: 'Obligations à 10 ans, même date : OAT France (AA) : yield 2,5%. Obligation Total Energies (A) : yield 3%. Obligation entreprise moyenne (BBB) : yield 4%. Obligation entreprise risquée (BB) : yield 7%. Plus on descend dans la qualité de crédit, plus le yield augmente. C\'est la prime de risque que les investisseurs exigent.',
        contentEn: '10-year bonds, same date: French OAT (AA): 2.5% yield. TotalEnergies bond (A): 3% yield. Average company bond (BBB): 4% yield. Risky company bond (BB): 7% yield. The lower the credit quality, the higher the yield. It\'s the risk premium investors demand.',
        highlight: 'Le yield reflète directement la perception du risque par le marché.',
        highlightEn: 'Yield directly reflects the market\'s risk perception.'
      },
      {
        type: 'keypoints',
        title: 'Obligations convertibles (bonus)',
        titleEn: 'Convertible Bonds (Bonus)',
        points: [
          '🔄 Convertible Bonds : obligations qui peuvent être converties en actions',
          '💡 Avantage : sécurité de l\'obligation + potentiel de gain de l\'action',
          '📊 Yield généralement plus faible qu\'une obligation classique (car option de conversion)',
          '🎯 Utilisées par les entreprises en croissance'
        ],
        pointsEn: [
          '🔄 Convertible Bonds: bonds that can be converted into stocks',
          '💡 Advantage: bond security + stock gain potential',
          '📊 Yield generally lower than a regular bond (due to conversion option)',
          '🎯 Used by growth companies'
        ]
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'une obligation Investment Grade ?',
        questionEn: 'What is an Investment Grade bond?',
        options: [
          'Une obligation qui rapporte beaucoup',
          'Une obligation de qualité de crédit élevée (BBB- et au-dessus)',
          'Une obligation d\'État uniquement',
          'Une obligation à court terme'
        ],
        optionsEn: [
          'A bond that yields a lot',
          'A high credit quality bond (BBB- and above)',
          'A government bond only',
          'A short-term bond'
        ],
        correctAnswer: 1,
        explanation: 'Investment Grade désigne les obligations de bonne qualité de crédit, notées BBB- ou mieux. Elles présentent un risque de défaut relativement faible.',
        explanationEn: 'Investment Grade refers to bonds of good credit quality, rated BBB- or better. They present relatively low default risk.'
      },
      {
        type: 'quiz',
        question: 'Pourquoi les obligations High Yield offrent-elles un rendement plus élevé ?',
        questionEn: 'Why do High Yield bonds offer higher returns?',
        options: [
          'Parce qu\'elles sont plus liquides',
          'Pour compenser le risque de défaut plus élevé',
          'Parce qu\'elles ont une maturité plus longue',
          'C\'est une erreur de marché'
        ],
        optionsEn: [
          'Because they are more liquid',
          'To compensate for higher default risk',
          'Because they have longer maturity',
          'It\'s a market error'
        ],
        correctAnswer: 1,
        explanation: 'Les obligations High Yield (BB+ et en dessous) sont plus risquées. Les investisseurs exigent un rendement plus élevé pour compenser ce risque accru de défaut. C\'est la prime de risque.',
        explanationEn: 'High Yield bonds (BB+ and below) are riskier. Investors demand higher returns to compensate for this increased default risk. It\'s the risk premium.'
      },
      {
        type: 'quiz',
        question: 'Une entreprise voit sa notation passer de A à BB. Que se passe-t-il pour ses obligations ?',
        questionEn: 'A company\'s rating drops from A to BB. What happens to its bonds?',
        options: [
          'Le prix monte, le yield baisse',
          'Le prix baisse, le yield monte',
          'Rien ne change',
          'Le coupon augmente'
        ],
        optionsEn: [
          'Price rises, yield falls',
          'Price falls, yield rises',
          'Nothing changes',
          'Coupon increases'
        ],
        correctAnswer: 1,
        explanation: 'Une dégradation de notation signale un risque accru. Les investisseurs exigent un yield plus élevé, donc le prix des obligations baisse. Le coupon, lui, ne change jamais.',
        explanationEn: 'A rating downgrade signals increased risk. Investors demand higher yield, so bond prices fall. The coupon never changes.'
      },
      {
        type: 'quiz',
        question: 'Quelle obligation est généralement la plus sûre ?',
        questionEn: 'Which bond is generally the safest?',
        options: [
          'Obligation d\'une startup',
          'Obligation d\'État allemand (AAA)',
          'Obligation High Yield',
          'Obligation d\'une entreprise en difficulté'
        ],
        optionsEn: [
          'Startup bond',
          'German government bond (AAA)',
          'High Yield bond',
          'Struggling company bond'
        ],
        correctAnswer: 1,
        explanation: 'Les obligations d\'État des pays développés et bien notés (comme l\'Allemagne AAA) sont considérées comme les plus sûres. Le risque de défaut est quasi nul.',
        explanationEn: 'Government bonds from well-rated developed countries (like Germany AAA) are considered the safest. Default risk is virtually zero.'
      },
      {
        type: 'quiz',
        question: 'Qu\'est-ce qu\'une obligation convertible ?',
        questionEn: 'What is a convertible bond?',
        options: [
          'Une obligation qui change de coupon',
          'Une obligation qui peut être convertie en actions',
          'Une obligation qui change de maturité',
          'Une obligation en devise étrangère'
        ],
        optionsEn: [
          'A bond that changes coupon',
          'A bond that can be converted into stocks',
          'A bond that changes maturity',
          'A bond in foreign currency'
        ],
        correctAnswer: 1,
        explanation: 'Une obligation convertible peut être transformée en actions de l\'entreprise émettrice, selon des conditions définies. Elle combine la sécurité de l\'obligation et le potentiel de gain de l\'action.',
        explanationEn: 'A convertible bond can be transformed into shares of the issuing company, according to defined conditions. It combines bond security with stock gain potential.'
      }
    ]
  }
]
