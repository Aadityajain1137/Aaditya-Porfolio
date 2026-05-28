import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiCplusplus, SiJavascript } from "react-icons/si";
import { FiCode, FiAward, FiLayers, FiCloud } from "react-icons/fi";
import "./About.css";

const techStack = [
  { icon: <SiReact />,      label: "React.js",    color: "#61dafb" },
  { icon: <SiNodedotjs />,  label: "Node.js",     color: "#6ead3a" },
  { icon: <SiExpress />,    label: "Express.js",  color: "#a5b4fc" },
  { icon: <SiMongodb />,    label: "MongoDB",     color: "#4db33d" },
  { icon: <SiCplusplus />,  label: "C++",         color: "#00599c" },
  { icon: <SiJavascript />, label: "JavaScript",  color: "#f7df1e" },
];

const stats = [
  { icon: <FiCode />,   value: "500+", label: "DSA Problems Solved" },
  { icon: <FiAward />,  value: "9.05", label: "Current CGPA"        },
  { icon: <FiLayers />, value: "3+",   label: "Full Stack Projects"  },
  { icon: <FiCloud />,  value: "GCP",  label: "Cloud Certified"      },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow" aria-hidden="true" />
      <div className="about-bg-grid" aria-hidden="true" />

      <div className="about-container">
        {/* Heading */}
        <div className="about-heading-wrap scroll-animate animate-fade-up">
          <p className="about-eyebrow">Get to know me</p>
          <h2 className="about-heading">About Me</h2>
          <div className="about-heading-bar" aria-hidden="true" />
        </div>

        {/* Main content */}
        <div className="about-layout">
          {/* Left: text */}
          <div className="about-text-col">
            <p className="about-text scroll-animate animate-fade-left">
              I'm <span className="about-highlight">Aaditya Jain</span>, a passionate
              Full Stack Web Developer and DSA enthusiast currently pursuing
              B.Tech in Computer Science at <span className="about-highlight">JECRC University</span>.
            </p>
            <p className="about-text scroll-animate animate-fade-left">
              I enjoy building scalable and responsive web applications using
              modern technologies like React.js, Node.js, Express.js, and MongoDB.
            </p>
            <p className="about-text scroll-animate animate-fade-left">
              Alongside web development, I actively solve Data Structures &amp;
              Algorithms problems to strengthen my problem-solving and logical
              thinking skills — with <span className="about-highlight">500+ problems</span> solved
              across LeetCode and GeeksforGeeks.
            </p>

            <div className="about-tech-wrap scroll-animate animate-fade-left">
              <p className="about-tech-label">Tech I work with</p>
              <div className="about-tech-stack">
                {techStack.map(({ icon, label, color }) => (
                  <span
                    key={label}
                    className="about-tech-pill"
                    style={{ "--pill-color": color }}
                  >
                    <span className="about-tech-icon">{icon}</span>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: stats */}
          <div className="about-stats-col">
            {stats.map(({ icon, value, label }) => (
              <div key={label} className="about-stat-card scroll-animate animate-scale">
                <div className="about-stat-icon">{icon}</div>
                <div className="about-stat-body">
                  <p className="about-stat-value">{value}</p>
                  <p className="about-stat-label">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}