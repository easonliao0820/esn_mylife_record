import { useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Experience.module.scss'

function ExperiencePhoto({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <div className={styles.photoPlaceholder}>{alt}</div>
  }

  return <img src={src} alt={alt} className={styles.photo} onError={() => setFailed(true)} />
}

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

            {(item.photo || item.documentHref) && (
              <div className={styles.itemMedia}>
                {item.photo && <ExperiencePhoto src={item.photo} alt={item.title} />}
                {item.documentHref && (
                  <a href={item.documentHref} target="_blank" rel="noreferrer" className={styles.documentLink}>
                    {item.documentLabel}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
