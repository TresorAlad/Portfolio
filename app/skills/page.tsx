"use client";

import React from "react";

type Skill = {
  name: string;
  icon: string;
  color?: string;
};

const skills: Skill[] = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-original" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original colored" },
  { name: "LangChain", icon: "bx bx-link", color: "#1C3C3C" },
  { name: "LangGraph", icon: "bx bx-git-branch", color: "#1C3C3C" },
  { name: "LLM & GenAI", icon: "bx bx-brain", color: "#3A86FF" },
  { name: "Supabase", icon: "devicon-supabase-plain colored" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "Golang", icon: "devicon-go-original-wordmark colored" },
  { name: "NumPy", icon: "devicon-numpy-plain colored" },
  { name: "Pandas", icon: "devicon-pandas-plain colored" },
  { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Azure", icon: "devicon-azure-plain colored" },
  { name: "n8n", icon: "bx bx-network-chart", color: "#EA4B71" },
  { name: "ETL / Pipelines", icon: "bx bx-transfer-alt", color: "#3A86FF" },
  { name: "UML / Modelio", icon: "bx bx-shape-square", color: "#3A86FF" },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="section-gray home-section-anchor">
      <div className="container">
        <h2 className="section-title">COMPÉTENCES</h2>
        <p className="section-desc" style={{ color: "#555", marginTop: -40 }}>
          Technologies, outils et frameworks que j&apos;utilise et que je continue
          d&apos;approfondir.
        </p>

        <div className="skills-wrapper skills-wrapper-unified">
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <i
                  className={`${skill.icon} skill-icon`}
                  style={skill.color ? { color: skill.color } : undefined}
                  aria-hidden="true"
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
