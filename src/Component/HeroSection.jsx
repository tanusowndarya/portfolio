import React, { useEffect } from 'react';
import './HeroSection.css';

export const HeroSection = () => {
  useEffect(() => {
    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#6C63FF'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false
            }
          },
          size: {
            value: 3,
            random: true,
            anim: {
              enable: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#6C63FF',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'grab'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section id="hero">
      <div id="particles-js"></div>
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate">
            <h1>I AM <span>ARYA</span></h1>
            <p>AI Engineer specializing in machine learning, computer vision, and natural language processing to solve complex problems.</p>
            <div>
              <a href="#projects" className="btn">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="https://www.linkedin.com/in/sowndarya-a-8341a8258"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-medium-m"></i></a>
            </div>
          </div>
          <div className="hero-image animate">
            <img src="image/arya-removebg-preview.png" alt="AI Illustration" />
          </div>
        </div>
      </div>
    </section>
  );
};