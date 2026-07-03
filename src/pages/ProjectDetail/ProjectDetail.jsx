import { Link, useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import Section from '../../components/Section/Section'
import { useLanguage } from '../../context/LanguageContext'
import styles from './ProjectDetail.module.scss'

export default function ProjectDetail() {
  const { id } = useParams()
  const { t } = useLanguage()
  const { projects, projectDetail } = t
  const project = projects.items.find((item) => item.id === id)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>{projectDetail.notFound}</p>
        <Link to="/projects" className={styles.backLink}>
          {projectDetail.backLabel}
        </Link>
      </div>
    )
  }

  const fallback = projectDetail.fallback

  return (
    <>
      <div className={styles.back}>
        <Link to="/projects" className={styles.backLink}>
          ← {projectDetail.backLabel}
        </Link>
      </div>

      <PageHeader eyebrow={project.tags.join(' · ')} title={project.name} subtitle={project.summary} />

      <Section label={projectDetail.motivationLabel}>
        <p>{fallback.motivation}</p>
      </Section>

      <Section label={projectDetail.approachLabel}>
        <p>{fallback.approach}</p>
      </Section>

      <Section label={projectDetail.techLabel}>
        <p>{project.tags.join(' · ')}</p>
      </Section>

      <Section label={projectDetail.roleLabel}>
        <p>{fallback.role}</p>
      </Section>

      <Section label={projectDetail.resultLabel}>
        <p>{fallback.result}</p>
      </Section>

      <Section label={projectDetail.diagramsLabel}>
        <div className={styles.diagramGrid}>
          {fallback.diagrams.map((diagram) => (
            <div key={diagram} className={styles.diagramCard}>
              {diagram}
            </div>
          ))}
        </div>
      </Section>

      <Section label={projectDetail.linksLabel}>
        <div className={styles.linkRow}>
          <span className={styles.linkItem}>GitHub · {fallback.github}</span>
          <span className={styles.linkItem}>Demo · {fallback.demo}</span>
        </div>
      </Section>
    </>
  )
}
