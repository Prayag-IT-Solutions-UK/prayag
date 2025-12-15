import './PageHero.css'

interface PageHeroProps {
  title: string
  subtitle: string
  eyebrow?: string
}

const PageHero = ({ title, subtitle, eyebrow }: PageHeroProps) => {
  return (
    <section className="page-hero">
      <div className="container">
        {eyebrow && <div className="page-hero-eyebrow">{eyebrow}</div>}
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
    </section>
  )
}

export default PageHero

