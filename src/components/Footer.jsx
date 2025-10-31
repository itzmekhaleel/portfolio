import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Shaik Mohammad Khaleel</h3>
            <p>Java Full Stack Developer</p>
          </div>
          
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/shaik-mohammad-khaleel-173534289" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:khaleelshaik7040@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shaik Mohammad Khaleel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;