import PageHeader from '../../components/PageHeader/PageHeader'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Contact.module.scss'

export default function Contact() {
  const { t } = useLanguage()
  const { contact } = t

  return (
    <>
      <PageHeader eyebrow={t.nav.contact} title={contact.title} />
      <div className={styles.wrap}>
        <p className={styles.intro}>{contact.intro}</p>

        <div className={styles.channels}>
          <a className={styles.channel} href={`mailto:${contact.email}`}>
            <span>{contact.email}</span>
            <span className={styles.channelLabel}>Email</span>
          </a>
          <a className={styles.channel} href={contact.github}>
            <span>GitHub</span>
            <span className={styles.channelLabel}>{contact.github}</span>
          </a>
          <a className={styles.channel} href={contact.linkedin}>
            <span>LinkedIn</span>
            <span className={styles.channelLabel}>{contact.linkedin}</span>
          </a>
        </div>

        <a className={styles.resumeBtn} href={contact.resumeHref}>
          {contact.resumeLabel}
        </a>
      </div>
    </>
  )
}
