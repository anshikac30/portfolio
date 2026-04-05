import React from 'react';
import { motion } from 'framer-motion';
import { useFocus } from '../FocusContext';
import './About.css';

const AboutScatterItem = ({ id, className, initialProps, children }) => {
  const { focusedId, toggleFocus } = useFocus();
  const isFocused = focusedId === id;
  const isScattered = focusedId !== null && !isFocused;

  return (
    <motion.div
      className={className}
      drag
      dragElastic={0.2}
      dragMomentum={false}
      onPointerDown={() => toggleFocus(id)}
      initial={initialProps}
      animate={
        isFocused 
          ? { scale: 1.3, zIndex: 9999, filter: 'blur(0px)', opacity: 1, boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }
          : isScattered
          ? { scale: 0.85, filter: 'blur(6px)', opacity: 0.4, rotate: initialProps?.rotate ? initialProps.rotate * 1.5 : 0 }
          : { scale: 1, zIndex: initialProps?.zIndex || 1, filter: 'blur(0px)', opacity: 1, boxShadow: 'none' }
      }
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ cursor: isFocused ? 'zoom-out' : 'grab' }}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="desk-about">
      
      <AboutScatterItem 
        id="about-paper"
        className="paper-sheet about-document"
        initialProps={{ rotate: -1, x: 50, y: -50, zIndex: 5 }}
      >
        <div className="tape"></div>
        <h2 style={{ fontFamily: 'Inter', fontSize: '2rem', marginBottom: '1rem' }}>
          Background.
        </h2>
        <p style={{ marginBottom: '1rem', color: '#4b5563', lineHeight: 1.8 }}>
          I am Anshika, originally from the creative scene, now fully immersed in the world 
          of interactive web development. I spend my days figuring out how to make screens 
          feel like physical objects.
        </p>
        <p style={{ color: '#4b5563', lineHeight: 1.8 }}>
          When I put the mouse down, you can find me collecting vintage cameras or 
          obsessing over the perfect coffee brew ratio.
        </p>
      </AboutScatterItem>

      <AboutScatterItem 
        id="skills-note"
        className="sticky-note yellow skills-note"
        initialProps={{ rotate: 12, x: -200, y: 150, zIndex: 8 }}
      >
        <p className="handwriting" style={{ fontSize: '1.8rem', textDecoration: 'underline' }}>My toolkit:</p>
        <ul className="handwriting" style={{ listStyle: 'none', marginTop: '10px', fontSize: '1.5rem', lineHeight: 1.4 }}>
          <li>- React & Vite</li>
          <li>- Framer Motion</li>
          <li>- Figma</li>
          <li>- A bit of magic ✨</li>
        </ul>
      </AboutScatterItem>

    </section>
  );
};

export default About;
