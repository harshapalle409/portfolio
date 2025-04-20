import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, technologies }) => {
  return (
    <div className="project-card">
      <h3 className="project-card__title">{title}</h3>
      <p className="project-card__description">{description}</p>
      <div className="project-card__tech">
        <h4 className="project-card__tech-title">Technologies:</h4>
        <div className="project-card__tech-list">
          {technologies.map((tech, index) => (
            <span key={index} className="project-card__tech-item">
              {tech.icon && <span className="project-card__tech-icon">{tech.icon}</span>}
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;