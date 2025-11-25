import { Link } from 'react-router-dom'
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
      <section className="services-hero section">
        <div className="container">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            Comprehensive technology solutions to power your business growth
          </p>
        </div>
      </section>

      {services.map((service, index) => (
        <section
          key={index}
          className={`service-section section ${
            index % 2 === 0 ? 'service-section-white' : 'service-section-gray'
          }`}
        >
          <div className="container">
            <div className="service-card-vertical">
              <div className="service-icon-wrapper" style={{ backgroundColor: `${service.color}15` }}>
                <span className="service-icon-large" style={{ color: service.color }}>
                  {service.icon}
                </span>
              </div>
              <h2 className="service-title-vertical">{service.title}</h2>
              <p className="service-description-vertical">{service.description}</p>
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

