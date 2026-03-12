import React from 'react';
import { Heart, Activity, Thermometer, Baby, Brain, Microscope } from 'lucide-react';
import './Expertise.css';

export default function Expertise() {
  const specialties = [
    {
      icon: <Heart className="icon-red" size={32} />,
      title: "Cardiology",
      desc: "Comprehensive heart care including diagnostics and preventative management.",
      type: "cardiology"
    },
    {
      icon: <Brain className="icon-purple" size={32} />,
      title: "Neurology",
      desc: "Expert treatment for complex neurological conditions and brain health.",
      type: "neurology"
    },
    {
      icon: <Baby className="icon-blue" size={32} />,
      title: "Pediatrics",
      desc: "Specialized medical attention for infants, children, and adolescents.",
      type: "pediatrics"
    },
    {
      icon: <Activity className="icon-emerald" size={32} />,
      title: "General Health",
      desc: "Routine checkups and holistic wellness plans for all ages.",
      type: "general"
    },
    {
      icon: <Microscope className="icon-orange" size={32} />,
      title: "Diagnostics",
      desc: "Advanced lab testing and precise diagnostic imaging services.",
      type: "diagnostics"
    },
    {
      icon: <Thermometer className="icon-cyan" size={32} />,
      title: "Internal Medicine",
      desc: "Long-term, comprehensive management of chronic and complex diseases.",
      type: "internal"
    }
  ];

  return (
    <section className="expertise-section">
      {/* Decorative background blurs */}
      <div className="expertise-bg-shape shape-1"></div>
      <div className="expertise-bg-shape shape-2"></div>

      <div className="expertise-header">
        <h2 className="expertise-subtitle">Service Excellence</h2>
        <h1 className="expertise-title">Specialized Medical Care</h1>
        <div className="expertise-underline"></div>
      </div>

      <div className="expertise-grid">
        {specialties.map((item, index) => (
          <div key={index} className={`expertise-card ${item.type}`}>
            <div className="icon-box">
              {item.icon}
            </div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-desc">{item.desc}</p>
            
            <div className="card-learn-more">
              LEARN MORE <span className="arrow">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}