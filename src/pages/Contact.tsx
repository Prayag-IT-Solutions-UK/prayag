import { useState, FormEvent, ChangeEvent } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    role: '',
    companyName: '',
    website: '',
    phone: '',
    companySize: '',
    annualRevenue: '',
    projectBudget: '',
    message: '',
    emailList: false,
    smsOptIn: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Replace with your form submission endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          role: '',
          companyName: '',
          website: '',
          phone: '',
          companySize: '',
          annualRevenue: '',
          projectBudget: '',
          message: '',
          emailList: false,
          smsOptIn: false,
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <h1 className="contact-main-title">Get Started with Prayag IT Solutions</h1>
          <p className="contact-subtitle">
            Speak to an expert and start a plan for your project
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-form-wrapper">
            <h2 className="form-title">Let's get to know you</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Jane"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="role">Your Role within Organization *</label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  placeholder="e.g., CTO, Project Manager, etc."
                />
              </div>

              <div className="form-group">
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                  placeholder="Your company name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="website">Website (Optional)</label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://yourcompany.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number (Optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 555-5555"
                />
              </div>

              <div className="form-group">
                <label htmlFor="companySize">Company Size *</label>
                <select
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="annualRevenue">Annual Revenue (Optional)</label>
                <select
                  id="annualRevenue"
                  name="annualRevenue"
                  value={formData.annualRevenue}
                  onChange={handleChange}
                >
                  <option value="">Select annual revenue</option>
                  <option value="0-100k">$0 - $100K</option>
                  <option value="100k-500k">$100K - $500K</option>
                  <option value="500k-1m">$500K - $1M</option>
                  <option value="1m-5m">$1M - $5M</option>
                  <option value="5m-10m">$5M - $10M</option>
                  <option value="10m+">$10M+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="projectBudget">Project Budget *</label>
                <select
                  id="projectBudget"
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select project budget</option>
                  <option value="0-10k">$0 - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k+">$250K+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">How Can We Help? *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please describe your project needs and how we can assist you."
                ></textarea>
              </div>

              <div className="form-checkboxes">
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="emailList"
                    name="emailList"
                    checked={formData.emailList}
                    onChange={handleChange}
                  />
                  <label htmlFor="emailList">
                    Opt into email list for exclusive offerings and bonus AI
                    content.
                  </label>
                </div>
                <div className="checkbox-group">
                  <input
                    type="checkbox"
                    id="smsOptIn"
                    name="smsOptIn"
                    checked={formData.smsOptIn}
                    onChange={handleChange}
                  />
                  <label htmlFor="smsOptIn">Opt into SMS and text messages.</label>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="form-message success">
                  Thank you! Your message has been sent successfully. We'll get
                  back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-message error">
                  Something went wrong. Please try again or contact us directly.
                </div>
              )}

              <button
                type="submit"
                className="btn btn-primary form-submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

