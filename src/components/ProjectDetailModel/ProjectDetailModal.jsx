// src/components/ProjectDetailModal/ProjectDetailModal.jsx

import React from "react";
import "./ProjectDetailModal.css";

export default function ProjectDetailModal({ project, onClose }) {
  return (
    <div className="modal-overlay">
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
      <div className="modal-content">
        <div className="model-header">
          <img
            src={project.image}
            alt={project.title}
            className="modal-image"
          />
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
        <div className="model-subsec">
          <span>Extra Description:</span>
          <p> {project.extraDescription}</p>
        </div>
        <div className="model-subsec">
          <span>Tech Stack:</span> <p>{project.techStack}</p>
        </div>
        <div className="model-subsec">
          <span>Challenges:</span>
          <p> {project.challenges}</p>
        </div>
        <div className="modal-links">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={project.netlify} target="_blank" rel="noopener noreferrer">
            Netlify
          </a>
        </div>
      </div>
    </div>
  );
}
