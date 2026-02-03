# 🚀 Quick Start - Traduction FR/EN

## En 3 minutes, comprends comment ça marche !

### 1️⃣ Utiliser le sélecteur de langue

```bash
# Lance le site
npm run dev
```

Puis dans ton navigateur :
1. Ouvre http://localhost:5173
2. Regarde le header en haut à droite
3. Tu verras deux boutons : **FR** et **EN**
4. Clique sur **EN** → Tout passe en anglais !
5. Clique sur **FR** → Tout repasse en français !

### 2️⃣ Ajouter une traduction simple

Ouvre `src/data/chapters/obligations.ts` et modifie une leçon :

**AVANT :**
```typescript
{
  id: 'ma-lecon',
  title: 'Les Obligations',
  description: 'Comprendre les obligations',
  // ...
}
```

**APRÈS :**
```typescript
{
  id: 'ma-lecon',
  title: 'Les Obligations',
  titleEn: 'Bonds',                    // ← Ajoute ça
  description: 'Comprendre les obligations',
  descriptionEn: 'Understanding Bonds', // ← Et ça
  // ...
}
```

Sauvegarde, recharge la page, clique sur **EN** → Ta traduction apparaît ! 🎉

### 3️⃣ Traduire du contenu

Pour traduire le contenu d'une leçon :

```typescript
content: [
  {
    type: 'text',
    content: 'Les obligations sont des titres de créance.',
    contentEn: 'Bonds are debt securities.'  // ← Ajoute ça
  },
  {
    type: 'keypoints',
    title: 'Points clés',
    titleEn: 'Key Points',  // ← Ajoute ça
    points: [
      'Premier point',
      'Deuxième point'
    ],
    pointsEn: [  // ← Et ça
      'First point',
      'Second point'
    ]
  }
]
```

### 4️⃣ Vocabulaire financier de base

| Français | English |
|----------|---------|
| Obligation | Bond |
| Action | Stock |
| Coupon | Coupon |
| Maturité | Maturity |
| Rendement | Yield |
| Émetteur | Issuer |
| Nominal | Face Value |
| Option d'achat | Call Option |
| Option de vente | Put Option |
| Indice | Index |

### 5️⃣ Tester tes traductions

```bash
# Build de production
npm run build

# Si ça compile sans erreur, c'est bon ! ✅
```

## 📖 Pour aller plus loin

- **Guide complet** : [GUIDE_TRADUCTION.md](./GUIDE_TRADUCTION.md)
- **Exemple détaillé** : [EXEMPLE_TRADUCTION.md](./EXEMPLE_TRADUCTION.md)
- **Vue d'ensemble** : [TRADUCTION_README.md](./TRADUCTION_README.md)

## 💡 Astuces

1. **Commence petit** - Traduis d'abord les titres et descriptions
2. **Garde les emojis** - Ils sont universels
3. **Utilise les termes standards** - Vérifie sur Investopedia si besoin
4. **Teste régulièrement** - Change de langue pour voir le résultat
5. **Pas d'obligation** - Si tu ne traduis pas, le français s'affiche

## ✅ C'est tout !

Tu sais maintenant comment :
- ✅ Changer de langue sur le site
- ✅ Ajouter des traductions
- ✅ Tester tes modifications

**Bonne traduction ! 🌍**
