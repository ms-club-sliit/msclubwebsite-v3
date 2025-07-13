import Link from 'next/link'
import React from 'react'

const EventHeroSection = () => {
  return (
    <div className='h-[calc(100vh-100px)] flex flex-col justify-center'>

        {/* section title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">Explore Events</h1>

        {/* section paragraph content */}
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up-delayed">
            Explore all the events organized by our students and to boost your skills and expand your network.
        </p>
        
        {/* call to actions */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed-2">
          <Link
            href="#join"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 font-semibold">More Info On Facebook</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
          </Link>
          
          <Link
            href="#events"
            className="group relative border-2 border-gray-600 hover:border-blue-400 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10"
          >
            <span className="relative z-10 font-semibold">Subscribe on Youtube</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          </Link>
        </div>
        
    </div>
  )
}

export default EventHeroSection