import EventHeroSection from '@/components/layouts/events/EventHeroSection'
import Header from '@/components/Header'
import React from 'react'
import EventSection from '@/components/layouts/events/EventSection'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">

      <div className='px-6 md:px-12'>
        <Header />

        {/* hero section */}
        <EventHeroSection />

        {/* show event details */}
        <EventSection />
      </div>

      {/* footer section */}
      <Footer />
        
    </div>
  )
}

export default page