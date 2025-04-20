import React from 'react';
import './About.css';
import {FaLaptopCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        
        <div className="about__content">
          <div className="about__info">
            <div className="about__item">
              <h3 className="about__item-title">Name</h3>
              <p className="about__item-text">Palle Harsha</p>
            </div>
            
            <div className="about__item">
              <h3 className="about__item-title">Email</h3>
              <p className="about__item-text">palleharsha455@gmail.com</p>
            </div>           
          </div>
          
          <div className="about__interests">
            <h3 className="about__subtitle">
              <FaLightbulb className="about__icon" /> Interests
            </h3>
            <ul className="about__list">
              <li className="about__list-item">Full-stack development</li>
              <li className="about__list-item">Software architecture design</li>
              <li className="about__list-item">Entrepreneurship</li>
              <li className="about__list-item">AI content creation</li>
            </ul>
          </div>
          
          <div className="about__tech">
            <h3 className="about__subtitle">
              <FaLaptopCode className="about__icon" /> Tech Stack
            </h3>
            <div className="about__tech-grid">
              <span className="about__tech-item">Python</span>
              <span className="about__tech-item">Java</span>
              <span className="about__tech-item">React</span>
              <span className="about__tech-item">Node.js</span>
              <span className="about__tech-item">MySQL</span>
              <span className="about__tech-item">Tableau</span>
            </div>
          </div>
          
          <div className="about__startup">
            <h3 className="about__subtitle">Startup</h3>
            <p className="about__item-text">AgriFarm</p>
          </div>

          <div className="about__apis">
            <h3 className="about__subtitle">APIs Used</h3>
            <p className="about__item-text">Google Maps, Multilingual support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;