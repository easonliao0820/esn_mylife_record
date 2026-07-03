import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import { useLanguage } from '../../context/LanguageContext'
import styles from './Projects.module.scss'

export default function Projects() {
  const { t } = useLanguage()
  const { projects } = t

  return (
    <>
      <PageHeader eyebrow={t.nav.projects} title={projects.title} subtitle={projects.subtitle} />
      <div className={styles.grid}>
        {projects.items.map((project) => (
          <Link key={project.id} to={`/projects/${project.id}`} className={styles.card}>
            <div className={styles.cardName}>{project.name}</div>
            <p className={styles.cardSummary}>{project.summary}</p>
            <div className={styles.tags}>
              {project.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
