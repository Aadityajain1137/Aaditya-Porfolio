// Projects.jsx
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: 'SkillMatch.AI',
    tech: 'React.js, Node.js, Express.js, MongoDB, OpenAI API',
    description: 'AI-powered career platform analyzing resumes & JDs via OpenAI API to identify skill gaps, generate interview questions, and create ATS-friendly resumes.',
    liveLink: 'https://skill-match-ai-six.vercel.app/',
    githubLink: 'https://github.com/Aadityajain1137/SkillMatch.AI',
    type: 'fullstack',
  },
  {
    title: 'Nexora — Expense Tracker',
    tech: 'React.js, Django, PostgreSQL, JWT, Chart.js, jsPDF',
    description: 'Full-stack expense tracker with JWT auth, multi-category budgeting, Chart.js analytics dashboard, and jsPDF report downloads. Deployed frontend on Vercel and Django REST backend on Render.',
    liveLink: 'https://nexora-frontend-pink.vercel.app/',
    githubLink: 'https://github.com/LalitMali123/Nexora-Frontend',
    type: 'fullstack',
  },
  {
    title: 'SIH - Rainwater Harvesting',
    tech: 'HTML5, CSS3, JavaScript, Vercel',
    description: 'An interactive platform created for the Smart India Hackathon (SIH) to promote rainwater harvesting. It provides details on government schemes like "Catch the Rain", calculates potential savings, and highlights the financial and environmental benefits of water conservation.',
    liveLink: 'https://sih-25-rtrwh-y2pa.vercel.app/',
    githubLink: 'https://github.com/Aadityajain1137/SIH-25-RTRWH',
    type: 'frontend',
  },
  {
    title: 'Pokémon Details Page (Pokedex)',
    tech: 'React.js, Vite, React Router, PokéAPI, Axios',
    description: 'A fully responsive Pokédex that lets you search, browse, and view detailed information about the original 151 Pokémon. Uses client-side routing for seamless navigation between the list and detail pages.',
    liveLink: 'https://pokemon-details-page-56zv.vercel.app/',
    githubLink: 'https://github.com/Aadityajain1137/Pokemon-details-page',
    type: 'frontend',
  },
];

const Projects = () => {
  // Helper to get accent colour based on project type
  const getAccentColor = (type, index) => {
    if (type === 'fullstack') return index === 0 ? '#6366f1' : '#06b6d4';
    return index === 2 ? '#f59e0b' : '#ec4899'; // orange for SIH, pink for Pokémon
  };

  // Helper to get tagline
  const getTagline = (type) => {
    return type === 'fullstack' ? 'FULL STACK PROJECT' : 'FRONTEND PROJECT';
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-bg-grid" aria-hidden="true" />
      <div className="projects-glow" aria-hidden="true" />

      <div className="projects-container">
        <div className="projects-heading-wrap scroll-animate animate-fade-up">
          <p className="projects-eyebrow">PORTFOLIO</p>
          <h2 className="projects-heading">Featured Work</h2>
          <div className="projects-heading-bar" />
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => {
            const accentColor = getAccentColor(project.type, index);
            const tagline = getTagline(project.type);

            return (
              <div
                className="project-card scroll-animate animate-fade-up"
                key={index}
                style={{ 
                  '--card-accent': accentColor, 
                  '--card-accent-rgb': '99,102,241',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div className="project-card-line" style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }} />
                <div className="project-card-top">
                  <span className="project-number">0{index + 1}</span>
                  <div className="project-card-actions">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn"
                      aria-label="GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-icon-btn project-icon-btn--live"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{tagline}</p>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.split(', ').map((techItem, idx) => (
                    <span key={idx} className="project-tech-pill">
                      {techItem}
                    </span>
                  ))}
                </div>
                <div className="project-cta">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-cta-link">
                    Live Demo <FaExternalLinkAlt style={{ fontSize: '0.7rem' }} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;