import React, { useState } from 'react';
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

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
          style={{ borderColor: 'black' }}
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
          transition={{ delay: 0.3 }}
        >
          Travaillons ensemble ! Laissez-moi un message.
        </motion.p>

        <form style={formStyle} onSubmit={handleSubmit}>
          <div style={inputGroupStyle}>
            <input 
              type="text" 
              name="name"
              placeholder="VOTRE NOM" 
              style={inputStyle} 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="VOTRE EMAIL" 
              style={inputStyle} 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea 
            name="message"
            placeholder="VOTRE MESSAGE" 
            style={textareaStyle}
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          
          {status && (
            <p style={{ 
              color: status.includes('Erreur') || status.includes('Impossible') ? '#d9534f' : '#5cb85c',
              fontWeight: 'bold',
              marginTop: '10px'
            }}>
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

export default Contact;
