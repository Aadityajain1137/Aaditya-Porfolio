import { useEffect, useRef, useState } from "react";
import { FiAward, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Certificates.css";

const certificates = [
  { id: 1, image: "/Codechef time complexity.png",  title: "Time Complexity",         issuer: "CodeChef"         },
  { id: 2, image: "/Codethon 1.0.png",              title: "Codethon 1.0",            issuer: "Codethon"         },
  { id: 3, image: "/Computing Foundation.png",      title: "Computing Foundation",    issuer: "GCCRP" },
  { id: 4, image: "/conding ninja.png",             title: "Coding Ninja Slayground", issuer: "Coding Ninjas"    },
  { id: 5, image: "/Engineering certificate.png",   title: "Google Cloud Engineering Certificate", issuer: "GCCF" },
  { id: 6, image: "/Freedom AI.jpg",                title: "Freedom With AI",         issuer: "Freedom AI"       },
  { id: 7, image: "/Great Learning.jpg",            title: "Great Learning",          issuer: "Great Learning"   },
  { id: 8, image: "/Internpe.jpg",                  title: "Internship",              issuer: "InternPe"         },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const intervalRef = useRef(null);
  const total = certificates.length;

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000);
  };

  const stopAuto = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  const goTo = (index) => {
    setCurrent((index + total) % total);
  };

  const handleMouseEnter = () => {
    setPaused(true);
    stopAuto();
  };

  const handleMouseLeave = () => {
    setPaused(false);
    startAuto();
  };

  const visibleCards = () => {
    const cards = [];
    for (let i = -1; i <= 1; i++) {
      const idx = (current + i + total) % total;
      cards.push({ ...certificates[idx], position: i });
    }
    return cards;
  };

  return (
    <section className="cert-section" id="certificates">
      <div className="cert-heading scroll-animate animate-fade-up">
        <FiAward className="cert-icon" />
        <h2>Certificates</h2>
        <p className="cert-subtitle">Achievements &amp; Recognitions</p>
      </div>

      <div
        className="cert-slider-wrapper scroll-animate animate-scale"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="cert-nav cert-nav--left"
          onClick={() => goTo(current - 1)}
          aria-label="Previous certificate"
        >
          <FiChevronLeft />
        </button>

        <div className="cert-stage">
          {visibleCards().map(({ id, image, title, issuer, position }) => (
            <div
              key={id}
              className={`cert-card cert-card--${
                position === 0 ? "center" : position === -1 ? "left" : "right"
              }`}
              onClick={() => position === 0 && setLightbox({ image, title, issuer })}
            >
              <div className="cert-img-wrap">
                <img src={image} alt={title} loading="lazy" />
                <div className="cert-img-overlay">
                  <span>View Full</span>
                </div>
              </div>
              <div className="cert-info">
                <p className="cert-title">{title}</p>
                <p className="cert-issuer">{issuer}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          className="cert-nav cert-nav--right"
          onClick={() => goTo(current + 1)}
          aria-label="Next certificate"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="cert-dots scroll-animate animate-fade-up">
        {certificates.map((_, i) => (
          <button
            key={i}
            className={`cert-dot ${i === current ? "cert-dot--active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to certificate ${i + 1}`}
          />
        ))}
      </div>

      <div className="cert-progress-bar">
        <div
          className={`cert-progress-fill ${!paused ? "cert-progress-fill--animating" : ""}`}
          key={current}
        />
      </div>

      {lightbox && (
        <div className="cert-lightbox" onClick={() => setLightbox(null)}>
          <div className="cert-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button className="cert-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox.image} alt={lightbox.title} />
            <div className="cert-lightbox-meta">
              <p className="cert-lightbox-title">{lightbox.title}</p>
              <p className="cert-lightbox-issuer">{lightbox.issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}