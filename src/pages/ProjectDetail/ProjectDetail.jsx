import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader/PageHeader'
import Section from '../../components/Section/Section'
import { useLanguage } from '../../context/LanguageContext'
import styles from './ProjectDetail.module.scss'

function ProjectPhoto({ src, alt, className }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return null
  }

  return <img src={src} alt={alt} className={className || styles.photo} onError={() => setFailed(true)} />
}

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
  const detail = { ...fallback, ...project }

  return (
    <>
      <div className={styles.back}>
        <Link to="/projects" className={styles.backLink}>
          ← {projectDetail.backLabel}
        </Link>
      </div>

      <PageHeader eyebrow={project.tags.join(' · ')} title={project.name} subtitle={project.summary} />

      {project.photo && (
        <div className={styles.photoWrap}>
          <ProjectPhoto src={project.photo} alt={project.name} />
        </div>
      )}

      {project.photos?.length > 0 && (
        <div className={styles.galleryWrap}>
          <div className={styles.galleryGrid}>
            {project.photos.map((src) => (
              <ProjectPhoto key={src} src={src} alt={project.name} className={styles.galleryPhoto} />
            ))}
          </div>
        </div>
      )}

      <Section label={projectDetail.motivationLabel}>
        <p>{detail.motivation}</p>
      </Section>

      <Section label={projectDetail.approachLabel}>
        <p>{detail.approach}</p>
      </Section>

      <Section label={projectDetail.techLabel}>
        <p>{project.tags.join(' · ')}</p>
      </Section>

      <Section label={projectDetail.roleLabel}>
        <p>{detail.role}</p>
      </Section>

      <Section label={projectDetail.resultLabel}>
        <p>{detail.result}</p>
      </Section>

      <Section label={projectDetail.diagramsLabel}>
        <div className={styles.diagramGrid}>
          {detail.diagrams.map((diagram) => (
            <div key={diagram} className={styles.diagramCard}>
              {diagram}
            </div>
          ))}
        </div>
      </Section>

      <Section label={projectDetail.linksLabel}>
        <div className={styles.linkRow}>
          <span className={styles.linkItem}>GitHub · {detail.github}</span>
          <span className={styles.linkItem}>Demo · {detail.demo}</span>
        </div>
      </Section>

      {project.documents?.length > 0 && (
        <Section label={projectDetail.documentsLabel}>
          <div className={styles.documentLinks}>
            {project.documents.map((doc) => (
              <a key={doc.href} href={doc.href} target="_blank" rel="noreferrer" className={styles.documentLink}>
                {doc.label}
              </a>
            ))}
          </div>
        </Section>
      )}
    </>
  )
}
