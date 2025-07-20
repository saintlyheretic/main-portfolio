import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#home">thabiso.</a>
            <p>Building exceptional digital experiences</p>
          </div>
          
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-socials">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://wa.me/0621088360" target="_blank" rel="noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/saintlyheretic" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://app.netlify.com/teams/possibleeziokwu" target="_blank" rel="noreferrer">
                <i className="fas fa-cloud"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} thabiso. All rights reserved.</p>
          <p>Based in Johannesburg, South Africa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;