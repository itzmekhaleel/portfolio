import React from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'BTech (CSE)',
      institution: 'Narasaraopeta Engineering College',
      duration: '2022 - Present',
      score: 'CGPA: 7.9'
    },
    {
      degree: 'Class 12th',
      institution: 'Narayana Junior College',
      duration: '2021',
      score: '85.4%'
    },
    {
      degree: 'Class 10th',
      institution: 'Viswabharathi EM High School',
      duration: '2019',
      score: '9.7 CGPA'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My academic background</p>
        </div>
        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="education-header">
                  <h3>{edu.degree}</h3>
                  <span className="education-score">{edu.score}</span>
                </div>
                <h4>{edu.institution}</h4>
                <span className="education-duration">{edu.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;