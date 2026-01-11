"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import slidesData from "@/data/heroSlides.json";

const Hero = ({
  title = "MS CLUB OF SLIIT",
  paragraph = "A MLSA driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.",
  button1Text = "Join the Club",
  button1Link = "/join-us",
  button2Text = "Explore Events",
  button2Link = "/events",
  showSecondButton = true,
  button2Target = "_self",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = slidesData;

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const currentBackground = slides[currentSlide]?.background;

  return (
    <section className="relative h-screen py-8 md:py-section-y px-6 md:px-section-x lg:px-12 text-white flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {currentBackground && (
          <Image
            src={currentBackground}
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-90 transition-opacity duration-1000"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c2e] via-[#0f1c2e]/90 to-[#0f1c2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a1628]/70" />
      </div>

      {/* Left Text Content */}
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left px-2 md:px-0 md:pl-16 lg:pl-24">
        <div className="relative">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">{title}</span>
          </h1>

          <p className="max-w-md mx-auto md:mx-0 mb-6 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed text-gray-300 animate-fade-in-up-delayed">
            {paragraph}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fade-in-up-delayed-2">
            <Link href={button1Link} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 md:px-8 md:py-3">
                {button1Text}
              </button>
            </Link>

            {showSecondButton && (
              <Link href={button2Link} target={button2Target} rel={button2Target === "_blank" ? "noopener noreferrer" : undefined} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 border border-gray-500 rounded-lg hover:border-gray-300 hover:bg-white/10 md:px-8 md:py-3">
                  {button2Text}
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Custom Shape Image Slider (Hidden on Mobile) */}
      <div className="relative z-10 hidden md:flex justify-center items-center md:w-1/2 mt-10 md:mt-0">
        <div className="relative w-full max-w-[550px] h-[300px] md:h-[420px] animate-slide-in-right">
          {/* Custom Shape Images Container */}
          <div className="relative w-full h-full flex items-end justify-center gap-2 md:gap-6">
            {/* First Image - sharp top-right corner */}
            <motion.div 
              className="relative w-[162px] h-[253px] mb-0"
              animate={{
                y: [0, -12, -8, 0],
                x: [0, 4, -4, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div 
                className="absolute inset-0 rounded-tl-[95px] rounded-tr-none rounded-br-[110px] rounded-bl-[110px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl"
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full rounded-tl-[68.5px] rounded-tr-none rounded-br-[82px] rounded-bl-[82px] overflow-hidden shadow-2xl">
                {currentBackground && (
                  <Image
                    src={currentBackground}
                    alt="Hero background 1"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-1000"
                    priority
                  />
                )}
              </div>
            </motion.div>

            {/* Second Image - sharp bottom-left corner, positioned higher */}
            <motion.div 
              className="relative w-[175px] h-[314px] mb-16"
              animate={{
                y: [0, -10, -15, 0],
                x: [0, -4, 4, 0],
                rotate: [0, -1, 1, 0],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <motion.div 
                className="absolute inset-0 rounded-tl-[115px] rounded-tr-[110px] rounded-br-[110px] rounded-bl-none bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl"
                animate={{
                  opacity: [0.25, 0.45, 0.25],
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-full h-full rounded-tl-[87.5px] rounded-tr-[82px] rounded-br-[82px] rounded-bl-none overflow-hidden shadow-2xl">
                {currentBackground && (
                  <Image
                    src={currentBackground}
                    alt="Hero background 2"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-all duration-1000"
                    priority
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slider Dots Indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 hover:opacity-100 flex-shrink-0 ${
              currentSlide === index 
                ? "bg-blue-500 w-6 shadow-md shadow-blue-500/50" 
                : "bg-gray-400 w-1.5 opacity-60 hover:bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .animate-slide-in-right {
          animation: slide-in-right 1s ease-out 0.3s both;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1s ease-out 0.5s both;
        }

        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up-delayed 1s ease-out 0.8s both;
        }
      `}</style>
    </section>
  );
};

export default Hero;
