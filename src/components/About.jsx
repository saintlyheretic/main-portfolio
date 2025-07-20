import React from 'react';
import '../styles/About.css';
import userImage from '../assets/images/UserTestPP.jpg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title animate-on-scroll">About Me</h2>
        <div className="about-content">
        <div className="about-img animate-on-scroll">
            {/* Replace placeholder with actual image */}
            <img 
              src={userImage} 
              alt="Your Name" 
              className="profile-image"
            />
          </div>
          <div className="about-text animate-on-scroll">
            <h3>Frontend Developer from Johannesburg</h3>
            <p>
              A 25 year old frontend developer who is based in Johannesburg, South Africa. 
              I am a well-versed and experienced developer who has worked with multiple languages including;
              <br />
              <li>Python</li>
              <li>Java</li>
              <li>JavaScript</li>
            </p>
            <p>
            </p>
            <div className="about-info">
              <div>
                <span>Name:</span>
                <p>Thabiso Eziokwu</p>
              </div>
              <div>
                <span>Email:</span>
                <p>teziokwu14@gmail.com</p>
              </div>
              <div>
                <span>Location:</span>
                <p>Johannesburg, South Africa</p>
              </div>
              <div>
                <span>Availability:</span>
                <p>Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;