import React from 'react'
import './Navbar.css'; // Assuming you have a CSS file for styling

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul className='nav-list'>
        <li>home</li>
        <li>projects</li>
        <li>acheivements</li>
        <li>about us</li>
      </ul>
    </div>
  )
}
