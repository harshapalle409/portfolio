// components/Education/Education.jsx
import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <div className="education__container">
        <h2 className="education__title">Education</h2>
        
        <div className="education__content">
         
          
          <div className="education__details">
            <div className="education__item">
              <h3 className="education__degree">Bachelor of Science in Data Science</h3>
              <p className="education__duration">AUG 2023 - JUN 2027</p>
              <p className="education__institution">Malla Reddy University</p>
              <p className="education__location">Hyderabad, Telangana</p>
              <p className="education__description">
                Focused on data structures and algorithms, database management systems, and software engineering principles. 
                Completed projects in web development and data analysis.
              </p>
            </div>
            
            <div className="education__divider"></div>
            
            <div className="education__item">
              <h3 className="education__degree">Intermediate Education</h3>
              <p className="education__duration">JUN 2021 - APR 2023</p>
              <p className="education__institution">SR Junior College</p>
              <p className="education__location">Karimnager, Telangana</p>
              <p className="education__description">
                Completed intermediate education with focus on sciences and mathematics with a strong academic performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;