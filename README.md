# Trésor ALADE | Portfolio

Portfolio personnel de **Trésor ALADE**, étudiant en Licence 2 IA et Big Data à l'ESGIS TOGO - AI Engineer & Data Scientist en apprentissage.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff69b4?logo=framer)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?logo=vercel)

**Live** : [foliotresor.vercel.app](https://foliotresor.vercel.app)

---

## Sections

- **Hero** - Présentation et liens sociaux
- **À propos** - Parcours IA/Data Science, certifications académiques
- **Portfolio** - Projets : TechMentor AI, ChainCacao, EventHub, Pitch AI, Météo, Gestion de salles, etc.
- **Certifications** - 16 certificats (Coursera, LinkedIn Learning, Sololearn, Udemy, MLH)
- **Compétences** - Stack actuelle + technologies en apprentissage
- **Contact** - Formulaire d'envoi d'email via Serverless Function

---

## Stack

- **Frontend** : React 19, Vite 8, Framer Motion, CSS vanilla
- **Email** : Node.js, Nodemailer, Vercel Serverless Function
- **Déploiement** : Vercel

---

## Installation locale

1. Cloner le dépôt :
   ```bash
   git clone https://github.com/TresorAlad/Portfolio.git
   cd Portfolio
   ```

2. Installer les dépendances :
   ```bash
   npm install
   ```

3. Configurer les variables d'environnement — créer un fichier `.env` à la racine :
   ```env
   EMAIL_USER=votre_email@gmail.com
   EMAIL_PASS=votre_mot_de_passe_application_gmail
   ```
   > Utiliser un [mot de passe d'application Gmail](https://myaccount.google.com/apppasswords), pas le mot de passe principal.

4. Lancer le site et le serveur email en même temps :
   ```bash
   pnpm dev:all
   ```

---

## Déploiement Vercel

1. Connecter le dépôt GitHub à Vercel
2. Ajouter les variables `EMAIL_USER` et `EMAIL_PASS` dans **Settings > Environment Variables**
3. Vercel détecte automatiquement le dossier `api/` pour la Serverless Function email

---

**Contact** : [LinkedIn](https://linkedin.com/in/tresor-alade/) | [GitHub](https://github.com/TresorAlad)
