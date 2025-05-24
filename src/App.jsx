import React, { useEffect } from 'react';
import './app.css';

// Import components
import {Header} from './Component/Header';
import {HeroSection} from './Component/HeroSection';
import {AboutSection} from './Component/AboutSection';
import ProjectsSection from './Component/ProjectsSection';
import ExperienceSection from './Component/ExperienceSection';
import ContactSection from './Component/ContactSection';
import Footer from './Component/Footer';
import ScrollToTop from './Component/ScrollToTop';

function App() {
  // Dynamically load Font Awesome for social icons
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Animation on scroll
      const animates = document.querySelectorAll('.animate');
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      animates.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active');
        }
      });
    };

    // Initial check for elements in view
    handleScroll();
    
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;