import { useState } from 'react'
import { useApp } from '../contexts/AppContext'
import { content } from '../data/content'

function ContactItem({ icon, label, value, href, copyable, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      className="card p-5 flex items-center gap-4"
      style={{ background: 'var(--bg-card)' }}
    >

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: 'rgba(45,212,191,0.12)', color: 'var(--accent)' }}
      >
        {icon}
      </div>


      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium mb-0.5" style={{ color: 'var(--text-muted)' }}>
          {label}
        </p>
        {href ? (
          <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer"
            className="text-sm font-semibold break-all block hover:text-[var(--accent)] transition-colors"
            style={{ color: 'var(--text)' }}
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>
            {value}
          </p>
        )}
      </div>


      {copyable && (
        <button
          onClick={handleCopy}
          className="shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all"
          style={{
            borderColor: copied ? 'var(--accent)' : 'var(--border)',
            color:       copied ? 'var(--accent)' : 'var(--text-muted)',
            background:  copied ? 'rgba(45,212,191,0.08)' : 'transparent',
          }}
        >
          {copied ? copiedLabel : copyLabel}
        </button>
      )}
    </div>
  )
}

export default function Contact() {
  const { lang } = useApp()
  const t = content[lang].contact

  return (
    <section id="contact" className="py-24" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-5xl mx-auto px-6">


        <div className="mb-12">
          <p className="section-label mb-2">{t.label}</p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl mb-4"
            style={{ color: 'var(--text)' }}
          >
            {t.heading}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'var(--text-muted)' }}>
            {t.text}
          </p>
        </div>

  
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4 w-full">


          <ContactItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,4 12,13 22,4"/>
              </svg>
            }
            label="Email"
            value={t.email}
            href={`mailto:${t.email}`}
          />


          <ContactItem
            icon={
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            }
            label="GitHub"
            value="github.com/AdeeloD"
            href={t.github}
            copyable={false}
          />


        </div>
      </div>
    </section>
  )
}
