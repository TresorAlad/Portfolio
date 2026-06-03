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
            Étudiant en <strong>Licence 2 IA et Big Data à l'ESGIS TOGO</strong>, je me construis
            un parcours solide en <strong>Intelligence Artificielle</strong> et <strong>Data Science</strong>.
            Passionné par la modélisation mathématique et l'analyse de données, j'approfondis
            activement les fondements : algèbre linéaire, calcul différentiel, statistiques et probabilités,
            au service des algorithmes de Machine Learning.
          </p>
          <p style={paragraphStyle}>
            Mon objectif : maîtriser l'ensemble de la chaîne - de la collecte et la transformation des données
            jusqu'à la conception et le déploiement de modèles intelligents. Je combine des certifications
            académiques (<strong>Imperial College London</strong>, <strong>University of London</strong>) avec
            une pratique rigoureuse en Python, NumPy et Jupyter pour bâtir une expertise durable en IA appliquée.
          </p>
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


export default About;
