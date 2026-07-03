import PageHeader from '../../components/PageHeader/PageHeader'
import Section from '../../components/Section/Section'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Certifications.module.scss'

export default function Certifications() {
  const { t } = useLanguage()
  const { certifications } = t

  return (
    <>
      <PageHeader eyebrow={t.nav.certifications} title={certifications.title} />

      <Section label={certifications.certsLabel}>
        <div className={styles.certList}>
          {certifications.certs.map((cert) => (
            <div key={cert.name} className={styles.certItem}>
              <span className={styles.certName}>{cert.name}</span>
              <span className={styles.certMeta}>
                {cert.issuer} · {cert.date}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section label={certifications.skillsLabel}>
        <div className={styles.skillGroups}>
          {Object.entries(certifications.skills).map(([category, items]) => (
            <div key={category}>
              <span className={styles.skillLabel}>{certifications.skillCategoryLabels[category]}</span>
              <div className={styles.skillTags}>
                {items.map((item) => (
                  <span key={item} className={styles.skillTag}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
