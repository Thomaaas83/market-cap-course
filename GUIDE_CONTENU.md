# Guide de Création de Contenu

Ce guide vous aide à transformer vos notes de cours en contenu pédagogique interactif.

## 🎯 Philosophie pédagogique

### Comprendre, pas mémoriser
- Expliquez le "pourquoi" avant le "comment"
- Utilisez des analogies du quotidien
- Montrez les applications pratiques
- Créez des liens entre les concepts

### Accessibilité
- Ton conversationnel et engageant
- Évitez le jargon (ou expliquez-le)
- Phrases courtes et claires
- Progression graduelle

## 📋 Checklist pour chaque leçon

- [ ] Titre clair et descriptif
- [ ] Description qui donne envie d'apprendre
- [ ] Durée estimée réaliste
- [ ] Introduction qui contextualise
- [ ] Au moins un exemple concret
- [ ] Points clés résumés
- [ ] Quiz de compréhension
- [ ] Liens vers concepts connexes

## 🧩 Types de contenu disponibles

### 1. Texte explicatif
```typescript
{
  type: 'text',
  content: 'Votre explication claire et accessible'
}
```
**Quand l'utiliser** : Pour introduire un concept, expliquer une définition

**Bonnes pratiques** :
- Paragraphes courts (3-4 lignes max)
- Une idée par paragraphe
- Langage simple et direct

### 2. Points clés
```typescript
{
  type: 'keypoints',
  title: 'À retenir',
  points: [
    'Point important 1',
    'Point important 2',
    'Point important 3'
  ]
}
```
**Quand l'utiliser** : Pour résumer les éléments essentiels

**Bonnes pratiques** :
- 3-5 points maximum
- Phrases courtes et percutantes
- Utilisez des verbes d'action

### 3. Exemple concret
```typescript
{
  type: 'example',
  title: 'Exemple : [situation concrète]',
  content: 'Description détaillée de l\'exemple',
  highlight: 'Le point crucial à retenir'
}
```
**Quand l'utiliser** : Après chaque concept théorique

**Bonnes pratiques** :
- Situations réalistes et relatable
- Chiffres concrets
- Montrez le processus étape par étape

### 4. Quiz interactif
```typescript
{
  type: 'quiz',
  question: 'Question claire et précise ?',
  options: [
    'Réponse A',
    'Réponse B',
    'Réponse C',
    'Réponse D'
  ],
  correctAnswer: 0, // Index de la bonne réponse
  explanation: 'Explication détaillée de pourquoi c\'est la bonne réponse'
}
```
**Quand l'utiliser** : Après avoir expliqué un concept important

**Bonnes pratiques** :
- Question qui teste la compréhension, pas la mémorisation
- 3-4 options de réponse
- Distracteurs plausibles
- Explication qui renforce l'apprentissage

### 5. Schéma/Processus
```typescript
{
  type: 'diagram',
  title: 'Les étapes de [processus]',
  items: [
    'Étape 1 : Description',
    'Étape 2 : Description',
    'Étape 3 : Description'
  ]
}
```
**Quand l'utiliser** : Pour montrer un processus, une hiérarchie, une séquence

**Bonnes pratiques** :
- Ordre logique et chronologique
- Descriptions concises
- 3-6 étapes maximum

## 📝 Template de leçon complète

