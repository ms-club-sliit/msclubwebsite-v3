"use client";

import React, { useState, useEffect } from "react";

const selectedImages = [
  { src: "https://i.postimg.cc/8cWZ58yK/image.png", alt: "MS Club Workshop" },
  { src: "https://i.postimg.cc/rsFYfZgQ/image.png", alt: "Tech Event" },
  { src: "https://i.postimg.cc/G2TTDGWt/image.png", alt: "Community Meeting" },
  { src: "https://i.postimg.cc/1XzTMRK8/image.png", alt: "Innovation Session" },
  {
    src: "https://i.postimg.cc/rstH7nvT/image.png",
    alt: "Student Collaboration",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-[#0f1729] overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        {selectedImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0f1729]/90" />
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
          {/* Left Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                MS CLUB OF
                <br />
                SLIIT
              </h1>

              <p className="text-base text-white/70 leading-relaxed max-w-md pr-8">
                A MLSA driven student community aiming to bridge the skill gap
                between an Undergraduate and an Industry Professional.
              </p>
            </div>

            <div className="flex gap-5">
              <button className="px-9 py-4 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-sm font-medium rounded-lg transition-all duration-300 shadow-lg">
                Join the Club
              </button>

              <button className="px-9 py-4 text-white text-sm font-medium rounded-lg border border-white/30 hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                Explore Events
              </button>
            </div>
          </div>

          {/* Right - Floating Image Card */}
          <div className="relative flex justify-center items-center h-[600px]">
            <div className="relative w-full max-w-[600px]">

              {/* Floating Element 1 - Bottom Left */}
              <div
                className="absolute bg-white shadow-xl overflow-hidden animate-float-element-1"
                style={{
                  width: "220px",
                  height: "320px",
                  top: "-100px",
                  left: "20px",
                  borderTopLeftRadius: "90px",
                  borderBottomRightRadius: "110px",
                  borderBottomLeftRadius: "110px",
                }}
              >
                {selectedImages.map((image, index) => (
                  <div
                    key={`float1-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Floating Element 2 - Top Right */}
              <div
                className="absolute bg-white shadow-xl overflow-hidden animate-float-element-2"
                style={{
                  width: "240px",
                  height: "380px",
                  top: "-250px",
                  left: "260px",
                  borderTopLeftRadius: "120px",
                  borderTopRightRadius: "100px",
                  borderBottomRightRadius: "100px",
                }}
              >
                {selectedImages.map((image, index) => (
                  <div
                    key={`float2-${index}`}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Indicator Dots */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {selectedImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-white w-2"
                : "bg-white/30 w-2 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      <style jsx global>{`
        @keyframes float-smooth {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes float-element-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-15px) translateX(5px);
          }
        }

        @keyframes float-element-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-18px) translateX(-5px);
          }
        }

        .animate-float-smooth {
          animation: float-smooth 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }

        .animate-float-element-1 {
          animation: float-element-1 7s ease-in-out infinite 0.5s;
        }

        .animate-float-element-2 {
          animation: float-element-2 6.5s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
