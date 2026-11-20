import React, { useEffect, useState } from 'react';

const EMAIL = 'mehulpradhan1997@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/mehul-pradhan-rourkela/';
const GITHUB = 'https://github.com/mehul1997';
const RECS_URL = `${LINKEDIN}details/recommendations/`;

const STATS = [
  { value: '6+', label: 'years shipping production systems' },
  { value: '300', label: 'agent runs evaluated a day, at peak' },
  { value: '−20%', label: 'tokens per run' },
  { value: '6,000+', label: 'GitHub contributions' },
];

const AI_WORK = [
  {
    tag: 'Evals',
    title: 'Evals that catch regressions before users do',
    body: 'Up to 300 agent runs scored every day. Each verdict is checked against the actual trace, and real failures become tracked bugs automatically.',
    metric: '92% judge accuracy (audited)',
    wide: true,
  },
  {
    tag: 'Cost',
    title: 'Token optimization',
    body: 'Trimmed prompts and context so the agent does the same work for fewer tokens.',
    metric: '20% fewer tokens per run',
  },
  {
    tag: 'Performance',
    title: 'Model performance and metrics',
    body: 'Defined the metrics that say whether a model or prompt change actually helped, and tuned model performance against them.',
    metric: '+35% model performance',
  },
  {
    tag: 'Reliability',
    title: 'Agents that fix the agent',
    body: 'A bug pipeline where agents triage production issues, reproduce them, find the root cause and open a draft PR for a human to review.',
    metric: '~30 bugs triaged a day',
    wide: true,
  },
];

const BACKEND_WORK = [
  {
    tag: 'Payments',
    title: 'Cross-platform payment webhooks',
    body: 'One pipeline for Roku, Google, Amazon, Apple and Stripe purchase events. Cut payment-related errors in half.',
    metric: '99.99% reliable',
  },
  {
    tag: 'Integrations',
    title: 'Roku Universal Search',
    body: 'Made partner content discoverable from Roku’s platform-level search.',
    metric: '+25% organic traffic',
  },
  {
    tag: 'Automation',
    title: 'App Store app creation',
    body: 'Automated the Apple App Store setup that partner teams used to do by hand.',
    metric: '50% faster onboarding',
  },
];

const EXPERIENCE = [
  {
    company: 'OpenAssistant (formerly Skej)',
    role: 'Software Development Engineer II · AI systems',
    period: 'Oct 2025 — Now',
    body: 'Working on the AI assistant itself: building evals and performance metrics, improving model performance, cutting token usage, and running the agent-driven pipeline that finds and fixes production bugs.',
    stack: ['Evals', 'LLM agents', 'Prompt engineering', 'Tracing', 'Python'],
  },
  {
    company: 'Backlight (MAZ Digital)',
    role: 'Software Development Engineer I → II',
    period: 'Jul 2020 — Oct 2025',
    body: 'Grew from fresher to the team’s go-to backend engineer. Owned backend architecture and CI/CD across 12+ microservices, REST and GraphQL APIs, and payments. Led the Python 3 migration at Wildmoka and worked with Bounce House as augmented staff.',
    stack: ['Ruby on Rails', 'GraphQL', 'Python', 'Postgres', 'Kubernetes'],
  },
];

const SKILLS = [
  'LLM evals', 'LLM-as-judge', 'Prompt and context engineering', 'Token optimization',
  'Agent tooling', 'Tracing and observability', 'Python', 'Ruby on Rails', 'GraphQL',
  'PostgreSQL', 'AWS', 'Kubernetes', 'RSpec',
];


const RECS = [
  {
    name: 'Manvendra Singh',
    title: 'Senior Principal Software Engineer, Backlight',
    relation: 'Managed Mehul directly',
    text: 'I’ve had the privilege of working closely with Mehul, and he is truly an exceptional talent. His depth of knowledge far surpasses his experience, and he consistently demonstrates strong ownership—taking on challenges head-on and driving tasks to closure. Mehul is a reliable team player who communicates transparently and keeps everyone aligned with regular progress updates. The entire team often turned to him as the go-to person, and he delivered across every area—whether it was Zendesk, automation, or backend work. Even when he encountered difficulties, he pushed through and completed what was required. He is highly process-oriented, has excellent work ethic, and puts in consistent daily effort. He seeks support from seniors only when truly necessary, otherwise taking initiative to figure things out on his own. Watching him grow from a fresher into our backend expert in such a short span was remarkable. Mehul is always eager to learn and readily steps up to take on extra responsibility for the good of the team. Any team would be lucky to have him.',
  },
  {
    name: 'Yogesh Khatri',
    title: 'AVP Delivery, Quarks · ex-Backlight, ex-Adobe',
    relation: 'Managed Mehul directly',
    text: 'I had the privilege of seeing Mehul grow from fresher to experienced professional. Skilled in Ruby on Rails, he excelled in Honeybadger tickets tracking, ensuring quick resolutions and quality delivery. His collaboration and communication skills made him an asset to every release, while his helpful and friendly nature fostered a positive work environment. Always showing an eagerness to learn, he consistently took on challenges and explored improvements. I am truly proud to have worked with him and can confidently say any team would benefit from his technical expertise, positive attitude, and commitment to excellence.',
  },
  {
    name: 'Simon Baumer',
    title: 'Builder',
    relation: 'Senior colleague',
    text: 'Mehul is an eager and valuable participant on any team he joins. He’s not afraid to get his hands dirty on difficult problems, and knows when to consult with more experienced engineers to make sure he’s approaching the code with the proper tact. It was a joy working with him everyday on a relatively small team to move fast and in harmony with the rest of the development team.',
  },
  {
    name: 'Sanju Gautam',
    title: 'Backend Lead',
    relation: 'Colleague',
    text: 'Mehul is an amazing developer. He is excellent in what he does and takes full accountability of whatever he builds. He doesn’t hesitate to take the extra step to help his team members and collaborate in a productive manner. I have personally seen him producing outstanding features and I would totally recommend him.',
  },
];

