import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Scissors, Camera } from 'lucide-react';
import { useFocus } from '../FocusContext';
import './Hero.css';

// Reusable Scatter wrapper
const ScatterItem = ({ id, children, className, initialProps }) => {
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
          ? { scale: 1.5, zIndex: 9999, filter: 'blur(0px)', opacity: 1, boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }
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

const Hero = () => {
  return (
    <section id="home" className="desk-hero">
      
      <ScatterItem 
        id="intro-paper" 
        className="paper-sheet intro-paper"
        initialProps={{ rotate: -2, x: -50, y: 50, zIndex: 10 }}
      >
        <div className="tape"></div>
        <h1>Design & <br/> Develop</h1>
        <p>I build digital experiences that feel tangible, interactive, and alive.</p>
        <span className="signature handwriting">Anshika</span>
      </ScatterItem>

      <ScatterItem 
        id="greeting-note"
        className="sticky-note blue greeting-note"
        initialProps={{ rotate: 5, x: 200, y: -100, zIndex: 15 }}
      >
        <p className="handwriting">Hey there!<br/>I'm Anshika.</p>
      </ScatterItem>

      <ScatterItem 
        id="role-note"
        className="sticky-note role-note"
        initialProps={{ rotate: -8, x: -200, y: -150, zIndex: 12 }}
      >
        <p className="handwriting" style={{ fontSize: '1.8rem', color: '#b91c1c' }}>
          Visual Storyteller<br/> & UI/UX Designer
        </p>
      </ScatterItem>

      <ScatterItem 
        id="coffee-cup"
        className="desk-object coffee-cup"
        initialProps={{ rotate: 15, x: 300, y: 200, zIndex: 5 }}
      >
        <div className="cup-inner"><Coffee size={40} color="#451a03" /></div>
      </ScatterItem>

      <ScatterItem 
        id="scissors"
        className="desk-object scissors"
        initialProps={{ rotate: -45, x: -300, y: 250, zIndex: 5 }}
      >
        <Scissors size={60} color="#94a3b8" />
      </ScatterItem>

      <ScatterItem 
        id="hero-polaroid"
        className="polaroid hero-polaroid"
        initialProps={{ rotate: 8, x: 100, y: 150, zIndex: 8 }}
      >
        <div className="tape"></div>
        <div className="polaroid-photo">
          <Camera size={40} color="#d1d5db" />
        </div>
        <p className="handwriting text-center mt-2">me in my element!</p>
      </ScatterItem>

    </section>
  );
};

export default Hero;
