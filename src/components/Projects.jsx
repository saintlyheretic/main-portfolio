// // src/components/Projects.js
// import React from 'react';
// import '../styles/Projects.css';

// const Projects = () => {
//   const project = {
//     title: "My Awesome Project",
//     description: "A hypothetical hotel website I made for a client. ",
//     technologies: ["React", "Node.js", "MongoDB", "Express"],
//     github: "https://github.com/saintlyheretic",
//     live: "https://quiet-manatee-d1600c.netlify.app/"
//   };

//   return (
//     <section id="projects" className="projects">
//       <div className="container">
//         <h2 className="section-title animate-on-scroll">My Projects</h2>
//         <div className="project-card animate-on-scroll">
//           <div className="project-img">
//             <div className="img-placeholder"></div>
//           </div>
//           <div className="project-details">
//             <h3>{project.title}</h3>
//             <p>{project.description}</p>
//             <div className="technologies">
//               {project.technologies.map((tech, index) => (
//                 <span key={index}>{tech}</span>
//               ))}
//             </div>
//             <div className="project-links">
//               <a href={project.github} target="_blank" rel="noreferrer" className="btn">
//                 <i className="fab fa-github"></i> GitHub
//               </a>
//               <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-secondary">
//                 <i className="fas fa-external-link-alt"></i> Live Demo
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

// src/components/Projects.js
import React from 'react';
import '../styles/Projects.css';
import hotelWebsite from '../assets/images/hotelwebsite1.jpg';
import whatsNearby from '../assets/images/whatsnearby.png';

const Projects = () => {
  const projects = [
    {
      title: "Hotel Website",
      description: "A responsive hotel booking website built with React, featuring animations, a modern design, and a contact form. This project showcases my skills in frontend development and UI design.",
      technologies: ["React", "CSS3", "JavaScript", "HTML5", "Netlify"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://quiet-manatee-d1600c.netlify.app/",
      image: hotelWebsite
    },
    {
      title: "What's Nearby",
      description: "A location-based application that helps users discover points of interest in their vicinity. Built with modern web technologies and integrating mapping features for an intuitive user experience.",
      technologies: ["React", "Next.js", "JavaScript", "CSS", "Vercel"],
      github: "https://github.com/saintlyheretic/whatsnearby",
      live: "https://whatsnearby.vercel.app/",
      image: whatsNearby
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        {projects.map((project, index) => (
          <div key={index} className="project-card animate-on-scroll">
            <div className="project-img">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="website-preview-img" />
              </div>
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="btn">
                  <i className="fab fa-github"></i> GitHub
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  <i className="fas fa-external-link-alt"></i> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;