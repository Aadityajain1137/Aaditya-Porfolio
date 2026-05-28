import {
  DiCss3, DiHtml5, DiReact,
  DiNodejs, DiDjango,
  DiMongodb, DiPostgresql, DiMysql,
  DiGit, DiGithubBadge, DiPython,
  DiJavascript1, DiVisualstudio,
} from "react-icons/di";
import {
  FaCode, FaDatabase, FaCloud, FaTools,
  FaLayerGroup, FaAws, FaServer,
} from "react-icons/fa";
import { TbBrandCpp, TbBrandVercel } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";
import './Skills.css';

const skillCategories = [
  {
    label: "Languages",
    icon: <FaCode />,
    color: "#f97316",
    skills: [
      { name: "C++", icon: <TbBrandCpp /> },
      { name: "Python", icon: <DiPython /> },
      { name: "JavaScript", icon: <DiJavascript1 /> },
      { name: "C", icon: <FaCode /> },
    ],
  },
  {
    label: "Frontend",
    icon: <FaLayerGroup />,
    color: "#3b82f6",
    skills: [
      { name: "React.js", icon: <DiReact /> },
      { name: "HTML5", icon: <DiHtml5 /> },
      { name: "CSS3", icon: <DiCss3 /> },
    ],
  },
  {
    label: "Backend",
    icon: <FaServer />,
    color: "#10b981",
    skills: [
      { name: "Node.js", icon: <DiNodejs /> },
      { name: "Express.js", icon: <FaServer /> },
      { name: "Django", icon: <DiDjango /> },
    ],
  },
  {
    label: "Databases",
    icon: <FaDatabase />,
    color: "#8b5cf6",
    skills: [
      { name: "MongoDB", icon: <DiMongodb /> },
      { name: "PostgreSQL", icon: <DiPostgresql /> },
      { name: "SQL", icon: <DiMysql /> },
    ],
  },
  {
    label: "Cloud",
    icon: <FaCloud />,
    color: "#0ea5e9",
    skills: [
      { name: "GCP", icon: <FaCloud /> },
      { name: "AWS (basics)", icon: <FaAws /> },
    ],
  },
  {
    label: "Tools",
    icon: <FaTools />,
    color: "#f59e0b",
    skills: [
      { name: "Git", icon: <DiGit /> },
      { name: "GitHub", icon: <DiGithubBadge /> },
      { name: "VS Code", icon: <VscCode /> },
      { name: "Vercel", icon: <TbBrandVercel /> },
      { name: "Render", icon: <FaCloud /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="skills-container">
        <div className="skills-heading-wrap scroll-animate animate-fade-up">
          <p className="skills-eyebrow">EXPERTISE</p>
          <h2 className="skills-heading">Technical Skills</h2>
          <div className="skills-heading-bar" />
        </div>
        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.label}
              className="skill-card scroll-animate animate-fade-up"
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <div className="card-header">
                <span style={{ color: cat.color }}>{cat.icon}</span>
                <h3>{cat.label}</h3>
              </div>
              <div className="chips">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="chip"
                    style={{ '--chip-color': cat.color }}
                  >
                    <span style={{ color: cat.color }}>{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}