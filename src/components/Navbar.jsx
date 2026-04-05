import React from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {

  const links = [
    { name: 'Desk', id: 'home' },
    { name: 'About me', id: 'about' },
    { name: 'My Work', id: 'projects' },
    { name: 'Drop a line', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      className="nav-scrapbook"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <div className="nav-paper">
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.id}>
              <button 
                className="nav-btn handwriting"
                onClick={() => handleNavClick(link.id)}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
