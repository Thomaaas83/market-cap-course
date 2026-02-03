# Guide de Traduction FR/EN

## 🌍 Système de traduction ajouté !

Le site supporte maintenant le français et l'anglais. Un sélecteur de langue est disponible dans le header.

## Comment ajouter des traductions

### 1. Structure des données

Chaque élément peut avoir une version anglaise en ajoutant le suffixe `En` :

```typescript
// Chapitre
{
  id: 'obligations',
  title: 'Les Obligations',
  titleEn: 'Bonds',  // ← Traduction anglaise
  description: 'Comprendre les obligations',
  descriptionEn: 'Understanding Bonds',  // ← Traduction anglaise
  // ...
}

// Leçon
{
  id: 'intro-obligations',
  title: 'Introduction aux obligations',
  titleEn: 'Introduction to Bonds',
  description: 'Découvrez les bases',
  descriptionEn: 'Discover the basics',
  // ...
}
```

### 2. Types de contenu à traduire

#### TextContent
```typescript
{
  type: 'text',
  content: 'Les obligations sont des titres de créance...',
  contentEn: 'Bonds are debt securities...'
}
```

#### KeyPointsContent
```typescript
{
  type: 'keypoints',
  title: 'Points clés',
  titleEn: 'Key Points',
  points: [
    'Premier point en français',
    'Deuxième point en français'
  ],
  pointsEn: [
    'First point in English',
    'Second point in English'
  ]
}
```

#### ExampleContent
```typescript
{
  type: 'example',
  title: 'Exemple pratique',
  titleEn: 'Practical Example',
  content: 'Imaginons une obligation...',
  contentEn: 'Imagine a bond...',
  highlight: 'Point important',
  highlightEn: 'Important point'
}
```

#### QuizContent
```typescript
{
  type: 'quiz',
  question: 'Qu\'est-ce qu\'une obligation ?',
  questionEn: 'What is a bond?',
  options: [
    'Un titre de propriété',
    'Un titre de créance',
    'Une action'
  ],
  optionsEn: [
    'An equity security',
    'A debt security',
    'A stock'
  ],
  correctAnswer: 1,
  explanation: 'Une obligation est un titre de créance...',
  explanationEn: 'A bond is a debt security...'
}
```

#### DiagramContent
```typescript
{
  type: 'diagram',
  title: 'Processus d\'émission',
  titleEn: 'Issuance Process',
  items: [
    'Étape 1 : Préparation',
    'Étape 2 : Émission',
    'Étape 3 : Cotation'
  ],
  itemsEn: [
    'Step 1: Preparation',
    'Step 2: Issuance',
    'Step 3: Listing'
  ]
}
```

## 3. Exemple complet

Voici un exemple de leçon complètement traduite :

```typescript
{
  id: 'exemple-lecon',
  title: 'Les Taux d\'Intérêt',
  titleEn: 'Interest Rates',
  description: 'Comprendre les taux d\'intérêt',
  descriptionEn: 'Understanding Interest Rates',
  duration: '15 min',
  content: [
    {
      type: 'text',
      content: 'Les taux d\'intérêt représentent le coût de l\'argent.',
      contentEn: 'Interest rates represent the cost of money.'
    },
    {
      type: 'keypoints',
      title: 'Points essentiels',
      titleEn: 'Essential Points',
      points: [
        'Les taux varient selon le risque',
        'Ils influencent l\'économie'
      ],
      pointsEn: [
        'Rates vary according to risk',
        'They influence the economy'
      ]
    },
    {
      type: 'quiz',
      question: 'Que représente un taux d\'intérêt ?',
      questionEn: 'What does an interest rate represent?',
      options: [
        'Le coût de l\'argent',
        'Le prix d\'une action',
        'La valeur d\'une devise'
      ],
      optionsEn: [
        'The cost of money',
        'The price of a stock',
        'The value of a currency'
      ],
      correctAnswer: 0,
      explanation: 'Le taux d\'intérêt est le prix à payer pour emprunter de l\'argent.',
      explanationEn: 'The interest rate is the price to pay to borrow money.'
    }
  ]
}
```

## 4. Fichiers à traduire

Les fichiers de données se trouvent dans `src/data/chapters/` :
- `introduction.ts`
- `obligations.ts`
- `options.ts`
- `indices-etf.ts`

## 5. Comportement

- **Par défaut** : Le site s'affiche en français
- **Langue sauvegardée** : Le choix de langue est mémorisé dans le navigateur
- **Fallback** : Si une traduction anglaise n'existe pas, le texte français s'affiche
- **Sélecteur** : Boutons FR/EN dans le header pour changer de langue

## 6. Vocabulaire financier

Quelques traductions courantes :

| Français | English |
|----------|---------|
| Obligation | Bond |
| Action | Stock/Share |
| Taux d'intérêt | Interest Rate |
| Coupon | Coupon |
| Échéance | Maturity |
| Valeur nominale | Face Value/Par Value |
| Prime | Premium |
| Décote | Discount |
| Rendement | Yield |
| Option d'achat | Call Option |
| Option de vente | Put Option |
| Prix d'exercice | Strike Price |
| Indice | Index |
| ETF | ETF (Exchange-Traded Fund) |

## 7. Prochaines étapes

1. Traduire progressivement les leçons existantes
2. Ajouter les traductions au fur et à mesure des nouveaux contenus
3. Vérifier la cohérence du vocabulaire financier
4. Tester l'affichage dans les deux langues

---

**Note** : Les traductions ne sont pas obligatoires. Si `titleEn`, `contentEn`, etc. ne sont pas fournis, le texte français sera affiché par défaut.
