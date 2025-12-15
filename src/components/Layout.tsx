import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'
import './Layout.css'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation()

  return (
    <div className="layout">
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <Link to="/" className="logo" onClick={scrollToTop}>
              <img 
                src="/logo.png" 
                alt="PRAYAG SOLUTIONS LTD" 
                className="logo-image"
                onError={(e) => {
                  console.error('Logo image failed to load');
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
            <ul className="nav-links">
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={location.pathname === '/about' ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className={location.pathname === '/services' ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className={location.pathname === '/products' ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === '/contact' ? 'active' : ''}
                  onClick={scrollToTop}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Link to="/contact" className="nav-cta-btn" onClick={scrollToTop}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get Started
            </Link>
            <button className="mobile-menu-toggle" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
      <main>{children}</main>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <Link to="/" className="footer-logo">
                <img 
                  src="/logo.png" 
                  alt="PRAYAG SOLUTIONS LTD" 
                  className="footer-logo-image"
                  onError={(e) => {
                    console.error('Footer logo image failed to load');
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </Link>
              <p className="footer-tagline">
                Transforming businesses through intelligent AI solutions.
              </p>
            </div>
            <div className="footer-section">
              <h4>Links</h4>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
                <li>
                  <Link to="/products">Products</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#docs">Docs</a>
                </li>
                <li>
                  <a href="#faq">FAQ's</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <Link to="/about">About us</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section footer-cta">
              <h4>Get started</h4>
              <p className="footer-cta-description">
                Learn more about how we can make your business grow.
              </p>
              <Link to="/contact" className="footer-cta-btn">
                Get Started
              </Link>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-left">
              <p>PRAYAG SOLUTIONS LTD</p>
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                5 South Charlotte Street, Edinburgh, Scotland, EH2 4AN
              </p>
              <p>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                SC796256
              </p>
              <p>Privacy Policy ©2025 PRAYAG SOLUTIONS LTD</p>
            </div>
            <div className="footer-bottom-right">
              <div className="footer-social">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
              <div className="footer-privacy-terms">
                <span>Privacy - Terms</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

