import { useEffect, useRef, useState } from 'react'
import './OurProcess.css'

const OurProcess = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const activeIndexRef = useRef<number>(0)

  useEffect(() => {
    const updateActiveStep = () => {
      const viewportCenter = window.innerHeight / 2
      let closestIndex = activeIndexRef.current
      let closestDistance = Infinity
      let hasVisibleStep = false

      // Check all steps and find the one closest to viewport center
      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const elementTop = rect.top
          const elementBottom = rect.bottom
          const elementCenter = elementTop + rect.height / 2
          
          // Check if step is significantly visible in viewport (between 20% and 80% of viewport)
          const isVisible = elementTop < window.innerHeight * 0.8 && elementBottom > window.innerHeight * 0.2
          
          if (isVisible) {
            hasVisibleStep = true
            const distanceFromCenter = Math.abs(viewportCenter - elementCenter)
            
            // Find the step closest to the center
            if (distanceFromCenter < closestDistance) {
              closestDistance = distanceFromCenter
              closestIndex = index
            }
          }
        }
      })

      // Only update if we found a visible step and it's different from current
      if (hasVisibleStep && closestIndex !== activeIndexRef.current) {
        activeIndexRef.current = closestIndex
        setActiveStepIndex(closestIndex)
      } else if (!hasVisibleStep) {
        // If no step is visible, keep the first one active if we're at the top
        if (window.scrollY < 100 && activeIndexRef.current !== 0) {
          activeIndexRef.current = 0
          setActiveStepIndex(0)
        }
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveStep()
          ticking = false
        })
        ticking = true
      }
    }

    // Use Intersection Observer as primary detection
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((ref) => {
      if (ref) {
        const observer = new IntersectionObserver(
          () => {
            updateActiveStep()
          },
          {
            threshold: [0, 0.25, 0.5, 0.75, 1],
            rootMargin: '-30% 0px -30% 0px',
          }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    // Listen to scroll for real-time updates
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateActiveStep() // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const steps = [
    {
      number: '1',
      title: 'Discovery',
      description:
        'We begin by understanding your vision, goals, and requirements. Through collaborative discussions and research, we lay the foundation for your project\'s success.',
      imageType: 'lightbulb',
    },
    {
      number: '2',
      title: 'Development',
      description:
        'Our team transforms ideas into reality through agile development. We build, test, and iterate, ensuring your solution meets the highest standards of quality and performance.',
      imageType: 'code',
    },
    {
      number: '3',
      title: 'Testing',
      description:
        'Rigorous testing ensures quality, performance, and security before deployment. We validate every aspect to deliver a flawless product.',
      imageType: 'testing',
    },
    {
      number: '4',
      title: 'Deployment',
      description:
        'We deploy your solution and ensure everything runs smoothly in production. Continuous monitoring guarantees optimal performance.',
      imageType: 'deployment',
    },
  ]

  const renderImage = (type: string) => {
    switch (type) {
      case 'lightbulb':
        return (
          <div className="process-image-bg">
            <div className="bokeh-circle circle-1"></div>
            <div className="bokeh-circle circle-2"></div>
            <div className="bokeh-circle circle-3"></div>
            <div className="bokeh-circle circle-4"></div>
            <div className="lightbulb-container">
              <div className="lightbulb">
                <div className="lightbulb-glow"></div>
                <svg
                  width="120"
                  height="140"
                  viewBox="0 0 120 140"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bulb-icon"
                >
                  <path
                    d="M60 10C45 10 33 22 33 37C33 45 37 52 43 57V85C43 90 47 94 52 94H68C73 94 77 90 77 85V57C83 52 87 45 87 37C87 22 75 10 60 10Z"
                    fill="#3b82f6"
                    opacity="0.9"
                  />
                  <rect x="50" y="94" width="20" height="8" fill="#3b82f6" />
                  <rect x="45" y="102" width="30" height="4" rx="2" fill="#3b82f6" />
                  <path
                    d="M55 35C55 33 56 32 57 32C58 32 59 33 59 35C59 37 58 38 57 38C56 38 55 37 55 35Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M61 35C61 33 62 32 63 32C64 32 65 33 65 35C65 37 64 38 63 38C62 38 61 37 61 35Z"
                    fill="#ffffff"
                  />
                  <path
                    d="M58 42C58 41 58.5 40.5 59 40.5C59.5 40.5 60 41 60 42C60 43 59.5 43.5 59 43.5C58.5 43.5 58 43 58 42Z"
                    fill="#ffffff"
                  />
                </svg>
                <div className="brain-icon">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30 10C25 10 20 12 17 15C15 17 13 20 12 23C10 25 9 28 9 31C9 35 11 38 14 40C13 42 13 44 13 46C13 50 15 53 18 55C17 57 17 59 18 61C19 63 21 64 23 64C24 64 25 63 26 62C28 63 30 64 32 64C34 64 36 63 37 61C38 59 38 57 37 55C40 53 42 50 42 46C42 44 42 42 41 40C44 38 46 35 46 31C46 28 45 25 43 23C42 20 40 17 38 15C35 12 30 10 30 10Z"
                      fill="#ffffff"
                      opacity="0.8"
                    />
                  </svg>
                </div>
                <div className="spark spark-1"></div>
                <div className="spark spark-2"></div>
                <div className="spark spark-3"></div>
              </div>
            </div>
          </div>
        )
      case 'code':
        return (
          <div className="process-image-bg code-bg">
            <div className="bokeh-circle circle-1"></div>
            <div className="bokeh-circle circle-2"></div>
            <div className="code-container">
              <div className="code-window">
                <div className="code-header">
                  <div className="code-dot"></div>
                  <div className="code-dot"></div>
                  <div className="code-dot"></div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="line-number">185</span>
                    <span className="code-text">
                      <span className="code-keyword">var</span> username = document.
                      <span className="code-function">getElementById</span>
                      <span className="code-bracket">(</span>
                      <span className="code-string">"username"</span>
                      <span className="code-bracket">)</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">186</span>
                    <span className="code-text">
                      <span className="code-keyword">var</span> password = document.
                      <span className="code-function">getElementById</span>
                      <span className="code-bracket">(</span>
                      <span className="code-string">"password"</span>
                      <span className="code-bracket">)</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">187</span>
                    <span className="code-text">
                      <span className="code-keyword">var</span> firstname = document.
                      <span className="code-function">getElementById</span>
                      <span className="code-bracket">(</span>
                      <span className="code-string">"firstname"</span>
                      <span className="code-bracket">)</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">188</span>
                    <span className="code-text">
                      <span className="code-keyword">if</span>
                      <span className="code-bracket"> (</span>
                      <span className="code-string">!</span>username.value
                      <span className="code-bracket"> || </span>
                      <span className="code-string">!</span>password.value
                      <span className="code-bracket">)</span>
                    </span>
                  </div>
                  <div className="code-line">
                    <span className="line-number">189</span>
                    <span className="code-text">
                      <span className="code-keyword">  return</span> alert
                      <span className="code-bracket">(</span>
                      <span className="code-string">"Invalid input"</span>
                      <span className="code-bracket">)</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      case 'testing':
        return (
          <div className="process-image-bg testing-bg">
            <div className="bokeh-circle circle-1"></div>
            <div className="bokeh-circle circle-2"></div>
            <div className="testing-container">
              <div className="checkmark-circle">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke="#10b981" strokeWidth="4" />
                  <path
                    d="M30 50L45 65L70 35"
                    stroke="#10b981"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="test-particles">
                <div className="particle"></div>
                <div className="particle"></div>
                <div className="particle"></div>
              </div>
            </div>
          </div>
        )
      case 'deployment':
        return (
          <div className="process-image-bg deployment-bg">
            <div className="bokeh-circle circle-1"></div>
            <div className="bokeh-circle circle-2"></div>
            <div className="deployment-container">
              <div className="laptop-container">
                <div className="laptop-screen">
                  <div className="chart-container">
                    <div className="pie-chart">
                      <svg width="80" height="80" viewBox="0 0 80 80">
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="8"
                          strokeDasharray="55 110"
                          transform="rotate(-90 40 40)"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="8"
                          strokeDasharray="35 110"
                          strokeDashoffset="-55"
                          transform="rotate(-90 40 40)"
                        />
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          fill="none"
                          stroke="#f59e0b"
                          strokeWidth="8"
                          strokeDasharray="20 110"
                          strokeDashoffset="-90"
                          transform="rotate(-90 40 40)"
                        />
                      </svg>
                    </div>
                    <div className="bar-chart">
                      <div className="bar bar-1"></div>
                      <div className="bar bar-2"></div>
                      <div className="bar bar-3"></div>
                      <div className="bar bar-4"></div>
                    </div>
                  </div>
                </div>
                <div className="laptop-base"></div>
                <div className="hands">
                  <div className="hand hand-left">
                    <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                      <path
                        d="M30 10C25 10 20 12 18 15C16 17 15 20 14 23C13 25 12 28 12 31C12 35 14 38 17 40C16 42 16 44 16 46C16 50 18 53 21 55C20 57 20 59 21 61C22 63 24 64 26 64C27 64 28 63 29 62C31 63 33 64 35 64C37 64 39 63 40 61C41 59 41 57 40 55C43 53 45 50 45 46C45 44 45 42 44 40C47 38 49 35 49 31C49 28 48 25 46 23C45 20 43 17 41 15C38 12 33 10 30 10Z"
                        fill="#fbbf24"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                  <div className="hand hand-right">
                    <svg width="60" height="80" viewBox="0 0 60 80" fill="none">
                      <path
                        d="M30 10C35 10 40 12 42 15C44 17 45 20 46 23C47 25 48 28 48 31C48 35 46 38 43 40C44 42 44 44 44 46C44 50 42 53 39 55C40 57 40 59 39 61C38 63 36 64 34 64C33 64 32 63 31 62C29 63 27 64 25 64C23 64 21 63 20 61C19 59 19 57 20 55C17 53 15 50 15 46C15 44 15 42 16 40C13 38 11 35 11 31C11 28 12 25 14 23C15 20 17 17 19 15C22 12 27 10 30 10Z"
                        fill="#fbbf24"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="our-process section">
      <div className="container">
        <h2 className="process-main-title">Our Process</h2>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (stepRefs.current[index] = el)}
              className={`process-step ${activeStepIndex === index ? 'active' : ''}`}
            >
              <div className="process-step-left">
                <div
                  className={`step-number ${activeStepIndex === index ? 'active' : ''}`}
                >
                  {step.number}
                </div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
              <div className="process-step-right">
                <div className="process-image">{renderImage(step.imageType)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProcess

