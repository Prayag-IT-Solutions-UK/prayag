import './WhatWeBuildDetailed.css'

const WhatWeBuildDetailed = () => {
  const items = [
    {
      title: 'AI Agents & Automation',
      description: 'Intelligent automation that scales your business',
      features: [
        'Lead capture & qualification',
        'Workflow automation',
        'Custom AI integrations',
      ],
    },
    {
      title: 'Websites',
      description: 'Fast, responsive, conversion-optimized websites',
      features: [
        'Custom design & development',
        'SEO optimization',
        'Analytics & tracking',
      ],
    },
    {
      title: 'Mobile Apps',
      description: 'Native and cross-platform applications',
      features: [
        'iOS & Android development',
        'Cloud integration',
        'Push notifications & analytics',
      ],
    },
  ]

  return (
    <section className="what-we-build-detailed section">
      <div className="container">
        <h2 className="wbd-title">
          What We <span className="wbd-title-gradient">Build</span>
        </h2>
        <p className="wbd-subtitle">
          End-to-end digital solutions for modern businesses
        </p>
        <div className="wbd-grid">
          {items.map((item, index) => (
            <div key={index} className="wbd-card">
              <div className="wbd-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14H12L11 22L21 10H12L13 2Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="wbd-card-title">{item.title}</h3>
              <p className="wbd-card-description">{item.description}</p>
              <ul className="wbd-features">
                {item.features.map((feature, idx) => (
                  <li key={idx}>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="#10b981"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeBuildDetailed

