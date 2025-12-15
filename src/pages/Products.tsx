import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import './Products.css'

const Products = () => {
  return (
    <div className="products-page">
      <PageHero
        title="Our Products"
        subtitle="Innovative solutions designed to transform your business operations"
      />

      <section className="product-detail section">
        <div className="container">
          <div className="product-content">
            <div className="product-image">
              <div className="product-graphic">
                <div className="whatsapp-icon">💬</div>
                <div className="ai-badge">AI Powered</div>
              </div>
            </div>
            <div className="product-text">
              <h2 className="product-title">WhatsApp AI Agent</h2>
              <p className="product-description">
                Transform your customer communication with our intelligent
                WhatsApp AI Agent. This powerful solution enables businesses to
                automate customer support, handle inquiries, process orders, and
                provide instant responses 24/7.
              </p>
              <div className="product-features">
                <h3 className="features-title">Key Features:</h3>
                <ul className="features-list">
                  <li>
                    <span className="feature-icon">✓</span>
                    Natural language processing for human-like conversations
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    Multi-language support for global reach
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    Seamless integration with your existing systems
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    Automated order processing and tracking
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    Real-time analytics and insights
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    Customizable workflows and responses
                  </li>
                  <li>
                    <span className="feature-icon">✓</span>
                    Secure and compliant with data protection standards
                  </li>
                </ul>
              </div>
              <div className="product-benefits">
                <h3 className="benefits-title">Benefits:</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <h4 className="benefit-heading">24/7 Availability</h4>
                    <p className="benefit-description">Round-the-clock customer support without human intervention</p>
                  </div>
                  <div className="benefit-card">
                    <h4 className="benefit-heading">Cost Reduction</h4>
                    <p className="benefit-description">Significantly lower operational costs compared to traditional support</p>
                  </div>
                  <div className="benefit-card">
                    <h4 className="benefit-heading">Increased Efficiency</h4>
                    <p className="benefit-description">Automate repetitive tasks and streamline your workflows</p>
                  </div>
                  <div className="benefit-card">
                    <h4 className="benefit-heading">Better Customer Experience</h4>
                    <p className="benefit-description">Instant responses and personalized interactions for every customer</p>
                  </div>
                </div>
              </div>
              <div className="product-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-secondary">
                  Learn More About Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products

