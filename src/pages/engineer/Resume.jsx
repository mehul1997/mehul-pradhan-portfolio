import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <div className="page-container resume-page">
      <div className="resume-header">
        <div className="header-top">
          <span className="header-label">Curriculum Vitae</span>
          <div className="header-divider"></div>
        </div>
        <h1 className="page-title">Resume</h1>
        <div className="resume-actions">
          <a href="/assets/resume.pdf" download className="action-link">Download PDF</a>
          <button className="action-link" onClick={() => window.print()}>Print</button>
        </div>
      </div>

      <div className="resume-content">
        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">Professional Summary</h2>
          </div>
          <p className="summary-text">
            Add a brief professional summary highlighting your key skills, experience,
            and career objectives. This should be 2-3 sentences that capture your
            professional identity.
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="resume-item">
            <h3 className="item-title">Your Degree - University Name</h3>
            <p className="item-date">Year - Year</p>
            <p className="item-detail">Major/Field of Study</p>
            <p className="item-detail">GPA: X.XX/4.0 (optional)</p>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <span className="skill-label">Languages</span>
              <p className="skill-items">JavaScript · Python · Java · C++ · SQL</p>
            </div>
            <div className="skill-category">
              <span className="skill-label">Frameworks</span>
              <p className="skill-items">React · Node.js · Express · Django</p>
            </div>
            <div className="skill-category">
              <span className="skill-label">Tools</span>
              <p className="skill-items">Git · Docker · AWS · Jenkins · MongoDB</p>
            </div>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="resume-item">
            <h3 className="item-title">Job Title - Company Name</h3>
            <p className="item-date">Start Date - End Date</p>
            <ul className="item-list">
              <li>Key achievement or responsibility #1</li>
              <li>Key achievement or responsibility #2</li>
              <li>Key achievement or responsibility #3</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3 className="item-title">Previous Job Title - Company Name</h3>
            <p className="item-date">Start Date - End Date</p>
            <ul className="item-list">
              <li>Key achievement or responsibility #1</li>
              <li>Key achievement or responsibility #2</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">Projects</h2>
          </div>
          <div className="resume-item">
            <h3 className="item-title">Project Name</h3>
            <p className="item-date">Date</p>
            <p className="item-detail">Brief description of the project and technologies used</p>
            <ul className="item-list">
              <li>Key feature or accomplishment</li>
              <li>Technologies: React, Node.js, MongoDB</li>
            </ul>
          </div>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">06</span>
            <h2 className="section-title">Certifications & Awards</h2>
          </div>
          <div className="resume-item">
            <h3 className="item-title">Certification Name - Issuing Organization</h3>
            <p className="item-date">Date</p>
          </div>
        </section>
      </div>

      <div className="pdf-viewer-section">
        <div className="pdf-header">
          <span className="section-number">Document</span>
          <h2 className="section-title">Resume PDF</h2>
        </div>
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
