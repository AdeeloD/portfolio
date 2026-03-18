import { createContext, useContext, useState, useEffect } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  
  const [lang,  setLang]  = useState(() => localStorage.getItem('lang')  || 'hu')
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')


  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const toggleLang  = () => setLang(l => l === 'hu' ? 'en' : 'hu')

  return (
    <AppContext.Provider value={{ lang, theme, toggleTheme, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  return useContext(AppContext)
}
