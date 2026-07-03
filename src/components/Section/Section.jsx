import styles from './Section.module.scss'

export default function Section({ label, children }) {
  return (
    <section className={styles.section}>
      {label && <span className={styles.label}>{label}</span>}
      <div className={styles.body}>{children}</div>
    </section>
  )
}
