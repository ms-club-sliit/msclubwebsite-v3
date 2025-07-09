"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = ({
  logoLink = "/ms_club_logo_light.png",
  title = "MS CLUB OF SLIIT",
  paragraph = "A MLSA driven student community aiming to bridge the skill gap between an Undergraduate and an Industry Professional.",
  button1Text = "Join the Club",
  button1Link = "/join-us",
  button2Text = "Explore Events",
  button2Link = "/events",
  showSecondButton = true,
}) => {
  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 bg-[#0c1629] text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Simple Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300/30 animate-float-simple"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}

        {/* Static Gradient Orbs */}
        <div className="absolute rounded-full w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-drift-1" />
        <div className="absolute rounded-full w-80 h-80 bg-gradient-to-r from-purple-500/8 to-blue-500/8 blur-3xl animate-drift-2" />
      </div>

      {/* Left Text Content */}
      <div className="relative z-10 pl-12 mb-10 ml-6 md:w-1/2 md:mb-0 animate-slide-in-left">
        <div className="relative">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-white">{title}</span>
          </h1>
        </div>

        <p className="max-w-xl mb-10 text-lg leading-relaxed text-gray-300 md:text-xl animate-fade-in-up-delayed">
          {paragraph}
        </p>

        <div className="flex flex-col gap-4 sm:flex-row animate-fade-in-up-delayed-2">
          <Link href={button1Link}>
            <button className="px-8 py-4 font-semibold text-white transition-all duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105 hover:shadow-xl">
              {button1Text}
            </button>
          </Link>

          {showSecondButton && (
            <Link href={button2Link}>
              <button className="px-8 py-4 font-semibold text-white transition-all duration-300 transform border-2 border-gray-500 rounded-lg hover:border-blue-400 hover:scale-105 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                {button2Text}
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* Logo */}
      <div className="relative z-10 flex justify-center md:w-1/2">
        <div className="relative animate-slide-in-right">
          <div className="relative flex items-center justify-center w-80 h-80 md:w-96 md:h-96">
            {/* Darker light blue circle highlight */}
            <div className="absolute w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-950/40 blur-md -z-20" />

            {/* Logo with up-and-down animation */}
            <div className="relative w-[300px] h-[300px] group animate-float-gentle">
              <Image
                src={logoLink}
                alt="Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
              />

              {/* Glow effects */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-2xl animate-pulse-slow -z-10" />
              <div className="absolute rounded-full inset-4 bg-gradient-to-r from-green-400/15 to-blue-400/15 blur-xl animate-pulse-slower -z-10" />
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute w-6 h-6 rounded-lg shadow-lg -top-4 -right-4 bg-gradient-to-br from-blue-400 to-cyan-400 animate-float-orbit-1 opacity-70" />
          <div className="absolute w-5 h-5 rounded-full shadow-lg -bottom-4 -left-4 bg-gradient-to-br from-green-400 to-emerald-400 animate-float-orbit-2 opacity-70" />
          <div className="absolute w-4 h-4 rounded-full shadow-lg top-1/4 -left-8 bg-gradient-to-br from-yellow-400 to-orange-400 animate-float-orbit-3 opacity-70" />
        </div>
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

        @keyframes float-gentle {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes float-orbit-1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        @keyframes float-orbit-2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-25px) rotate(-180deg);
          }
        }

        @keyframes float-orbit-3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(180deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.05);
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.03);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes float-simple {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
        }

        @keyframes drift-1 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          33% {
            transform: translate(30px, -30px);
          }
          66% {
            transform: translate(-20px, 20px);
          }
        }

        @keyframes drift-2 {
          0%,
          100% {
            transform: translate(0px, 0px);
          }
          50% {
            transform: translate(-40px, -20px);
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

        .animate-float-gentle {
          animation: float-gentle 4s ease-in-out infinite;
        }

        .animate-float-simple {
          animation: float-simple 20s ease-in-out infinite;
        }

        .animate-float-orbit-1 {
          animation: float-orbit-1 6s ease-in-out infinite;
        }

        .animate-float-orbit-2 {
          animation: float-orbit-2 8s ease-in-out infinite;
        }

        .animate-float-orbit-3 {
          animation: float-orbit-3 7s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-drift-1 {
          animation: drift-1 20s ease-in-out infinite;
        }

        .animate-drift-2 {
          animation: drift-2 25s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
