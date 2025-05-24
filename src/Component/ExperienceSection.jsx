import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  const experiences = [
    {
      id: 1,
      period: "2023 - Present",
      title: "Senior AI Engineer",
      company: "TechInnovate Inc.",
      description: "Leading the development of AI-powered solutions for enterprise clients. Designing and implementing machine learning models for various applications including recommendation systems and anomaly detection."
    },
    {
      id: 2,
      period: "2020 - 2023",
      title: "Machine Learning Engineer",
      company: "DataSmart Solutions",
      description: "Developed and deployed deep learning models for computer vision applications. Optimized model performance and reduced inference time by 40% through quantization techniques."
    },
    {
      id: 3,
      period: "2018 - 2020",
      title: "Data Scientist",
      company: "AI Research Lab",
      description: "Conducted research in natural language processing and implemented prototype systems for text classification and sentiment analysis. Published 2 papers in leading AI conferences."
    },
    {
      id: 4,
      period: "2016 - 2018",
      title: "Software Engineer",
      company: "TechSolutions Corp",
      description: "Developed backend services and APIs for data-intensive applications. Implemented data processing pipelines for machine learning model training and evaluation."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience </h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item animate">
              <div className="timeline-content">
                <div className="timeline-date">{exp.period}</div>
                <h3 className="timeline-title">{exp.title}</h3>
                <p className="timeline-place">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;