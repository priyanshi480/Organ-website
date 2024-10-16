import React, { useState } from 'react';
import './Header.css';

const Header = ({ onLogin, onRegister }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header>
        <h1>OrganEase</h1>
        <nav>
          <button onClick={onLogin}>Login</button>
          <button onClick={onRegister}>Register</button>
          <button className="organ-list-btn" onClick={toggleSidebar}>Organ List</button>
        </nav>
      </header>
      {isSidebarOpen && (
        <div className="sidebar">
          <button className="close-btn" onClick={toggleSidebar}>X</button>
          <h2>Total Organs Available: 6</h2>
          <ul>
            <li>Heart</li>
            <li>Liver</li>
            <li>Kidney</li>
            <li>Lung</li>
            <li>Pancreas</li>
            <li>Intestine</li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
