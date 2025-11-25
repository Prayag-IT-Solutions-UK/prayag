import './WhyPrayag.css'

const WhyPrayag = () => {
  const reasons = [
    {
      title: 'Expert Team',
      description:
        'Our team consists of experienced developers, AI specialists, and solution architects',
    },
    {
      title: 'Cutting-Edge Technology',
      description:
        'We leverage the latest technologies and frameworks to build future-proof solutions',
    },
    {
      title: 'Client-Focused',
      description:
        'Your success is our priority. We work closely with you to understand your needs',
    },
    {
      title: 'Proven Track Record',
      description:
        'We have successfully delivered projects for businesses across various industries',
    },
    {
      title: 'Agile Methodology',
      description:
        'We follow agile practices to ensure fast delivery and continuous improvement',
    },
    {
      title: '24/7 Support',
      description:
        'Round-the-clock support to ensure your systems run smoothly at all times',
    },
  ]

  return (
    <section className="why-prayag section">
      <div className="container">
        <h2 className="section-title">Why Choose Prayag IT Solutions</h2>
        <p className="section-subtitle">
          We combine expertise, innovation, and dedication to deliver exceptional
          results
        </p>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyPrayag

