import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const data = await response.json();

      if (data.success) {
        setStatus('Message envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Erreur : ' + data.message);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStatus("Impossible d'envoyer le message. Vérifiez que le serveur est démarré.");
    }
  };

  return (
    <section id="contact" style={sectionStyle}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Contact
        </motion.h2>
        <motion.p
          style={subTitleStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Une opportunité, une collaboration ou juste envie d'échanger ? Laissez-moi un message.
        </motion.p>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div className="contact-inputs" style={inputGroupStyle}>
            <label htmlFor="name" style={visuallyHiddenStyle}>Votre nom</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="VOTRE NOM"
              style={inputStyle}
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" style={visuallyHiddenStyle}>Votre email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="VOTRE EMAIL"
              style={inputStyle}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="message" style={visuallyHiddenStyle}>Votre message</label>
          <textarea
            id="message"
            name="message"
            placeholder="VOTRE MESSAGE"
            style={textareaStyle}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          {status && (
            <p
              role="status"
              aria-live="polite"
              style={{
                color: status.includes('Erreur') || status.includes('Impossible') ? '#d9534f' : '#5cb85c',
                fontWeight: 'bold',
                marginTop: '10px'
              }}
            >
              {status}
            </p>
          )}

          <motion.button
            type="submit"
            className="btn-pill"
            style={buttonStyle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ENVOYER LE MESSAGE
          </motion.button>
        </form>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '120px 0',
  backgroundColor: '#D7D7D7', /* Synchronized with the global gray */
  color: 'black',
};

const subTitleStyle = {
  fontSize: '20px',
  marginBottom: '60px',
  color: '#555',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  maxWidth: '800px',
  margin: '0 auto',
};

const inputGroupStyle = {
  display: 'flex',
  gap: '20px',
  width: '100%',
};

const inputStyle = {
  flex: 1,
  padding: '20px 0',
  border: 'none',
  borderBottom: '2px solid #000',
  backgroundColor: 'transparent',
  color: 'black',
  fontFamily: 'inherit',
  fontSize: '16px',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const textareaStyle = {
  ...inputStyle,
  minHeight: '150px',
  resize: 'none',
};

const buttonStyle = {
  marginTop: '30px',
  width: 'fit-content',
  padding: '15px 40px',
  background: 'black',
  color: 'white',
  fontWeight: '800',
  borderRadius: '100px',
  border: 'none',
  cursor: 'pointer',
};

const visuallyHiddenStyle = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0,0,0,0)',
  whiteSpace: 'nowrap',
  border: 0,
};

export default Contact;
