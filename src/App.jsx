import { useState } from "react";
import TextType from "./components/TextType";
import Aurora from "./components/Aurora";
import TiltedCard from "./components/TiltedCard";
import "bootstrap/dist/css/bootstrap.min.css";
import myPhoto from "./components/iki.jpg";
import ClickSpark from "./components/ClickSpark";
import SplitText from "./components/SplitText";
import Reveal from "./components/reveal";
import projects from "./data/projects";
import LogoLoop from "./components/LogoLoop";
import {
  SiReact,
  SiFlutter,
  SiLaravel,
  SiMysql,
  SiPython,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiPhp,
} from "react-icons/si";

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
                  <a className="nav-link" href="#footer">
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
            </div>
 <div className="tech-marquee">
             <div className="tech-track">
  <span><SiReact /> React</span>
  <span><SiFlutter /> Flutter</span>
  <span><SiLaravel /> Laravel</span>
  <span><SiMysql /> MySQL</span>
  <span><SiPython /> Python</span>
  <span><SiHtml5 /> HTML</span>
  <span><SiCss3 /> CSS</span>
  <span><SiPhp /> PHP</span>
    <span><SiReact /> React</span>
  <span><SiFlutter /> Flutter</span>
  {/* duplikat */}
    <span><SiReact /> React</span>
  <span><SiFlutter /> Flutter</span>
  <span><SiHtml5 /> HTML</span>
    <span><SiPhp /> PHP</span>
  <span><SiLaravel /> Laravel</span>
  <span><SiMysql /> MySQL</span>
  <span><SiPython /> Python</span>
    <span><SiReact /> React</span>
</div>
</div>
<div className="section-heading">
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
        <footer className="footer" id="footer">
         <div className="container footer-inner">
  <div className="footer-info">
    <h4>Riski Muhammad Wiyanto</h4>

    {/* <p className="footer-role">
      Backend Developer & Mobile App Enthusiast
    </p> */}

<div className="footer-socials">
  <a href="https://github.com/Riskimw">
    <i className="bi bi-github"></i>
  </a>

  <a href="mailto:riskimw05@gmail.com">
    <i className="bi bi-envelope-fill"></i>
  </a>

  <a href="https://wa.me/6283153192700">
    <i className="bi bi-whatsapp"></i>
  </a>

  <a href="https://instagram.com/c.syrmw">
    <i className="bi bi-instagram"></i>
  </a>
</div>
    
  </div>

  <p className="footer-text">
    © {new Date().getFullYear()} Riski Muhammad Wiyanto
  </p>
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