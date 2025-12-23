import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './FounderNote.css'

const FounderNote = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Track the timeout created for the animation reset without relying on Node types
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Clear any existing timeout
            if (timeoutId) {
              clearTimeout(timeoutId)
            }
            // Reset first, then trigger animation
            setIsVisible(false)
            // Small delay to ensure CSS reset
            timeoutId = setTimeout(() => {
              setIsVisible(true)
            }, 10)
          } else {
            // Reset when leaving viewport
            setIsVisible(false)
            if (timeoutId) {
              clearTimeout(timeoutId)
            }
          }
        })
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className={`founder-note section ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        <div className="founder-wrapper">
          <div className="founder-card">
            <div className="founder-quote-icon">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 21C3 17.4 5.4 15 9 15C12.6 15 15 17.4 15 21V22H3V21Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.7614 11 14 8.76142 14 6C14 3.23858 11.7614 1 9 1C6.23858 1 4 3.23858 4 6C4 8.76142 6.23858 11 9 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21 21C21 17.4 18.6 15 15 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 11C17.7614 11 20 8.76142 20 6C20 3.23858 17.7614 1 15 1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="founder-content">
              <h2 className="founder-title">A Note from the Founder</h2>
              <div className="founder-quote">
                <p className="founder-message">
                  At Prayag IT Solutions, we believe that technology should empower
                  businesses to achieve their full potential. Our mission is to
                  deliver innovative solutions that not only meet your current needs
                  but also scale with your growth. We combine cutting-edge
                  technology with deep industry expertise to create solutions that
                  make a real difference.
                </p>
              </div>
              <div className="founder-footer">
                <div className="founder-info">
                  <div className="founder-avatar-small">
                    <span>👨‍💼</span>
                  </div>
                  <div className="founder-details">
                    <p className="founder-name">Founder</p>
                    <p className="founder-company">Prayag IT Solutions</p>
                  </div>
                </div>
                <Link to="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderNote

