import { motion } from 'framer-motion';

const highlights = [
  {
    label: 'IA appliquée',
    text: 'Agents, LLM et RAG au service d\'un usage précis, pas d\'une démo.',
  },
  {
    label: 'Data engineering',
    text: 'Pipelines, structuration et valorisation de la donnée, de la source au produit.',
  },
  {
    label: 'Automatisation',
    text: 'Des flux qui réduisent le travail manuel et rendent les résultats mesurables.',
  },
];

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

        <p style={leadStyle}>
          Je conçois des systèmes d'IA et de data qui transforment un besoin métier en outil utilisable.
        </p>

        <div className="about-content" style={aboutContentStyle}>
          <p style={paragraphStyle}>
            <strong>Junior AI & Data Engineer</strong>, en Licence 3 Intelligence Artificielle
            et Big Data à l'ESGIS Togo. Je relie modèles de langage, pipelines de données et
            automatisation pour livrer des solutions claires, mesurables et ancrées dans un usage réel.
          </p>
          <p style={paragraphStyle}>
            J'avance par la pratique. <strong>TechMentor AI</strong> analyse un profil et trace une
            roadmap. <strong>ƉeƉeFIA</strong> audite un domaine et priorise les risques.
            <strong>ChainCacao</strong> structure la donnée de la chaîne cacao pour la rendre traçable.
          </p>
        </div>

        <div style={highlightsStyle}>
          {highlights.map((item) => (
            <motion.article
              key={item.label}
              style={highlightCardStyle}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 style={highlightLabelStyle}>{item.label}</h3>
              <p style={highlightTextStyle}>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const leadStyle = {
  fontSize: '28px',
  lineHeight: '1.35',
  fontWeight: '800',
  letterSpacing: '-0.5px',
  maxWidth: '820px',
  marginTop: '50px',
  marginBottom: '28px',
  color: '#111',
};

const aboutContentStyle = {
  maxWidth: '820px',
};

const paragraphStyle = {
  fontSize: '18px',
  lineHeight: '1.85',
  fontWeight: '400',
  color: '#333',
  marginBottom: '22px',
};

const highlightsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
  gap: '20px',
  marginTop: '50px',
};

const highlightCardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.45)',
  border: '1px solid rgba(0, 0, 0, 0.06)',
  borderRadius: '15px',
  padding: '28px 24px',
  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.03)',
};

const highlightLabelStyle = {
  fontSize: '12px',
  fontWeight: '900',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  marginBottom: '12px',
  borderLeft: '4px solid #000',
  paddingLeft: '12px',
};

const highlightTextStyle = {
  fontSize: '15px',
  lineHeight: '1.7',
  color: '#444',
  margin: 0,
};

export default About;
