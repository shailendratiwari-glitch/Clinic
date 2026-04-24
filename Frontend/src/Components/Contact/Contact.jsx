import React, { useState } from 'react';
import { Calendar, Clock, User, MessageSquare, CheckCircle } from 'lucide-react';
import './Contact.css';

export default function Appointments() {
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = (e) => {
    e.preventDefault();
    // Logic to save appointment would go here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="booking-success">
        <CheckCircle size={64} className="success-icon" />
        <h2>Appointment Requested!</h2>
        <p>Thank you. Dr. Johnson's team will call you shortly to confirm your slot.</p>
        <button onClick={() => setSubmitted(false)} className="btn-reset">Book Another</button>
      </div>
    );
  }

  return (
    <section className="appointment-section">
      <div className="appointment-header">
        <h1>Book Your Consultation</h1>
        <p>Please fill out the form below and we'll get back to you within 24 hours.</p>
      </div>

      <div className="appointment-card">
        <form className="appointment-form" onSubmit={handleBooking}>
          
          <div className="form-row">
            <div className="form-input-group">
              <label><User size={16} /> Patient Name</label>
              <input type="text" placeholder="Enter full name" required />
            </div>
            <div className="form-input-group">
              <label><MessageSquare size={16} /> Visit Reason</label>
              <select required>
                <option value="">Select Department</option>
                <option value="cardiology">Cardiology</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="neurology">Neurology</option>
                <option value="general">General Checkup</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-input-group">
              <label><Calendar size={16} /> Preferred Date</label>
              <input type="date" required min={new Date().toISOString().split("T")[0]} />
            </div>
            <div className="form-input-group">
              <label><Clock size={16} /> Preferred Time</label>
              <select required>
                <option value="">Select Time Slot</option>
                <option value="morning">Morning (09:00 AM - 12:00 PM)</option>
                <option value="afternoon">Afternoon (01:00 PM - 04:00 PM)</option>
                <option value="evening">Evening (05:00 PM - 07:00 PM)</option>
              </select>
            </div>
          </div>

          <div className="form-input-group">
            <label>Additional Notes (Optional)</label>
            <textarea rows="3" placeholder="Describe any symptoms or history..."></textarea>
          </div>

          <button type="submit" className="booking-btn">Confirm Appointment Request</button>
        </form>
      </div>
    </section>
  );
}