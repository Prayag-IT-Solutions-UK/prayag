import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Services.css'

const Services = () => {
  const services = [
    {
      icon: '🤖',
      title: 'AI Agents & Automations',
      description:
        'Intelligent automation solutions that streamline workflows, reduce manual tasks, and enhance productivity. Our AI agents can handle complex business processes, customer interactions, and data analysis.',
      features: [
        'Custom AI agent development',
        'Workflow automation',
        'Process optimization',
        'Integration with existing systems',
      ],
      color: '#ec4899',
    },
    {
      icon: '🌐',
      title: 'Web Applications',
      description:
        'Modern, responsive web applications built with cutting-edge technologies. We create scalable solutions that deliver exceptional user experiences and drive business growth.',
      features: [
        'Full-stack development',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'Custom web platforms',
      ],
      color: '#2563eb',
    },
    {
      icon: '📱',
      title: 'Mobile App Applications',
      description:
        'Native and cross-platform mobile applications for iOS and Android. We build apps that are fast, intuitive, and designed to engage users effectively.',
      features: [
        'iOS & Android development',
        'React Native solutions',
        'App store optimization',
        'Maintenance & updates',
      ],
      color: '#764ba2',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description:
        'Comprehensive cloud services including migration, infrastructure setup, and management. We help you leverage the power of cloud computing for scalability and efficiency.',
      features: [
        'Cloud migration',
        'Infrastructure as Code',
        'DevOps implementation',
        'Cloud security & compliance',
      ],
      color: '#10b981',
    },
    {
      icon: '⚙️',
      title: 'Custom Software Build',
      description:
        'Tailored software solutions designed specifically for your business needs. From concept to deployment, we build software that solves your unique challenges.',
      features: [
        'Requirements analysis',
        'Custom development',
        'Quality assurance',
        'Ongoing support',
      ],
      color: '#ef4444',
    },
  ]

  return (
    <div className="services-page">
      <PageHero
        title="Our Services"
        subtitle="Comprehensive technology solutions to power your business growth"
      />

      {services.map((service, index) => (
        <section
          key={index}
          className={`service-section section ${
            index % 2 === 0 ? 'service-section-white' : 'service-section-gray'
          }`}
        >
          <div className="container">
            <div className="service-card-modern">
              <div className="service-left">
                <div
                  className="service-icon-block"
                  style={{ backgroundColor: `${service.color}15`, color: service.color }}
                >
                  <span className="service-icon-large">{service.icon}</span>
                </div>
                <h2 className="service-title-modern">{service.title}</h2>
                <p className="service-description-modern">{service.description}</p>
                <div className="service-list">
                  <h3>What's Included</h3>
                  <ul>
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact" className="btn btn-primary service-btn">
                  Get Started
                </Link>
              </div>
              <div className="service-right">
                <div className="deliverables">
                  <div className="pill pill-blue">Deliverables</div>
                  <ul>
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="timeline">
                  <p className="timeline-label">Timeline</p>
                  <p className="timeline-value">2-6 weeks</p>
                </div>
                <div className="outcomes">
                  <div className="pill pill-green">Expected Outcomes</div>
                  <ul>
                    <li>Reduce manual work by 80%+</li>
                    <li>Automate key workflows & reporting</li>
                    <li>Save 20+ hours per week</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="services-cta section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Get Started?</h2>
            <p className="cta-description">
              Let's discuss how our services can help transform your business
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <Link to="/products" className="btn btn-secondary">
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

