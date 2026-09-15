"use client";

import React from "react";
import Image from "next/image";

const CV_LINK =
  "https://drive.google.com/file/d/1SiREQ9EtbPiBA1GOH5YmFIW3yskuKWno/view?usp=sharing";

const Presentation = () => {
  return (
    <section className="hero" id="top">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-text-small">Salut, je suis</p>
          <h1 className="hero-name">Trésor ALADE</h1>
          <p className="hero-title">AI & Data Engineer</p>

          <div className="social-icons">
            <a href={CV_LINK} target="_blank" rel="noopener noreferrer" className="cv-button">
              Mon CV
            </a>
            <a
              href="https://github.com/TresorAlad"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
              aria-label="GitHub de Trésor ALADE"
            >
              <i className="bx bxl-github" aria-hidden="true" />
            </a>
            <a
              href="https://linkedin.com/in/tresor-alade/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-box"
              aria-label="LinkedIn de Trésor ALADE"
            >
              <i className="bx bxl-linkedin" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <Image
            src="/profile.png"
            alt="Trésor ALADE"
            width={400}
            height={500}
            priority
            style={{ width: "100%", height: "auto", maxWidth: 400 }}
          />
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span className="scroll-text">Scrollez</span>
      </div>
    </section>
  );
};

export default Presentation;
