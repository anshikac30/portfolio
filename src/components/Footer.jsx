import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-awwwards container">
      <div className="footer-flex">
        <div className="footer-brand display-font">ANSHIKA</div>
        <div className="footer-copy">© {new Date().getFullYear()}</div>
        <div className="footer-credits">Awwwards Worthy</div>
      </div>
    </footer>
  );
};

export default Footer;
