import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer (SDE)',
      company: 'BlueStock Fintech',
      duration: 'Aug 2025 - Sep 2025',
      description: [
        'Developed and deployed RESTful APIs using Spring Boot for financial data services.',
        'Integrated APIs with React.js frontend for dynamic dashboard updates.',
        'Optimized database queries in MySQL, improving response time by ~25%.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Internship Experience</h2>
          <p>My professional journey so far</p>
        </div>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <span className="duration">{exp.duration}</span>
                </div>
                <ul className="experience-details">
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;