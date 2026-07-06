import { profile, stats } from '../data'

export default function Hero() {
  const [first, ...rest] = profile.name.split(' ')
  const last = rest.join(' ')
  return (
    <header className="hero" id="about">
      <div className="wrap">
        <div className="hero-eyebrow">{profile.eyebrow}</div>
        <h1 className="hero-name">
          {first}
          <br />
          <span className="accent">{last}</span>
        </h1>
        <p className="hero-sub">{profile.tagline}</p>
        <div className="hero-cta">
          <a href="#projects" className="btn btn-primary">
            View Projects →
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
