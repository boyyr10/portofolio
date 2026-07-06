import { useState } from 'react'
import { profile } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [msg, setMsg] = useState({ text: '', error: false })

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const handleSend = () => {
    const { name, email, message } = form
    if (!name.trim() || !email.trim() || !message.trim()) {
      setMsg({ text: '// Please fill in all fields.', error: true })
      return
    }
    if (!/^[^@]+@[^@]+\.[^@]+$/.test(email)) {
      setMsg({ text: '// Enter a valid email.', error: true })
      return
    }
    const subject = encodeURIComponent(`Portfolio message from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:?subject=${subject}&body=${body}`
    setMsg({ text: '// Opening your mail client...', error: false })
  }

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal>
          <div className="sec-head">
            <span className="sec-num">04</span>
            <h2 className="sec-title">Contact</h2>
            <div className="sec-line" />
          </div>
        </Reveal>
        <Reveal>
          <div className="contact-box">
            <div>
              <h3>Let's build something.</h3>
              <p>
                Open to ML engineering, data, and embedded opportunities. Reach out
                through any channel.
              </p>
              <div className="contact-links">
                <a href={profile.links.batikRepo} target="_blank" rel="noopener noreferrer">
                  Batik Eye repo <span className="arr">→</span>
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn <span className="arr">→</span>
                </a>
                <a href={profile.links.batikDemo} target="_blank" rel="noopener noreferrer">
                  Batik Eye demo <span className="arr">→</span>
                </a>
              </div>
            </div>
            <div>
              <div className="field">
                <label htmlFor="cname">Name</label>
                <input id="cname" type="text" placeholder="Your name" value={form.name} onChange={update('name')} />
              </div>
              <div className="field">
                <label htmlFor="cemail">Email</label>
                <input id="cemail" type="email" placeholder="you@email.com" value={form.email} onChange={update('email')} />
              </div>
              <div className="field">
                <label htmlFor="cmsg">Message</label>
                <textarea id="cmsg" placeholder="What's on your mind?" value={form.message} onChange={update('message')} />
              </div>
              <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={handleSend}>
                Send message
              </button>
              <div className="form-msg" style={{ color: msg.error ? '#ff6b6b' : 'var(--neon)' }}>
                {msg.text}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
