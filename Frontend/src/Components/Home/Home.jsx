import React from 'react';
import { Calendar, Phone, MapPin, Clock, Star, ShieldCheck, Activity, Users } from 'lucide-react';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container animate-fadeIn">
      {/* 1. Enhanced Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="badge">✨ Excellence in Healthcare</div>
          <h1 className="hero-title">Your Health is <br/><span className="text-teal">Our Priority</span></h1>
          <p className="hero-subtitle">
            Experience world-class healthcare with Dr. Sarah Johnson. 
            Professional care, advanced technology, and a friendly environment designed for your recovery.
          </p>
          <div className="hero-btns">
            <button className="btn-primary">Book Appointment Now</button>
            <button className="btn-secondary">View Services</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <Users size={24} className="text-teal" />
            <div><strong>10k+</strong><p>Patients</p></div>
          </div>
          <div className="stat-card">
            <Star size={24} className="text-yellow-500" />
            <div><strong>4.9/5</strong><p>Rating</p></div>
          </div>
        </div>
      </section>

      {/* 2. Doctor Info & Quick Contact */}
      <div className="content-wrapper">
        <div className="main-grid">
          
          {/* Doctor Card */}
          <div className="doctor-card">
            <div className="image-container">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Dr. Sarah Johnson" 
                className="doctor-img"
              />
              <div className="experience-badge">15+ Years</div>
            </div>
            <div className="doctor-info">
              <div className="status-badge"><ShieldCheck size={14} /> Main Consultant</div>
              <h2 className="doctor-name">Dr. Sarah Johnson</h2>
              <p className="specialty">MBBS, MD - Cardiology</p>
              <p className="description">
                Specialized in preventive cardiology and heart health. Dr. Johnson has successfully 
                led our medical team for over a decade, focusing on patient-centered care.
              </p>
              <div className="availability">
                <span className="pulse-dot"></span> Available for Consultation Today
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="info-sidebar">
            <h3 className="sidebar-title">Clinic Details</h3>
            <div className="contact-list">
              <div className="contact-item">
                <div className="icon-box"><MapPin size={18} /></div>
                <div>
                  <p className="label">Location</p>
                  <p className="val">123 Health Avenue, NY</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Phone size={18} /></div>
                <div>
                  <p className="label">Contact</p>
                  <p className="val">+1 (555) 000-9999</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Clock size={18} /></div>
                <div>
                  <p className="label">Working Hours</p>
                  <p className="val">Mon - Sat: 9AM - 7PM</p>
                </div>
              </div>
            </div>
            <button className="emergency-btn">Emergency: 911</button>
          </div>

        </div>
      </div>
    </div>
  );
}