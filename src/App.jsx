import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Projects from './components/Projects'
import About    from './components/About'
import TechStack from './components/TechStack'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <div style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
