import { sendContactMail } from '../lib/sendMail.js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Méthode non autorisée.' });
  }

  try {
    await sendContactMail(req.body || {});
    return res.status(200).json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Email error:', error);
    const statusCode = error.statusCode || 500;
    const message = statusCode === 400
      ? error.message
      : "L'envoi a échoué. Réessayez dans un instant.";
    return res.status(statusCode).json({ success: false, message });
  }
}
