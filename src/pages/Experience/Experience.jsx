import { useMemo, useState } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Experience.module.scss'

function ExperiencePhoto({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return null
  }

  return <img src={src} alt={alt} className={styles.photo} onError={() => setFailed(true)} />
}

export default function Experience() {
  const { t } = useLanguage()
  const { experience } = t
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = useMemo(
    () => Object.keys(experience.categoryLabels).filter((cat) => experience.items.some((item) => item.category === cat)),
    [experience.categoryLabels, experience.items],
  )

  const visibleItems =
    activeCategory === 'all' ? experience.items : experience.items.filter((item) => item.category === activeCategory)

  return (
    <>
      <PageHeader eyebrow={t.nav.experience} title={experience.title} subtitle={experience.subtitle} />

      <div className={styles.filters}>
        <button
          type="button"
          className={`${styles.filterBtn} ${activeCategory === 'all' ? styles.filterBtnActive : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          {experience.filterAll}
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {experience.categoryLabels[cat]}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {visibleItems.map((item) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.itemHead}>
              <span className={styles.itemTitle}>{item.title}</span>
              <span className={styles.itemPeriod}>{item.period}</span>
            </div>
            <p className={styles.itemDesc}>{item.description}</p>

            {(item.photo || item.photos?.length > 0 || item.documents?.length > 0) && (
              <div className={styles.itemMedia}>
                {item.photo && <ExperiencePhoto src={item.photo} alt={item.title} />}
                {item.photos?.map((src) => (
                  <ExperiencePhoto key={src} src={src} alt={item.title} />
                ))}
                {item.documents?.length > 0 && (
                  <div className={styles.documentLinks}>
                    {item.documents.map((doc) => (
                      <a key={doc.href} href={doc.href} target="_blank" rel="noreferrer" className={styles.documentLink}>
                        {doc.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
