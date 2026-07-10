import PageHeader from '../../components/PageHeader/PageHeader'
import Section from '../../components/Section/Section'
import Timeline from '../../components/Timeline/Timeline'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Education.module.scss'

export default function Education() {
  const { t } = useLanguage()
  const { education, about } = t

  return (
    <>
      <PageHeader eyebrow={t.nav.education} title={education.title} />

      <Section label={education.timelineLabel}>
        <Timeline items={about.background} />
      </Section>

      <Section label={education.statsLabel}>
        {education.records.map((record) => (
          <div key={record.school} className={styles.recordBlock}>
            <div className={styles.recordHead}>
              <span className={styles.recordSchool}>{record.school}</span>
              <span className={styles.recordPeriod}>{record.period}</span>
            </div>
            <div className={styles.statGrid}>
              <div>
                <span className={styles.statLabel}>{education.gpaLabel}</span>
                <div className={styles.statValue}>{record.gpa}</div>
                <p className={styles.statDetail}>{record.gpaDetail}</p>
              </div>
              <div>
                <span className={styles.statLabel}>{education.rankLabel}</span>
                <div className={styles.statValue}>{record.rank}</div>
                <p className={styles.statDetail}>{record.rankDetail}</p>
              </div>
            </div>
          </div>
        ))}
      </Section>

      <Section label={education.coursesLabel}>
        <p>{education.courses}</p>
      </Section>

      <Section label={education.awardsLabel}>
        <p>{education.awards}</p>
      </Section>

      <p className={styles.privacyNote}>{education.privacyNote}</p>
    </>
  )
}
