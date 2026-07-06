import { experience } from '../data'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="sec-num">01</span>
            <h2 className="sec-title">Experience</h2>
            <div className="sec-line" />
          </div>
        </Reveal>
        {experience.map((exp) => (
          <Reveal key={exp.role + exp.date}>
            <div className="exp-item">
              <div className="exp-date">{exp.date}</div>
              <div>
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org">{exp.org}</div>
                <ul>
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
