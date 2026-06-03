import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/tresorfolio.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    const handleKeyDown = (e) => { if (e.key === 'Escape') setMobileMenuOpen(false); };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
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
        <button
          className="logo"
          onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); closeMenu(); }}
          aria-label="Retour en haut de page"
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <img src={profileImg} alt="Trésor ALADE" className="logo-img" />
        </button>

        <button
          type="button"
          className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileMenuOpen}
          style={{ background: 'none', border: 'none', padding: 0 }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Liens de navigation (Desktop) */}
        <nav className="nav-links desktop-only">
          <a href="#about">À propos</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#certificates">Certifications</a>
          <a href="#skills">Compétences</a>
          <button className="btn-header" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>ME CONTACTER</button>
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
                <a href="#about" onClick={closeMenu}>À propos</a>
                <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
                <a href="#certificates" onClick={closeMenu}>Certifications</a>
                <a href="#skills" onClick={closeMenu}>Compétences</a>
                <button className="btn-premium" onClick={() => { document.getElementById('contact').scrollIntoView({ behavior: 'smooth' }); closeMenu(); }}>ME CONTACTER</button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
