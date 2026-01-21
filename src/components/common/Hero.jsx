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
    <section className="relative h-screen py-8 md:py-section-y px-6 md:px-section-x lg:px-12 text-white flex flex-col md:flex-row items-center justify-center md:justify-between overflow-hidden mb-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        {currentBackground && (
          <Image
            key={currentSlide}
            src={currentBackground}
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
            className="opacity-90 transition-opacity duration-1000"
            priority
          />
        )}
        <div className="absolute inset-0 bg-[#0f1c2e]/80" />
      </div>

      {/* Left Text Content */}
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left px-2 md:px-0 md:pl-16 lg:pl-24 xl:pl-32">
        <div className="relative">
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight tracking-tight">
            <span className="text-white">{title}</span>
          </h1>

          <motion.p
            className="max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto md:mx-0 mb-6 text-sm sm:text-base md:text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            {paragraph}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          >
            <Link href={button1Link} className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-3.5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5">
                {button1Text}
              </button>
            </Link>

            {showSecondButton && (
              <Link href={button2Link} target={button2Target} rel={button2Target === "_blank" ? "noopener noreferrer" : undefined} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-3.5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold text-white transition-all duration-300 border border-gray-500 rounded-lg hover:border-gray-300 hover:bg-white/10 md:px-8 md:py-3 lg:px-10 lg:py-4 xl:px-12 xl:py-5">
                  {button2Text}
                </button>
              </Link>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Side - Custom Shape Image Slider (Hidden on Mobile) */}
      <div className="relative z-10 hidden md:flex justify-center items-center md:w-1/2 mt-10 md:mt-0">
        <motion.div
          className="relative w-full max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[900px] h-[300px] md:h-[420px] lg:h-[500px] xl:h-[580px] 2xl:h-[660px]"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {/* Custom Shape Images Container */}
          <div className="relative w-full h-full flex items-end justify-center gap-2 md:gap-6 lg:gap-8 xl:gap-10">
            {/* First Image - sharp top-right corner */}
            <motion.div
              className="relative w-[162px] h-[253px] lg:w-[190px] lg:h-[295px] xl:w-[220px] xl:h-[340px] 2xl:w-[260px] 2xl:h-[400px] mb-0"
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
                className="absolute inset-0 rounded-tl-[95px] lg:rounded-tl-[111px] xl:rounded-tl-[129px] 2xl:rounded-tl-[152px] rounded-tr-none rounded-br-[110px] lg:rounded-br-[129px] xl:rounded-br-[150px] 2xl:rounded-br-[176px] rounded-bl-[110px] lg:rounded-bl-[129px] xl:rounded-bl-[150px] 2xl:rounded-bl-[176px] bg-gradient-to-br from-blue-500/30 to-purple-500/30 blur-2xl"
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
              <div className="relative w-full h-full rounded-tl-[68.5px] lg:rounded-tl-[80px] xl:rounded-tl-[93px] 2xl:rounded-tl-[110px] rounded-tr-none rounded-br-[82px] lg:rounded-br-[96px] xl:rounded-br-[112px] 2xl:rounded-br-[131px] rounded-bl-[82px] lg:rounded-bl-[96px] xl:rounded-bl-[112px] 2xl:rounded-bl-[131px] overflow-hidden shadow-2xl">
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
              className="relative w-[175px] h-[314px] lg:w-[205px] lg:h-[365px] xl:w-[240px] xl:h-[425px] 2xl:w-[285px] 2xl:h-[500px] mb-16 lg:mb-20 xl:mb-24 2xl:mb-28"
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
                className="absolute inset-0 rounded-tl-[115px] lg:rounded-tl-[134px] xl:rounded-tl-[158px] 2xl:rounded-tl-[188px] rounded-tr-[110px] lg:rounded-tr-[129px] xl:rounded-tr-[150px] 2xl:rounded-tr-[179px] rounded-br-[110px] lg:rounded-br-[129px] xl:rounded-br-[150px] 2xl:rounded-br-[179px] rounded-bl-none bg-gradient-to-br from-cyan-500/30 to-blue-500/30 blur-2xl"
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
              <div className="relative w-full h-full rounded-tl-[87.5px] lg:rounded-tl-[102px] xl:rounded-tl-[120px] 2xl:rounded-tl-[143px] rounded-tr-[82px] lg:rounded-tr-[96px] xl:rounded-tr-[112px] 2xl:rounded-tr-[134px] rounded-br-[82px] lg:rounded-br-[96px] xl:rounded-br-[112px] 2xl:rounded-br-[134px] rounded-bl-none overflow-hidden shadow-2xl">
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
        </motion.div>
      </div>

      {/* Slider Dots Indicator with Framer Motion */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex items-center gap-2">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full flex-shrink-0 ${currentSlide === index
                ? "bg-blue-500 shadow-md shadow-blue-500/50"
                : "bg-gray-400 opacity-60"
              }`}
            initial={false}
            animate={{
              width: currentSlide === index ? 24 : 6,
              opacity: currentSlide === index ? 1 : 0.6,
              scale: currentSlide === index ? 1 : 0.9,
            }}
            whileHover={{
              opacity: 1,
              scale: 1.1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
