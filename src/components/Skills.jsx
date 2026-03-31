import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const currentSkills = [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original colored' },
    { name: 'GitLab', icon: 'devicon-gitlab-plain colored' },
    { name: 'UML / Modelio', icon: 'bx bx-shape-square', color: '#3A86FF' },
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Supabase', icon: 'devicon-supabase-plain colored' },
    { name: 'Postman', icon: 'devicon-postman-plain colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
    { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
  ];

  const learningSkills = [
    { name: 'Python', icon: 'devicon-python-plain colored' },
    { name: 'Administration BDD', icon: 'bx bxs-server', color: '#FF9900' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
    { name: 'Azure SQL', icon: 'devicon-azure-plain colored' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
    { name: 'Golang', icon: 'devicon-go-original-wordmark colored' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" style={sectionStyle}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          COMPÉTENCES
        </motion.h2>

        <div style={skillsWrapperStyle}>
          {/* Section: Actuellement */}
          <div style={skillsColumnStyle}>
            <h3 style={skillsTitleStyle}>J'UTILISE ACTUELLEMENT</h3>
            <motion.div 
              style={gridStyle}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {currentSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  style={skillCardStyle} 
                  variants={itemVariants} 
                  whileHover={{ y: -8, backgroundColor: 'white', scale: 1.05 }}
                >
                  <i 
                    className={skill.icon} 
                    style={{ 
                      fontSize: '52px', 
                      color: skill.color ? skill.color : undefined 
                    }}
                  ></i>
                  <span style={skillNameStyle}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section: Apprentissage */}
          <div style={skillsColumnStyle}>
            <h3 style={skillsTitleStyle}>CE QUE J'APPRENDS</h3>
            <motion.div 
              style={gridStyle}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {learningSkills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  style={skillCardStyle} 
                  variants={itemVariants} 
                  whileHover={{ y: -8, backgroundColor: 'white', scale: 1.05 }}
                >
                  <i 
                    className={skill.icon} 
                    style={{ 
                      fontSize: '52px', 
                      color: skill.color ? skill.color : undefined 
                    }}
                  ></i>
                  <span style={skillNameStyle}>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '120px 0',
  backgroundColor: '#D7D7D7',
  color: 'black',
};

const skillsWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  marginTop: '60px',
};

const skillsColumnStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '35px',
};

const skillsTitleStyle = {
  fontSize: '13px',
  fontWeight: '900',
  letterSpacing: '4px',
  color: '#444',
  textTransform: 'uppercase',
  borderLeft: '5px solid black',
  paddingLeft: '20px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
  gap: '25px',
};

const skillCardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  padding: '25px 15px',
  borderRadius: '15px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px',
  textAlign: 'center',
  boxShadow: '0 6px 20px rgba(0,0,0,0.03)',
  transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  cursor: 'default',
  border: '1px solid transparent',
};

const skillNameStyle = {
  fontSize: '11px',
  fontWeight: '900',
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  marginTop: '5px',
  color: '#333'
};

export default Skills;
