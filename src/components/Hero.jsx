import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="hero">
      <motion.div
        className="container hero-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-content">
          <motion.p variants={itemVariants} className="hero-text-small">Salut, je suis</motion.p>
          <motion.h1 variants={itemVariants} className="hero-name">Trésor ALADE</motion.h1>
          <motion.p variants={itemVariants} className="hero-title">Développeur Backend JR. / Aspirant Data Eng.</motion.p>

          <motion.div variants={itemVariants} className="social-icons" style={socialGroupStyle}>
            <motion.a
              href="https://drive.google.com/file/d/10Ay2UpVUx1d4OpIpeunhMYuZM_EYHgsA/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="cv-button"
              whileHover={{ scale: 1.05, backgroundColor: '#FFFFFF', color: '#000000' }}
              style={cvButtonStyle}
            >
              Mon CV
            </motion.a>

            <motion.a
              href="https://github.com/TresorAlad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
              style={socialLinkReset}
              whileHover={{ scale: 1.1, color: '#FFFFFF', backgroundColor: '#000000' }}
            >
              <i className='bx bxl-github' ></i>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/tresor-alade/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
              style={socialLinkReset}
              whileHover={{ scale: 1.1, color: '#FFFFFF', backgroundColor: '#000000' }}
            >
              <i className='bx bxl-linkedin' ></i>
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          className="hero-image-wrapper"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src={profileImg}
            alt="Trésor ALADE"
            style={imageStyle}
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Indicateur de Scroll Animé (CORRIGÉ EN NOIR POUR LE GRIS) */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={scrollIndicatorStyle}
      >
        <motion.div
          className="mouse"
          style={mouseStyle}
        >
          <motion.div
            className="wheel"
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={mouseWheelStyle}
          ></motion.div>
        </motion.div>
        <span style={scrollTextHeroStyle}>Scrollez</span>
      </motion.div>
    </section>
  );
};

const cvButtonStyle = {
  backgroundColor: '#000000',
  color: '#FFFFFF',
  padding: '12px 30px',
  borderRadius: '50px',
  fontWeight: '900',
  fontSize: '14px',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  marginRight: '20px'
};

const socialLinkReset = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

const socialGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginTop: '30px'
};

const imageStyle = {
  maxWidth: '550px',
  width: '100%',
  zIndex: 10,
  marginTop: '50px',
  position: 'relative'
};

const scrollIndicatorStyle = {
  position: 'absolute',
  bottom: '40px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '12px',
  zIndex: 10
};

const mouseStyle = {
  width: '28px',
  height: '45px',
  border: '2px solid rgba(255, 255, 255, 0.4)',
  borderRadius: '20px',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '8px'
};

const mouseWheelStyle = {
  width: '4px',
  height: '8px',
  backgroundColor: '#FFFFFF',
  borderRadius: '2px'
};

const scrollTextHeroStyle = {
  fontSize: '9px',
  fontWeight: '800',
  textTransform: 'uppercase',
  letterSpacing: '3px',
  color: 'rgba(255, 255, 255, 0.5)'
};

export default Hero;
