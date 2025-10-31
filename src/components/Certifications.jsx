import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Data Structure and Algorithms Using Java',
      issuer: 'NPTEL',
      link: 'https://drive.google.com/file/d/1zq-CLuAlIj_WJoRj4kFEVeXJ0B2S3ugM/view?usp=sharing'
    },
    {
      title: 'Java Full Stack with AI',
      issuer: 'DataValley',
      link: '#'
    },
    {
      title: 'Full Stack Development',
      issuer: 'MindLuster',
      link: 'https://www.mindluster.com/student/certificate/5010563b'
    },
    {
      title: 'Software Engineer',
      issuer: 'HackerRank',
      link: 'https://www.hackerrank.com/certificates/a57cd070ae1e'
    }
  ];

  return (
    <section id="certifications" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Certifications</h2>
          <p>My professional achievements</p>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div className="certification-card" key={index}>
              <div className="certification-icon">
                <i className="fas fa-certificate"></i>
              </div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              <div className="certification-actions">
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;