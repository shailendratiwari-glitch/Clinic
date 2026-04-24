import React from 'react';
import { Home, Pill, Stethoscope } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="clinic-navbar">
      <div className="nav-wrapper">
        
        {/* Logo Section - Fixed duplicate onClick */}
        <div 
          className="nav-logo" 
          onClick={() => setActiveTab('home')} // Standardized to lowercase
          style={{ cursor: 'pointer' }}
        >
          <div className="logo-container">
            <Stethoscope className="logo-svg" size={24} />
          </div>
          <span className="brand-name">
            Care<span className="brand-accent">Point</span>
          </span>
        </div>

        {/* Navigation Buttons */}
        <div className="nav-menu">
          {/* Home */}
          <button 
            onClick={() => setActiveTab('home')}
            className={`menu-item ${activeTab === 'home' ? 'item-active' : ''}`}
          >
            <Home size={18} className="nav-icon" />
            <span>Home</span>
          </button>

         

{/* ADD THIS BUTTON */}
<button 
  onClick={() => setActiveTab('about')}
  className={`menu-item ${activeTab === 'about' ? 'item-active' : ''}`}
>
  About Us
</button>
          {/* Expertise - Added onClick and fixed spelling */}
          <button 
            onClick={() => setActiveTab('expertise')}
            className={`menu-item ${activeTab === 'expertise' ? 'item-active' : ''}`}
          >
            <span>Our Expertise</span>
          </button>
          
          {/* Contact - Added onClick */}
          <button 
            onClick={() => setActiveTab('contact')}
            className={`menu-item ${activeTab === 'contact' ? 'item-active' : ''}`}
          >
            <span>Contact</span>
          </button>
          
          <div className="nav-divider"></div>

          {/* Pharmacy Portal */}
          <button 
            onClick={() => setActiveTab('pharmacy')}
            className={`portal-button ${activeTab === 'pharmacy' ? 'portal-active' : ''}`}
          >
            <Pill size={18} className="nav-icon" />
            <span>Pharmacy Portal</span>
          </button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;