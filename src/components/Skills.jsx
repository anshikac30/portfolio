import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const skillsList = [
  'Creative Direction', 'WebGL & Three.js', 'React & Next.js', 
  'Advanced Animation', 'Interactive Design', 'Typography', 
  'System Architecture', 'Design Systems'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-awwwards">
      <div className="marquee-wrapper">
        <motion.div 
          className="marquee-content display-font"
          animate={{ x: [0, -2000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <span>EXPERTISE</span>—<span>EXPERTISE</span>—<span>EXPERTISE</span>—<span>EXPERTISE</span>—<span>EXPERTISE</span>—
        </motion.div>
      </div>

      <div className="container skills-container">
        <div className="skills-list">
          {skillsList.map((skill, index) => (
            <motion.div 
              key={index} 
              className="skill-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <div className="skill-index display-font">0{index + 1}</div>
              <h3 className="skill-name">{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
