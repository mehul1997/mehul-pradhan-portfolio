import React from 'react';
import './Experience.css';

function Experience() {
  // You can replace this with your actual experiences
  const experiences = [
    {
      id: 1,
      title: "Software Development Engineer II",
      company: "Skej",
      location: "Rourkela, Odisha (WFH)",
      period: "October 2025 - Present",
      description: "Leading development of scalable web applications and mentoring junior developers.",
      responsibilities: [
        "Architected and implemented microservices using Node.js and React",
        "Led a team of 5 developers in agile environment",
        "Improved application performance by 40% through optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker", "MongoDB"]
    },
    {
      id: 2,
      title: "Software Developer I",
      company: "Backlight",
      location: "Rourkela, Odisha (WFH)",
      period: "June 2020 - October 2025",
      description: "Developed and maintained full-stack web applications for enterprise clients.",
      responsibilities: [
        "Built responsive web applications using React and TypeScript",
        "Developed RESTful APIs with Express.js and PostgreSQL",
        "Collaborated with UX designers to implement user-friendly interfaces",
        "Participated in code reviews and agile ceremonies"
      ],
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "Git"]
    }
  ];

  return (
    <div className="page-container experience-page">
      <div className="experience-header">
        <div className="header-top">
          <span className="header-label">Work History</span>
          <div className="header-divider"></div>
        </div>
        <h1 className="page-title">Professional Experience</h1>
      </div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="experience-item">
            <div className="experience-number">{String(index + 1).padStart(2, '0')}</div>

            <div className="experience-content">
              <div className="experience-main">
                <div className="experience-title-section">
                  <h2 className="job-title">{exp.title}</h2>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="separator">·</span>
                    <span className="location">{exp.location}</span>
                  </div>
                  <div className="period">{exp.period}</div>
                </div>

                <p className="description">{exp.description}</p>

                <div className="responsibilities-section">
                  <h4 className="section-label">Responsibilities</h4>
                  <ul className="responsibilities-list">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies-section">
                  <h4 className="section-label">Tech Stack</h4>
                  <div className="tech-list">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-item">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-section">
        <div className="stats-header">
          <span className="section-number">Overview</span>
        </div>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-value">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">20+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">10+</div>
            <div className="stat-label">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
