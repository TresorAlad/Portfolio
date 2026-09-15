"use client";

import React, { useState } from "react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  desc: string;
  tags: string[];
  image: string;
  imageFit?: "contain" | "cover";
  github: string;
  live?: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "TechMentor AI",
    desc: "Plateforme d'analyse de profils informatiques assistée par IA. Analyse des CV, GitHub et LinkedIn pour évaluer les compétences par rapport à un métier cible, puis génération de scores, roadmaps et recommandations de projets personnalisées.",
    tags: ["React", "FastAPI", "RAG", "Vector Database", "Qdrant"],
    image: "/projects/pitch-i.png",
    github: "https://github.com/TresorAlad",
    live: "https://techmentors.dev",
  },
  {
    id: 2,
    title: "Pitch AI",
    desc: "Décrivez votre idée en 2 minutes et recevez un pitch structuré en 6 sections + un score de viabilité, généré par IA et ML. Gratuit, sans compte.",
    tags: ["IA", "ML", "Python", "NLP"],
    image: "/projects/pitch-i.png",
    github: "https://github.com/TresorAlad/Pitch-IA.git",
    live: "https://pitch-ia.vercel.app",
  },
  {
    id: 3,
    title: "Météo Temps Réel",
    desc: "Application de visualisation des données météorologiques mondiales en temps réel via API REST.",
    tags: ["Golang", "JavaScript", "API REST"],
    image: "/projects/meteo.png",
    github: "https://github.com/TresorAlad/Meteo-Go-js.git",
    live: "https://meteodev.onrender.com/",
  },
  {
    id: 4,
    title: "Gestion de Salles Univ.",
    desc: "Application Desktop de réservation et d'administration des salles universitaires avec gestion des conflits de planning.",
    tags: ["Java", "JavaFX", "Maven", "SQLite"],
    image: "/projects/salle.png",
    github: "https://github.com/TresorAlad/SystemeGestion.git",
  },
  {
    id: 5,
    title: "Gestion Vidéo Club",
    desc: "Solution Desktop pour la gestion des locations, des stocks et des membres d'un Vidéo Club avec base de données embarquée.",
    tags: ["Java", "JavaFX", "SQLite"],
    image: "/projects/clubvideo.png",
    github: "https://github.com/TresorAlad/Club-Video.git",
  },
  {
    id: 6,
    title: "Gestion Aéroport & Vols",
    desc: "Modélisation complète d'un système de gestion aéroportuaire : MCD, MLD, MPD et diagramme de classes UML.",
    tags: ["UML", "Modelio", "SQL", "MCD/MLD"],
    image: "/projects/sortie_page-0001.jpg",
    github: "https://github.com/TresorAlad",
  },
  {
    id: 7,
    title: "Suivi Académique",
    desc: "Système de suivi et de gestion des performances académiques avec modélisation de données et reporting.",
    tags: ["SQL", "Modélisation", "Reporting"],
    image: "/projects/suivi.jpeg",
    github: "https://github.com/TresorAlad",
  },
];

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <section id="portfolio" className="section-black home-section-anchor">
      <div className="container">
        <h2 className="section-title section-title-light" style={{ marginBottom: 20 }}>
          MES RÉALISATIONS
        </h2>
        <p className="section-desc section-desc-light">
          Projets d&apos;IA, de data engineering, d&apos;automatisation et de cybersécurité, de
          l&apos;idée jusqu&apos;au produit.
        </p>

        <div className="portfolio-grid">
          {displayedProjects.map((proj) => (
            <article key={proj.id} className="project-card">
              <Image
                src={proj.image}
                alt={proj.title}
                width={400}
                height={220}
                className={`project-card-img ${proj.imageFit === "contain" ? "project-card-img-contain" : ""}`}
              />
              <div className="project-card-body">
                <h4 className="project-card-title">{proj.title}</h4>
                <p className="project-card-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-btns">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-premium btn-small"
                  >
                    GITHUB
                  </a>
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium btn-premium-white btn-small"
                    >
                      LIVE
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {!showAll && allProjects.length > 6 && (
          <div style={{ textAlign: "center", marginTop: 80 }}>
            <button
              type="button"
              className="btn-premium btn-premium-outline"
              onClick={() => setShowAll(true)}
            >
              VOIR PLUS DE PROJETS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
