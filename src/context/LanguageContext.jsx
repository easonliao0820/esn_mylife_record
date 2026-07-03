import { createContext, useContext, useMemo, useState } from 'react'
import { zh } from '../content/zh'
import { en } from '../content/en'

const dictionaries = { zh, en }

const LanguageContext = createContext(null)

function getInitialLang() {
  const stored = localStorage.getItem('lang')
  return stored === 'en' || stored === 'zh' ? stored : 'zh'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang)

  const value = useMemo(
    () => ({
      lang,
      t: dictionaries[lang],
      toggleLang: () => {
        setLang((prev) => {
          const next = prev === 'zh' ? 'en' : 'zh'
          localStorage.setItem('lang', next)
          return next
        })
      },
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
