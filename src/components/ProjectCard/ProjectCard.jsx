import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, description, image, link, tags = [] }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              #{tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="view-button"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
