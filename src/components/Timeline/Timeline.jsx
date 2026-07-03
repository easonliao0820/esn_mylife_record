import styles from './Timeline.module.scss'

export default function Timeline({ items }) {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <div key={`${item.school}-${item.period}`} className={styles.item}>
          <span className={styles.period}>{item.period}</span>
          <div>
            <div className={styles.school}>{item.school}</div>
            <div className={styles.note}>{item.note}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
