import React from 'react';
import { Award, Users, Target, ShieldCheck } from 'lucide-react';
import './About.css'; // Import the new CSS

export default function About() {
  const highlights = [
    { icon: <Award />, title: "Certified Excellence", desc: "Recognized by National Health Boards." },
    { icon: <Users />, title: "Expert Team", desc: "Specialists with 15+ years of experience." },
    { icon: <Target />, title: "Patient Centric", desc: "Focusing on personalized recovery plans." },
    { icon: <ShieldCheck />, title: "Safe Pharmacy", desc: "100% authentic and verified medicines." }
  ];

  return (
    <div className="about-container animate-fadeIn">
      <div className="about-hero">
        <div className="about-text-content">
          <h2 className="section-subtitle">Our Story</h2>
          <h1 className="about-title">
            Providing Quality Healthcare <br /> <span className="text-teal">Since 2008</span>
          </h1>
          <p className="about-description">
            CarePoint Clinic started with a simple mission: to make high-quality healthcare accessible and friendly. 
            We believe that medicine isn't just about prescriptions; it's about people.
          </p>
          <div className="quote-box">
            <p>
              "Our goal is to ensure every patient walks out with a smile and a healthier heart."
            </p>
          </div>
        </div>
        
        <div className="about-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800" 
            alt="Clinic Interior" 
            className="main-about-img"
          />
          <div className="floating-stats">
            <p className="stat-number">15k+</p>
            <p className="stat-label">Happy Patients</p>
          </div>
        </div>
      </div>

      {/* Highlights Grid */}
      <div className="highlights-grid">
        {highlights.map((item, index) => (
          <div key={index} className="highlight-card">
            <div className="highlight-icon-box">{item.icon}</div>
            <h3 className="highlight-card-title">{item.title}</h3>
            <p className="highlight-card-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}