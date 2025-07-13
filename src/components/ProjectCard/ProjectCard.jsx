import React, { useState } from "react";
import "./ProjectCard.css";
import ProjectDetailModal from "../ProjectDetailModel/ProjectDetailModal";
// import ProjectDetailModal from "../ProjectDetailModal/ProjectDetailModal";
import ProjectDetails from "../../data/ProjectDetails";

const ProjectCard = ({ title, description, image, link, tags = [] }) => {
  const [showModal, setShowModal] = useState(false);

  const fullDetails = {
    title,
    description,
    image,
    ...ProjectDetails[title], // Merge extra info from object
  };

  return (
    <>
      <div className="project-card">
        <img src={image} alt={title} className="project-image" />
        <div className="project-content">
          <h2 className="project-title">{title}</h2>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map((tag, index) => (
              <span key={index} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
          <button className="view-button" onClick={() => setShowModal(true)}>
            View More
          </button>
        </div>
      </div>

      {showModal && (
        <ProjectDetailModal project={fullDetails} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProjectCard;
