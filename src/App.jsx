import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
import DecryptedText from './components/DecryptedText';
import {
  SiReact,
  SiFlutter,
  SiLaravel,
  SiMysql,
  SiPython,
  SiHtml5,
  SiPhp,
} from "react-icons/si";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { node: <SiReact />, title: "React" },
  { node: <SiFlutter />, title: "Flutter" },
  { node: <SiLaravel />, title: "Laravel" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiPython />, title: "Python" },
  { node: <SiHtml5 />, title: "HTML" },
  { node: <SiPhp />, title: "PHP" },
];

function ProjectCard({ project, onViewDetails }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--spot-x", `${x}%`);
    card.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <div className="project-card" ref={cardRef} onMouseMove={handleMouseMove}>
      <div className="project-card-spotlight" aria-hidden="true" />

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
        
          href={project.demo}
          className="link-btn"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
        <button
          className="link-btn link-btn-outline"
          onClick={() => onViewDetails(project)}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [fontsReady, setFontsReady] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  // fix utama: SplitText ngukur posisi tiap karakter PAS MOUNT, pake font
  // yang aktif saat itu. Kalau font custom baru kelar load belakangan,
  // ukuran huruf berubah tapi split-nya nggak di-remeasure -> numpuk.
  // Solusi: baru mount SplitText SETELAH font beneran ready.
  useEffect(() => {
    document.fonts.ready.then(() => {
      setFontsReady(true);
      ScrollTrigger.refresh();
    });
  }, []);

  // scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active nav-link ngikutin section yang lagi keliatan
  useEffect(() => {
    const sectionIds = ["home", "projects", "footer"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="Fullscreen">
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />
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
              Surinas
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
                  
                    className={`nav-link ${activeSection === "home" ? "active" : ""}`}
                    href="#home"
                    aria-current={activeSection === "home" ? "page" : undefined}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  
                    className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                    href="#projects"
                    aria-current={activeSection === "projects" ? "page" : undefined}
                  >
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  
                    className={`nav-link ${activeSection === "footer" ? "active" : ""}`}
                    href="#footer"
                    aria-current={activeSection === "footer" ? "page" : undefined}
                  >
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
        <div className="hero-wrapper" id="home">
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
                {fontsReady ? (
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
                ) : (
                  <p className="subtitle" style={{ opacity: 0 }}>
                    I enjoy crafting applications with a focus on strong
                    performance, clean architecture, and smooth user
                    interaction to create experiences that feel refined and
                    responsive.
                  </p>
                )}
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
              <LogoLoop
                logos={techStack}
                speed={60}
                direction="left"
                logoHeight={32}
                gap={48}
                pauseOnHover
                fadeOut
                fadeOutColor="#08080c"
                scaleOnHover
                ariaLabel="Tech stack"
              />
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
                    <ProjectCard
                      project={project}
                      onViewDetails={setSelectedProject}
                    />
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
              {/* <h4>Riski Muhammad Wiyanto</h4> */}

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