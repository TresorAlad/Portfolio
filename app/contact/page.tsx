"use client";

import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: "Contact portfolio",
          message: formData.message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
        return;
      }

      setStatus(data?.error || "L'envoi a échoué. Réessayez dans un instant.");
    } catch {
      setStatus("Impossible d'envoyer le message. Réessayez dans un instant.");
    }
  };

  const isError =
    status.includes("échoué") ||
    status.includes("Impossible") ||
    status.includes("Erreur");

  return (
    <section id="contact" className="section-gray home-section-anchor">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <p className="section-desc" style={{ color: "#555", marginBottom: 60 }}>
          Une opportunité, une collaboration ou juste envie d&apos;échanger ? Laissez-moi un
          message.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-inputs">
            <label htmlFor="name" className="sr-only">
              Votre nom
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="VOTRE NOM"
              className="contact-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email" className="sr-only">
              Votre email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="VOTRE EMAIL"
              className="contact-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="message" className="sr-only">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="VOTRE MESSAGE"
            className="contact-textarea"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {status && (
            <p
              role="status"
              aria-live="polite"
              className={`contact-status ${isError ? "error" : "success"}`}
            >
              {status}
            </p>
          )}

          <button type="submit" className="btn-premium" style={{ marginTop: 30, width: "fit-content" }}>
            ENVOYER LE MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
