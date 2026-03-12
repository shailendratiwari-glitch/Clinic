import React from 'react';
import { Stethoscope, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import './Footer.css'; // Importing our external CSS

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-wrapper">
        
        {/* Column 1: Brand */}
        <div className="footer-col">
          <div className="footer-logo">
            <div className="logo-box">
              <Stethoscope size={22} />
            </div>
            <span className="logo-text">CarePoint</span>
          </div>
          <p className="footer-bio">
            Providing world-class medical services with a touch of compassion. 
            Dedicated to your health and well-being since 2008.
          </p>
          <div className="social-links">
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Column 2: Links */}
        <div className="footer-col">
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#">Find a Doctor</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Medical Pharmacy</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
        </div>

        {/* Column 3: Hours */}
        <div className="footer-col">
          <h3 className="footer-title">Opening Hours</h3>
          <div className="hours-list">
            <div className="hour-row"><span>Mon - Fri:</span> <b>09:00 - 19:00</b></div>
            <div className="hour-row"><span>Saturday:</span> <b>10:00 - 17:00</b></div>
            <div className="hour-row emergency"><span>Sunday:</span> <b>Emergency Only</b></div>
          </div>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h3 className="footer-title">Get In Touch</h3>
          <div className="contact-info">
            <div className="contact-item">
              <MapPin size={18} className="icon-blue" />
              <span>123 Health Avenue, NY 10001</span>
            </div>
            <div className="contact-item">
              <Phone size={18} className="icon-blue" />
              <span>+1 (555) 000-9999</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="icon-blue" />
              <span>contact@carepoint.com</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CarePoint Medical Clinic. All Rights Reserved.</p>
      </div>
    </footer>
  );
}