```typescript
{
  id: 'identifiant-unique',
  title: 'Titre engageant de la leçon',
  description: 'Ce que l\'étudiant va apprendre',
  duration: '10 min',
  content: [
    // 1. Introduction
    {
      type: 'text',
      content: 'Pourquoi ce sujet est important ? Contexte et motivation.'
    },
    
    // 2. Définition/Concept principal
    {
      type: 'text',
      content: 'Explication claire du concept principal.'
    },
    
    // 3. Points clés
    {
      type: 'keypoints',
      title: 'Les points essentiels',
      points: [
        'Point clé 1',
        'Point clé 2',
        'Point clé 3'
      ]
    },
    
    // 4. Exemple concret
    {
      type: 'example',
      title: 'Exemple pratique',
      content: 'Situation concrète qui illustre le concept',
      highlight: 'Ce qu\'il faut retenir de cet exemple'
    },
    
    // 5. Approfondissement (optionnel)
    {
      type: 'text',
      content: 'Nuances, cas particuliers, ou détails supplémentaires.'
    },
    
    // 6. Quiz de compréhension
    {
      type: 'quiz',
      question: 'Question qui teste la compréhension du concept',
      options: ['Option A', 'Option B', 'Option C'],
      correctAnswer: 0,
      explanation: 'Pourquoi cette réponse est correcte et les autres non'
    }
  ]
}
```

## 💡 Conseils par type de concept

### Concepts théoriques
- Commencez par une analogie
- Expliquez l'utilité pratique
- Donnez plusieurs exemples
- Terminez par un quiz conceptuel

### Formules/Calculs
- Expliquez chaque variable
- Montrez un calcul complet étape par étape
- Donnez l'intuition derrière la formule
- Quiz avec un calcul simple

### Processus/Méthodes
- Utilisez un schéma
- Exemple fil rouge qui suit toutes les étapes
- Expliquez les décisions à chaque étape
- Quiz sur l'ordre ou les décisions

### Comparaisons (A vs B)
- Tableau des différences clés
- Exemple où chacun est approprié
- Points communs et différences
- Quiz sur quand utiliser quoi

## 🎨 Ton et style

### À faire ✅
- Tutoyer l'étudiant
- Poser des questions rhétoriques
- Utiliser des métaphores du quotidien
- Encourager et rassurer
- Montrer l'utilité pratique

### À éviter ❌
- Jargon non expliqué
- Phrases trop longues
- Ton professoral distant
- Supposer des connaissances préalables
- Complexifier inutilement

## 📊 Exemples de transformation

### ❌ Note de cours brute
"Le MEDAF (Modèle d'Évaluation Des Actifs Financiers) établit une relation linéaire entre le rendement espéré d'un actif et son risque systématique mesuré par le bêta."

### ✅ Contenu pédagogique
```typescript
{
  type: 'text',
  content: 'Imaginez que vous voulez investir en bourse. Comment savoir si le rendement attendu est correct par rapport au risque ? C\'est exactement ce que le MEDAF (Modèle d\'Évaluation Des Actifs Financiers) nous aide à comprendre.'
},
{
  type: 'keypoints',
  title: 'Le MEDAF en 3 points',
  points: [
    'Il établit un lien entre risque et rendement attendu',
    'Plus le risque est élevé, plus le rendement doit être élevé',
    'Le risque est mesuré par le "bêta" (sensibilité au marché)'
  ]
},
{
  type: 'example',
  title: 'Exemple concret',
  content: 'Une action avec un bêta de 1,5 est 50% plus volatile que le marché. Si le marché monte de 10%, cette action devrait monter de 15%. En contrepartie de ce risque plus élevé, les investisseurs exigent un rendement plus élevé.',
  highlight: 'Plus de risque = plus de rendement attendu. C\'est la logique du MEDAF.'
}
```

## 🚀 Workflow de création

1. **Listez vos notes** par thème
2. **Identifiez les concepts clés** de chaque thème
3. **Créez un chapitre** par grand thème
4. **Découpez en leçons** de 10-15 minutes
5. **Pour chaque leçon** :
   - Rédigez l'introduction
   - Expliquez le concept principal
   - Trouvez un exemple concret
   - Créez un quiz
   - Relisez pour simplifier

## 📈 Prochaines étapes

Une fois le contenu créé, vous pourrez :
- Ajouter des graphiques interactifs
- Créer des parcours de révision
- Implémenter le suivi de progression
- Ajouter des exercices pratiques
- Créer des fiches de révision téléchargeables
