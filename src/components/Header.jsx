import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/tresorfolio.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMenu = () => setMobileMenuOpen(false);

  const menuVariants = {
    closed: { x: "100%", transition: { type: "spring", stiffness: 300, damping: 30 } },
    open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  return (
    <header className={`${scrolled ? 'header-scrolled' : ''} ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container nav-container">
        {/* Logo avec votre photo */}
        <div className="logo" onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}>
          <img src={profileImg} alt="Trésor ALADE" className="logo-img" />
        </div>

        {/* Bouton Hamburger Mobile (Les trois barres) */}
        <div className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Liens de navigation (Desktop) */}
        <nav className="nav-links desktop-only">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#certificates">Certifications</a>
          <a href="#skills">Skills</a>
          <button className="btn-header" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>CONTACT ME</button>
        </nav>

        {/* Menu Mobile (Slide out) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              className="mobile-nav"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
            >
              <div className="mobile-nav-links">
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                <a href="#certificates" onClick={closeMenu}>Certifications</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <button className="btn-premium" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>CONTACT ME</button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
