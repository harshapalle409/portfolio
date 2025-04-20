// components/Home/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Add this import
import { FaDownload, FaPaperPlane } from 'react-icons/fa';
import './Home.css';
import profileImage from '../../assets/portfolio dp.jpg';

const Home = () => {
  // Path to CV file (should be placed in public folder)
  const cvPath = process.env.PUBLIC_URL + '/Palle_Harsha_CV.pdf';

  return (
    <section className="home" id="home">
      <div className="home__container">
        <motion.div 
          className="home__content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="home__text">
            <h1 className="home__title">
              Hi, I'm <span className="home__name">Palle Harsha</span>
            </h1>
            <h2 className="home__subtitle">
              A B.Tech CSE student passionate about AI, web development, and entrepreneurship.
            </h2>
            
            {/* Button Container */}
            <div className="home__buttons">
            <Link
                to="/contact"  // This should match your contact route path
                className="home-contact-btn"
              >
                <FaPaperPlane className="home-contact-btn__icon" />
                Contact Me
              </Link>
              
              <a
                href={cvPath}
                download="Palle_Harsha_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="home-download-btn"
              >
                <FaDownload className="home-download-btn__icon" />
                Download CV
              </a>
            </div>
          </div>
          
          <div className="home__image-container">
            <img 
              src={profileImage} 
              alt="Palle Harsha" 
              className="home__profile-image"
            />
            <div className="home__tech-vibe"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;