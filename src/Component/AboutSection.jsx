import React from 'react';
import './AboutSection.css';

export const AboutSection = () => {
  const skills = [
    { icon: 'fas fa-brain', name: 'Machine Learning' },
    { icon: 'fas fa-code', name: 'Python' },
    { icon: 'fas fa-network-wired', name: 'Deep Learning' },
    { icon: 'fas fa-database', name: 'Big Data' },
    { icon: 'fas fa-robot', name: 'NLP' },
    { icon: 'fas fa-eye', name: 'Computer Vision' },
    { icon: 'fab fa-aws', name: 'Cloud Computing' },
    { icon: 'fas fa-project-diagram', name: 'TensorFlow' },
    { icon: 'fas fa-fire', name: 'PyTorch' },
  ];

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image animate">
            <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xOV9waG90b19vZl9hX2FzaWFuX2J1c2luZXNzbWFuX2lzb2xhdGVkX29uX2Ffd18yNjRjN2Y5ZS03ZDBiLTQ2ODgtYjkzOS01MjM3ZDExNGYxNDVfMS5qcGc.jpg" alt="Profile Picture" />
          </div>
          <div className="about-text animate">
            <h2>Who I Am</h2>
            <p>I'm an AI Engineer with a passion for developing intelligent systems that transform how we interact with technology. With expertise in machine learning algorithms, neural networks, and data science, I create innovative solutions to complex problems.</p>
            <p>My journey in AI began during my studies in Computer Science, and since then, I've been dedicated to pushing the boundaries of what machines can learn and accomplish. I believe in responsible AI development and ensuring that the systems I build are ethical, transparent, and human-centered.</p>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skill-tags">
                {skills.map((skill, index) => (
                  <span className="skill-tag" key={index}>
                    <i className={skill.icon}></i> {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};