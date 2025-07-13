import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);
    return () => document.removeEventListener('pointerdown', handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about-section">About</a></li>
          <li><a href="#skill-section">Skills</a></li>
          <li><a href="#projects-section">Projects</a></li>
          <li><a href="#contact-section">Connect</a></li>
        </ul>

        {/* Mobile Icon */}
        <div className="menu-icon" ref={iconRef} onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`} ref={sidebarRef}>
        <ul className="sidebar-menu">
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about-section" onClick={toggleMenu}>About</a></li>
          <li><a href="#skill-section" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#projects-section" onClick={toggleMenu}>Projects</a></li>
          <li><a href="#contact-section" onClick={toggleMenu}>Connect</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
