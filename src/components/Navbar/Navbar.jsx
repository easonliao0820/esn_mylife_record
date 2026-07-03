import { NavLink } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Navbar.module.scss'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()

  const navItems = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/projects', label: t.nav.projects },
    { to: '/education', label: t.nav.education },
    { to: '/certifications', label: t.nav.certifications },
    { to: '/experience', label: t.nav.experience },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.brand}>
          {t.home.name}
        </NavLink>
        <ul className={styles.links}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button type="button" className={styles.langToggle} onClick={toggleLang}>
          {lang === 'zh' ? 'EN' : '中'}
        </button>
      </div>
    </header>
  )
}
