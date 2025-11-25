import Hero from '../components/home/Hero'
import WhatWeBuild from '../components/home/WhatWeBuild'
import WhatWeBuildDetailed from '../components/home/WhatWeBuildDetailed'
import WhyPrayag from '../components/home/WhyPrayag'
import OurIntegrations from '../components/home/OurIntegrations'
import OurProcess from '../components/home/OurProcess'
import FounderNote from '../components/home/FounderNote'
import ChatInputBar from '../components/ChatInputBar'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WhatWeBuild />
      <section className="chat-section">
        <div className="container">
          <ChatInputBar />
        </div>
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

