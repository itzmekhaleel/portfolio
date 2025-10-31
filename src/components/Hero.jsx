import React from 'react';
import './Hero.css';
import profileImg from '../assets/1000060953.jpg';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h4>Hello, I'm</h4>
            <h1>Shaik Mohammad Khaleel</h1>
            <h3>Java Full Stack Developer</h3>
            <p>
              Motivated Entry-Level Java Full Stack Developer with hands-on experience in building responsive web applications using Java, Spring Boot, React.js, Node.js, and MySQL.
            </p>
            <div className="hero-btns">
              <button className="btn" onClick={() => scrollToSection('projects')}>
                View Projects
              </button>
              <button className="btn btn-outline" onClick={() => scrollToSection('contact')}>
                Contact Me
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <img src={profileImg} alt="Shaik Mohammad Khaleel" className="profile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;