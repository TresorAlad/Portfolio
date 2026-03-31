# 🚀 Trésor ALADE | Portfolio Professionnel

Bienvenue sur le dépôt de mon portfolio personnel. Ce projet est une vitrine de mes compétences en **Développement Backend** et mon parcours d'**Aspirant Data Engineer**.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Anim-ff69b4?logo=framer)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)

---

## ✨ Caractéristiques

- **Design Premium** : Une interface moderne avec un split-background dynamique (Gris/Noir).
- **Animations Fluides** : Utilisation de `Framer Motion` pour des transitions douces et interactives.
- **Formulaire de Contact Réel** : Système d'envoi d'emails via une **Serverless Function (Vercel API)** et **Nodemailer**.
- **Responsive Design** : Adapté aux mobiles, tablettes et ordinateurs.
- **Sections Claires** : À propos, Réalisations, Certifications et Skills.

---

## 🛠️ Stack Technique

- **Frontend** : React 19, Vite, Framer Motion, Vanilla CSS.
- **Backend (Email)** : Node.js (API Serverless Vercel), Nodemailer.
- **Déploiement** : Vercel.

---

## 🚀 Installation Locale

Pour faire tourner le projet sur votre machine :

1. **Cloner le dépôt** :
   ```bash
   git clone https://github.com/TresorAlad/Portfolio.git
   cd Portfolio
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Configurer les variables d'environnement** :
   Créez un fichier `.env` à la racine et ajoutez vos identifiants Gmail (utilisez un [Mot de passe d'application](https://myaccount.google.com/apppasswords)) :
   ```env
   EMAIL_USER=votre_email@gmail.com
   EMAIL_PASS=votre_code_16_caracteres
   ```

4. **Lancer le projet** :
   Pour lancer le site **ET** le serveur d'envoi d'emails localement :
   ```bash
   npm run dev:all
   ```

---

## 🌐 Déploiement sur Vercel

Le projet est optimisé pour un déploiement continu sur Vercel.

1. Connectez votre dépôt GitHub à Vercel.
2. Ajoutez les variables d'environnement `EMAIL_USER` et `EMAIL_PASS` dans les paramètres du projet sur le dashboard Vercel.
3. Vercel détectera automatiquement le dossier `api/` pour gérer l'envoi d'emails.

---

## 📄 Licence

Ce projet est sous licence MIT. N'hésitez pas à l'utiliser comme base pour votre propre portfolio !

---

**Contact** : [LinkedIn](https://linkedin.com/in/tresor-alade/) | [GitHub](https://github.com/TresorAlad)
