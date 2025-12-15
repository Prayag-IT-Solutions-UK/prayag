import Hero from '../components/home/Hero'
import WhatWeBuildDetailed from '../components/home/WhatWeBuildDetailed'
import WhyPrayag from '../components/home/WhyPrayag'
import OurIntegrations from '../components/home/OurIntegrations'
import OurProcess from '../components/home/OurProcess'
import FounderNote from '../components/home/FounderNote'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <Hero />
      </section>
      <WhatWeBuildDetailed />
      <WhyPrayag />
      <OurIntegrations />
      <OurProcess />
      <FounderNote />
    </div>
  )
}

export default Home