const NAV = [
  ['work', 'Work'],
  ['experience', 'Experience'],
  ['words', 'Recommendations'],
  ['about', 'About'],
];

// Fade sections in as they scroll into view. CSS skips the motion for reduced-motion users.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Bento({ items }) {
  return (
    <div className="bento">
      {items.map((w) => (
        <article key={w.title} className={`card work reveal ${w.wide ? 'wide' : ''}`}>
          <span className="tag">{w.tag}</span>
          <h3>{w.title}</h3>
          <p>{w.body}</p>
          <span className="metric">{w.metric}</span>
        </article>
      ))}
    </div>
  );
}

function Rec({ rec }) {
  const [open, setOpen] = useState(false);
  const long = rec.text.length > 420;
  return (
    <figure className="card rec reveal">
      <blockquote className={long && !open ? 'clamp' : ''}>“{rec.text}”</blockquote>
      {long && (
        <button className="link-btn" onClick={() => setOpen(!open)}>
          {open ? 'Show less' : 'Read all'}
        </button>
      )}
      <figcaption>
        <span className="avatar" aria-hidden="true">
          {rec.name.split(' ').map((w) => w[0]).join('')}
        </span>
        <span>
          <strong>{rec.name}</strong>
          <small>{rec.title}</small>
          <small className="muted">{rec.relation}</small>
        </span>
      </figcaption>
    </figure>
  );
}

export default function App() {
  useReveal();

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo" aria-label="Back to top">
          MP<span className="dot">.</span>
        </a>
        <nav aria-label="Sections">
          {NAV.map(([id, label]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-sm" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
          Résumé
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="status">
              <span className="pulse" aria-hidden="true" /> AI systems at OpenAssistant · Remote from Rourkela, India
            </p>
            <h1>
              I make AI agents <br />
              <em>measurably better.</em>
            </h1>
            <p className="lede">
              I’m Mehul. I spent five years building backends: Rails, Python, payments and
              integrations. Now I work on AI systems: evals, performance metrics, model
              performance and token cost, so the agent gets better and cheaper with every
              release.
            </p>
            <div className="cta">
              <a className="btn btn-accent" href={`mailto:${EMAIL}`}>
                Say hello <span aria-hidden="true">→</span>
              </a>
              <a className="btn" href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
              <a className="btn" href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
          <div className="portrait">
            <img src="/assets/portrait.jpg" alt="Mehul Pradhan" width="720" height="900" />
          </div>
        </section>

        <section className="stats" aria-label="At a glance">
          {STATS.map((s) => (
            <div className="card stat reveal" key={s.label}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        <section id="work" className="section">
          <h2 className="kicker reveal"><span>01</span> Selected work</h2>
          <p className="group reveal">Now · AI systems</p>
          <Bento items={AI_WORK} />
          <p className="group reveal">Before · backend</p>
          <Bento items={BACKEND_WORK} />
        </section>

        <section id="experience" className="section">
          <h2 className="kicker reveal"><span>02</span> Experience</h2>
          <ol className="timeline">
            {EXPERIENCE.map((x) => (
              <li key={x.company} className="reveal">
                <div className="when">{x.period}</div>
                <div>
                  <h3>{x.company}</h3>
                  <p className="role">{x.role}</p>
                  <p>{x.body}</p>
                  <ul className="chips">
                    {x.stack.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <div className="card skills reveal">
            <span className="tag">Toolbox</span>
            <ul className="chips">
              {SKILLS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        <section id="words" className="section">
          <h2 className="kicker reveal"><span>03</span> What people say</h2>
          <div className="recs">
            {RECS.map((r) => <Rec key={r.name} rec={r} />)}
          </div>
          <a className="link-btn more reveal" href={RECS_URL} target="_blank" rel="noopener noreferrer">
            All recommendations on LinkedIn ↗
          </a>
        </section>

        <section id="about" className="section about">
          <h2 className="kicker reveal"><span>04</span> Off the clock</h2>
          <div className="about-grid">
            <div className="card reveal">
              <p className="big">
                Rourkela born and based. I like long problems, short feedback loops, and numbers
                that prove a change actually worked.
              </p>
              <p>
                Away from the keyboard I’m usually deep in a video game, planning the next trip or
                writing. I also co-authored a book chapter on reproducible data analysis in Python
                (Taylor &amp; Francis, 2021).
              </p>
            </div>
            <div className="card reveal">
              <span className="tag">Education</span>
              <h3>B.Tech, Computer Science</h3>
              <p>ITER, Siksha ’O’ Anusandhan University · 2016–2020</p>
              <p className="metric">9.61 CGPA</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact reveal">
          <p className="kicker"><span>05</span> Contact</p>
          <h2>
            Building with AI agents? <br />
            <em>Let’s talk.</em>
          </h2>
          <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </section>
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Mehul Pradhan</span>
        <span>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
        </span>
      </footer>
    </>
  );
}
