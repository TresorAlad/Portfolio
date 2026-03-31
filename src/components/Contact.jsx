import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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

        <form style={formStyle} onSubmit={(e) => e.preventDefault()}>
          <div style={inputGroupStyle}>
            <input type="text" placeholder="VOTRE NOM" style={inputStyle} />
            <input type="email" placeholder="VOTRE EMAIL" style={inputStyle} />
          </div>
          <textarea placeholder="VOTRE MESSAGE" style={textareaStyle}></textarea>
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
