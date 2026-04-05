import React from 'react';
import { motion } from 'framer-motion';
import { Hand } from 'lucide-react';
import { useFocus } from '../FocusContext';
import './Contact.css';

const ContactScatterItem = ({ id, className, initialProps, children }) => {
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

const Contact = () => {
  return (
    <section id="contact" className="desk-contact">
      
      <ContactScatterItem 
        id="contact-folder"
        className="manila-folder"
        initialProps={{ rotate: 3, x: 0, y: 0, zIndex: 5 }}
      >
        <div className="folder-tab handwriting">Confidential</div>
        <div className="folder-body">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111' }}>Say Hello!</h2>
          <p style={{ color: '#444', marginBottom: '2rem' }}>
            Looking for a designer who codes? Or a coder who designs? <br/>
            I'm currently accepting new projects.
          </p>
          
          <form className="scrapbook-form" onClick={(e) => e.stopPropagation()}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="What's on your mind?"></textarea>
            
            <button type="button" className="handwriting submit-btn">
              Send it <Hand size={20} />
            </button>
          </form>
        </div>
      </ContactScatterItem>

      <ContactScatterItem 
        id="contact-note"
        className="sticky-note blue contact-note"
        initialProps={{ rotate: -15, x: 250, y: 150, zIndex: 10 }}
      >
        <p className="handwriting">Don't like forms?</p>
        <p className="handwriting" style={{ textDecoration: 'underline', marginTop: '10px' }}>
          hello@anshika.com
        </p>
      </ContactScatterItem>

    </section>
  );
};

export default Contact;
