import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="page-container resume-page">
      <div className="resume-header">
        <h1>Resume</h1>
        <div className="resume-actions">
          <a href="/assets/resume.pdf" download className="download-btn">Download PDF</a>
          <button className="print-btn" onClick={() => window.print()}>Print</button>
        </div>
      </div>


      {/* Resume Content Section */}
      <div className="resume-content">
        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <h3>Your Degree - University Name</h3>
            <p className="date">Year - Year</p>
            <p>Major/Field of Study</p>
            <p>GPA: X.XX/4.0 (optional)</p>
          </div>
        </section>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Add a brief professional summary highlighting your key skills, experience,
            and career objectives. This should be 2-3 sentences that capture your
            professional identity.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="skills-list">
            <div className="skill-category">
              <strong>Languages:</strong> JavaScript, Python, Java, C++, SQL
            </div>
            <div className="skill-category">
              <strong>Frameworks:</strong> React, Node.js, Express, Django
            </div>
            <div className="skill-category">
              <strong>Tools:</strong> Git, Docker, AWS, Jenkins, MongoDB
            </div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Work Experience</h2>
          <div className="resume-item">
            <h3>Job Title - Company Name</h3>
            <p className="date">Start Date - End Date</p>
            <ul>
              <li>Key achievement or responsibility #1</li>
              <li>Key achievement or responsibility #2</li>
              <li>Key achievement or responsibility #3</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3>Previous Job Title - Company Name</h3>
            <p className="date">Start Date - End Date</p>
            <ul>
              <li>Key achievement or responsibility #1</li>
              <li>Key achievement or responsibility #2</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <div className="resume-item">
            <h3>Project Name</h3>
            <p className="date">Date</p>
            <p>Brief description of the project and technologies used</p>
            <ul>
              <li>Key feature or accomplishment</li>
              <li>Technologies: React, Node.js, MongoDB</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <h2>Certifications & Awards</h2>
          <div className="resume-item">
            <h3>Certification Name - Issuing Organization</h3>
            <p className="date">Date</p>
          </div>
        </section>
      </div>

      {/* PDF Viewer Section */}
      <div className="pdf-viewer-section">
        <h2>Resume Document</h2>
        <div className="pdf-container">
          <iframe
            src="/assets/resume.pdf"
            title="Resume PDF"
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
