import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import HeadImage from '../../assets/aboutme/myhead.jpg'
import styles from './Home.module.scss'

export default function Home() {
  const { t, lang } = useLanguage()
  const { home } = t

  return (
    <section className={styles.hero}>
      <div className={styles.textCol}>
        <span className={styles.eyebrow}>{lang === 'zh' ? '個人網站' : 'Personal Site'}</span>
        <h1 className={styles.name}>{home.name}</h1>
        <p className={styles.role}>{home.role}</p>
        <p className={styles.tagline}>{home.tagline}</p>

        <div className={styles.actions}>
          <Link to="/projects" className={styles.primaryBtn}>
            {home.ctaProjects}
          </Link>
          <Link to="/about" className={styles.secondaryBtn}>
            {home.ctaAbout}
          </Link>
        </div>

        <div className={styles.highlights}>
          {home.highlights.map((item) => (
            <div key={item} className={styles.highlightItem}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.photoCol}>
        <div className={styles.photoFrame}>
          <img src={HeadImage} alt={home.name} className={styles.photoImg} />
        </div>
      </div>
    </section>
  )
}
