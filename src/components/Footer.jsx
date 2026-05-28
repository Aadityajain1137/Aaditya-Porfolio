import { FiLinkedin, FiMail, FiGithub, FiArrowUp } from "react-icons/fi";
import "./Footer.css";

const navLinks = [
  { label: "Home",         href: "#home"         },
  { label: "About",        href: "#about"         },
  { label: "Skills",       href: "#skills"        },
  { label: "Projects",     href: "#projects"      },
  { label: "Certificates", href: "#certificates"  },
  { label: "Contact",      href: "#contact"       },
];

const socialLinks = [
  { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/aadityajain1137", label: "LinkedIn" },
  { icon: <FiMail />,     href: "mailto:jainaaditya917@gmail.com",              label: "Gmail"    },
  { icon: <FiGithub />,   href: "https://github.com/Aadityajain1137",                          label: "GitHub"   },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow-line" aria-hidden="true" />

      <div className="footer-inner">
        <div className="footer-brand scroll-animate animate-fade-up">
          <p className="footer-logo">Aaditya</p>
          <p className="footer-bio">
            Full-stack developer &amp; problem solver,<br />
            building things that live on the internet.
          </p>
          <div className="footer-socials">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="footer-social-btn"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-nav-col scroll-animate animate-fade-up" style={{ transitionDelay: '0.1s' }}>
          <p className="footer-col-heading">Navigation</p>
          <ul className="footer-nav">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-contact-col scroll-animate animate-fade-up" style={{ transitionDelay: '0.2s' }}>
          <p className="footer-col-heading">Get in Touch</p>
          <ul className="footer-contact-list">
            <li>
              <FiMail className="footer-contact-icon" />
              <a href="mailto:jainaaditya917@gmail.com">jainaaditya917@gmail.com</a>
            </li>
            <li>
              <FiLinkedin className="footer-contact-icon" />
              <a href="https://www.linkedin.com/in/aadityajain1137" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/aadityajain1137
              </a>
            </li>
          </ul>
          <p className="footer-availability">
            <span className="footer-dot-green" aria-hidden="true" />
            Available for opportunities
          </p>
        </div>
      </div>

      <div className="footer-bottom scroll-animate animate-fade-up">
        <p className="footer-copy">
          © {year} <span>Aaditya Jain</span>. Crafted with ♥ in React.
        </p>
        <button className="footer-back-top" onClick={scrollToTop} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>
    </footer>
  );
}