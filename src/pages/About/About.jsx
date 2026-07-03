import PageHeader from '../../components/PageHeader/PageHeader'
import Section from '../../components/Section/Section'
import Timeline from '../../components/Timeline/Timeline'
import { useLanguage } from '../../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()
  const { about } = t

  return (
    <>
      <PageHeader eyebrow={t.nav.about} title={about.title} />

      <Section>
        <p>{about.intro}</p>
      </Section>

      <Section label={about.backgroundLabel}>
        <Timeline items={about.background} />
      </Section>

      <Section label={about.whyTechLabel}>
        <p>{about.whyTech}</p>
      </Section>

      <Section label={about.traitsLabel}>
        <p>{about.traits}</p>
      </Section>
    </>
  )
}
