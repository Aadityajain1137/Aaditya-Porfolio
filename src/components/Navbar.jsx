// Navbar.jsx
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const navLinks = [
  { label: "Home",         href: "#home"        },
  { label: "About",        href: "#about"       },
  { label: "Skills",       href: "#skills"      },
  { label: "Projects",     href: "#projects"    },
  { label: "Certificates", href: "#certificates"},
  { label: "Contact",      href: "#contact"     },
];

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  // Detect scroll for glass background effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy: update active link based on visible section
  useEffect(() => {
    const sections = navLinks.map(link => document.querySelector(link.href));
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActiveLink(id);
          }
        });
      },
      { 
        threshold: 0.4,
        rootMargin: "-80px 0px -20% 0px"
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleNav = (href) => {
    setActiveLink(href.replace("#", ""));
    setMenuOpen(false);
  };

  // Scroll to contact section when Hire Me is clicked
  const handleHireMe = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setActiveLink("contact");
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={() => handleNav("#home")}>
          Aaditya<span> Jain</span>
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={activeLink === href.replace("#", "") ? "active" : ""}
                onClick={() => handleNav(href)}
              >
                {label}
                <span className="navbar-link-dot" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA - Hire Me button now scrolls to Contact */}
        <button onClick={handleHireMe} className="navbar-cta">
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          className={`navbar-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`navbar-drawer ${menuOpen ? "navbar-drawer--open" : ""}`}>
        <ul>
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={activeLink === href.replace("#", "") ? "active" : ""}
                onClick={() => handleNav(href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile Hire Me button also scrolls to Contact */}
        <button onClick={handleHireMe} className="navbar-cta navbar-cta--mobile">
          Hire Me
        </button>
      </div>
    </nav>
  );
}