import { profile, about } from '../data'
import Reveal from './Reveal'

// Inline SVG icons (no extra dependency) keyed by name.
const icons = {
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </svg>
  ),
  cpu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </svg>
  ),
}

function Card({ icon, label, color }) {
  return (
    <div className="about-card">
      <span className="about-card-icon" style={{ color }}>
        {icons[icon]}
      </span>
      <span>{label}</span>
    </div>
  )
}

export default function About() {
  const [left, right] = [about.cards.slice(0, 2), about.cards.slice(2)]
  return (
    <section id="about">
      <div className="wrap">
        <Reveal>
          <div className="about-head">
            <div className="hero-eyebrow" style={{ animation: 'none', opacity: 1 }}>
              // WHO I AM
            </div>
            <h2 className="sec-title">
              About <span className="accent">Me</span>
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-grid">
            <div className="about-col">
              {left.map((c) => (
                <Card key={c.label} {...c} />
              ))}
            </div>

            <div className="about-photo-wrap">
              <div className="about-photo-glow" />
              <img src={profile.photo} alt={profile.name} className="about-photo" />
            </div>

            <div className="about-col">
              {right.map((c) => (
                <Card key={c.label} {...c} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="about-bio">
            {about.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
