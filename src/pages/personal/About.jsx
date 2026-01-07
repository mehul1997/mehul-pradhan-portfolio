import React from 'react';
import './About.css';

function About() {
  return (
    <div className="page-container about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-tagline">The Story Behind the Person</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Who Am I?</h2>
          <p>
            I'm Mehul Pradhan, a person who believes in living life to the fullest. Beyond my
            professional endeavors, I'm someone who values genuine connections, meaningful
            experiences, and continuous growth.
          </p>
        </section>

        <section className="about-section">
          <h2>My Passions</h2>
          <div className="passions-grid">
            <div className="passion-item">
              <div className="passion-icon">🌍</div>
              <h3>Travel & Exploration</h3>
              <p>Discovering new places and cultures broadens my perspective.</p>
            </div>
            <div className="passion-item">
              <div className="passion-icon">📷</div>
              <h3>Gaming</h3>
              <p>Playing tons of games throughout my life and enjoying them till date</p>
            </div>
            <div className="passion-item">
              <div className="passion-icon">✍️</div>
              <h3>Writing and coding!</h3>
              <p>Expressing thoughts and experiences through words.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Life Philosophy</h2>
          <p>
            I believe that life is about balance - between work and play, ambition and
            contentment, solitude and connection. Every experience, whether challenging or
            joyful, is an opportunity to grow and become a better version of myself.
          </p>
        </section>

        <section className="about-section">
          <h2>Let's Connect</h2>
          <p>
            I love meeting new people and hearing their stories. Whether you want to chat
            about shared interests, exchange ideas, or just say hi, feel free to reach out!
          </p>
          <div className="social-links">
            <a href="mailto:mehulpradhan1997@gmail.com" className="social-btn">📧 Email</a>
            <a href="https://www.linkedin.com/in/mehul-pradhan-rourkela/" target="_blank" rel="noopener noreferrer" className="social-btn">💼 LinkedIn</a>
            <a href="https://instagram.com/mehulpradhan" target="_blank" rel="noopener noreferrer" className="social-btn">📱 Instagram</a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
