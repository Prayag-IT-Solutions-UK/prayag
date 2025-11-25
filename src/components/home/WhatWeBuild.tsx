import './WhatWeBuild.css'

const WhatWeBuild = () => {
  const items = [
    {
      icon: '🤖',
      title: 'AI agents & automation',
      description: 'Intelligent business automation',
      color: '#ec4899',
    },
    {
      icon: '🌐',
      title: 'AI-powered websites',
      description: 'Smart websites with AI integration',
      color: '#2563eb',
    },
    {
      icon: '📱',
      title: 'AI mobile apps',
      description: 'iOS & Android apps with AI features',
      color: '#764ba2',
    },
    {
      icon: '🚀',
      title: 'Scale with AI',
      description: 'Complete AI-driven transformation',
      color: '#ef4444',
    },
  ]

  return (
    <section className="what-we-build section">
      <div className="container">
        <div className="build-grid">
          {items.map((item, index) => (
            <div key={index} className="build-card">
              <div className="build-icon" style={{ color: item.color }}>
                {item.icon}
              </div>
              <div className="build-content">
                <h3 className="build-title">{item.title}</h3>
                <p className="build-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuild

