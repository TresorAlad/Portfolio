"use client";

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="section-gray home-section-anchor">
      <div className="container">
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-text">
          <p>
            AI &amp; Data Engineer, je conçois et déploie des solutions d&apos;intelligence
            artificielle, d&apos;ingénierie des données et d&apos;automatisation. Mon approche
            combine rigueur technique, clarté des architectures et livraison orientée produit.
          </p>
          <p>
            Passionné par les systèmes scalables et l&apos;intégration de modèles IA dans des
            applications concrètes, j&apos;accompagne les projets de la conception à la mise en
            production.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
