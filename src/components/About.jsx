import { useApp } from '../contexts/AppContext'
import { content } from '../data/content'

function AboutBlock({ title, text }) {
  return (
    <div
      className="p-6 rounded-2xl border transition-all hover:border-[var(--accent)]"
      style={{ background: 'var(--bg-card)', borderColor: 'var(--border)' }}
    >
      <h3
        className="font-display font-bold text-lg mb-3"
        style={{ color: 'var(--text)' }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: 'var(--text-muted)' }}
      >
        {text}
      </p>
    </div>
  )
}

export default function About() {
  const { lang } = useApp()
  const t = content[lang].about

  return (
    <section id="about" className="py-24" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-5xl mx-auto px-6">

        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="section-label mb-2">{t.label}</p>
            <h2
              className="font-display font-extrabold text-4xl md:text-5xl"
              style={{ color: 'var(--text)' }}
            >
              {t.heading}
              <span style={{ color: 'var(--accent)' }}>.</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <AboutBlock title={t.learned.title}   text={t.learned.text}   />
          <AboutBlock title={t.improving.title} text={t.improving.text} />
          <AboutBlock title={t.looking.title}   text={t.looking.text}   />
        </div>
      </div>
    </section>
  )
}
