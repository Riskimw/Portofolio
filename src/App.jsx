import { useState } from "react";
import TextType from "./components/TextType";
import Aurora from "./components/Aurora";
import TiltedCard from "./components/TiltedCard";
import "bootstrap/dist/css/bootstrap.min.css";
import myPhoto from "./components/iki.jpg";
import ClickSpark from "./components/ClickSpark";
import SplitText from "./components/SplitText";
import Reveal from "./components/Reveal";
import projects from "./data/projects";

import "./App.css";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <div className="Fullscreen">
      <ClickSpark
        sparkColor="#fff"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="#">
              PortoFolio
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Penutup Navbar */}

        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.9}
          amplitude={1.0}
          speed={0.5}
        />
        <div className="hero-wrapper">
          <div className="hero-section">
            <TiltedCard
              imageSrc={myPhoto}
              altText=""
              captionText={false}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={15}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Riski Muhammad Wiyanto</p>
              }
            />
            {/* Text Perkenalan */}
            <div className="Text1">
              <TextType
                text={[
                  "Hello, I'm Riski.",
                  "Welcome to My Portfolio.",
                  "Back-End Developer in the Making.",
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
              {/* Teks biasa di bawah TextType */}
              <div>
                <SplitText
                  text="I enjoy crafting applications with a focus on strong performance, clean architecture, and smooth user interaction to create experiences that feel refined and responsive."
                  className="subtitle"
                  delay={100}
                  duration={0.6}
                  ease="power3.out"
                  splitType="words"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.1}
                  rootMargin="-100px"
                  textAlign="left"
                />
              </div>
            </div>
            {/* Penutup Text Perkenalan */}
          </div>
        </div>

        {/* Projects Section */}
        <section className="projects-section" id="projects">
          <div className="container">
            <div className="section-heading">
              <Reveal>
                <span className="section-eyebrow">Portfolio</span>
              </Reveal>
              <SplitText
                text="Selected Projects"
                className="section-title"
                delay={40}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.2}
                rootMargin="-50px"
                textAlign="center"
              />
              <Reveal delay={150}>
                <p className="section-subtitle">
                  A few projects that reflect how I think about building
                  software — from mobile apps to the Laravel APIs running
                  behind them.
                </p>
              </Reveal>
            </div>

            <div className="row g-4 projects-grid">
              {projects.map((project, index) => (
                <div className="col-md-6 col-lg-4" key={project.title + index}>
                  <Reveal delay={index * 120}>
                    <div className="project-card">
                      <h3 className="project-title">{project.title}</h3>

                      <div className="project-tags">
                        {project.stack.map((tech) => (
                          <span className="tag-pill" key={tech}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <p className="project-desc">{project.description}</p>

                      <div className="project-links">
                        <a
                          href={project.github}
                          className="link-btn"
                          target="_blank"
                          rel="noreferrer"
                        >
                          View Code
                        </a>
<button
  className="link-btn link-btn-outline"
  onClick={() => setSelectedProject(project)}
>
  View Details
</button>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Penutup Projects Section */}

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-inner">
            <p className="footer-text">
               {new Date().getFullYear()}, Riski Muhammad Wiyanto
            </p>

            <div className="footer-socials">
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.94 3.2 9.13 7.64 10.6.56.1.76-.24.76-.54 0-.27-.01-1.16-.02-2.1-3.11.67-3.77-1.34-3.77-1.34-.51-1.29-1.24-1.64-1.24-1.64-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.62 1.21 3.26.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3.01-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.61 1.53.23 2.67.11 2.95.71.79 1.15 1.79 1.15 3.01 0 4.3-2.62 5.25-5.11 5.52.4.35.76 1.04.76 2.1 0 1.52-.01 2.74-.01 3.11 0 .3.2.65.76.54 4.44-1.48 7.64-5.66 7.64-10.6C23.02 5.24 18.27.5 12 .5Z" />
                </svg>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43A2.07 2.07 0 1 1 5.35 3.3a2.07 2.07 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
                </svg>
              </a>

              <a href="mailto:youremail@example.com" aria-label="Email">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-13Zm2.2.5 7.3 5.47a.83.83 0 0 0 1 0L19.8 6H4.2ZM4 7.9v10.1h16V7.9l-7.43 5.57a2.33 2.33 0 0 1-2.74 0L4 7.9Z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
        {/* Penutup Footer */}
        {selectedProject && (
  <div
    className="project-modal-overlay"
    onClick={() => setSelectedProject(null)}
  >
    <div
      className="project-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-modal"
        onClick={() => setSelectedProject(null)}
      >
        ✕
      </button>

      <h2>{selectedProject.title}</h2>

  <p>{selectedProject.description}</p>

{selectedProject.screenshots?.map((image, index) => (
  <img
    key={index}
    src={image}
    alt={`Screenshot ${index + 1}`}
    style={{
      width: "100%",
      borderRadius: "12px",
      marginTop: "20px",
      marginBottom: "12px",
    }}
  />
))}

      <div className="project-tags">
        {selectedProject.stack.map((tech) => (
          <span key={tech} className="tag-pill">
            {tech}
          </span>
        ))}
      </div>

      <a
        href={selectedProject.github}
        target="_blank"
        rel="noreferrer"
        className="link-btn"
      >
        Github Repository
      </a>
    </div>
  </div>
)}
      </ClickSpark>
    </div>
  );
}

export default App;