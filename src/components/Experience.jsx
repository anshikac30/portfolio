import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="container exp-awwwards">
      <div className="exp-grid">
        <h2 className="display-font exp-title">Hist<br/><span className="italic-serif text-muted">ory</span></h2>
        
        <div className="exp-list">
          <motion.div 
            className="exp-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="exp-meta">2023 — Present</div>
            <div className="exp-details">
              <h3 className="display-font">Senior Designer</h3>
              <p>Studio Minimal</p>
            </div>
          </motion.div>

          <motion.div 
            className="exp-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="exp-meta">2021 — 2023</div>
            <div className="exp-details">
              <h3 className="display-font">Creative Dev</h3>
              <p>Freelance</p>
            </div>
          </motion.div>

          <motion.div 
            className="exp-item"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="exp-meta">2017 — 2021</div>
            <div className="exp-details">
              <h3 className="display-font">BFA Design</h3>
              <p>Academy of Art</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
