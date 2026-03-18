import { useState, useEffect } from 'react'
import { useApp } from '../contexts/AppContext'
import { content } from '../data/content'


function useTyping(words, speed = 80, pause = 1800) {
  const [display,   setDisplay]   = useState('')
  const [wordIdx,   setWordIdx]   = useState(0)
  const [charIdx,   setCharIdx]   = useState(0)
  const [deleting,  setDeleting]  = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    let timeout

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx))
        setCharIdx(i => i + 1)
      }, speed)
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1))
        setCharIdx(i => i - 1)
      }, speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

function Avatar() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        width: '240px',
        height: '320px',
        boxShadow: 'none',
        border: '3px solid var(--accent)',
        flexShrink: 0,
      }}
    >
      <img
        src="/avatar.jpg"
        alt="Hersics Előd"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center top',
          display: 'block',
        }}
      />
    </div>
  )
}

export default function Hero() {
  const { lang } = useApp()
  const t = content[lang].hero

  const typedRole = useTyping(t.roles, 75, 2000)

  return (
    <section
      id="hero"
      className="dot-grid min-h-screen flex flex-col justify-center relative overflow-hidden"
    >
      
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 60%, var(--bg) 100%)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          
          <div className="flex-1 text-center md:text-left">

          
      
            <h1
              className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-up delay-200 mb-4"
              style={{ color: 'var(--text)' }}
            >
              {t.name.split(' ').map((word, i) => (
                <span key={i}>
                  {i === 1
                    ? <span style={{ color: 'var(--accent)' }}>{word}</span>
                    : word
                  }
                  {i < t.name.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>

            <div
              className="font-display font-semibold text-xl md:text-2xl animate-fade-up delay-300 mb-5 h-9"
              style={{ color: 'var(--text-muted)' }}
            >
              {typedRole}<span className="cursor" />
            </div>

            <p
              className="text-base md:text-lg max-w-lg animate-fade-up delay-400 mb-8 leading-relaxed"
              style={{ color: 'var(--text-muted)' }}
            >
              {t.tagline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start animate-fade-up delay-500">
              <a href="#projects" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                </svg>
                {t.cta_projects}
              </a>
              <a href="#contact" className="btn-ghost">
                {t.cta_contact}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

          </div>

          <div className="animate-fade-up delay-300">
            <Avatar />
          </div>
        </div>


      </div>
    </section>
  )
}
