import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Landing from './pages/Landing';
import EngineerHome from './pages/engineer/EngineerHome';
import Resume from './pages/engineer/Resume';
import Experience from './pages/engineer/Experience';
import Recommendations from './pages/engineer/Recommendations';
import GitHub from './pages/engineer/GitHub';
import PersonalHome from './pages/personal/PersonalHome';
import About from './pages/personal/About';
import Blog from './pages/personal/Blog';
import Photos from './pages/personal/Photos';
import Instagram from './pages/personal/Instagram';
import './App.css';

function Navigation() {
  const location = useLocation();

  // Don't show navbar on landing page
  if (location.pathname === '/') {
    return null;
  }

  // Determine which section we're in
  const isEngineer = location.pathname.startsWith('/engineer');
  const isPersonal = location.pathname.startsWith('/personal');

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          Mehul Pradhan
        </Link>
        {isEngineer && (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/engineer" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/engineer/resume" className="nav-link">Resume</Link>
            </li>
            <li className="nav-item">
              <Link to="/engineer/experience" className="nav-link">Experience</Link>
            </li>
            <li className="nav-item">
              <Link to="/engineer/recommendations" className="nav-link">Recommendations</Link>
            </li>
            <li className="nav-item">
              <Link to="/engineer/github" className="nav-link">GitHub</Link>
            </li>
          </ul>
        )}
        {isPersonal && (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/personal" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/personal/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/personal/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/personal/photos" className="nav-link">Photos</Link>
            </li>
            <li className="nav-item">
              <Link to="/personal/instagram" className="nav-link">Instagram</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Landing />} />

            {/* Engineer routes */}
            <Route path="/engineer" element={<EngineerHome />} />
            <Route path="/engineer/resume" element={<Resume />} />
            <Route path="/engineer/experience" element={<Experience />} />
            <Route path="/engineer/recommendations" element={<Recommendations />} />
            <Route path="/engineer/github" element={<GitHub />} />

            {/* Personal routes */}
            <Route path="/personal" element={<PersonalHome />} />
            <Route path="/personal/about" element={<About />} />
            <Route path="/personal/blog" element={<Blog />} />
            <Route path="/personal/photos" element={<Photos />} />
            <Route path="/personal/instagram" element={<Instagram />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; 2024 Mehul Pradhan. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
