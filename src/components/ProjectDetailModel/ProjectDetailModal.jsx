// src/components/ProjectDetailModal/ProjectDetailModal.jsx

import React from "react";
import "./ProjectDetailModal.css";

export default function ProjectDetailModal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <p><strong>Extra Description:</strong> {project.extraDescription}</p>
        <p><strong>Tech Stack:</strong> {project.techStack}</p>
        <p><strong>Challenges:</strong> {project.challenges}</p>
        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={project.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}
