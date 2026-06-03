import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importation des images des projets
import aeroportImg from '../assets/projects/sortie_page-0001.jpg';
import pitchAiImg from '../assets/projects/pitch-i.png';
import meteoImg from '../assets/projects/meteo.png';
import clubVideoImg from '../assets/projects/clubvideo.png';
import salleImg from '../assets/projects/salle.png';
import eventHubImg from '../assets/projects/EventHub.jpeg';
import chainCacaoImg from '../assets/projects/chaincacao.png';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      id: 1,
      title: "ChainCacao",
      desc: "Plateforme de traçabilité du cacao de la ferme jusqu'à l'exportation, de façon infalsifiable. Paiement automatique de l'agriculteur dès réception du produit.",
      tags: ["AWS EC2" , "Next.js" , "Go", "Web3", "Hyperledger Fabric"],
      image: chainCacaoImg,
      github: "https://github.com/TresorAlad",
      live: "https://cacaombh.vercel.app/"
    },
    {
      id: 2,
      title: "EventHub",
      desc: "Application mobile de gestion des événements tech au Togo. Découvrez, suivez et participez aux événements de la communauté tech locale. Bientôt disponible sur le Play Store.",
      tags: ["PostgreSQL", "React Native", "Expo", "Node.js"],
      image: eventHubImg,
      github: "https://github.com/TresorAlad",
      live: "https://github.com/TresorAlad/EventHub"
    },
    {
      id: 3,
      title: "Pitch AI",
      desc: "Plateforme d'analyse de projets par IA : identification des problèmes, solutions, Business Model Canvas et canaux de diffusion générés automatiquement.",
      tags: ["Python", "AI", "NLP", "Flask"],
      image: pitchAiImg,
      github: "https://github.com/TresorAlad/Pitch-IA.git",
      live: "https://app-pitch.onrender.com"
    },
    {
      id: 4,
      title: "Météo Temps Réel",
      desc: "Application de visualisation des données météorologiques mondiales en temps réel via API REST.",
      tags: ["Golang", "JavaScript", "API REST"],
      image: meteoImg,
      github: "https://github.com/TresorAlad/Meteo-Go-js.git",
      live: "https://meteodev.onrender.com/"
    },
    {
      id: 5,
      title: "Gestion de Salles Univ.",
      desc: "Application Desktop de réservation et d'administration des salles universitaires avec gestion des conflits de planning.",
      tags: ["Java", "JavaFX", "Maven", "SQLite"],
      image: salleImg,
      github: "https://github.com/TresorAlad/SystemeGestion.git",
      live: "#"
    },
    {
      id: 6,
      title: "Gestion Vidéo Club",
      desc: "Solution Desktop pour la gestion des locations, des stocks et des membres d'un Vidéo Club avec base de données embarquée.",
      tags: ["Java", "JavaFX", "SQLite"],
      image: clubVideoImg,
      github: "https://github.com/TresorAlad/Club-Video.git",
      live: "#"
    },
    {
      id: 7,
      title: "Gestion Aéroport & Vols",
      desc: "Modélisation complète d'un système de gestion aéroportuaire : MCD, MLD, MPD et diagramme de classes UML.",
      tags: ["UML", "Modelio", "SQL", "MCD/MLD"],
      image: aeroportImg,
      github: "https://github.com/TresorAlad",
      live: "#"
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          style={{ borderColor: 'white', marginBottom: '20px' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          MES RÉALISATIONS
        </motion.h2>
        
        <motion.p 
          style={sectionDescStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Projets combinant IA, analyse de données, développement backend et modélisation de bases de données.
        </motion.p>

        <div className="portfolio-grid" style={gridStyle}>
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((proj) => (
              <motion.div 
                key={proj.id} 
                className="project-card" 
                style={cardStyle}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <div style={imgWrapperStyle}>
                  <img src={proj.image} alt={proj.title} style={imgStyle} loading="lazy" />
                </div>
                <div style={cardContentStyle}>
                  <h4 style={cardTitleStyle}>{proj.title}</h4>
                  <p style={cardDescStyle}>{proj.desc}</p>
                  {proj.tags && (
                    <div style={tagsStyle}>
                      {proj.tags.map((tag, i) => (
                        <span key={i} style={tagBadgeStyle}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <div style={btnGroupStyle}>
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-premium" style={smallBtnStyle}>GITHUB</a>
                    {proj.live !== "#" && (
                      <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn-premium" style={{ ...smallBtnStyle, background: 'white', color: 'black' }}>LIVE</a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && allProjects.length > 6 && (
          <div style={buttonContainerStyle}>
            <button 
              className="btn-premium" 
              onClick={() => setShowAll(true)}
              style={showMoreButtonStyle}
            >
              VOIR PLUS DE PROJETS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const sectionDescStyle = {
  fontSize: '18px',
  color: 'var(--color-text-gray)',
  maxWidth: '600px',
  lineHeight: '1.6',
  marginBottom: '60px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
  gap: '30px',
};

const cardStyle = {
  backgroundColor: '#111',
  borderRadius: '15px',
  overflow: 'hidden',
  transition: 'transform 0.3s ease',
  border: '1px solid #222',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
};

const imgWrapperStyle = {
  width: '100%',
  height: '220px',
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const cardContentStyle = {
  padding: '25px',
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
};

const cardTitleStyle = {
  fontSize: '20px',
  fontWeight: '800',
  marginBottom: '10px',
  letterSpacing: '1px',
};

const cardDescStyle = {
  fontSize: '14px',
  color: 'var(--color-text-gray)',
  marginBottom: '25px',
  lineHeight: '1.6',
  flexGrow: 1,
};

const tagsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '8px',
  marginBottom: '20px',
};

const tagBadgeStyle = {
  fontSize: '10px',
  fontWeight: '800',
  letterSpacing: '1px',
  padding: '4px 10px',
  borderRadius: '100px',
  border: '1px solid #333',
  color: '#919191',
  textTransform: 'uppercase',
};

const btnGroupStyle = {
  display: 'flex',
  gap: '10px',
  marginTop: 'auto',
};

const smallBtnStyle = {
  padding: '10px 20px',
  fontSize: '10px',
  fontWeight: '800',
  borderRadius: '100px',
  textAlign: 'center',
  textDecoration: 'none',
  flex: 1,
};

const buttonContainerStyle = {
  textAlign: 'center',
  marginTop: '80px',
};

const showMoreButtonStyle = {
  background: 'transparent',
  border: '1px solid #444',
  color: 'white',
  padding: '15px 40px',
  borderRadius: '100px',
  cursor: 'pointer',
  fontWeight: '800',
  fontSize: '12px',
};

export default Portfolio;
