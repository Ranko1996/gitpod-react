// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div>
        <p>AKEBA TECH provides you with software engineering services that are going to take your business to the next level.</p>
        <p>
          Don't hesitate to ask a question
        </p>
        <p>
          📍 Ulica Hrvatske Republike 43/1, Osijek, Croatia
        </p>
        <p>
          ✉️ contact@akeba.tech
        </p>
        <p>
          📞 +385 (0)91 9750 424
        </p>
      </div>
      <div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  maxWidth: '100%',
  padding: '20px',
  textAlign: 'center',
};

export default Footer;
