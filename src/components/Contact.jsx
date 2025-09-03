// src/components/Contact.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_fpry9ju', // Replace with your EmailJS Service ID
      'template_ynvqdyc', // Replace with your EmailJS Template ID
      e.target,
      'Wqg6loqeVl6PxlTkZ' // Replace with your EmailJS Public/User ID
    ).then(
      (result) => {
        console.log('Success:', result.text);
        setFormStatus('success');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setTimeout(() => setFormStatus(null), 3000);
      },
      (error) => {
        console.error('Error:', error.text);
        setFormStatus('error');
        setTimeout(() => setFormStatus(null), 3000);
      }
    );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info animate-on-scroll">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me via any of the following channels:</p>

            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Location</h4>
                <p>Johannesburg, South Africa</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>teziokwu14@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+27 62 108 8360</p>
              </div>
            </div>

            <div className="contact-socials">
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

          <div className="contact-form animate-on-scroll">
            {formStatus === 'success' && (
              <div className="form-success">
                <i className="fas fa-check-circle"></i>
                <p>Your message has been sent successfully!</p>
              </div>
            )}
            {formStatus === 'error' && (
              <div className="form-error">
                <i className="fas fa-times-circle"></i>
                <p>Something went wrong. Please try again.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="Phone Number" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;