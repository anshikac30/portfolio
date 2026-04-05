import React from 'react';
import { motion } from 'framer-motion';
import { useFocus } from '../FocusContext';
import './Projects.css';

const projects = [
  { id: 'p1', title: 'Aura', category: 'E-Commerce', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=600', rotate: -5, x: -100, y: 50 },
  { id: 'p2', title: 'Neo', category: 'App Design', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=600', rotate: 8, x: 100, y: -20 },
  { id: 'p3', title: 'Studio', category: 'Web Branding', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600', rotate: -3, x: -50, y: 100 }
];

const ProjectScatterItem = ({ id, project }) => {
  const { focusedId, toggleFocus } = useFocus();
  const isFocused = focusedId === id;
  const isScattered = focusedId !== null && !isFocused;

  return (
    <motion.div 
      className="polaroid project-polaroid"
      drag
      dragElastic={0.2}
      dragMomentum={false}
      onPointerDown={() => toggleFocus(id)}
      initial={{ rotate: project.rotate, x: project.x, y: project.y }}
      animate={
        isFocused 
          ? { scale: 1.6, zIndex: 9999, filter: 'blur(0px)', opacity: 1, boxShadow: '0 50px 150px rgba(0,0,0,0.6)' }
          : isScattered
          ? { scale: 0.8, filter: 'blur(6px)', opacity: 0.4, rotate: project.rotate * 2 }
          : { scale: 1, zIndex: 20, filter: 'blur(0px)', opacity: 1, boxShadow: 'none' }
      }
      whileHover={!isFocused && !isScattered ? { scale: 1.05 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ cursor: isFocused ? 'zoom-out' : 'grab' }}
    >
      <div className="tape"></div>
      <img src={project.img} alt={project.title} className="polaroid-img" />
      <div className="polaroid-caption">
        <h3 className="handwriting">{project.title}</h3>
        <span>{project.category}</span>
        
        {isFocused && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
            className="focused-details handwriting"
          >
            Click to view full case study -&gt;
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const { focusedId, toggleFocus } = useFocus();
  const isScattered = focusedId !== null && focusedId !== 'project-label';

  return (
    <section id="projects" className="scrapbook-projects">
      
      <motion.div 
        className="sticky-note pink section-label"
        drag
        onPointerDown={() => toggleFocus('project-label')}
        initial={{ rotate: 10, x: -200, y: 0 }}
        animate={
          focusedId === 'project-label' 
            ? { scale: 1.5, zIndex: 9999, filter: 'blur(0px)', opacity: 1 }
            : isScattered
            ? { scale: 0.8, filter: 'blur(6px)', opacity: 0.4 }
            : { scale: 1, filter: 'blur(0px)', opacity: 1 }
        }
        transition={{ duration: 0.6 }}
      >
        <div className="tape"></div>
        <p className="handwriting">Some of my favorite pieces!</p>
      </motion.div>

      <div className="polaroid-scatter">
        {projects.map((project) => (
          <ProjectScatterItem key={project.id} id={project.id} project={project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;
