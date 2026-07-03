import styles from './PageHeader.module.scss'

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className={styles.wrap}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  )
}
