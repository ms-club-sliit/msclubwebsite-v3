"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const selectedImages = [
  { src: "https://i.postimg.cc/8cWZ58yK/image.png", alt: "MS Club Workshop" },
  { src: "https://i.postimg.cc/rsFYfZgQ/image.png", alt: "Tech Event" },
  { src: "https://i.postimg.cc/G2TTDGWt/image.png", alt: "Community Meeting" },
  { src: "https://i.postimg.cc/1XzTMRK8/image.png", alt: "Innovation Session" },
  { src: "https://i.postimg.cc/rstH7nvT/image.png", alt: "Student Collaboration" },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gray-900 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#4a9eff]/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#6b73ff]/5 rounded-full blur-3xl animate-pulse-slow delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-[#4a9eff]/3 to-transparent rounded-full" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          
          {/* Content Section */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#4a9eff]/10 border border-[#4a9eff]/20 text-[#4a9eff] text-sm font-medium backdrop-blur-sm">
                <div className="w-2 h-2 bg-[#4a9eff] rounded-full mr-2 animate-pulse" />
                Microsoft Learn Student Ambassador Community
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                MS CLUB
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9eff] to-[#6b73ff]">
                  OF SLIIT
                </span>
              </h1>

              {/* Description */}
              <p className="text-xl text-[#8892b0] leading-relaxed max-w-2xl">
                Bridging the gap between academic learning and industry expertise through 
                collaborative innovation, skill development, and professional growth.
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <Link href="/join-us">
                <button className="group relative px-8 py-4 bg-[#4a9eff] hover:bg-[#3a89ef] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#4a9eff]/25 overflow-hidden">
                  <span className="relative z-10">Join the Community</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4a9eff] to-[#6b73ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-0 left-0 w-full h-full bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </button>
              </Link>
              
              <Link href="/events">
                <button className="group px-8 py-4 text-white font-semibold rounded-xl border-2 border-[#8892b0]/30 hover:border-[#4a9eff] transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:shadow-xl">
                  <span className="flex items-center gap-2">
                    Explore Events
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className={`flex gap-8 pt-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-[#8892b0]">Active Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm text-[#8892b0]">Events Hosted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10+</div>
                <div className="text-sm text-[#8892b0]">Industry Partners</div>
              </div>
            </div>
          </div>

          {/* Hero-Appropriate Image Showcase */}
          <div className={`relative transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              
              {/* Main Image with Elegant Framing */}
              <div className="relative group">
                {/* Decorative frame elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#4a9eff]/20 via-transparent to-[#6b73ff]/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
                <div className="absolute -inset-2 bg-gradient-to-r from-[#4a9eff]/10 to-[#6b73ff]/10 rounded-2xl" />
                
                {/* Image container */}
                <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[#4a9eff]/20 transition-all duration-500">
                  {selectedImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentImageIndex 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-110'
                      }`}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      
                      {/* Subtle overlay with image title */}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                          <p className="text-white text-sm font-medium">{image.alt}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Minimal navigation dots */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {selectedImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-[#4a9eff] scale-125 shadow-lg shadow-[#4a9eff]/50' 
                          : 'bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Subtle floating accent elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#4a9eff]/10 to-[#6b73ff]/5 rounded-2xl blur-xl animate-float-gentle" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-[#6b73ff]/8 to-[#4a9eff]/3 rounded-full blur-2xl animate-float-gentle-delayed" />
              
              {/* Minimal geometric accents */}
              <div className="absolute top-4 right-4 w-3 h-3 border border-[#4a9eff]/40 rounded-sm rotate-45 animate-pulse-gentle" />
              <div className="absolute bottom-12 left-4 w-2 h-2 bg-[#6b73ff]/40 rounded-full animate-pulse-gentle delay-1000" />
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }

        @keyframes float-gentle-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(-1deg); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 8s ease-in-out infinite;
        }

        .animate-float-gentle-delayed {
          animation: float-gentle-delayed 8s ease-in-out infinite 2s;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Smooth hover transitions */
        .group:hover .group-hover\\:translate-x-full {
          transform: translateX(100%) skewX(-12deg);
        }
      `}</style>
    </section>
  );
};

export default Hero;