import React from 'react';
import './AICreations.css';
import { FaInstagram, FaYoutube } from 'react-icons/fa';

const AICreations = () => {
  const creations = [
    {
      title: "AI Art Gallery",
      type: "images",
      platform: "Instagram",
      link: "#",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      title: "ML Tutorial Series",
      type: "videos",
      platform: "YouTube",
      link: "#",
      thumbnail: "https://via.placeholder.com/300x200"
    },
    {
      title: "AI Generated Poetry",
      type: "text",
      platform: "Instagram",
      link: "#",
      thumbnail: "https://via.placeholder.com/300x200"
    }
  ];

  return (
    <section className="ai-creations">
      <div className="ai-creations__container">
        <h2 className="ai-creations__title">AI Creations</h2>
        <p className="ai-creations__subtitle">Explore my AI-generated content and projects</p>
        
        <div className="ai-creations__grid">
          {creations.map((creation, index) => (
            <div key={index} className="ai-creations__card">
              <div className="ai-creations__thumbnail">
                <img src={creation.thumbnail} alt={creation.title} />
                <div className="ai-creations__platform">
                  {creation.platform === "Instagram" ? <FaInstagram /> : <FaYoutube />}
                </div>
              </div>
              <h3 className="ai-creations__card-title">{creation.title}</h3>
              <p className="ai-creations__card-type">{creation.type}</p>
              <a 
                href={creation.link} 
                className="ai-creations__link"
                target="_blank" 
                rel="noopener noreferrer"
              >
                View on {creation.platform}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AICreations;