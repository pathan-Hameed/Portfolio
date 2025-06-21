import React, { useState, useRef, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sidebarRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close sidebar on outside click
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
    <div className={`main-wrapper ${isMenuOpen ? 'blurred' : ''}`}>
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">MyPortfolio</h2>
          <div className="menu-icon" ref={iconRef} onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </nav>

      {/* Sliding Sidebar */}
      <div
        className={`sidebar ${isMenuOpen ? 'sidebar-open' : ''}`}
        ref={sidebarRef}
      >
        <ul className="sidebar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
