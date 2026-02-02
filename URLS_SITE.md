# 🌐 URLs du site - Finance de Marché

## 🏠 Page d'accueil

```
http://localhost:5174/
```

**Contenu :**
- Hero section avec stats
- 7 chapitres en cards
- Section pédagogique

---

## 📚 Chapitres disponibles

### Chapitre 1 - Introduction aux Marchés Financiers
```
http://localhost:5174/chapitre/introduction
```
**6 leçons :**
1. Définition du marché des capitaux
2. Les instruments financiers
3. Dette vs Capital
4. Intermédiation vs Désintermédiation
5. Les acteurs du marché
6. Régulation et gestion des risques

### Chapitre 2 - Les Obligations
```
http://localhost:5174/chapitre/obligations
```
**4 leçons :**
1. Définition et caractéristiques
2. Prix et rendement
3. Risques obligataires
4. Notation et crédit

### Chapitre 3 - Les Options
```
http://localhost:5174/chapitre/options
```
**3 leçons :**
1. Introduction aux options
2. Les 4 positions de base
3. Stratégies d'options

### Chapitre 4 - Indices et ETF
```
http://localhost:5174/chapitre/indices-etf
```
**1 leçon :**
1. Comprendre les indices et ETF

### Chapitres 5-7 (à venir)
```
http://localhost:5174/chapitre/actions
http://localhost:5174/chapitre/taux
http://localhost:5174/chapitre/risques
```
**État :** En préparation

---

## 📖 Exemples de leçons

### Chapitre 1 - Leçon 1
```
http://localhost:5174/chapitre/introduction/lecon/definition
```
**Contenu :**
- Définition du marché des capitaux
- Points clés
- Exemples concrets
- 5 quiz interactifs

### Chapitre 1 - Leçon 2
```
http://localhost:5174/chapitre/introduction/lecon/instruments
```
**Contenu :**
- Les instruments financiers
- Classification
- Exemples
- Quiz

### Chapitre 2 - Leçon 1
```
http://localhost:5174/chapitre/obligations/lecon/definition-obligations
```
**Contenu :**
- Définition des obligations
- Caractéristiques
- Exemples
- Quiz

### Chapitre 3 - Leçon 1
```
http://localhost:5174/chapitre/options/lecon/introduction-options
```
**Contenu :**
- Introduction aux options
- Concepts de base
- Exemples
- Quiz

---

## 🔗 Structure des URLs

### Pattern général
```
/                                           → Home
/chapitre/:chapterId                        → ChapterPage
/chapitre/:chapterId/lecon/:lessonId        → LessonPage
```

### Exemples de chapterId
```
introduction
obligations
options
indices-etf
actions
taux
risques
```

### Exemples de lessonId
```
definition
instruments
dette-capital
intermediation
acteurs
regulation
definition-obligations
prix-rendement
risques-obligataires
notation
introduction-options
positions-options
strategies-options
indices-etf
```

---

## 🧭 Navigation

### Depuis la home
```
/ → Clic sur un chapitre → /chapitre/:chapterId
```

### Depuis un chapitre
```
/chapitre/:chapterId → Clic sur une leçon → /chapitre/:chapterId/lecon/:lessonId
```

### Depuis une leçon
```
/chapitre/:chapterId/lecon/:lessonId
  ↓ Bouton précédent
/chapitre/:chapterId/lecon/:previousLessonId
  ↓ Bouton suivant
/chapitre/:chapterId/lecon/:nextLessonId
  ↓ Breadcrumb
/chapitre/:chapterId
  ↓ Logo ou "Retour aux chapitres"
/
```

---

## 📊 Toutes les URLs disponibles

### Home
- `/`

### Chapitres (7)
- `/chapitre/introduction`
- `/chapitre/obligations`
- `/chapitre/options`
- `/chapitre/indices-etf`
- `/chapitre/actions` (vide)
- `/chapitre/taux` (vide)
- `/chapitre/risques` (vide)

