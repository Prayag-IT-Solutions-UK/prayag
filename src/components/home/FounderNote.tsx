import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './FounderNote.css'

const FounderNote = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | null = null

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
            <div className="founder-card-content">
              <div className="founder-image-container">
                <div className="founder-image-placeholder">
                  {/* Add founder image here - replace src with your image path */}
                  <img src="" alt="Founder" className="founder-image" style={{ display: 'none' }} />
                  <div className="founder-image-placeholder-text">Founder Image</div>
                </div>
              </div>
              <div className="founder-content">
                <div className="founder-title-wrapper">
                  <h2 className="founder-title">
                    <span className="founder-title-prefix">A Note</span>
                    <span className="founder-title-main">from the Founder</span>
                  </h2>
                </div>
                <div className="founder-quote">
                  <p className="founder-message">
                    At PRAYAG SOLUTIONS LTD, we believe that technology should empower
                    businesses to achieve their full potential. Our mission is to
                    deliver innovative solutions that not only meet your current needs
                    but also scale with your growth. We combine cutting-edge
                    technology with deep industry expertise to create solutions that
                    make a real difference.
                  </p>
                </div>
                <div className="founder-footer">
                  <div className="founder-info">
                    <div className="founder-details">
                      <p className="founder-name">MR VENKATA NAIDU MARADA</p>
                      <p className="founder-company">MR VENKATA NAIDU MARADA</p>
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
      </div>
    </section>
  )
}

export default FounderNote

