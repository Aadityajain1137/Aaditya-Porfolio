import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background effects */}
      <div className="hero-bg-grid" aria-hidden="true" />
      <div className="hero-glow-left" aria-hidden="true" />
      <div className="hero-glow-right" aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="hero-inner">
        {/* Badge */}
        <div className="hero-badge scroll-animate animate-fade-up">
          <span className="hero-badge-dot" aria-hidden="true" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="hero-name">
          <span className="hero-name-line scroll-animate animate-fade-up">Aaditya</span>
          <span className="hero-name-line hero-name-line--accent scroll-animate animate-fade-up">Jain</span>
        </h1>

        {/* Role */}
        <h2 className="hero-role scroll-animate animate-fade-up">
          Full Stack Developer
          <span className="hero-role-sep" aria-hidden="true">&</span>
          DSA Problem Solver
        </h2>

        {/* Description */}
        <p className="hero-desc scroll-animate animate-fade-up">
          From building responsive web applications to solving DSA challenges,
          I enjoy turning complex ideas into efficient, elegant solutions.
        </p>

        {/* Actions */}
        <div className="hero-actions scroll-animate animate-fade-up">
          <a href="/resume.pdf" download className="hero-btn hero-btn--primary">
            <FiDownload className="hero-btn-icon" />
            Download Resume
          </a>
          <a href="#projects" className="hero-btn hero-btn--ghost">
            View Projects
            <FiArrowRight className="hero-btn-icon" />
          </a>
        </div>

        {/* Social links */}
        <div className="hero-socials scroll-animate animate-fade-up">
          <a
            href="https://www.linkedin.com/in/aadityajain1137"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Aadityajain1137"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/u/Aaditya_Jain1/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social hero-social--leetcode"
            aria-label="LeetCode"
          >
            <SiLeetcode />
          </a>
          {/* Codolio – owl icon */}
          <a
            href="https://codolio.com/profile/AadityaJain1137"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-social hero-social--codolio"
            aria-label="Codolio"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Owl head */}
              <circle cx="12" cy="10" r="5" />
              {/* Ear tufts */}
              <path d="M9 6 L7 2" />
              <path d="M15 6 L17 2" />
              {/* Eyes */}
              <circle cx="10" cy="9" r="1.2" fill="currentColor" stroke="none" />
              <circle cx="14" cy="9" r="1.2" fill="currentColor" stroke="none" />
              {/* Beak */}
              <path d="M12 11 L12 13" strokeWidth="1.5" />
              {/* Wing hints */}
              <path d="M6 13 L3 16" />
              <path d="M18 13 L21 16" />
            </svg>
          </a>
          <span className="hero-social-line" aria-hidden="true" />
          <span className="hero-social-label">Find me on</span>
        </div>
      </div>
    </section>
  );
}