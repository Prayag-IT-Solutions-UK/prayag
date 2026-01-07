import './OurIntegrations.css'

const OurIntegrations = () => {
  const integrations = [
    { name: 'Airtable', image: '/assets/integrations/airtable.png' },
    { name: 'AWS', image: '/assets/integrations/aws.png' },
    { name: 'Gemini', image: '/assets/integrations/gemini.png' },
    { name: 'ChatGPT', image: '/assets/integrations/chatgpt.png' },
    { name: 'Gmail', image: '/assets/integrations/gmail.png' },
    { name: 'Notion', image: '/assets/integrations/notion.png' },
    { name: 'Google Drive', image: '/assets/integrations/googledrive.png' },
    { name: 'PostgreSQL', image: '/assets/integrations/postgresql.png' },
    { name: 'Slack', image: '/assets/integrations/slack.png' },
    { name: 'Webhook', image: '/assets/integrations/webhook.png' },
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
                <div className="integration-icon">
                  <img 
                    src={integration.image} 
                    alt={integration.name}
                    className="integration-image"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurIntegrations

