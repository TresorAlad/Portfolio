"use client";

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-socials">
        <a
          href="https://github.com/TresorAlad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Trésor ALADE"
        >
          <i className="bx bxl-github" aria-hidden="true" />
        </a>
        <a
          href="https://linkedin.com/in/tresor-alade/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn de Trésor ALADE"
        >
          <i className="bx bxl-linkedin" aria-hidden="true" />
        </a>
      </div>
      <p className="footer-copy">© {year} TRÉSOR ALADE. TOUS DROITS RÉSERVÉS.</p>
    </footer>
  );
};

export default Footer;
