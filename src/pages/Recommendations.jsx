import React from 'react';
import './Recommendations.css';

function Recommendations() {
  // You can replace this with your actual recommendations
  const recommendations = [
    {
      id: 1,
      name: "John Smith",
      title: "Senior Engineering Manager",
      company: "Tech Corp",
      image: "JS",
      relationship: "Manager",
      text: "Mehul is an exceptional developer with a keen eye for detail and a passion for clean code. His ability to solve complex problems and mentor junior developers makes him an invaluable asset to any team. I highly recommend him for any software engineering role.",
      date: "January 2024",
      linkedin: "https://linkedin.com/in/johnsmith"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      title: "Lead Product Designer",
      company: "Design Studio",
      image: "SJ",
      relationship: "Colleague",
      text: "Working with Mehul was a pleasure. He has excellent communication skills and always delivered high-quality work on time. His technical expertise combined with his collaborative approach made our projects successful. He would be a great addition to any team.",
      date: "November 2023",
      linkedin: "https://linkedin.com/in/sarahjohnson"
    },
    {
      id: 3,
      name: "Michael Chen",
      title: "CTO",
      company: "Startup Inc",
      image: "MC",
      relationship: "Supervisor",
      text: "Mehul demonstrated exceptional problem-solving skills and technical proficiency during his time with us. He quickly became a key contributor to our team and showed great leadership potential. I wouldn't hesitate to work with him again.",
      date: "August 2023",
      linkedin: "https://linkedin.com/in/michaelchen"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      title: "Software Engineer",
      company: "Tech Solutions",
      image: "ER",
      relationship: "Colleague",
      text: "Mehul is not only a skilled developer but also an excellent team player. His willingness to help others and share knowledge creates a positive work environment. His contributions to our projects were always top-notch.",
      date: "June 2023",
      linkedin: "https://linkedin.com/in/emilyrodriguez"
    }
  ];

  return (
    <div className="page-container recommendations-page">
      <div className="recommendations-header">
        <h1>Recommendations</h1>
        <p className="subtitle">What colleagues and managers say about working with me</p>
      </div>

      <div className="recommendations-grid">
        {recommendations.map((rec) => (
          <div key={rec.id} className="recommendation-card">
            <div className="card-top">
              <div className="profile-section">
                <div className="profile-image">{rec.image}</div>
                <div className="profile-info">
                  <h3>{rec.name}</h3>
                  <p className="title">{rec.title}</p>
                  <p className="company">{rec.company}</p>
                  <span className="relationship-badge">{rec.relationship}</span>
                </div>
              </div>
              {rec.linkedin && (
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-link"
                  title="View LinkedIn Profile"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              )}
            </div>

            <div className="recommendation-text">
              <div className="quote-icon">"</div>
              <p>{rec.text}</p>
            </div>

            <div className="card-footer">
              <span className="date">{rec.date}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="add-recommendation-section">
        <h2>Would you like to add a recommendation?</h2>
        <p>If we've worked together, I'd love to hear from you!</p>
        <a
          href="https://linkedin.com/in/mehulpradhan"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-recommend-btn"
        >
          Recommend me on LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Recommendations;
