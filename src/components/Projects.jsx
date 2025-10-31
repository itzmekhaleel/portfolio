import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Web Application',
      tech: 'Java, Spring Boot, React.js, MySQL',
      date: 'March 2025 - June 2025',
      description: 'Developed a full-stack e-commerce web application using Java, Spring Boot, React.js, and MySQL. Implemented user authentication, product management, and payment integration features ensuring a seamless online shopping experience.',
      demoLink: '#' // Add your live demo link here
    },
    {
      title: 'Personal Portfolio Website',
      tech: 'React.js, HTML, CSS',
      date: 'September 2024',
      description: 'Built a responsive personal portfolio website using React.js, HTML, and CSS to showcase projects, skills, and achievements. Focused on clean UI design, optimized performance, and cross-device compatibility.',
      demoLink: 'https://itzmekhaleel.github.io/portfolio/'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
          <p>Some of my recent work</p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-tech">{project.tech}</span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span className="project-date">{project.date}</span>
                  <div className="project-actions">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;