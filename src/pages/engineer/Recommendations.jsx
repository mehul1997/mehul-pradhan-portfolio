import React from 'react';
import './Recommendations.css';

function Recommendations() {
  // You can replace this with your actual recommendations
  const recommendations = [
    {
      id: 1,
      name: "Sanju Gautam",
      title: "Backend Lead | Ruby | Ruby on Rails | Python | Flask | Django",
      company: "",
      image: "SG",
      relationship: "Colleague",
      text: "Mehul is an amazing developer. He is excellent in what he does and takes full accountability of whatever he builds. he doesn't hesitate to take the extra step to help his team members and collaborate in a productive manner. I have personally seen him producing outstanding features and I would totally recommend him.",
      date: "June 12, 2023",
      linkedin: "https://www.linkedin.com/in/mehul-pradhan-rourkela/details/recommendations/?detailScreenTabIndex=0"
    },
    {
      id: 2,
      name: "Simon Baumer",
      title: "Builder",
      company: "",
      image: "SB",
      relationship: "Simon was senior to Mehul but didn't manage Mehul directly",
      text: "Mehul is an eager and valuable participant on any team he joins. He's not afraid to get his hands dirty on difficult problems, and knows when to consult with more experienced engineers to make sure he's approaching the code with the proper tact. It was a joy working with him everyday on a relatively small team to move fast and in harmony with the rest of the development team.",
      date: "June 20, 2023",
      linkedin: "https://www.linkedin.com/in/mehul-pradhan-rourkela/details/recommendations/?detailScreenTabIndex=0"
    },
    {
      id: 3,
      name: "Yogesh Khatri",
      title: "AVP Delivery, Quarks | Ex Backlight | Ex-Adobe| Agile, Quality, Product, SaaS, Web &amp; Mobile Apps",
      company: "",
      image: "YK",
      relationship: "Yogesh Managed Mehul Directly",
      text: "I had the privilege of seeing Mehul grow from fresher to experienced professional. Skilled in Ruby on Rails, he excelled in Honeybadger tickets tracking, ensuring quick resolutions and quality delivery. His collaboration and communication skills made him an asset to every release, while his helpful and friendly nature fostered a positive work environment. Always showing an eagerness to learn, he consistently took on challenges and explored improvements. I am truly proud to have worked with him and can confidently say any team would benefit from his technical expertise, positive attitude, and commitment to excellence.",
      date: "August 9, 2025",
      linkedin: "https://www.linkedin.com/in/mehul-pradhan-rourkela/details/recommendations/?detailScreenTabIndex=0"
    },
    {
      id: 4,
      name: "Manvendra Singh",
      title: "Senior Principal Software Engineer, Backlight",
      company: "",
      image: "MS",
      relationship: "Manvendra managed Mehul directly",
      text: "I’ve had the privilege of working closely with Mehul, and he is truly an exceptional talent. His depth of knowledge far surpasses his experience, and he consistently demonstrates strong ownership—taking on challenges head-on and driving tasks to closure. Mehul is a reliable team player who communicates transparently and keeps everyone aligned with regular progress updates. The entire team often turned to him as the go-to person, and he delivered across every area—whether it was Zendesk, automation, or backend work. Even when he encountered difficulties, he pushed through and completed what was required. He is highly process-oriented, has excellent work ethic, and puts in consistent daily effort. He seeks support from seniors only when truly necessary, otherwise taking initiative to figure things out on his own. Watching him grow from a fresher into our backend expert in such a short span was remarkable. Mehul is always eager to learn and readily steps up to take on extra responsibility for the good of the team. Any team would be lucky to have him.",
      date: "November 22, 2025",
      linkedin: "https://www.linkedin.com/in/mehul-pradhan-rourkela/details/recommendations/?detailScreenTabIndex=0"
    }
  ];

  return (
    <div className="page-container recommendations-page">
      <div className="recommendations-header">
        <div className="header-top">
          <span className="header-label">Testimonials</span>
          <div className="header-divider"></div>
        </div>
        <h1 className="page-title">Recommendations</h1>
      </div>

      <div className="recommendations-list">
        {recommendations.map((rec, index) => (
          <div key={rec.id} className="recommendation-item">
            <div className="recommendation-number">{String(index + 1).padStart(2, '0')}</div>

            <div className="recommendation-content">
              <div className="profile-header">
                <div className="profile-info">
                  <h3 className="person-name">{rec.name}</h3>
                  <p className="person-title">{rec.title}</p>
                  <span className="relationship">{rec.relationship}</span>
                </div>
                {rec.linkedin && (
                  <a
                    href={rec.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                    aria-label="View on LinkedIn"
                  >
                    →
                  </a>
                )}
              </div>

              <div className="recommendation-text">
                <div className="quote-mark">"</div>
                <p className="quote-text">{rec.text}</p>
              </div>

              <div className="recommendation-footer">
                <span className="date">{rec.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Add Your Recommendation</h2>
          <p className="cta-description">If we've worked together, I'd appreciate your feedback</p>
          <a
            href="https://www.linkedin.com/recs/give/?senderId=mehul-pradhan-rourkela"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Recommend on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
