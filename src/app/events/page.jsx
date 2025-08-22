import Header from '@/components/common/Header'
import React from 'react'
import EventSection from '@/components/events/EventSection'
import Footer from '@/components/common/Footer'
import Hero from '@/components/common/Hero'

const page = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">

      <Header />
      <Hero
        logoLink="/ms_club_logo_light.png"
        title='Explore Events'
        paragraph='Explore all the events organized by our students and to boost your skills and expand your network.'
        button1Text='More Info On Facebook'
        button1Link='https://web.facebook.com/msclubsliit'
        button2Text='Subscribe on Youtube'
        button2Link='https://www.youtube.com/@msclubofsliit'
      />
      <EventSection />
      <Footer />
        
    </div>
  )
}

export default page