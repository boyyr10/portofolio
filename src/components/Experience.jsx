import { experience } from '../data'
import Reveal from './Reveal'
import Carousel from './Carousel'

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
        {experience.map((exp, idx) => {
          const photos = exp.photos || (exp.photo ? [exp.photo] : [])
          return (
            <Reveal key={exp.role + exp.date}>
              <div className={`exp-row ${photos.length ? 'has-photo' : ''}`}>
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
                {photos.length > 0 && (
                  <Carousel photos={photos} alt={`${exp.org} documentation`} />
                )}
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
