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
        <h1>Professional Experience</h1>
        <p className="subtitle">My journey in software development</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-marker"></div>
              <div className="experience-card">
                <div className="card-header">
                  <h2>{exp.title}</h2>
                  <h3>{exp.company}</h3>
                  <div className="meta-info">
                    <span className="location">📍 {exp.location}</span>
                    <span className="period">📅 {exp.period}</span>
                  </div>
                </div>

                <p className="description">{exp.description}</p>

                <div className="responsibilities">
                  <h4>Key Responsibilities:</h4>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                </div>

                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="stats-section">
        <div className="stat-card">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
        <div className="stat-card">
          <h3>20+</h3>
          <p>Projects Completed</p>
        </div>
        <div className="stat-card">
          <h3>10+</h3>
          <p>Technologies Mastered</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
