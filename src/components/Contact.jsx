import { useState } from "react";
import { FiLinkedin, FiMail, FiSend, FiArrowUpRight } from "react-icons/fi";
import "./Contact.css";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("jainaaditya917@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-bg-grid" aria-hidden="true" />
      <div className="contact-glow contact-glow--left" aria-hidden="true" />
      <div className="contact-glow contact-glow--right" aria-hidden="true" />

      <div className="contact-inner">
        <p className="contact-eyebrow scroll-animate animate-fade-up">Let's talk</p>
        <h2 className="contact-heading scroll-animate animate-fade-up">Connect with Me</h2>
        <p className="contact-tagline scroll-animate animate-fade-up">
          Whether it's a project idea, a job opportunity, or just a friendly hello —
          <br />
          <span>my inbox is always open.</span>
        </p>

        <div className="contact-cards">
          <a
            href="https://www.linkedin.com/in/aadityajain1137"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card contact-card--linkedin scroll-animate animate-fade-left"
          >
            <div className="contact-card-icon">
              <FiLinkedin />
            </div>
            <div className="contact-card-body">
              <p className="contact-card-label">LinkedIn</p>
              <p className="contact-card-value">Aaditya Jain</p>
              <p className="contact-card-hint">View profile &amp; connect</p>
            </div>
            <div className="contact-card-arrow">
              <FiArrowUpRight />
            </div>
            <div className="contact-card-shine" aria-hidden="true" />
          </a>

          <button
            className="contact-card contact-card--gmail scroll-animate animate-fade-right"
            onClick={handleCopyEmail}
            aria-label="Copy email address"
          >
            <div className="contact-card-icon">
              <FiMail />
            </div>
            <div className="contact-card-body">
              <p className="contact-card-label">Gmail</p>
              <p className="contact-card-value">jainaaditya917</p>
              <p className="contact-card-hint">
                {copied ? "✓ Copied to clipboard!" : "Click to copy email"}
              </p>
            </div>
            <div className={`contact-card-arrow ${copied ? "contact-card-arrow--copied" : ""}`}>
              {copied ? "✓" : <FiSend />}
            </div>
            <div className="contact-card-shine" aria-hidden="true" />
          </button>
        </div>

        <div className="contact-footer-strip scroll-animate animate-fade-up">
          <span className="contact-dot" aria-hidden="true" />
          <p>Open to full-time roles, freelance work &amp; collaborations</p>
          <span className="contact-dot" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}