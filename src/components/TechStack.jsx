import {
  SiJavascript, SiPython, SiReact,
  SiNextdotjs, SiDotnet, SiDocker, SiPostgresql,
  SiGit, SiLinux,
} from 'react-icons/si'
import { useApp } from '../contexts/AppContext'
import { content } from '../data/content'


function CSharpIcon({ size = 36, color = '#239120' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill={color}>
      <path d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.9-.1-1.9-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5c-4.1-7.2-11.8-12-20.6-12-13 0-23.5 10.5-23.5 23.5s10.5 23.5 23.5 23.5c9 0 16.9-5.1 21-12.5l12.8 7.9C92.1 95.5 79.5 103.5 64 103.5zm51.4-27.8h-6.2V81h-6.2v-5.2H97v-6.2h6.2v-6.2h6.2v6.2h6.2v6.2h-6.2v5.7zm-26 0h-6.2V81h-6.2v-5.2h-6.2v-6.2h6.2v-6.2h6.2v6.2h6.2v6.2h-6.2v5.7z"/>
    </svg>
  )
}


const ICONS = {
  SiJavascript: SiJavascript,
  SiCsharp:     null, 
  SiPython:     SiPython,
  SiReact:      SiReact,
  SiNextdotjs:  SiNextdotjs,
  SiDotnet:     SiDotnet,
  SiDocker:     SiDocker,
  SiPostgresql: SiPostgresql,
  SiGit:        SiGit,
  SiLinux:      SiLinux,
}


function getIconColor(name, theme) {
  if (name === 'SiNextdotjs') return theme === 'dark' ? '#FFFFFF' : '#000000'
  if (name === 'SiLinux')     return '#FCC624'
  return null 
}

const techData = [
  { name: 'JavaScript', icon: 'SiJavascript',  color: '#F7DF1E' },
  { name: 'C#',         icon: 'SiCsharp',       color: '#239120' },
  { name: 'Python',     icon: 'SiPython',       color: '#3776AB' },
  { name: 'React',      icon: 'SiReact',        color: '#61DAFB' },
  { name: 'Next.js',    icon: 'SiNextdotjs',    color: '#000000' },
  { name: '.NET',       icon: 'SiDotnet',       color: '#512BD4' },
  { name: 'Docker',     icon: 'SiDocker',       color: '#2496ED' },
  { name: 'PostgreSQL', icon: 'SiPostgresql',   color: '#4169E1' },
  { name: 'Git',        icon: 'SiGit',          color: '#F05032' },
  { name: 'Linux',      icon: 'SiLinux',        color: '#FCC624' },
]

export default function TechStack() {
  const { lang, theme } = useApp()
  const t = content[lang].stack

  return (
    <section id="stack" className="py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-2">{t.label}</p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl mb-3"
            style={{ color: 'var(--text)' }}
          >
            {t.heading}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
          <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
            {t.note}
          </p>
        </div>

        {/* Icon grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
          {techData.map(tech => {
            const IconComponent = ICONS[tech.icon]
            const iconColor = getIconColor(tech.icon, theme) || tech.color
            return (
              <div key={tech.name} className="tech-icon group">
                {tech.icon === 'SiCsharp' ? (
                  <CSharpIcon size={36} color={iconColor} />
                ) : (
                  <IconComponent
                    size={36}
                    style={{ color: iconColor }}
                    className="transition-transform duration-200 group-hover:scale-110"
                  />
                )}
                <span
                  className="text-xs font-medium text-center leading-tight"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {tech.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
