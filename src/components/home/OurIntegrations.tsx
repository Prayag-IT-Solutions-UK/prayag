import './OurIntegrations.css'

const OurIntegrations = () => {
  const integrations = [
    { name: 'WhatsApp', icon: '💬' },
    { name: 'Slack', icon: '💼' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'Zapier', icon: '⚡' },
    { name: 'n8n', icon: '🔄' },
    { name: 'OpenAI', icon: '🤖' },
    { name: 'Google Cloud', icon: '🌐' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Stripe', icon: '💳' },
    { name: 'HubSpot', icon: '📊' },
  ]

  // Duplicate integrations for seamless marquee
  const duplicatedIntegrations = [...integrations, ...integrations]

  return (
    <section className="our-integrations section">
      <div className="container">
        <h2 className="section-title">Our Integrations</h2>
        <p className="section-subtitle">
          Seamlessly connect with the tools and platforms you already use
        </p>
        <div className="integrations-marquee-wrapper">
          <div className="integrations-marquee">
            {duplicatedIntegrations.map((integration, index) => (
              <div key={index} className="integration-card">
                <div className="integration-icon">{integration.icon}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurIntegrations

