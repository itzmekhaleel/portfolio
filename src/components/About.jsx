import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me better</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Shaik Mohammad Khaleel, a passionate Java Full Stack Developer with hands-on experience in building responsive web applications. My journey in software development began during my BTech in Computer Science and Engineering at Narasaraopeta Engineering College.
            </p>
            <p>
              As an entry-level developer, I've developed expertise in Java, Spring Boot, React.js, Node.js, and various databases like MySQL and MongoDB. I enjoy creating efficient, scalable applications that provide excellent user experiences.
            </p>
            <p>
              During my internship at BlueStock Fintech, I had the opportunity to work on real-world financial applications, developing RESTful APIs and integrating them with frontend dashboards. This experience enhanced my problem-solving skills and taught me the importance of writing clean, maintainable code.
            </p>
            <p>
              I'm constantly learning and staying updated with the latest technologies and best practices in software development. My goal is to contribute to meaningful projects and continue growing as a developer in a collaborative environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;