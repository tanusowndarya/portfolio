import React from 'react';
import './ProjectsSection.css';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "AI-based conquest game",
      description: "The project will involve creating a simplified version of a Conquest game where players attempt to control territories on a grid-hased map. The project will include initializing the game board, defining game rules, and creating player interactions.Tech stack Python pygame, matplotlib, numpy, random",
      image: "https://img.freepik.com/premium-photo/closeup-aipowered-image-recognition-system-use_1297101-26917.jpg",
      tags: ["TensorFlow", "Computer Vision", "CNN"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Mosquito monitoring system",
      description: "2023The Mosquito Monitoring System aims to track and analyze mosquito populations to aid in public health efforts, particularly in preventing mosquito-borne diseases like malaria, dengue, and Zika virus. The system will use lot devices to monitor environmental conditions and mosquito activity, sending data to a central server for analysis. The goal is to provide real-time data and insights to health authorities and researchers Tech stack python Testing modules",
      image: "https://botnation.ai/site/wp-content/uploads/2024/01/chatbot-machine-learning-1024x590.webp",
      tags: ["NLP", "PyTorch", "Transformers"],
      demoLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Health monitoring system (IOT)",
      description: "The system will involve wearable devices equipped with various sensors to track health metrics such as heart rate, body temperature, blood pressure, and oxygen levels. These devices will send the data to a central server via the Internet, where it can be analyzed and accessed by medical professionals through a web or mobile application.Tech stack: ESP32, MAX30100 (Heart Rate and Oxygen), DS18B20 (Temperature), MQTT protocol, Backend Node.js, Express.js",
      image: "https://th.bing.com/th/id/OIP.Qr8VSPfpIPhAWcUm5K7DRQHaE7?rs=1&pid=ImgDetMain",
      tags: ["Data Science", "React", "Scikit-learn"],
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card animate">
              <div className="project-image">
                <img src={project.image} alt={`Project ${project.id}`} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.demoLink}>Live Demo</a>
                  <a href={project.githubLink}>GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;