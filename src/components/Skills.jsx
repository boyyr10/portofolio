import { skills } from '../data'
import Reveal from './Reveal'

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="sec-num">03</span>
            <h2 className="sec-title">Skills</h2>
            <div className="sec-line" />
          </div>
        </Reveal>
        <div className="skill-grid">
          {skills.map((s) => (
            <Reveal key={s.cat}>
              <div className="skill-cat">
                <h4>{s.cat}</h4>
                <div className="chips">
                  {s.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
