# Portfolio Personnel - Voukeng Dongmo Franky Steve

Un portfolio moderne, élégant et interactif conçu pour présenter mon parcours, mes compétences et mes réalisations en tant que Développeur Full Stack & Web Designer.

## 🚀 À propos du projet

Ce site vitrine a été développé avec une attention particulière portée à l'expérience utilisateur (UI/UX), à la performance et à l'esthétique. Il utilise des animations fluides pour guider le visiteur et met en valeur les projets à travers une interface sombre ("Dark Mode") professionnelle aux accents émeraude.

## ✨ Fonctionnalités Clés

-   **Design Premium & Responsive** : Interface sombre élégante, parfaitement adaptée aux mobiles, tablettes et bureaux.
-   **Animations Avancées** :
    -   Transitions d'apparition au défilement (Scroll Reveal).
    -   Effets de parallaxe sur les images des projets (souris et scroll).
    -   Micro-interactions soignées sur les boutons et les liens.
-   **Navigation Intuitive** : Scroll fluide (Smooth Scrolling) avec barre de navigation adaptative (Glassmorphism).
-   **Galerie de Projets** : Cartes interactives avec effet de zoom, overlay d'informations et liens vers GitHub/Live demo.
-   **Témoignages** : Carrousel interactif avec auto-play et navigation tactile.
-   **Formulaire de Contact** : Validation complète côté client (nom, email regex, message) avec retour visuel des erreurs.

## 🛠 Technologies Utilisées

Ce projet est construit sur un stack technique moderne et performant :

-   **Core** : React 19, TypeScript
-   **Styling** : Tailwind CSS
-   **Animations** : Framer Motion
-   **Icons** : Lucide React
-   **Font** : Inter (Sans) & Playfair Display (Serif) via Google Fonts

## 📂 Structure du Projet

L'architecture est modulaire pour faciliter la maintenance :

```text
/
├── index.html          # Point d'entrée HTML (Configuration Tailwind & Fonts)
├── index.tsx           # Montage de l'application React
├── App.tsx             # Orchestration des sections
├── constants.ts        # "Source of Truth" : Données (Projets, Textes, Compétences)
├── types.ts            # Définitions des interfaces TypeScript
└── components/         # Composants UI isolés
    ├── Header.tsx      # Navigation fixe avec menu mobile
    ├── Hero.tsx        # Bannière d'accueil immersive
    ├── About.tsx       # Section biographie
    ├── Skills.tsx      # Grille de compétences techniques
    ├── Projects.tsx    # Showcase des réalisations (Logique Parallaxe)
    ├── Testimonials.tsx# Slider de recommandations
    ├── Contact.tsx     # Formulaire et coordonnées
    └── Footer.tsx      # Pied de page
```

## ⚙️ Personnalisation

Le contenu est découplé de la logique. Pour mettre à jour le portfolio, modifiez simplement le fichier **`constants.ts`** :

1.  **Navigation** : Modifiez `NAV_ITEMS`.
2.  **Compétences** : Ajoutez ou retirez des objets dans `SKILLS`.
3.  **Projets** : Mettez à jour la liste `PROJECTS` avec vos images et descriptions.
4.  **Témoignages** : Éditez `TESTIMONIALS` pour ajouter de nouveaux avis.

---

© 2025 Voukeng Dongmo Franky Steve.
