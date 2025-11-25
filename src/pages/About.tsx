import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="page-title">About Us</h1>
          <p className="page-subtitle">
            Building the future of business technology, one solution at a time
          </p>
        </div>
      </section>

      <section className="our-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">Our Story</h2>
              <div className="story-paragraphs">
                <p>
                  Prayag IT Solutions was founded with a vision to bridge the
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
            <div className="story-image">
              <div className="story-graphic">
                <div className="graphic-element"></div>
                <div className="graphic-element"></div>
                <div className="graphic-element"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="vision-mission section">
        <div className="container">
          <h2 className="vm-section-title">OUR MISSION & VISION</h2>
          <div className="vm-divider">
            <span className="vm-divider-orange"></span>
            <span className="vm-divider-blue"></span>
          </div>
          <div className="vm-grid">
            <div className="vm-card-wrapper mission">
              <div className="vm-card">
                <div className="vm-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="4"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <line
                      x1="12"
                      y1="2"
                      x2="12"
                      y2="8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="12"
                      y1="16"
                      x2="12"
                      y2="22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="2"
                      y1="12"
                      x2="8"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <line
                      x1="16"
                      y1="12"
                      x2="22"
                      y2="12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <h2 className="vm-title">MISSION</h2>
                <p className="vm-description">
                  To empower businesses with intelligent, scalable, and
                  cost-effective technology solutions. We are committed to
                  understanding our clients' unique challenges and delivering
                  customized solutions that exceed expectations. Through innovation,
                  expertise, and dedication, we help businesses thrive in the
                  digital age.
                </p>
              </div>
              <div className="vm-base mission-base">
                <span className="vm-number">01</span>
              </div>
            </div>
            <div className="vm-card-wrapper vision">
              <div className="vm-card">
                <div className="vm-icon">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C8 2 5 5 5 9C5 11.5 6.5 13.5 8.5 14.5C9 14.7 9.2 15.2 9 15.7L8 18C8 18.5 8.5 19 9 19H15C15.5 19 16 18.5 16 18L15 15.7C14.8 15.2 15 14.7 15.5 14.5C17.5 13.5 19 11.5 19 9C19 5 16 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 21H15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 11L11 12L14 9"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h2 className="vm-title">VISION</h2>
                <p className="vm-description">
                  To be the leading provider of AI-powered technology solutions
                  that transform businesses and drive innovation across industries.
                  We envision a future where every business can leverage the power
                  of artificial intelligence and automation to achieve unprecedented
                  growth and success.
                </p>
              </div>
              <div className="vm-base vision-base">
                <span className="vm-number">02</span>
              </div>
            </div>
          </div>
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

