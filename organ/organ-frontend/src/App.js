import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="app">
      <Header onLogin={() => setShowLogin(true)} onRegister={() => setShowRegister(true)} />
      <div className="main-content">
        <h2>Welcome to OrganEase</h2>
        <p>Explore various organs and their information.</p>
        
        {/* Scrollable Categories Section */}
        <div className="scrollable-categories">
          <h3>Categories</h3>
          <ul>
            <li>Heart</li>
            <li>Liver</li>
            <li>Kidney</li>
            <li>Lung</li>
            <li>Pancreas</li>
            <li>Intestine</li>
            <li>Stomach</li>
            <li>Spleen</li>
            <li>Bladder</li>
            <li>Gallbladder</li>
          </ul>
        </div>

        {/* Search Box Section */}
        <div className="search-box">
          <input type="text" placeholder="Search for organs..." />
        </div>
      </div>
      
      {/* Footer */}
      <Footer />

      {/* Modals for Login and Register */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
};

export default App;
