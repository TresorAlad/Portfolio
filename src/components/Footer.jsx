import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Email', icon: 'bx bx-envelope', url: 'mailto:bernardalade92@email.com' },
    { name: 'GitHub', icon: 'bx bxl-github', url: 'https://github.com/TresorAlad' },
    { name: 'LinkedIn', icon: 'bx bxl-linkedin', url: 'https://linkedin.com/in/tresor-alade/' },
  ];

  return (
    <footer style={footerStyle}>
      <div className="social-links-footer" style={socialGroupStyle}>
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={iconLinkStyle}
            whileHover={{ y: -5, color: '#FFFFFF' }}
            transition={{ duration: 0.3 }}
          >
            <i className={link.icon} style={iconFontSize}></i>
          </motion.a>
        ))}
      </div>

      <p style={copyrightStyle}>
        © {currentYear} TRÉSOR ALADE. TOUS DROITS RÉSERVÉS.
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#000000',
  color: 'white',
  padding: '80px 0',
  textAlign: 'center',
  borderTop: '1px solid #222',
};

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '40px',
};

const logoStyle = {
  fontSize: '28px',
  fontWeight: '800',
  letterSpacing: '-1px',
  cursor: 'pointer',
};

const socialGroupStyle = {
  display: 'flex',
  gap: '30px',
  justifyContent: 'center',
};

const iconLinkStyle = {
  color: '#919191', /* Gris discret par défaut */
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const iconFontSize = {
  fontSize: '24px',
};

const copyrightStyle = {
  fontSize: '12px',
  color: '#555',
  letterSpacing: '2px',
  marginTop: '20px',
  fontWeight: '700',
};

export default Footer;
