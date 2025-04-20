import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import { FaReact, FaNodeJs, FaPython,FaJava  } from 'react-icons/fa';
import { SiMysql, SiTableau,SiMongodb,SiSpringboot  } from 'react-icons/si';
const Projects = () => {
  const projects = [
    {
      title: "AgriFarm",
      description: "Agricultural platform connecting farmers and Labours without intermediates and also allocating resources.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <SiMysql /> }
      ]
    },
    {
      title: "MyCollete",
      description: "Web scraping tool for collecting and analyzing data to compare product details from various sources.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "AutoScraper", icon: null }
      ]
    },
    {
      title: "FinVision",
      description: "Finance application for personal budgeting and investment tracking.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Tableau", icon: <SiTableau /> }
      ]
    },
    {
      title: "Titanic ML Model",
      description: "Machine learning model predicting survival on the Titanic dataset.",
      technologies: [
        { name: "Python", icon: <FaPython /> }
      ]
    },
    {
      title: "Multilingual React App",
      description: "React application with support for multiple languages.",
      technologies: [
        { name: "React", icon: <FaReact /> }
      ]
    }
  ];

  return (
    <section className="projects">
      <div className="projects__container">
        <h2 className="projects__title">My Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;