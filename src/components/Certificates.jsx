import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import voyageImg from '../assets/certificats/Voyage.jpg';
import databaseModelImg from '../assets/certificats/Modelisation database.jpg';
import oracleAdminImg from '../assets/certificats/Administration oracle.jpg';
import umlModelImg from '../assets/certificats/uml modelisation.jpg';
import promptImg from '../assets/certificats/prompt.png';
import mlhCertImg from '../assets/certificats/MLH Certification.png';
import vibeCodingImg from '../assets/certificats/VibeCoding.jpg';
import golangCertImg from '../assets/certificats/certification_golang.jpeg';
import linearRegressionImg from '../assets/certificats/Coursera QWZI8DJO3BPP.jpg';
import dbaAdminImg from '../assets/certificats/Coursera Administration.jpg';
import ragAgenticImg from '../assets/certificats/IBM RAG and Agentic AI.jpeg';
import probStatPdf from '../assets/certificats/Coursera E68047B9ZJMU.pdf';
import hypothesisPdf from '../assets/certificats/Coursera 4WXLJ26EY0CY.pdf';
import algebraPdf from '../assets/certificats/Coursera NUKQWGHGU4K9.pdf';
import pcaPdf from '../assets/certificats/Coursera 9BRPIBE4N87C.pdf';
import multivariatePdf from '../assets/certificats/Coursera VV9CLWXAWOQA.pdf';

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);

  const allCerts = [
    {
      id: 1,
      title: "IBM RAG and Agentic AI",
      org: "Coursera - IBM",
      year: "Juillet 2026",
      image: ragAgenticImg,
      link: "https://www.coursera.org/verify/professional-cert/VFAPDCQNSK1V",
    },
    {
      id: 2,
      title: "Linear Regression for Business Statistics",
      org: "Coursera - Rice University",
      year: "Juin 2026",
      image: linearRegressionImg,
      link: "https://www.coursera.org/account/accomplishments/verify/QWZI8DJO3BPP",
    },
    {
      id: 3,
      title: "Probability and Statistics: To p or not to p?",
      org: "Coursera - University of London",
      year: "Mai 2026",
      pdf: probStatPdf,
      link: "https://www.coursera.org/account/accomplishments/verify/E68047B9ZJMU",
    },
    {
      id: 4,
      title: "Introduction to Statistical Analysis: Hypothesis Testing",
      org: "Coursera - SAS",
      year: "Mai 2026",
      pdf: hypothesisPdf,
      link: "https://www.coursera.org/account/accomplishments/verify/4WXLJ26EY0CY",
    },
    {
      id: 5,
      title: "Algebra and Differential Calculus for Data Science",
      org: "Coursera - University of Colorado Boulder",
      year: "Mai 2026",
      pdf: algebraPdf,
      link: "https://www.coursera.org/account/accomplishments/verify/NUKQWGHGU4K9",
    },
    {
      id: 6,
      title: "Mathematics for Machine Learning: PCA",
      org: "Coursera - Imperial College London",
      year: "Mai 2026",
      pdf: pcaPdf,
      link: "https://www.coursera.org/account/accomplishments/verify/9BRPIBE4N87C",
    },
    {
      id: 7,
      title: "Mathematics for Machine Learning: Multivariate Calculus",
      org: "Coursera - Imperial College London",
      year: "Mai 2026",
      pdf: multivariatePdf,
      link: "https://www.coursera.org/account/accomplishments/verify/VV9CLWXAWOQA",
    },
    {
      id: 8,
      title: "Relational Database Administration (DBA)",
      org: "Coursera - IBM",
      year: "Avril 2026",
      image: dbaAdminImg,
      link: "https://www.coursera.org/account/accomplishments/verify/211QSTSXE0CB",
    },
    {
      id: 9,
      title: "Vibe Coding",
      org: "Sololearn",
      year: "2026",
      image: vibeCodingImg,
      link: "https://www.sololearn.com/certificates/CC-1DTZ4THF",
    },
    {
      id: 10,
      title: "MLH Hackaton 2026",
      org: "MLH",
      year: "2026",
      image: mlhCertImg,
      link: "https://drive.google.com/file/d/1YUuhGAh6h9PB_A-VhDmLOaETQTUh87WZ/view?usp=sharing",
    },
    {
      id: 11,
      title: "Prompt Engineering",
      org: "Sololearn",
      year: "2026",
      image: promptImg,
      link: "https://www.sololearn.com/certificates/CC-QTLJFCV4",
    },
    {
      id: 12,
      title: "Voyage dans le monde des BDD",
      org: "Udemy",
      year: "2026",
      image: voyageImg,
      link: "https://www.udemy.com/certificate/UC-d7d58ee9-6b8b-48d3-a70b-e786310a07f8/",
    },
    {
      id: 13,
      title: "Modélisation UML",
      org: "LinkedIn Learning",
      year: "2026",
      image: umlModelImg,
      link: "https://www.linkedin.com/learning/certificates/103b4440d4afd48f2d8577fa21e053e2ee81cedb9a5278375178ffca3e2ac61f?trk=share_certificate",
    },
    {
      id: 14,
      title: "Administration Oracle",
      org: "LinkedIn Learning",
      year: "2026",
      image: oracleAdminImg,
      link: "https://www.linkedin.com/learning/certificates/4421288fa80895c565b15634e2687dbd198e56c2993291e354a0c660a8910c6b?trk=share_certificate",
    },
    {
      id: 15,
      title: "Modélisation de base de données",
      org: "LinkedIn Learning",
      year: "2026",
      image: databaseModelImg,
      link: "https://www.linkedin.com/learning/certificates/69f2cb265336c142e1cc3d3a76852472f486890f721145342bcecf79aba72723?trk=share_certificate",
    },
    {
      id: 16,
      title: "Essentiel Golang",
      org: "LinkedIn Learning",
      year: "2025",
      image: golangCertImg,
      link: "https://www.linkedin.com/learning/certificates/18e63ec4bc7a75219ff3a219b5237277e9c2f66c73cfc5ce38932c3d31e20e84",
    },
  ];

  const displayedCerts = showAll ? allCerts : allCerts.slice(0, 6);

  return (
    <section id="certificates" style={sectionStyle}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          CERTIFICATIONS
        </motion.h2>

        <motion.p
          style={sectionDescStyle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Ce sont les certificats que j'ai obtenus suite à mes apprentissages continus dans le domaine du numérique.
        </motion.p>

        <div className="certs-grid" style={gridStyle}>
          <AnimatePresence mode="popLayout">
            {displayedCerts.map((cert) => (
              <motion.div
                key={cert.id}
                className="cert-card"
                style={certCardStyle}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
              >
                <div style={certImgWrapperStyle}>
                  {cert.pdf ? (
                    <object
                      data={cert.pdf}
                      type="application/pdf"
                      style={certImgStyle}
                    >
                      <p style={{ textAlign: 'center', padding: '20px', color: '#888' }}>PDF</p>
                    </object>
                  ) : (
                    <img src={cert.image} alt={cert.title} style={certImgStyle} loading="lazy" />
                  )}
                </div>
                <div style={certContentStyle}>
                  <h3 style={certTitleStyle}>{cert.title}</h3>
                  <p style={certOrgStyle}>{cert.org} • {cert.year}</p>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn-premium" style={smallBtnStyle}>VOIR LE CERTIFICAT</a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && allCerts.length > 6 && (
          <div style={buttonContainerStyle}>
            <button
              type="button"
              className="btn-premium"
              onClick={() => setShowAll(true)}
              style={showMoreButtonStyle}
            >
              CONTINUER LA VISUALISATION
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '120px 0',
  backgroundColor: '#D7D7D7',
  color: 'black',
  borderTop: '1px solid #C4C4C4',
};

const sectionDescStyle = {
  fontSize: '18px',
  color: '#555',
  maxWidth: '600px',
  lineHeight: '1.6',
  marginBottom: '60px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '30px',
};

const certCardStyle = {
  backgroundColor: 'white',
  borderRadius: '15px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
};

const certImgWrapperStyle = {
  width: '100%',
  height: '180px',
  overflow: 'hidden',
};

const certImgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const certContentStyle = {
  padding: '25px',
  textAlign: 'center',
};

const certTitleStyle = {
  fontSize: '18px',
  fontWeight: '800',
  marginBottom: '10px',
  letterSpacing: '1px',
};

const certOrgStyle = {
  fontSize: '14px',
  fontWeight: '700',
  textTransform: 'uppercase',
  color: '#888',
  marginBottom: '20px',
};

const smallBtnStyle = {
  padding: '8px 15px',
  fontSize: '10px',
  fontWeight: '800',
  borderRadius: '100px',
};

const buttonContainerStyle = {
  textAlign: 'center',
  marginTop: '80px',
};

const showMoreButtonStyle = {
  background: 'transparent',
  border: '1px solid #C4C4C4',
  color: 'black',
  padding: '15px 40px',
  borderRadius: '100px',
  cursor: 'pointer',
  fontWeight: '800',
  fontSize: '12px',
};

export default Certificates;
