import { Lesson } from '../../types'

export const optionsLessons: Lesson[] = [
 {
 id: 'intro-options',
 title: 'Introduction aux options',
 titleEn: 'Introduction to Options',
 description: 'Qu\'est-ce qu\'une option ? Call vs Put, prime et droit sans obligation',
 descriptionEn: 'What is an option? Call vs Put, premium and right without obligation',
 duration: '14 min',
 content: [
 {
 type: 'text',
 content: 'Les options sont des produits dérivés : leur valeur "dérive" d\'un actif sous-jacent (action, indice, matière première...). Contrairement aux actions et obligations qui servent à financer, les options servent principalement à gérer le risque ou à spéculer. Leur particularité ? Elles donnent un droit, pas une obligation.',
 contentEn: 'Options are derivatives: their value "derives" from an underlying asset (stock, index, commodity...). Unlike stocks and bonds which serve to finance, options mainly serve to manage risk or speculate. Their particularity? They give a right, not an obligation.'
 },
 {
 type: 'keypoints',
 title: 'Qu\'est-ce qu\'une option ?',
 titleEn: 'What is an Option?',
 points: [
 ' Contrat qui donne un DROIT (pas une obligation) d\'acheter ou vendre un actif',
 ' À un prix fixé à l\'avance (strike price)',
 ' Pendant une période donnée ou à une date donnée',
 ' En échange du paiement d\'une prime'
 ],
 pointsEn: [
 ' Contract that gives a RIGHT (not an obligation) to buy or sell an asset',
 ' At a price fixed in advance (strike price)',
 ' During a given period or at a given date',
 ' In exchange for paying a premium'
 ]
 },
 {
 type: 'keypoints',
 title: 'Les deux types d\'options',
 titleEn: 'The Two Types of Options',
 points: [
 ' Call Option : droit d\'ACHETER l\'actif (anticipation haussière)',
 ' Put Option : droit de VENDRE l\'actif (anticipation baissière ou protection)',
 ' L\'acheteur a un droit, le vendeur a une obligation',
 ' La prime est le prix de ce droit'
 ],
 pointsEn: [
 ' Call Option: right to BUY the asset (bullish anticipation)',
 ' Put Option: right to SELL the asset (bearish anticipation or protection)',
 ' The buyer has a right, the seller has an obligation',
 ' The premium is the price of this right'
 ]
 },
 {
 type: 'example',
 title: 'Exemple : Buy Call (anticipation haussière)',
 titleEn: 'Example: Buy Call (Bullish Anticipation)',
 content: 'Action Total = 50€. Vous pensez qu\'elle va monter. Vous achetez un call strike 50€, échéance 3 mois, prime 3€. Scénario 1 : Total monte à 60€. Vous exercez votre droit d\'acheter à 50€. Gain brut = 10€. Gain net = 10€ - 3€ (prime) = 7€. Scénario 2 : Total reste à 50€ ou baisse. Vous n\'exercez pas. Perte = 3€ (la prime payée).',
 contentEn: 'Total stock = €50. You think it will rise. You buy a call strike €50, 3-month expiration, €3 premium. Scenario 1: Total rises to €60. You exercise your right to buy at €50. Gross gain = €10. Net gain = €10 - €3 (premium) = €7. Scenario 2: Total stays at €50 or falls. You don\'t exercise. Loss = €3 (the premium paid).',
 highlight: 'Perte maximale connue à l\'avance (la prime). Gain potentiellement illimité si l\'action monte fort.',
 highlightEn: 'Maximum loss known in advance (the premium). Potentially unlimited gain if the stock rises strongly.'
 },
 {
 type: 'example',
 title: 'Exemple : Buy Put (protection ou anticipation baissière)',
 titleEn: 'Example: Buy Put (Protection or Bearish Anticipation)',
 content: 'Vous détenez des actions LVMH à 800€. Vous craignez une baisse. Vous achetez un put strike 800€, échéance 6 mois, prime 40€. Scénario 1 : LVMH chute à 600€. Vous exercez votre droit de vendre à 800€. Gain brut = 200€. Gain net = 200€ - 40€ = 160€. Scénario 2 : LVMH monte à 900€. Vous n\'exercez pas le put. Perte = 40€ (prime), mais vos actions valent 900€.',
 contentEn: 'You hold LVMH shares at €800. You fear a decline. You buy a put strike €800, 6-month expiration, €40 premium. Scenario 1: LVMH falls to €600. You exercise your right to sell at €800. Gross gain = €200. Net gain = €200 - €40 = €160. Scenario 2: LVMH rises to €900. You don\'t exercise the put. Loss = €40 (premium), but your shares are worth €900.',
 highlight: 'Le put est une assurance : vous payez une prime pour vous protéger contre une baisse.',
 highlightEn: 'The put is insurance: you pay a premium to protect yourself against a decline.'
 },
 {
 type: 'diagram',
 title: 'Vocabulaire clé des options',
 titleEn: 'Key Options Vocabulary',
 items: [
 'Underlying (sous-jacent) : l\'actif de référence (ex : action Total)',
 'Strike price (prix d\'exercice) : le prix fixé dans le contrat',
 'Premium (prime) : le prix payé pour acheter l\'option',
 'Expiration (échéance) : la date limite pour exercer l\'option',
 'Exercise (exercer) : utiliser son droit d\'acheter ou vendre'
 ],
 itemsEn: [
 'Underlying: the reference asset (e.g., Total stock)',
 'Strike price: the price fixed in the contract',
 'Premium: the price paid to buy the option',
 'Expiration: the deadline to exercise the option',
 'Exercise: using your right to buy or sell'
 ]
 },
 {
 type: 'text',
 content: 'La grande différence avec les actions/obligations : avec une option, votre perte maximale est limitée à la prime payée. Vous ne pouvez pas perdre plus. C\'est un risque borné, ce qui en fait un outil de gestion du risque très puissant.',
 contentEn: 'The big difference with stocks/bonds: with an option, your maximum loss is limited to the premium paid. You cannot lose more. It\'s bounded risk, which makes it a very powerful risk management tool.'
 },
 {
 type: 'quiz',
 question: 'Qu\'est-ce qu\'une option ?',
 questionEn: 'What is an option?',
 options: [
 'Une obligation d\'acheter ou vendre un actif',
 'Un droit (sans obligation) d\'acheter ou vendre un actif',
 'Une action d\'une entreprise',
 'Un prêt à taux variable'
 ],
 optionsEn: [
 'An obligation to buy or sell an asset',
 'A right (without obligation) to buy or sell an asset',
 'A company stock',
 'A variable rate loan'
 ],
 correctAnswer: 1,
 explanation: 'Une option donne un DROIT, pas une obligation. L\'acheteur peut choisir d\'exercer ou non. C\'est ce qui la distingue d\'un contrat à terme (futures) où l\'obligation est ferme.',
 explanationEn: 'An option gives a RIGHT, not an obligation. The buyer can choose to exercise or not. This is what distinguishes it from a futures contract where the obligation is firm.'
 },
 {
 type: 'quiz',
 question: 'Quelle est la différence entre un call et un put ?',
 questionEn: 'What is the difference between a call and a put?',
 options: [
 'Le call est plus cher que le put',
 'Le call donne le droit d\'acheter, le put donne le droit de vendre',
 'Le call est pour les actions, le put pour les obligations',
 'Il n\'y a pas de différence'
 ],
 optionsEn: [
 'The call is more expensive than the put',
 'The call gives the right to buy, the put gives the right to sell',
 'The call is for stocks, the put for bonds',
 'There is no difference'
 ],
 correctAnswer: 1,
 explanation: 'Call = droit d\'ACHETER (anticipation haussière). Put = droit de VENDRE (anticipation baissière ou protection). C\'est la distinction fondamentale.',
 explanationEn: 'Call = right to BUY (bullish anticipation). Put = right to SELL (bearish anticipation or protection). It\'s the fundamental distinction.'
 },
 {
 type: 'quiz',
 question: 'Vous achetez un call. Quelle est votre perte maximale ?',
 questionEn: 'You buy a call. What is your maximum loss?',
 options: [
 'Illimitée',
 'Le prix du sous-jacent',
 'La prime payée',
 'Le strike price'
 ],
 optionsEn: [
 'Unlimited',
 'The price of the underlying',
 'The premium paid',
 'The strike price'
 ],
 correctAnswer: 2,
 explanation: 'Quand vous ACHETEZ une option (call ou put), votre perte maximale est la prime payée. Vous ne pouvez pas perdre plus. C\'est un risque borné, un avantage majeur des options.',
 explanationEn: 'When you BUY an option (call or put), your maximum loss is the premium paid. You cannot lose more. It\'s bounded risk, a major advantage of options.'
 },
 {
 type: 'quiz',
 question: 'Pourquoi acheter un put sur une action que vous détenez ?',
 questionEn: 'Why buy a put on a stock you own?',
 options: [
 'Pour gagner de l\'argent si l\'action monte',
 'Pour vous protéger contre une baisse',
 'Pour vendre l\'action immédiatement',
 'C\'est inutile'
 ],
 optionsEn: [
 'To make money if the stock rises',
 'To protect yourself against a decline',
 'To sell the stock immediately',
 'It\'s useless'
 ],
 correctAnswer: 1,
 explanation: 'Acheter un put sur une action que vous détenez, c\'est comme prendre une assurance. Si l\'action baisse, le put compense la perte. C\'est une stratégie de protection (hedging).',
 explanationEn: 'Buying a put on a stock you own is like taking insurance. If the stock falls, the put compensates the loss. It\'s a protection strategy (hedging).'
 },
 {
 type: 'quiz',
 question: 'Qu\'est-ce que la "prime" d\'une option ?',
 questionEn: 'What is the "premium" of an option?',
 options: [
 'Le gain potentiel',
 'Le prix payé pour acheter l\'option',
 'Le prix d\'exercice',
 'La différence entre le prix du marché et le strike'
 ],
 optionsEn: [
 'The potential gain',
 'The price paid to buy the option',
 'The strike price',
 'The difference between market price and strike'
 ],
 correctAnswer: 1,
 explanation: 'La prime est le prix que vous payez pour acheter l\'option. C\'est le coût de votre droit. Pour le vendeur, c\'est le revenu qu\'il reçoit.',
 explanationEn: 'The premium is the price you pay to buy the option. It\'s the cost of your right. For the seller, it\'s the income they receive.'
 }
 ]
 },
 {
 id: 'quatre-positions',
 title: 'Les 4 positions sur options',
 titleEn: 'The 4 Option Positions',
 description: 'Buy Call, Buy Put, Sell Call, Sell Put : profils de gain et de risque',
 descriptionEn: 'Buy Call, Buy Put, Sell Call, Sell Put: gain and risk profiles',
 duration: '16 min',
 content: [
 {
 type: 'text',
 content: 'Il existe 4 positions fondamentales sur options : acheter ou vendre un call, acheter ou vendre un put. Chaque position a un profil de risque et de gain très différent. Comprendre ces 4 positions, c\'est maîtriser les options.',
 contentEn: 'There are 4 fundamental option positions: buying or selling a call, buying or selling a put. Each position has a very different risk and gain profile. Understanding these 4 positions means mastering options.'
 },
 {
 type: 'keypoints',
 title: 'Buy Call : droit d\'acheter',
 titleEn: 'Buy Call: Right to Buy',
 points: [
 ' Anticipation : le prix va MONTER',
 ' Perte maximale : la prime payée (risque limité)',
 ' Gain potentiel : illimité (si le prix monte fort)',
 ' Stratégie : spéculation haussière ou levier'
 ],
 pointsEn: [
 ' Anticipation: price will RISE',
 ' Maximum loss: premium paid (limited risk)',
 ' Potential gain: unlimited (if price rises strongly)',
 ' Strategy: bullish speculation or leverage'
 ]
 },
 {
 type: 'keypoints',
 title: 'Buy Put : droit de vendre',
 titleEn: 'Buy Put: Right to Sell',
 points: [
 ' Anticipation : le prix va BAISSER (ou protection)',
 ' Perte maximale : la prime payée (risque limité)',
 ' Gain potentiel : important (limité par 0, le prix ne peut pas être négatif)',
 ' Stratégie : protection (hedging) ou spéculation baissière'
 ],
 pointsEn: [
 ' Anticipation: price will FALL (or protection)',
 ' Maximum loss: premium paid (limited risk)',
 ' Potential gain: significant (limited by 0, price cannot be negative)',
 ' Strategy: protection (hedging) or bearish speculation'
 ]
 },
 {
 type: 'keypoints',
 title: 'Sell Call : obligation de vendre',
 titleEn: 'Sell Call: Obligation to Sell',
 points: [
 ' Anticipation : le prix va rester STABLE ou baisser légèrement',
 ' Gain maximum : la prime reçue (limité)',
 ' Perte potentielle : illimitée (si le prix monte fort)',
 ' Stratégie : générer du revenu sur un actif détenu'
 ],
 pointsEn: [
 ' Anticipation: price will remain STABLE or fall slightly',
 ' Maximum gain: premium received (limited)',
 ' Potential loss: unlimited (if price rises strongly)',
 ' Strategy: generate income on a held asset'
 ]
 },
 {
 type: 'keypoints',
 title: 'Sell Put : obligation d\'acheter',
 titleEn: 'Sell Put: Obligation to Buy',
 points: [
 ' Anticipation : le prix va rester STABLE ou monter légèrement',
 ' Gain maximum : la prime reçue (limité)',
 ' Perte potentielle : importante (si le prix chute)',
 ' Stratégie : acheter un actif à prix réduit ou générer du revenu'
 ],
 pointsEn: [
 ' Anticipation: price will remain STABLE or rise slightly',
 ' Maximum gain: premium received (limited)',
 ' Potential loss: significant (if price plummets)',
 ' Strategy: buy an asset at reduced price or generate income'
 ]
 },
 {
 type: 'diagram',
 title: 'Tableau récapitulatif',
 titleEn: 'Summary Table',
 items: [
 'Buy Call : Perte max = prime | Gain = illimité | Anticipation = hausse',
 'Buy Put : Perte max = prime | Gain = important | Anticipation = baisse',
 'Sell Call : Gain max = prime | Perte = illimitée | Anticipation = stable/baisse',
 'Sell Put : Gain max = prime | Perte = importante | Anticipation = stable/hausse'
 ],
 itemsEn: [
 'Buy Call: Max loss = premium | Gain = unlimited | Anticipation = rise',
 'Buy Put: Max loss = premium | Gain = significant | Anticipation = fall',
 'Sell Call: Max gain = premium | Loss = unlimited | Anticipation = stable/fall',
 'Sell Put: Max gain = premium | Loss = significant | Anticipation = stable/rise'
 ]
 },
 {
 type: 'animation',
 animationType: 'option-payoff',
 title: 'Graphique interactif : Options Call et Put',
 titleEn: 'Interactive Chart: Call and Put Options',
 description: 'Explorez les profils de gain/perte des options en temps réel. Utilisez le bouton pour basculer entre Call et Put.',
 descriptionEn: 'Explore the profit/loss profiles of options in real-time. Use the button to switch between Call and Put.',
 config: {
 strikePrice: 50,
 premium: 3
 }
 },
 {
 type: 'example',
 title: 'Exemple : Sell Call (covered call)',
 titleEn: 'Example: Sell Call (Covered Call)',
 content: 'Vous détenez 100 actions Airbus à 100€. Vous pensez que le prix va stagner. Vous vendez un call strike 110€, échéance 3 mois, prime 5€. Vous recevez 500€ (5€ × 100). Scénario 1 : Airbus reste à 100€. Le call n\'est pas exercé. Vous gardez vos actions + 500€ de prime. Scénario 2 : Airbus monte à 120€. Le call est exercé, vous devez vendre à 110€. Gain = (110-100) × 100 + 500 = 1 500€. Mais vous ratez la hausse au-delà de 110€.',
 contentEn: 'You hold 100 Airbus shares at €100. You think the price will stagnate. You sell a call strike €110, 3-month expiration, €5 premium. You receive €500 (€5 × 100). Scenario 1: Airbus stays at €100. The call is not exercised. You keep your shares + €500 premium. Scenario 2: Airbus rises to €120. The call is exercised, you must sell at €110. Gain = (110-100) × 100 + 500 = €1,500. But you miss the rise beyond €110.',
 highlight: 'Vendre un call sur un actif détenu génère du revenu (la prime), mais limite le gain potentiel.',
 highlightEn: 'Selling a call on a held asset generates income (the premium), but limits potential gain.'
 },
 {
 type: 'example',
 title: 'Exemple : Sell Put',
 titleEn: 'Example: Sell Put',
 content: 'Vous voulez acheter des actions Apple, actuellement à 150€, mais vous trouvez ça cher. Vous vendez un put strike 140€, échéance 2 mois, prime 7€. Vous recevez 700€. Scénario 1 : Apple reste au-dessus de 140€. Le put n\'est pas exercé. Vous gardez 700€ sans acheter les actions. Scénario 2 : Apple chute à 130€. Le put est exercé, vous devez acheter à 140€. Prix effectif = 140€ - 7€ (prime) = 133€. Vous achetez à 133€ au lieu de 150€.',
 contentEn: 'You want to buy Apple shares, currently at €150, but you find it expensive. You sell a put strike €140, 2-month expiration, €7 premium. You receive €700. Scenario 1: Apple stays above €140. The put is not exercised. You keep €700 without buying shares. Scenario 2: Apple falls to €130. The put is exercised, you must buy at €140. Effective price = €140 - €7 (premium) = €133. You buy at €133 instead of €150.',
 highlight: 'Vendre un put permet d\'acheter un actif à prix réduit (strike - prime) ou de générer du revenu.',
 highlightEn: 'Selling a put allows buying an asset at reduced price (strike - premium) or generating income.'
 },
 {
 type: 'text',
 content: 'Règle d\'or : quand vous ACHETEZ une option, votre risque est limité (la prime). Quand vous VENDEZ une option, votre gain est limité (la prime) mais votre risque peut être important. Vendre des options est plus risqué qu\'en acheter.',
 contentEn: 'Golden rule: when you BUY an option, your risk is limited (the premium). When you SELL an option, your gain is limited (the premium) but your risk can be significant. Selling options is riskier than buying them.'
 },
 {
 type: 'quiz',
 question: 'Vous achetez un call. Le prix du sous-jacent monte fortement. Quel est votre profil de gain ?',
 questionEn: 'You buy a call. The underlying price rises strongly. What is your gain profile?',
 options: [
 'Gain limité à la prime',
 'Gain potentiellement illimité',
 'Pas de gain possible',
 'Gain limité au strike'
 ],
 optionsEn: [
 'Gain limited to premium',
 'Potentially unlimited gain',
 'No gain possible',
 'Gain limited to strike'
 ],
 correctAnswer: 1,
 explanation: 'Avec un call acheté, plus le prix monte, plus vous gagnez. Le gain est théoriquement illimité. C\'est l\'avantage du call : risque limité (prime), gain illimité.',
 explanationEn: 'With a bought call, the more the price rises, the more you gain. The gain is theoretically unlimited. That\'s the advantage of the call: limited risk (premium), unlimited gain.'
 },
 {
 type: 'quiz',
 question: 'Vous vendez un call. Quel est votre gain maximum ?',
 questionEn: 'You sell a call. What is your maximum gain?',
 options: [
 'Illimité',
 'Le strike price',
 'La prime reçue',
 'Le prix du sous-jacent'
 ],
 optionsEn: [
 'Unlimited',
 'The strike price',
 'The premium received',
 'The underlying price'
 ],
 correctAnswer: 2,
 explanation: 'Quand vous vendez une option, votre gain maximum est toujours la prime reçue. C\'est votre revenu. En contrepartie, vous prenez le risque que l\'option soit exercée contre vous.',
 explanationEn: 'When you sell an option, your maximum gain is always the premium received. It\'s your income. In return, you take the risk that the option is exercised against you.'
 },
 {
 type: 'quiz',
 question: 'Quelle position a un risque de perte illimité ?',
 questionEn: 'Which position has unlimited loss risk?',
 options: [
 'Buy Call',
 'Buy Put',
 'Sell Call',
 'Aucune'
 ],
 optionsEn: [
 'Buy Call',
 'Buy Put',
 'Sell Call',
 'None'
 ],
 correctAnswer: 2,
 explanation: 'Vendre un call (Sell Call) expose à un risque illimité : si le prix du sous-jacent monte très haut, vous devez acheter cher pour livrer à un prix bas (le strike). La perte peut être énorme.',
 explanationEn: 'Selling a call (Sell Call) exposes to unlimited risk: if the underlying price rises very high, you must buy expensive to deliver at a low price (the strike). The loss can be enormous.'
 },
 {
 type: 'quiz',
 question: 'Pourquoi vendre un put sur une action que vous voulez acheter ?',
 questionEn: 'Why sell a put on a stock you want to buy?',
 options: [
 'Pour gagner de l\'argent si l\'action monte',
 'Pour acheter l\'action à un prix effectif réduit (strike - prime)',
 'Pour vendre l\'action immédiatement',
 'C\'est une mauvaise stratégie'
 ],
 optionsEn: [
 'To make money if the stock rises',
 'To buy the stock at an effective reduced price (strike - premium)',
 'To sell the stock immediately',
 'It\'s a bad strategy'
 ],
 correctAnswer: 1,
 explanation: 'Vendre un put vous oblige à acheter si le prix baisse sous le strike. Mais vous avez reçu la prime, donc votre prix effectif = strike - prime. C\'est une stratégie pour acheter à prix réduit.',
 explanationEn: 'Selling a put obliges you to buy if the price falls below the strike. But you received the premium, so your effective price = strike - premium. It\'s a strategy to buy at reduced price.'
 },
 {
 type: 'quiz',
 question: 'Quelle affirmation est vraie ?',
 questionEn: 'Which statement is true?',
 options: [
 'Acheter des options est plus risqué que vendre',
 'Vendre des options est plus risqué qu\'acheter',
 'Le risque est le même',
 'Les options n\'ont pas de risque'
 ],
 optionsEn: [
 'Buying options is riskier than selling',
 'Selling options is riskier than buying',
 'The risk is the same',
 'Options have no risk'
 ],
 correctAnswer: 1,
 explanation: 'Acheter une option = risque limité à la prime. Vendre une option = gain limité à la prime, mais risque potentiellement important (voire illimité pour un call vendu). Vendre est plus risqué.',
 explanationEn: 'Buying an option = risk limited to premium. Selling an option = gain limited to premium, but potentially significant risk (even unlimited for a sold call). Selling is riskier.'
 }
 ]
 },
 {
 id: 'strategies-volatilite',
 title: 'Stratégies et volatilité',
 titleEn: 'Strategies and Volatility',
 description: 'Straddle, hedging vs spéculation, et le rôle de la volatilité',
 descriptionEn: 'Straddle, hedging vs speculation, and the role of volatility',
 duration: '14 min',
 content: [
 {
 type: 'text',
 content: 'Les options ne servent pas qu\'à parier sur la hausse ou la baisse. On peut aussi parier sur la volatilité (l\'ampleur des mouvements), se protéger contre un risque, ou combiner plusieurs options pour créer des stratégies sophistiquées. Découvrons les stratégies les plus courantes.',
 contentEn: 'Options aren\'t just for betting on rises or falls. You can also bet on volatility (the magnitude of movements), protect against risk, or combine multiple options to create sophisticated strategies. Let\'s discover the most common strategies.'
 },
 {
 type: 'keypoints',
 title: 'Hedging vs Spéculation',
 titleEn: 'Hedging vs Speculation',
 points: [
 ' Hedging (couverture) : utiliser les options pour SE PROTÉGER contre un risque',
 ' Spéculation : utiliser les options pour PARIER sur un mouvement de prix',
 ' Même outil, objectifs différents',
 ' Les entreprises font du hedging, les traders font de la spéculation'
 ],
 pointsEn: [
 ' Hedging: using options to PROTECT against risk',
 ' Speculation: using options to BET on a price movement',
 ' Same tool, different objectives',
 ' Companies do hedging, traders do speculation'
 ]
 },
 {
 type: 'example',
 title: 'Exemple : Hedging avec un put',
 titleEn: 'Example: Hedging with a Put',
 content: 'Vous êtes un fonds de pension avec 10 millions d\'euros en actions françaises (CAC 40). Vous craignez une crise. Vous achetez des puts sur l\'indice CAC 40, strike 7000, échéance 6 mois, prime 200 000€. Scénario 1 : Crise, le CAC chute à 6000. Vos actions perdent ~15% (1,5M€), mais vos puts gagnent ~1M€. Perte nette = 500k€ + prime. Scénario 2 : Pas de crise, le CAC monte. Vous perdez la prime (200k€), mais vos actions gagnent.',
 contentEn: 'You are a pension fund with €10 million in French stocks (CAC 40). You fear a crisis. You buy puts on the CAC 40 index, strike 7000, 6-month expiration, €200,000 premium. Scenario 1: Crisis, CAC falls to 6000. Your stocks lose ~15% (€1.5M), but your puts gain ~€1M. Net loss = €500k + premium. Scenario 2: No crisis, CAC rises. You lose the premium (€200k), but your stocks gain.',
 highlight: 'Le put est une assurance : vous payez une prime pour limiter votre perte en cas de crise.',
 highlightEn: 'The put is insurance: you pay a premium to limit your loss in case of crisis.'
 },
 {
 type: 'keypoints',
 title: 'Stratégie Straddle : parier sur la volatilité',
 titleEn: 'Straddle Strategy: Betting on Volatility',
 points: [
 ' Objectif : parier sur un GROS mouvement, sans savoir la direction',
 ' Méthode : acheter un call ET un put, même strike, même échéance',
 ' Coût : deux primes à payer',
 ' Gain : si le prix bouge fortement (hausse OU baisse)',
 ' Perte : si le prix reste stable (vous perdez les deux primes)'
 ],
 pointsEn: [
 ' Objective: bet on a BIG movement, without knowing the direction',
 ' Method: buy a call AND a put, same strike, same expiration',
 ' Cost: two premiums to pay',
 ' Gain: if price moves strongly (rise OR fall)',
 ' Loss: if price remains stable (you lose both premiums)'
 ]
 },
 {
 type: 'example',
 title: 'Exemple : Straddle avant résultats',
 titleEn: 'Example: Straddle Before Earnings',
 content: 'Tesla annonce ses résultats trimestriels demain. Action à 200€. Vous savez que le prix va bouger fort, mais vous ne savez pas dans quel sens. Vous achetez : 1 call strike 200€, prime 10€ + 1 put strike 200€, prime 10€. Coût total = 20€. Scénario 1 : Bons résultats, Tesla monte à 240€. Le call gagne 40€, le put perd 10€. Gain net = 40€ - 20€ (primes) = 20€. Scénario 2 : Mauvais résultats, Tesla chute à 170€. Le put gagne 30€, le call perd 10€. Gain net = 30€ - 20€ = 10€. Scénario 3 : Résultats neutres, Tesla reste à 200€. Perte = 20€ (les deux primes).',
 contentEn: 'Tesla announces quarterly results tomorrow. Stock at €200. You know the price will move strongly, but you don\'t know which way. You buy: 1 call strike €200, €10 premium + 1 put strike €200, €10 premium. Total cost = €20. Scenario 1: Good results, Tesla rises to €240. Call gains €40, put loses €10. Net gain = €40 - €20 (premiums) = €20. Scenario 2: Bad results, Tesla falls to €170. Put gains €30, call loses €10. Net gain = €30 - €20 = €10. Scenario 3: Neutral results, Tesla stays at €200. Loss = €20 (both premiums).',
 highlight: 'Le straddle gagne si le prix bouge fort, perd si le prix stagne. C\'est un pari sur la volatilité.',
 highlightEn: 'The straddle wins if price moves strongly, loses if price stagnates. It\'s a bet on volatility.'
 },
 {
 type: 'text',
 content: 'La volatilité est cruciale pour les options. Plus la volatilité attendue est élevée, plus les options sont chères (les primes augmentent). Pourquoi ? Parce qu\'un actif volatil a plus de chances de bouger fort, donc les options ont plus de valeur.',
 contentEn: 'Volatility is crucial for options. The higher the expected volatility, the more expensive options are (premiums increase). Why? Because a volatile asset is more likely to move strongly, so options have more value.'
 },
 {
 type: 'keypoints',
 title: 'Options et volatilité',
 titleEn: 'Options and Volatility',
 points: [
 ' Volatilité = ampleur des variations de prix',
 ' Volatilité élevée → primes d\'options élevées',
 ' Volatilité faible → primes d\'options faibles',
 ' Les options sont un moyen de trader la volatilité',
 ' Avant un événement important (résultats, élections), la volatilité monte'
 ],
 pointsEn: [
 ' Volatility = magnitude of price variations',
 ' High volatility → high option premiums',
 ' Low volatility → low option premiums',
 ' Options are a way to trade volatility',
 ' Before a major event (earnings, elections), volatility rises'
 ]
 },
 {
 type: 'diagram',
 title: 'Récapitulatif des stratégies',
 titleEn: 'Strategy Summary',
 items: [
 'Buy Call : parier sur une hausse',
 'Buy Put : se protéger contre une baisse OU parier sur une baisse',
 'Sell Call (covered) : générer du revenu sur un actif détenu',
 'Sell Put : acheter un actif à prix réduit OU générer du revenu',
 'Straddle : parier sur un gros mouvement (hausse OU baisse)'
 ],
 itemsEn: [
 'Buy Call: bet on a rise',
 'Buy Put: protect against a fall OR bet on a fall',
 'Sell Call (covered): generate income on a held asset',
 'Sell Put: buy an asset at reduced price OR generate income',
 'Straddle: bet on a big movement (rise OR fall)'
 ]
 },
 {
 type: 'quiz',
 question: 'Qu\'est-ce que le hedging avec des options ?',
 questionEn: 'What is hedging with options?',
 options: [
 'Spéculer pour gagner de l\'argent',
 'Se protéger contre un risque',
 'Acheter des actions',
 'Vendre des obligations'
 ],
 optionsEn: [
 'Speculating to make money',
 'Protecting against risk',
 'Buying stocks',
 'Selling bonds'
 ],
 correctAnswer: 1,
 explanation: 'Le hedging (couverture) consiste à utiliser les options pour se protéger contre un risque. Par exemple, acheter un put pour protéger un portefeuille d\'actions contre une baisse.',
 explanationEn: 'Hedging consists of using options to protect against risk. For example, buying a put to protect a stock portfolio against a decline.'
 },
 {
 type: 'quiz',
 question: 'Qu\'est-ce qu\'un straddle ?',
 questionEn: 'What is a straddle?',
 options: [
 'Acheter un call uniquement',
 'Acheter un call ET un put, même strike',
 'Vendre un call ET un put',
 'Acheter une action'
 ],
 optionsEn: [
 'Buying a call only',
 'Buying a call AND a put, same strike',
 'Selling a call AND a put',
 'Buying a stock'
 ],
 correctAnswer: 1,
 explanation: 'Un straddle consiste à acheter un call ET un put avec le même strike et la même échéance. C\'est un pari sur la volatilité : vous gagnez si le prix bouge fort, peu importe la direction.',
 explanationEn: 'A straddle consists of buying a call AND a put with the same strike and expiration. It\'s a bet on volatility: you win if the price moves strongly, regardless of direction.'
 },
 {
 type: 'quiz',
 question: 'Quand un straddle est-il profitable ?',
 questionEn: 'When is a straddle profitable?',
 options: [
 'Quand le prix reste stable',
 'Quand le prix bouge fortement (hausse OU baisse)',
 'Uniquement si le prix monte',
 'Uniquement si le prix baisse'
 ],
 optionsEn: [
 'When price remains stable',
 'When price moves strongly (rise OR fall)',
 'Only if price rises',
 'Only if price falls'
 ],
 correctAnswer: 1,
 explanation: 'Le straddle gagne si le prix bouge fortement dans n\'importe quelle direction. Si le prix reste stable, vous perdez les deux primes payées. C\'est un pari sur la volatilité, pas sur la direction.',
 explanationEn: 'The straddle wins if price moves strongly in any direction. If price remains stable, you lose both premiums paid. It\'s a bet on volatility, not on direction.'
 },
 {
 type: 'quiz',
 question: 'Que se passe-t-il pour les primes d\'options quand la volatilité augmente ?',
 questionEn: 'What happens to option premiums when volatility increases?',
 options: [
 'Elles baissent',
 'Elles augmentent',
 'Elles ne changent pas',
 'Elles disparaissent'
 ],
 optionsEn: [
 'They decrease',
 'They increase',
 'They don\'t change',
 'They disappear'
 ],
 correctAnswer: 1,
 explanation: 'Quand la volatilité augmente, les primes d\'options augmentent. Pourquoi ? Parce qu\'un actif plus volatil a plus de chances de bouger fort, donc les options ont plus de valeur potentielle.',
 explanationEn: 'When volatility increases, option premiums increase. Why? Because a more volatile asset is more likely to move strongly, so options have more potential value.'
 },
 {
 type: 'quiz',
 question: 'Pourquoi une entreprise utiliserait-elle des options ?',
 questionEn: 'Why would a company use options?',
 options: [
 'Uniquement pour spéculer',
 'Pour se protéger contre des risques (change, matières premières, taux)',
 'Pour remplacer les actions',
 'C\'est interdit aux entreprises'
 ],
 optionsEn: [
 'Only to speculate',
 'To protect against risks (currency, commodities, rates)',
 'To replace stocks',
 'It\'s forbidden for companies'
 ],
 correctAnswer: 1,
 explanation: 'Les entreprises utilisent les options principalement pour le hedging : se protéger contre le risque de change (ex : Airbus), le risque matières premières (ex : compagnies aériennes et pétrole), etc. C\'est de la gestion du risque, pas de la spéculation.',
 explanationEn: 'Companies use options mainly for hedging: protecting against currency risk (e.g., Airbus), commodity risk (e.g., airlines and oil), etc. It\'s risk management, not speculation.'
 }
 ]
 }
]
