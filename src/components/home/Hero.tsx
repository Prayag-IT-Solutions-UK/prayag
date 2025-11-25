import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="ai-assistance-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
              />
            </svg>
            AI-Powered Assistance
          </div>
          <h1 className="hero-title">
            <span className="title-welcome">Welcome to</span>{' '}
            <span className="title-blue">Prayag</span>{' '}
            <span className="title-purple">IT Solutions</span>
          </h1>
          <p className="hero-description">
            Ask anything about our services, AI automation, or your business
            needs
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero

