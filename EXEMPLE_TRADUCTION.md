# Exemple de Leçon Traduite

Voici comment traduire une leçon existante. Prenons l'exemple de "Qu'est-ce qu'une obligation ?" :

## Version Originale (Français uniquement)

```typescript
{
  id: 'definition-obligation',
  title: 'Qu\'est-ce qu\'une obligation ?',
  description: 'Comprendre le fonctionnement d\'une obligation et ses composantes',
  duration: '12 min',
  content: [
    {
      type: 'text',
      content: 'Imaginez que vous prêtez 1 000€ à une entreprise...'
    }
  ]
}
```

## Version Traduite (Français + Anglais)

```typescript
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
        '💰 Face Value (Principal): the amount you lend and will be repaid at the end',
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
      type: 'quiz',
      question: 'Quelle est la différence principale entre une obligation et une action ?',
      questionEn: 'What is the main difference between a bond and a stock?',
      options: [
        'L\'obligation est un prêt, l\'action est une part de propriété',
        'L\'obligation rapporte plus que l\'action',
        'L\'obligation est plus risquée que l\'action'
      ],
      optionsEn: [
        'A bond is a loan, a stock is an ownership share',
        'A bond yields more than a stock',
        'A bond is riskier than a stock'
      ],
      correctAnswer: 0,
      explanation: 'Une obligation représente une dette (vous prêtez de l\'argent), tandis qu\'une action représente une part de propriété dans l\'entreprise.',
      explanationEn: 'A bond represents debt (you lend money), while a stock represents an ownership share in the company.'
    }
  ]
}
```

## Points importants

1. **Gardez les emojis** : Ils sont universels et aident à la compréhension
2. **Adaptez les exemples** : Gardez les mêmes montants en euros pour la cohérence
3. **Vocabulaire technique** : Utilisez les termes financiers standards en anglais
4. **Durée** : Pas besoin de traduire "12 min" (universel)

## Vocabulaire financier clé

- **Obligation** → Bond
- **Nominal/Principal** → Face Value/Principal
- **Coupon** → Coupon (même mot)
- **Maturité** → Maturity
- **Émetteur** → Issuer
- **Créancier** → Creditor
- **Action** → Stock/Share
- **Propriétaire** → Owner
- **Rendement** → Yield
- **Échéance** → Maturity Date

## Workflow recommandé

1. Commencez par traduire les titres et descriptions des chapitres
2. Puis traduisez les titres et descriptions des leçons
3. Ensuite, traduisez le contenu leçon par leçon
4. Testez régulièrement en changeant de langue sur le site
5. Vérifiez la cohérence du vocabulaire entre les leçons
