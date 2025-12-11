# Portfolio Blondel Fred - AEC Développement d'Applications Web

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)

Portfolio professionnel développé dans le cadre de l'AEC en Développement d'Applications Web au Collège Ahuntsic. Présente mes compétences, projets académiques et recherche de stage.

## 🌐 Lien de déploiement Vercel

**Live Demo :** [https://balency-portfolio.vercel.app](https://balency-portfolio.vercel.app)

📊 **Dashboard Vercel :** [https://vercel.com/kickstacks-projects-0060dca6/balency-portfolio/5mKbACCuTPABDsHEATxpWSKFmePM](https://vercel.com/kickstacks-projects-0060dca6/balency-portfolio/5mKbACCuTPABDsHEATxpWSKFmePM)

## 📋 Fonctionnalités du Portfolio

### ✅ Pages principales
- **🏠 Accueil** - Présentation, compétences techniques, projets récents
- **👤 À propos** - Parcours académique, téléchargement CV, compétences détaillées
- **🚀 Projets** - Liste complète des projets GitHub avec filtres
- **📞 Contact** - Formulaire fonctionnel avec validation

### ✅ Caractéristiques techniques
- **📱 Responsive Design** - Mobile-first, compatible tous écrans
- **⚡ Performance optimisée** - Next.js 14 avec App Router
- **🔍 SEO optimisé** - Métadonnées complètes, OpenGraph
- **🎨 UI/UX moderne** - Design avec Tailwind CSS et animations
- **🔄 Routes dynamiques** - Pages de détails des projets

## 🛠️ Stack Technique

| Catégorie | Technologies |
|-----------|--------------|
| **Framework** | Next.js 14 (App Router) |
| **Langage** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | React Icons |
| **Déploiement** | Vercel |
| **Version Control** | Git & GitHub |

## 📁 Structure du Projet
balency_portfolio/
├── src/
│ ├── app/ # Pages Next.js (App Router)
│ │ ├── layout.tsx # Layout principal
│ │ ├── page.tsx # Page d'accueil
│ │ ├── about/ # Page À propos
│ │ ├── projects/ # Pages projets
│ │ │ ├── page.tsx # Liste des projets
│ │ │ └── [slug]/ # Pages dynamiques
│ │ └── contact/ # Page contact
│ ├── components/ # Composants React
│ │ ├── Layout/ # Header, Footer
│ │ └── UI/ # Composants réutilisables
│ ├── data/ # Données statiques
│ │ ├── projects.ts # Données des projets
│ │ └── ... # Autres données
│ └── styles/ # Styles globaux
├── public/ # Assets statiques
│ ├── cv-blondel-fred.pdf # CV téléchargeable
│ └── images/ # Images du portfolio
├── package.json # Dépendances
├── tailwind.config.ts # Configuration Tailwind
├── next.config.js # Configuration Next.js
└── README.md # Documentation

text

## 📂 Mes Projets GitHub

Le portfolio présente mes 5 projets académiques réels :

1. **📚 Système de Gestion de Bibliothèque** - PHP/Laravel/MySQL
2. **✅ Application To-Do** - PHP/MySQL (projet d'examen)
3. **🛒 Solution E-commerce** - PHP/MySQL/JavaScript
4. **🎯 Plateforme de Rencontres** - PHP/MySQL
5. **🚀 Initiation Développement Serveur** - Node.js/Express

**Lien GitHub :** [github.com/Balency](https://github.com/Balency)

## 🚀 Installation Locale

```bash
# 1. Cloner le dépôt
cd balency_portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev

# 4. Ouvrir http://localhost:3000 dans le navigateur
📦 Scripts NPM
bash
# Développement
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
🔧 Configuration du Déploiement
Variables d'Environnement
Aucune variable d'environnement n'est nécessaire pour ce projet de base.

Build Configuration (Vercel)
Build Command: npm run build

Output Directory: .next

Install Command: npm install

🎓 Contexte Académique
Ce projet a été réalisé dans le cadre de l'AEC en Développement d'Applications Web au Collège Ahuntsic (Montréal, Québec).

Objectifs pédagogiques atteints :

✅ Maîtrise du routage Next.js (statique et dynamique)

✅ Gestion de contenu dynamique avec TypeScript

✅ Expérience utilisateur optimisée (UI/UX)

✅ Déploiement sur Vercel avec mise en production

✅ Utilisation de pré-rendu (SSG) avec generateStaticParams

📄 Fichiers Importants
src/data/projects.ts - Contient toutes les données des projets

public/cv-blondel-fred.pdf - CV téléchargeable

tailwind.config.ts - Configuration du design system

next.config.js - Configuration Next.js pour Vercel

🔗 Liens Utiles
Lien	Description
🌐 Site Live	Portfolio déployé
📂 Code Source	Dépôt GitHub
👨‍💻 Mes Projets	Mon GitHub personnel
🏫 Collège Ahuntsic	Établissement scolaire
🚀 Vercel Dashboard	Tableau de bord du projet
📊 Métriques de Performance
Lighthouse Score: >90/100 (Performance, SEO, Accessibilité)

Temps de chargement: <2s

Bundle Size: Optimisé avec Next.js

SEO: Métadonnées complètes pour partage social

🤝 Contribution
Ce projet étant un portfolio académique, les contributions ne sont pas ouvertes. Cependant, vous pouvez :

Fork le projet pour votre usage personnel

Adapter le code à vos besoins

Créer des issues pour signaler des bugs

📝 Licence
© 2024 Blondel Fred - Collège Ahuntsic

Ce projet est un portfolio éducatif réalisé dans le cadre d'une formation académique. Les images et contenus sont à usage éducatif uniquement.

Développé avec ❤️ par Blondel Fred
Étudiant en AEC Développement d'Applications Web
Collège Ahuntsic - Montréal, Québec