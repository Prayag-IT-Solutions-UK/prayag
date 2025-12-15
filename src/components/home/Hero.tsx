import { useState } from 'react'
import ChatContainer from '../ChatContainer'
import './Hero.css'

const Hero = () => {
  const [hasMessages, setHasMessages] = useState(false)

  const handleMessagesChange = (messageCount: number) => {
    setHasMessages(messageCount > 0)
  }

  return (
    <section className={`hero ${hasMessages ? 'hero-chat-active' : ''}`}>
      <div className="hero-arc-layer-1"></div>
      {/* Quantum Orbits */}
      <div className="quantum-orbits">
        <div className="quantum-orbit orbit-1">
          <div className="orbit-particle"></div>
        </div>
        <div className="quantum-orbit orbit-2">
          <div className="orbit-particle"></div>
        </div>
        <div className="quantum-orbit orbit-3">
          <div className="orbit-particle"></div>
        </div>
        <div className="quantum-orbit orbit-4">
          <div className="orbit-particle"></div>
        </div>
      </div>
      <div className="container">
        <div className={`hero-content ${hasMessages ? 'hero-content-chat-active' : ''}`}>
          {!hasMessages && (
            <div className="hero-welcome-content">
          <h1 className="hero-title">
            <span className="title-welcome">Welcome to</span>{' '}
            <span className="title-blue">PRAYAG</span>{' '}
            <span className="title-purple">Solutions LTD</span>
          </h1>
          <p className="hero-description">
            Ask anything about our services, AI automation, or your business
                needs and get instant, intelligent assistance tailored to your
                workflows.
          </p>
            </div>
          )}
          <ChatContainer onMessagesChange={handleMessagesChange} hasMessages={hasMessages} />
        </div>
      </div>
    </section>
  )
}

export default Hero

