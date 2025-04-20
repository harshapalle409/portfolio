import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__info">
            <h3 className="footer__title">Palle Harsha</h3>
            <p className="footer__text">B.Tech CSE Student & Full Stack Developer</p>
          </div>
          
          <div className="footer__social">
            <a 
              href="https://github.com/harshapalle409" 
              className="footer__social-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaGithub className="footer__social-icon" />
            </a>
            <a 
              href="https://www.linkedin.com/in/harsha-palle-1b095b284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              className="footer__social-link"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer__social-icon" />
            </a>
            <a 
              href="mailto:palleharsha455@gmail.com" 
              className="footer__social-link"
            >
              <FaEnvelope className="footer__social-icon" />
            </a>
          </div>
        </div>
        
        <div className="footer__copyright">
          <p>&copy; {new Date().getFullYear()} Palle Harsha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;