### Leçons Chapitre 1 (6)
- `/chapitre/introduction/lecon/definition`
- `/chapitre/introduction/lecon/instruments`
- `/chapitre/introduction/lecon/dette-capital`
- `/chapitre/introduction/lecon/intermediation`
- `/chapitre/introduction/lecon/acteurs`
- `/chapitre/introduction/lecon/regulation`

### Leçons Obligations (4)
- `/chapitre/obligations/lecon/definition-obligations`
- `/chapitre/obligations/lecon/prix-rendement`
- `/chapitre/obligations/lecon/risques-obligataires`
- `/chapitre/obligations/lecon/notation`

### Leçons Options (3)
- `/chapitre/options/lecon/introduction-options`
- `/chapitre/options/lecon/positions-options`
- `/chapitre/options/lecon/strategies-options`

### Leçons Indices/ETF (1)
- `/chapitre/indices-etf/lecon/indices-etf`

**Total : 22 URLs (1 home + 7 chapitres + 14 leçons)**

---

## 🎯 URLs pour tester

### Parcours complet Chapitre 1
```bash
# Home
http://localhost:5174/

# Chapitre
http://localhost:5174/chapitre/introduction

# Leçons (dans l'ordre)
http://localhost:5174/chapitre/introduction/lecon/definition
http://localhost:5174/chapitre/introduction/lecon/instruments
http://localhost:5174/chapitre/introduction/lecon/dette-capital
http://localhost:5174/chapitre/introduction/lecon/intermediation
http://localhost:5174/chapitre/introduction/lecon/acteurs
http://localhost:5174/chapitre/introduction/lecon/regulation
```

### Parcours complet Obligations
```bash
# Chapitre
http://localhost:5174/chapitre/obligations

# Leçons
http://localhost:5174/chapitre/obligations/lecon/definition-obligations
http://localhost:5174/chapitre/obligations/lecon/prix-rendement
http://localhost:5174/chapitre/obligations/lecon/risques-obligataires
http://localhost:5174/chapitre/obligations/lecon/notation
```

### Parcours complet Options
```bash
# Chapitre
http://localhost:5174/chapitre/options

# Leçons
http://localhost:5174/chapitre/options/lecon/introduction-options
http://localhost:5174/chapitre/options/lecon/positions-options
http://localhost:5174/chapitre/options/lecon/strategies-options
```

---

## 🔍 URLs de test spécifiques

### Tester les composants pédagogiques
```bash
# Leçon avec tous les types de contenu
http://localhost:5174/chapitre/introduction/lecon/definition

# Leçon avec beaucoup de quiz
http://localhost:5174/chapitre/obligations/lecon/definition-obligations

# Leçon avec exemples complexes
http://localhost:5174/chapitre/options/lecon/positions-options
```

### Tester la navigation
```bash
# Première leçon d'un chapitre (pas de bouton précédent)
http://localhost:5174/chapitre/introduction/lecon/definition

# Dernière leçon d'un chapitre (bouton "Chapitre terminé")
http://localhost:5174/chapitre/introduction/lecon/regulation

# Leçon au milieu (boutons précédent et suivant)
http://localhost:5174/chapitre/introduction/lecon/instruments
```

### Tester les états vides
```bash
# Chapitre sans leçons
http://localhost:5174/chapitre/actions
http://localhost:5174/chapitre/taux
http://localhost:5174/chapitre/risques
```

---

## 📱 URLs pour tester le responsive

### Desktop (1024px+)
```bash
# Ouvrir dans un navigateur normal
http://localhost:5174/
```

### Tablet (768px)
```bash
# Ouvrir DevTools → Responsive mode → iPad
http://localhost:5174/
```

### Mobile (375px)
```bash
# Ouvrir DevTools → Responsive mode → iPhone
http://localhost:5174/
```

---

## 🎉 Résumé

**22 URLs disponibles :**
- 1 page d'accueil
- 7 pages de chapitres
- 14 pages de leçons

**Toutes les URLs sont fonctionnelles et testées ! ✅**
