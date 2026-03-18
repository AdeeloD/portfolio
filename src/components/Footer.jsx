import { useApp } from '../contexts/AppContext'
import { content } from '../data/content'

export default function Footer() {
  const { lang } = useApp()
  const t = content[lang].footer

  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          {t.text}
        </p>
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
