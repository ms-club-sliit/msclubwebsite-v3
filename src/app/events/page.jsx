import EventHeroSection from '@/components/layouts/events/EventHeroSection'
import Header from '@/components/Header'
import React from 'react'
import EventSection from '@/components/layouts/events/EventSection'
import Footer from '@/components/Footer'
import BackgroundContainer from '@/components/BackgroundContainer'
import Hero from '@/components/Hero'

const page = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">

      <Header />
      <Hero
        title='Explore Events'
        paragraph='Explore all the events organized by our students and to boost your skills and expand your network.'
        button1Text='More Info On Facebook'
        button2Text='Subscribe on Youtube'
      />
      <EventSection />
      <Footer />
        
    </div>
  )
}

export default page