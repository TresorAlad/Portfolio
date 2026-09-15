"use client";

import React, { useState } from "react";
import Image from "next/image";

type Cert = {
  id: number;
  title: string;
  org: string;
  year: string;
  image: string;
  link: string;
};

const allCerts: Cert[] = [
  {
    id: 1,
    title: "Voyage dans le monde des BDD",
    org: "Udemy",
    year: "2026",
    image: "/certificats/Voyage.jpg",
    link: "https://www.udemy.com/certificate/UC-d7d58ee9-6b8b-48d3-a70b-e786310a07f8/",
  },
  {
    id: 2,
    title: "Modélisation UML",
    org: "LinkedIn Learning",
    year: "2026",
    image: "/certificats/uml modelisation.jpg",
    link: "https://www.linkedin.com/learning/certificates/103b4440d4afd48f2d8577fa21e053e2ee81cedb9a5278375178ffca3e2ac61f",
  },
  {
    id: 3,
    title: "Administration Oracle",
    org: "LinkedIn Learning",
    year: "2026",
    image: "/certificats/Administration oracle.jpg",
    link: "https://www.linkedin.com/learning/certificates/4421288fa80895c565b15634e2687dbd198e56c2993291e354a0c660a8910c6b",
  },
  {
    id: 4,
    title: "Modélisation de base de données",
    org: "LinkedIn Learning",
    year: "2026",
    image: "/certificats/Modelisation database.jpg",
    link: "https://www.linkedin.com/learning/certificates/69f2cb265336c142e1cc3d3a76852472f486890f721145342bcecf79aba72723",
  },
  {
    id: 5,
    title: "Prompt Engineering",
    org: "Sololearn",
    year: "2026",
    image: "/certificats/prompt.png",
    link: "https://www.sololearn.com/certificates/CC-QTLJFCV4",
  },
  {
    id: 6,
    title: "MLH Hackathon 2026",
    org: "MLH",
    year: "2025",
    image: "/certificats/MLH Certification.png",
    link: "https://drive.google.com/file/d/1YUuhGAh6h9PB_A-VhDmLOaETQTUh87WZ/view?usp=sharing",
  },
  {
    id: 7,
    title: "Vibe Coding",
    org: "Sololearn",
    year: "2026",
    image: "/certificats/VibeCoding.jpg",
    link: "https://www.sololearn.com/certificates/CC-1DTZ4THF",
  },
  {
    id: 8,
    title: "Essentiel Golang",
    org: "LinkedIn Learning",
    year: "2025",
    image: "/certificats/certification_golang.jpeg",
    link: "https://www.linkedin.com/learning/certificates/18e63ec4bc7a75219ff3a219b5237277e9c2f66c73cfc5ce38932c3d31e20e84",
  },
];

const Certification: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll ? allCerts : allCerts.slice(0, 6);

  return (
    <section id="certificates" className="section-gray home-section-anchor">
      <div className="container">
        <h2 className="section-title">CERTIFICATIONS</h2>
        <p className="section-desc" style={{ color: "#555" }}>
          Ce sont les certificats que j&apos;ai obtenus suite à mes apprentissages continus dans le
          domaine du numérique.
        </p>

        <div className="certs-grid">
          {displayedCerts.map((cert) => (
            <article key={cert.id} className="cert-card">
              <div className="cert-img-wrap">
                <Image src={cert.image} alt={cert.title} width={400} height={180} className="cert-img" />
              </div>
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">
                  {cert.org} • {cert.year}
                </p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-premium"
                  style={{ padding: "8px 15px", fontSize: 10 }}
                >
                  VOIR LE CERTIFICAT
                </a>
              </div>
            </article>
          ))}
        </div>

        {!showAll && allCerts.length > 6 && (
          <div style={{ textAlign: "center", marginTop: 80 }}>
            <button
              type="button"
              className="btn-premium"
              style={{
                background: "transparent",
                border: "1px solid #C4C4C4",
                color: "black",
              }}
              onClick={() => setShowAll(true)}
            >
              CONTINUER LA VISUALISATION
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;
