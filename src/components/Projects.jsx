import { projects } from '../data'
import Reveal from './Reveal'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="sec-num">02</span>
            <h2 className="sec-title">Projects</h2>
            <div className="sec-line" />
          </div>
        </Reveal>
        <div className="proj-grid">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="proj">
                <div className="proj-top">
                  <div className="proj-title">{p.title}</div>
                  <div className="proj-year">{p.year}</div>
                </div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                {(p.demo || p.repo) && (
                  <div className="proj-links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noopener noreferrer" className="proj-link">
                        Live demo →
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="proj-link">
                        View code →
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
