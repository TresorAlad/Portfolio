import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/tresorfolio.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      <motion.div
        className="container nav-container"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo avec votre photo */}
        <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={profileImg} alt="Trésor ALADE" className="logo-img" />
        </div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#certificates">Certifications</a>
          <a href="#skills">Skills</a>
          <button className="btn-header" style={{ marginLeft: '40px' }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>CONTACT ME</button>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
