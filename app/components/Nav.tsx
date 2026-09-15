"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollTo = useCallback((id: string) => {
    closeMenu();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const navLinks = [
    { id: "about", label: "À propos" },
    { id: "portfolio", label: "Portfolio" },
    { id: "certificates", label: "Certifications" },
    { id: "skills", label: "Compétences" },
  ];

  return (
    <header className="site-header">
      <div className="nav-container">
        <button
          type="button"
          onClick={() => scrollTo("top")}
          aria-label="Retour en haut de page"
          style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
        >
          <Image
            src="/profile.png"
            alt="Trésor ALADE"
            width={45}
            height={45}
            className="logo-img"
            priority
          />
        </button>

        <button
          type="button"
          className={`mobile-toggle ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <nav className="nav-links desktop-only">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.id);
              }}
            >
              {link.label}
            </a>
          ))}
          <button type="button" className="btn-header" onClick={() => scrollTo("contact")}>
            ME CONTACTER
          </button>
        </nav>

        {mobileMenuOpen && (
          <nav className="mobile-nav">
            <div className="mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.id);
                  }}
                >
                  {link.label}
                </a>
              ))}
              <button type="button" className="btn-premium" onClick={() => scrollTo("contact")}>
                ME CONTACTER
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
