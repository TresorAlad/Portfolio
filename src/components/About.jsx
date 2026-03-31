import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '120px 0', color: 'black' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content" style={aboutContentStyle}>
          <p style={paragraphStyle}>
            Actuellement étudiant en <strong>Licence 2 IA et Big Data à l'ESGIS TOGO</strong>,
            ma démarche repose sur une vision claire : devenir un <strong>Data Engineer</strong> accompli.
            Passionné par la logique et l'analyse, je m'investis aujourd'hui dans un double apprentissage
            intensif combinant le <strong>Développement Backend</strong> et l'<strong>Administration de Bases de Données</strong>.
          </p>
          <p style={paragraphStyle}>
            Pour moi, maîtriser le code ne suffit pas sans une compréhension profonde des architectures de données.
            Je développe des solutions robustes et scalables, tout en approfondissant mes connaissances techniques
            sur la gestion, l'optimisation et la sécurité des environnements SQL et NoSQL.
          </p>
          <motion.div
            style={ctaStyle}
            whileHover={{ scale: 1.05 }}
          >
            <a href="#portfolio" className="btn-premium">DÉCOUVREZ MES PROJETS</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const aboutContentStyle = {
  maxWidth: '900px',
  marginTop: '50px',
};

const paragraphStyle = {
  fontSize: '20px',
  lineHeight: '1.9',
  fontWeight: '400',
  color: '#333',
  marginBottom: '30px',
};

const ctaStyle = {
  marginTop: '40px',
  display: 'inline-block',
};

export default About;
