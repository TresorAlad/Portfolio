import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ padding: '120px 0', color: 'black' }}>
      <motion.div
        className="container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="section-title">À propos de moi</h2>
        <div className="about-content" style={aboutContentStyle}>
          <p style={paragraphStyle}>
            Étudiant en Licence 3 Intelligence Artificielle et Big Data à l'ESGIS Togo,
            je me forme aux métiers d'AI Engineer et de Data Engineer. Je développe
            des solutions d'intelligence artificielle, de data et d'automatisation
            au service de besoins concrets.
          </p>
          <p style={lastParagraphStyle}>
            Je suis actuellement à la recherche d'un stage professionnel ou d'une
            opportunité en IA et data.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

const aboutContentStyle = {
  maxWidth: '820px',
  marginTop: '50px',
};

const paragraphStyle = {
  fontSize: '20px',
  lineHeight: '1.85',
  fontWeight: '400',
  color: '#333',
  marginBottom: '24px',
};

const lastParagraphStyle = {
  ...paragraphStyle,
  marginBottom: 0,
};

export default About;
