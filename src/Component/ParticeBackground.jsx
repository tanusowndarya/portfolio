import React, { useEffect } from 'react';
import './ParticleBackground.css';

const ParticleBackground = () => {
  useEffect(() => {
    // Check if particles.js is loaded
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

  return <div id="particles-js"></div>;
};

export default ParticleBackground;