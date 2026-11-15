import { useEffect, useState } from "react";
import { profile, stats, experience, skills, projects, education } from "./data";

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCursorGlow() {
  useEffect(() => {
    const move = (e) => {
      document.documentElement.style.setProperty("--mx", e.clientX + "px");
      document.documentElement.style.setProperty("--my", e.clientY + "px");
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <div className="reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  useReveal();
  useCursorGlow();

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const initials = profile.name.split(" ").map((n) => n[0]).join("");
  const marquee = skills.flatMap((s) => s.items.slice(0, 3));

  return (
    <>
      <div className="bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="cursor-glow" />
      </div>

      <header className="nav">
        <a href="#top" className="logo">{initials}<span>.</span></a>
        <nav>
          {["about", "experience", "skills", "projects", "education", "contact"].map((s) => (
            <a key={s} href={`#${s}`}>{s}</a>
          ))}
        </nav>
        <button
          className="toggle"
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-text">
            <span className="pill"><i /> Open to opportunities in the UAE</span>
            <h1>
              Hi, I’m <span className="grad">{profile.name.split(" ")[0]}</span>.
              <br />I build &amp; support <span className="grad">technology</span>.
            </h1>
            <p className="lead">{profile.tagline}</p>
            <div className="btns">
              <a className="btn primary" href="#contact">Get in touch</a>
              <a className="btn ghost" href="#projects">See my work</a>
            </div>
            <div className="stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-art">
            <div className="ring">
              {profile.photo ? (
                <img src={profile.photo} alt={profile.name} />
              ) : (
                <div className="initials">{initials}</div>
              )}
            </div>
          </div>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i}>{m}</span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <Section id="about" eyebrow="01 — About" title="A bit about me">
          <p className="about reveal">{profile.about}</p>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" eyebrow="02 — Experience" title="Where I’ve worked">
          <div className="timeline">
            {experience.map((e) => (
              <article key={e.company} className="tl-item reveal">
                <span className="dot" />
                <div className="card">
                  <div className="row">
                    <h3>{e.role}</h3>
                    <span className="period">{e.period}</span>
                  </div>
                  <p className="sub">{e.company} · {e.place}</p>
                  <ul>
                    {e.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <div className="tags">
                    {e.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" eyebrow="03 — Skills" title="What I work with">
          <div className="grid">
            {skills.map((s) => (
              <div key={s.title} className="card reveal">
                <h3>{s.title}</h3>
                <div className="tags">
                  {s.items.map((i) => <span key={i} className="tag">{i}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" eyebrow="04 — Projects" title="Things I’ve built">
          <div className="grid">
            {projects.map((p) => (
              <a
                key={p.title}
                className="card project reveal"
                href={p.link || undefined}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{p.title} {p.link && <span className="arrow">↗</span>}</h3>
                <p>{p.desc}</p>
                <div className="tags">
                  {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </a>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" eyebrow="05 — Education" title="Learning &amp; credentials">
          <div className="grid">
            {education.map((e) => (
              <div key={e.title} className="card reveal">
                <span className="period">{e.meta}</span>
                <h3>{e.title}</h3>
                <p>{e.place}</p>
              </div>
            ))}
          </div>
          <p className="muted reveal">Languages: English, Malayalam, Hindi</p>
        </Section>

        {/* CONTACT */}
        <Section id="contact" eyebrow="06 — Contact" title="Let’s work together">
          <div className="contact card reveal">
            <p>
              I’m currently looking for IT support and development roles in the UAE.
              My inbox is always open.
            </p>
            <a className="btn primary" href={`mailto:${profile.email}`}>{profile.email}</a>
            <div className="links">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            </div>
          </div>
        </Section>
      </main>

      <footer>© {new Date().getFullYear()} {profile.name}. Built with React.</footer>
    </>
  );
}