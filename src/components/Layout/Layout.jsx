import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Layout.module.scss'

export default function Layout() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span>© {year} {t.home.name}</span>
          <a className={styles.footerLink} href={`mailto:${t.contact.email}`}>
            {t.contact.email}
          </a>
        </div>
      </footer>
    </>
  )
}
