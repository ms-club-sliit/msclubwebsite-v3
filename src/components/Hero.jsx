"use client";

import React from "react";
import Link from "next/link";

const images = [
  { src: "https://i.postimg.cc/8cWZ58yK/image.png", size: "w-28 h-28", position: "top-0 left-4" },
  { src: "https://i.postimg.cc/rsFYfZgQ/image.png", size: "w-36 h-36", position: "top-20 left-28" },
  { src: "https://i.postimg.cc/44Mwj1fL/image.png", size: "w-24 h-24", position: "top-52 left-4" },
  { src: "https://i.postimg.cc/G2TTDGWt/image.png", size: "w-40 h-40", position: "top-1 right-0" },
  { src: "https://i.postimg.cc/dVD5fSdx/image.png", size: "w-32 h-32", position: "top-44 right-10" },
  { src: "https://i.postimg.cc/dVD5fSdx/image.png", size: "w-28 h-28", position: "bottom-4 left-20" },
  { src: "https://i.postimg.cc/1XzTMRK8/image.png", size: "w-36 h-36", position: "bottom-10 right-24" },
  { src: "https://i.postimg.cc/rstH7nvT/image.png", size: "w-24 h-24", position: "bottom-2 right-2" },
  { src: "https://i.postimg.cc/8cWZ58yK/image.png", size: "w-32 h-32", position: "top-1/2 left-1/3" },
  { src: "https://i.postimg.cc/rsFYfZgQ/image.png", size: "w-28 h-28", position: "top-1/2 right-1/4" },
  { src: "https://i.postimg.cc/1XzTMRK8/image.png", size: "w-40 h-40", position: "top-2 left-[41%]" },
  { src: "https://i.postimg.cc/rstH7nvT/image.png", size: "w-20 h-20", position: "bottom-2 right-1/2" },
  { src: "https://i.postimg.cc/rstH7nvT/image.png", size: "w-28 h-28", position: "top-36 right-[40%]" },
];

const colorSquares = [
  { color: "bg-green-500", size: "w-6 h-6", position: "top-4 left-1", delay: "delay-0" },
  { color: "bg-orange-500", size: "w-6 h-6", position: "top-52 left-6", delay: "delay-1000" },
  { color: "bg-yellow-400", size: "w-6 h-6", position: "bottom-4 right-4", delay: "delay-500" },
  { color: "bg-yellow-400", size: "w-6 h-6", position: "top-1/2 right-6", delay: "delay-1500" },
  { color: "bg-blue-500", size: "w-4 h-4", position: "top-16 left-16", delay: "delay-750" },
  { color: "bg-purple-500", size: "w-5 h-5", position: "bottom-32 left-8", delay: "delay-1250" },
  { color: "bg-pink-500", size: "w-4 h-4", position: "top-72 right-12", delay: "delay-300" },
  { color: "bg-indigo-500", size: "w-6 h-6", position: "bottom-16 right-20", delay: "delay-1750" },
];

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-between min-h-screen overflow-hidden text-white py-16 px-6 md:px-12 bg-[#0e132a] md:flex-row">
      {/* Top Corner Round Spotlight Effect */}
      <div className="absolute pointer-events-none -top-32 -left-32 w-96 h-96">
        {/* Main spotlight circle */}
        <div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-radial from-blue-400/30 via-blue-500/15 via-blue-600/8 to-transparent animate-spotlight-pulse blur-sm" />
        {/* Inner bright core */}
        <div className="absolute rounded-full top-8 left-8 w-80 h-80 bg-gradient-radial from-white/20 via-blue-300/10 to-transparent animate-spotlight-breathe" />
        {/* Intense center */}
        <div className="absolute w-64 h-64 rounded-full top-16 left-16 bg-gradient-radial from-blue-200/25 via-blue-400/12 to-transparent animate-spotlight-shimmer" />
      
      </div>

      {/* Left Text Content */}
      <div className="relative z-10 mb-12 md:w-1/2 animate-slide-in-left">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          MS CLUB OF SLIIT
        </h1>
        <p className="max-w-xl mb-10 text-lg leading-relaxed text-gray-300 md:text-xl animate-fade-in-up-delayed">
          A MLSA driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up-delayed-2">
          <Link href="/join-us">
            <button className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl">
              Join the Club
            </button>
          </Link>
          <Link href="/events">
            <button className="px-8 py-4 font-semibold text-white transition-all duration-300 transform border-2 border-gray-500 rounded-lg hover:border-blue-400 hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
              Explore Events
            </button>
          </Link>
        </div>
      </div>

      {/* Right Image Collage */}
      <div className="relative z-10 md:w-1/2 w-full h-[500px] mt-10 md:mt-0">
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute ${img.size} ${img.position} rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:z-20`}
            style={{
              animation: `float-image 6s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`
            }}
          >
            <img
              src={img.src}
              alt={`MS Club Activity ${i + 1}`}
              className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
              loading={i < 4 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 to-transparent hover:opacity-100" />
          </div>
        ))}

        {/* Animated Color Squares */}
        {colorSquares.map((square, i) => (
          <div
            key={i}
            className={`absolute ${square.size} ${square.color} ${square.position} rounded-md animate-float-simple ${square.delay} opacity-80 hover:opacity-100 transition-opacity duration-300`}
          />
        ))}

        {/* Background Gradient Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-32 h-32 delay-1000 rounded-full bg-purple-600/10 blur-3xl animate-pulse" />
        <div className="absolute w-24 h-24 delay-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-green-600/10 blur-3xl animate-pulse" />
      </div>

      {/* Enhanced Animations */}
      <style jsx global>{`
        @keyframes float-simple {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes float-image {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-8px) rotate(1deg);
          }
          66% {
            transform: translateY(-4px) rotate(-1deg);
          }
        }

        @keyframes spotlight-pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes spotlight-breathe {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1) rotate(0deg);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.1) rotate(2deg);
          }
        }

        @keyframes spotlight-shimmer {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1) rotate(0deg);
          }
          33% {
            opacity: 0.2;
            transform: scale(1.2) rotate(1deg);
          }
          66% {
            opacity: 0.15;
            transform: scale(1.1) rotate(-1deg);
          }
        }

        .animate-float-simple {
          animation: float-simple 4s ease-in-out infinite;
        }

        .animate-spotlight-pulse {
          animation: spotlight-pulse 4s ease-in-out infinite;
        }

        .animate-spotlight-breathe {
          animation: spotlight-breathe 6s ease-in-out infinite;
        }

        .animate-spotlight-shimmer {
          animation: spotlight-shimmer 8s ease-in-out infinite;
        }

        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }

        .delay-0 { animation-delay: 0s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-750 { animation-delay: 0.75s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1250 { animation-delay: 1.25s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-1750 { animation-delay: 1.75s; }

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

        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out;
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

        @keyframes fade-in-up-delayed-2 {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          70% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 1s ease-out 0.5s both;
        }

        .animate-fade-in-up-delayed-2 {
          animation: fade-in-up-delayed-2 1.5s ease-out 0.8s both;
        }

        /* Enhanced hover effects */
        .hover\\:shadow-2xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
};

export default Hero;