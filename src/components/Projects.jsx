import { useApp } from '../contexts/AppContext'
import { content } from '../data/content'


function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

const projectEmoji = {
  bookit:     '📅',
  meowmentor: '🐱',
}


function ProjectCard({ project, labels }) {
  return (
    <div className="card p-8 flex flex-col gap-5 h-full">

     
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl">{projectEmoji[project.id]}</span>
          <div>
            <span
              className="text-xs font-medium px-2 py-0.5 rounded-full"
              style={{
                background: 'rgba(45,212,191,0.12)',
                color: 'var(--accent)',
                border: '1px solid rgba(45,212,191,0.25)',
              }}
            >
              {project.tag}
            </span>
          </div>
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center border transition-all hover:border-[var(--accent)] hover:text-[var(--accent)]"
          style={{ borderColor: 'var(--border)', color: 'var(--text-muted)' }}
          aria-label="GitHub"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </a>
      </div>


      <h3
        className="font-display font-bold text-xl leading-tight"
        style={{ color: 'var(--text)' }}
      >
        {project.title}
      </h3>
      <p
        className="text-sm leading-relaxed flex-1"
        style={{ color: 'var(--text-muted)' }}
      >
        {project.description}
      </p>


      <div className="flex flex-wrap gap-2">
        {project.stack.map(tech => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost flex-1 justify-center text-sm py-2.5"
        >
          <GithubIcon />
          {labels.github_btn}
        </a>
      </div>
    </div>
  )
}


export default function Projects() {
  const { lang } = useApp()
  const t = content[lang].projects

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6">


        <div className="mb-12">
          <p className="section-label mb-2">{t.label}</p>
          <h2
            className="font-display font-extrabold text-4xl md:text-5xl"
            style={{ color: 'var(--text)' }}
          >
            {t.heading}
            <span style={{ color: 'var(--accent)' }}>.</span>
          </h2>
        </div>


        <div className="grid md:grid-cols-2 gap-6">
          {t.items.map(project => (
            <ProjectCard key={project.id} project={project} labels={t} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/AdeeloD"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost inline-flex"
          >
            <GithubIcon />
            {lang === 'hu' ? 'Több projekt a GitHubon' : 'More on GitHub'}
          </a>
        </div>
      </div>
    </section>
  )
}
