import React from 'react';
import './Skills.css';

const Skills = () => {
  const technicalSkills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'MySQL', level: 80 },
    { name: 'MongoDB', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Python', level: 75 },
    { name: 'Data Structures & Algorithms', level: 85 },
    { name: 'REST APIs', level: 90 },
    { name: 'PostgreSQL', level: 70 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Skills</h2>
          <p>Technologies I work with</p>
        </div>
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;