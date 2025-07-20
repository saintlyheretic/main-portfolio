// src/components/Hero.js
import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content animate-on-scroll">
          <h3 className="greeting">Hello, I'm</h3>
          <h1 className="name">Thabiso Eziokwu</h1>
          <h2 className="title">Frontend Developer</h2>
          <p className="location">Based in Johannesburg, South Africa</p>
          <a href="#projects" className="btn">View My Work</a>
        </div>
        
        <div className="hero-socials animate-on-scroll">
          <a href="https://wa.me/+27621088360" target="_blank" rel="noreferrer">
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
    </section>
  );
};

export default Hero;