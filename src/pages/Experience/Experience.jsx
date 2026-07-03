import PageHeader from '../../components/PageHeader/PageHeader'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Experience.module.scss'

export default function Experience() {
  const { t } = useLanguage()
  const { experience } = t

  return (
    <>
      <PageHeader eyebrow={t.nav.experience} title={experience.title} subtitle={experience.subtitle} />
      <div className={styles.list}>
        {experience.items.map((item) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.itemHead}>
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemPeriod}>{item.period}</span>
            </div>
            <p className={styles.itemDesc}>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  )
}
