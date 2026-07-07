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
        {experience.map((exp, idx) => (
          <Reveal key={exp.role + exp.date}>
            <div className={`exp-row ${exp.photo ? 'has-photo' : ''}`}>
              <div className="exp-big-num">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <div className="exp-body">
                <div className="exp-role">{exp.role}</div>
                <div className="exp-org">{exp.org}</div>
                <div className="exp-date">{exp.date}</div>
                <ul>
                  {exp.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
              {exp.photo && (
                <div className="exp-photo">
                  <img src={exp.photo} alt={`${exp.org} documentation`} />
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
