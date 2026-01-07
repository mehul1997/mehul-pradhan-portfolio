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
            Backend-focused SDE-II with nearly 5 years of experience building scalable, high-performance systems, now specializing in Agentic AI and prompt engineering at Skej. Seeking a role where I can combine strong backend architecture skills with modern AI-driven workflows to deliver intelligent, production-ready solutions at scale.
          </p>
        </section>

        <section className="resume-section">
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Education</h2>
          </div>
          <div className="resume-item">
            <h3 className="item-title">Bachelor's in Technology - Institute of Techinical Education and Research, Bhubaneswar</h3>
            <p className="item-date">2016 - 2020</p>
            <p className="item-detail">Computer Science and Engineering</p>
            <p className="item-detail">CGPA: 9.61</p>
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
              <p className="skill-items">Ruby on Rails · Python · SQL</p>
            </div>
            <div className="skill-category">
              <span className="skill-label">Frameworks</span>
              <p className="skill-items">React · Node.js · Django</p>
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
            <h3 className="item-title">SDE II - Skej</h3>
            <p className="item-date">October 2025 - Current</p>
            <ul className="item-list">
              <li>Designed and implemented agentic AI workflows by building multi-step autonomous agents using structured prompts, tool-calling, memory layers, and task orchestration logic.</li>
              <li>Owned end-to-end feature delivery by collaborating across backend, frontend, and product teams — from requirement analysis to production deployment.</li>
              <li>Led debugging and root-cause analysis for LLM behavior failures, including prompt regressions, tool misuse, and context loss scenarios.</li>
            </ul>
          </div>
          <div className="resume-item">
            <h3 className="item-title">SDE I - Backlight</h3>
            <p className="item-date">June 2020 - End Date</p>
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
