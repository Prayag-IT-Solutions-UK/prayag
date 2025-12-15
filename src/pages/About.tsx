import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import MissionVisionDiagram from '../components/MissionVisionDiagram'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <PageHero
        title="About Us"
        subtitle="Building the future of business technology, one solution at a time"
      />

      <section className="our-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">
                <span className="title-our">Our</span>{' '}
                <span className="title-story">Story</span>
              </h2>
              <div className="story-paragraphs">
                <p>
                  PRAYAG SOLUTIONS LTD was founded with a vision to bridge the
                  gap between cutting-edge technology and business needs. We
                  recognized that many businesses struggle to keep up with the
                  rapid pace of technological advancement, and we set out to
                  change that.
                </p>
                <p>
                  Starting as a small team of passionate developers and AI
                  enthusiasts, we've grown into a trusted partner for businesses
                  across various industries. Our journey has been marked by
                  continuous learning, innovation, and an unwavering commitment
                  to delivering exceptional results.
                </p>
                <p>
                  Today, we specialize in AI-powered automation, custom software
                  development, and cloud solutions. We've helped numerous
                  companies streamline their operations, improve efficiency, and
                  achieve their business goals through intelligent technology
                  solutions.
                </p>
              </div>
            </div>
            <div className="founder-card-sidebar">
              <div className="founder-card-dark">
                <div className="founder-initials">VN</div>
                <h3 className="founder-name">Venkata Naidu Marada</h3>
                <p className="founder-title">Founder</p>
                <p className="founder-quote">
                  "I believe technology should empower people, not confuse them. Every solution we build is designed to be understandable, maintainable, and scalable. My goal is to help you automate the boring stuff so you can focus on what matters: growing your business and serving your customers."
                </p>
                <div className="founder-stats">
                  <div className="stat-item">
                    <div className="stat-number">150+</div>
                    <div className="stat-label">Projects Delivered</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">80+</div>
                    <div className="stat-label">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Our Mission &amp; Vision
          </h2>
          <MissionVisionDiagram
            visionTitle="Our Vision"
            visionText="To be the leading provider of AI-powered technology solutions that transform businesses and drive innovation across industries. We envision a future where every business can leverage the power of artificial intelligence and automation to achieve unprecedented growth and success."
            missionTitle="Our Mission"
            missionText="To empower businesses with intelligent, scalable, and cost-effective technology solutions. We are committed to understanding our clients' unique challenges and delivering customized solutions that exceed expectations. Through innovation, expertise, and dedication, we help businesses thrive in the digital age."
          />
        </div>
      </section>

      <section className="about-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Business?</h2>
            <p className="cta-description">
              Let's discuss how our solutions can help you achieve your goals
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

