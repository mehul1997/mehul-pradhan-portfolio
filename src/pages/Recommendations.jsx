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
          href="https://www.linkedin.com/recs/give/?senderId=mehul-pradhan-rourkela"
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
