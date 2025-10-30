import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="page-container home-page">
      <div className="hero-section">
        <div className="profile-image-container">
          <img src="/assets/profile.jpg" alt="Mehul Pradhan" className="profile-image" />
        </div>
        <h1 className="hero-title">Mehul Pradhan</h1>
        <p className="hero-subtitle">Software Developer | Tech Enthusiast</p>
        <div className="hero-description">
          <p>
            Welcome to my professional portfolio. I'm passionate about building innovative
            solutions and creating meaningful digital experiences.
          </p>
        </div>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            I'm a dedicated software developer with expertise in modern web technologies
            and a passion for creating clean, efficient code. I enjoy tackling complex
            problems and turning ideas into reality.
          </p>
          <p>
            When I'm not coding, I'm exploring new technologies, contributing to open-source
            projects, and continuously learning to stay at the forefront of the industry.
          </p>
        </div>
      </div>

      <div className="skills-section">
        <h2>Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <p>React, JavaScript, HTML5, CSS3, TypeScript</p>
          </div>
          <div className="skill-card">
            <h3>Backend</h3>
            <p>Node.js, Python, Java, RESTful APIs</p>
          </div>
          <div className="skill-card">
            <h3>Tools & Others</h3>
            <p>Git, Docker, AWS, Agile, CI/CD</p>
          </div>
        </div>
      </div>

      <div className="contact-section">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out for collaborations or just a friendly chat!</p>
        <div className="contact-links">
          <a href="mailto:mehul@example.com" className="contact-btn">Email Me</a>
          <a href="https://www.linkedin.com/in/mehul-pradhan-rourkela/" target="_blank" rel="noopener noreferrer" className="contact-btn">LinkedIn</a>
          <a href="https://github.com/mehul1997" target="_blank" rel="noopener noreferrer" className="contact-btn">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
