import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {year} Student Management System. All rights reserved.</p>
        <p>Built with ❤️ using React & Node.js</p>
      </div>
    </footer>
  );
};

export default Footer;