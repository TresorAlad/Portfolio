import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { sendContactMail } from './lib/sendMail.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5050;

app.post('/api/send-email', async (req, res) => {
  try {
    await sendContactMail(req.body || {});
    res.status(200).json({ success: true, message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error("Erreur lors de l'envoi du mail:", error);
    const statusCode = error.statusCode || 500;
    const message = statusCode === 400
      ? error.message
      : "L'envoi a échoué. Réessayez dans un instant.";
    res.status(statusCode).json({ success: false, message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
