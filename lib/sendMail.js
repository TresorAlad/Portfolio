import nodemailer from 'nodemailer';

function env(name) {
  return (process.env[name] || '').trim();
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function sendContactMail({ name, email, message }) {
  const user = env('EMAIL_USER');
  const pass = env('EMAIL_PASS').replace(/\s/g, '');

  if (!user || !pass) {
    const error = new Error('Configuration email manquante.');
    error.statusCode = 500;
    throw error;
  }

  const safeName = String(name || '').trim();
  const safeEmail = String(email || '').trim();
  const safeMessage = String(message || '').trim();

  if (!safeName || !isValidEmail(safeEmail) || !safeMessage) {
    const error = new Error('Veuillez renseigner un nom, un email valide et un message.');
    error.statusCode = 400;
    throw error;
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"Portfolio Trésor ALADE" <${user}>`,
    to: user,
    replyTo: `${safeName} <${safeEmail}>`,
    subject: `Nouveau message de ${safeName} via Portfolio`,
    text: `Nom: ${safeName}\nEmail: ${safeEmail}\n\n${safeMessage}`,
  });
}
