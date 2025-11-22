import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Experience from './pages/Experience';
import Recommendations from './pages/Recommendations';
import GitHub from './pages/GitHub';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">
              Mehul Pradhan
            </Link>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">Resume</Link>
              </li>
              <li className="nav-item">
                <Link to="/experience" className="nav-link">Experience</Link>
              </li>
              <li className="nav-item">
                <Link to="/recommendations" className="nav-link">Recommendations</Link>
              </li>
              <li className="nav-item">
                <Link to="/github" className="nav-link">GitHub</Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/recommendations" element={<Recommendations />} />
            <Route path="/github" element={<GitHub />} />
            <Route path="/blog" element={<Blog />} />
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
