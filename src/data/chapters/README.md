# Structure modulaire des chapitres

Ce dossier contient les leçons de chaque chapitre dans des fichiers séparés pour faciliter la maintenance.

## Fichiers actuels

- **`obligations.ts`** : 4 leçons sur les obligations (Chapitre 2 - partie 1)
  - Définition d'une obligation
  - Prix et rendement
  - Les risques des obligations
  - Types d'obligations et notation

- **`options.ts`** : 3 leçons sur les options (Chapitre 2 - partie 2)
  - Introduction aux options
  - Les 4 positions sur options
  - Stratégies et volatilité

- **`indices-etf.ts`** : 1 leçon sur les indices et ETF (Chapitre 2 - partie 3)
  - Indices boursiers et ETF

## Comment ajouter un nouveau chapitre

1. Créer un nouveau fichier `nom-chapitre.ts` dans ce dossier
2. Exporter un tableau de `Lesson[]` :

```typescript
import { Lesson } from '../../types'

export const nomChapitreLessons: Lesson[] = [
  {
    id: 'lecon-1',
    title: 'Titre de la leçon',
    description: 'Description courte',
    duration: '12 min',
    content: [
      // Contenu de la leçon
    ]
  }
]
```

3. Importer dans `src/data/chapters.ts` :

```typescript
import { nomChapitreLessons } from './chapters/nom-chapitre'

// Puis l'utiliser dans le tableau chapters
{
  id: 'nom-chapitre',
  title: 'Titre du Chapitre',
  lessons: nomChapitreLessons
}
```

## Avantages de cette structure

- ✅ Fichiers plus petits et plus faciles à maintenir
- ✅ Chaque chapitre est indépendant
- ✅ Facile d'ajouter du contenu sans toucher aux autres chapitres
- ✅ Meilleure organisation du code
- ✅ Compilation plus rapide (TypeScript peut paralléliser)
