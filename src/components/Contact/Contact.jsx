import React from 'react';
import './Contact.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get In Touch</h2>
        
        <div className="contact__content">
          <div className="contact__info">
            <h3 className="contact__subtitle">Connect with me</h3>
            <div className="contact__social">
              <a 
                href="https://github.com/yourusername" 
                className="contact__social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithub className="contact__social-icon" />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                className="contact__social-link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin className="contact__social-icon" />
                LinkedIn
              </a>
              <a 
                href="mailto:palleharsha455@gmail.com" 
                className="contact__social-link"
              >
                <FaEnvelope className="contact__social-icon" />
                Email
              </a>
            </div>
            
            <div className="contact__email">
              <h3 className="contact__subtitle">Email</h3>
              <p className="contact__text">palleharsha455@gmail.com</p>
            </div>
          </div>
          
          <form className="contact__form">
            <h3 className="contact__subtitle">Send me a message</h3>
            <div className="contact__form-group">
              <label htmlFor="name" className="contact__form-label">Name</label>
              <input 
                type="text" 
                id="name" 
                className="contact__form-input" 
                placeholder="Your name"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="email" className="contact__form-label">Email</label>
              <input 
                type="email" 
                id="email" 
                className="contact__form-input" 
                placeholder="Your email"
              />
            </div>
            <div className="contact__form-group">
              <label htmlFor="message" className="contact__form-label">Message</label>
              <textarea 
                id="message" 
                className="contact__form-textarea" 
                placeholder="Your message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="contact__form-button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;