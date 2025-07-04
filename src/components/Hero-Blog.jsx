"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ExploreBlogsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen py-20 px-6 md:px-12 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">

        {/* Simple Floating Dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-float-simple"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
        
        {/* Dynamic Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-drift-1"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-drift-2"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          }}
        />
      </div>

      {/* Left Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 animate-slide-in-left relative z-10">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent animate-gradient-shift">
              Explore Blogs
            </span>
          </h1>
          
          {/* Glow effect behind title */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-lg animate-pulse-glow -z-10" />
        </div>
        
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed animate-fade-in-up-delayed">
          Read all the blog post which written by our students and more to boost your skills and expand your network.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delayed-2">
          <Link
            href="https://medium.com/ms-club-of-sliit"
            target="_blank"
            className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
          >
            <span className="relative z-10 font-semibold">Follow Our Medium Page</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-300 -z-10" />
          </Link>
        </div>
      </div>

      {/* Logo Visual with Enhanced Effects */}
      <div className="md:w-1/2 flex justify-center relative z-10">
        <div className="w-80 h-80 md:w-96 md:h-96 relative flex items-center justify-center animate-slide-in-right">
          
          {/* Outer rotating rings */}
          <div className="absolute inset-0 border-2 border-blue-500/30 rounded-full animate-spin-slow" />
          <div className="absolute inset-4 border border-purple-500/20 rounded-full animate-spin-reverse" />
          
          {/* Main logo container */}
          <div className="relative group w-72 h-72 md:w-80 md:h-80">
            <Image
              src="/medium.png"
              alt="MS Club SLIIT Logo"
              width={320}
              height={320}
              priority
              className="object-contain w-full h-full relative z-20 transition-all duration-700 
                         group-hover:scale-110 group-hover:rotate-6 
                         filter drop-shadow-2xl group-hover:drop-shadow-[0_0_40px_rgba(59,130,246,0.9)]
                         animate-float-gentle animate-glow-pulse"
            />

            {/* Multiple glow layers */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl rounded-full 
                            group-hover:from-blue-400/50 group-hover:to-purple-400/50 transition-all duration-700 animate-pulse-slow z-10" />
            
            <div className="absolute inset-2 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 blur-2xl rounded-full 
                            group-hover:from-cyan-300/40 group-hover:to-blue-300/40 transition-all duration-500 animate-pulse-slower z-10" />
            
            {/* Energy rings */}
            <div className="absolute inset-0 border border-blue-400/40 rounded-full animate-ping-slow" />
            <div className="absolute inset-8 border border-purple-400/30 rounded-full animate-ping-slower" />
          </div>
          
          {/* Floating tech elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg animate-float-orbit-1 shadow-lg" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full animate-float-orbit-2 shadow-lg" />
          <div className="absolute top-1/4 -left-8 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full animate-float-orbit-3 shadow-lg" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-8px) rotate(1deg); }
          66% { transform: translateY(-4px) rotate(-1deg); }
        }

        @keyframes float-random {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-5px); }
          75% { transform: translateY(-20px) translateX(-10px); }
        }

        @keyframes float-orbit-1 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-20px) rotate(360deg); }
        }

        @keyframes float-orbit-2 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-15px) rotate(-360deg); }
        }

        @keyframes float-orbit-3 {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-25px) rotate(180deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.03); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes glow-pulse {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5)); }
          50% { filter: drop-shadow(0 0 30px rgba(59, 130, 246, 0.8)); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.1);
            opacity: 0;
          }
        }

        @keyframes ping-slower {
          75%, 100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        @keyframes float-simple {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        @keyframes drift-1 {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(30px, -30px); }
          66% { transform: translate(-20px, 20px); }
        }

        @keyframes drift-2 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-40px, -20px); }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
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
          animation: float-orbit-1 8s ease-in-out infinite;
        }

        .animate-float-orbit-2 {
          animation: float-orbit-2 6s ease-in-out infinite;
        }

        .animate-float-orbit-3 {
          animation: float-orbit-3 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-ping-slower {
          animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-drift-1 {
          animation: drift-1 20s ease-in-out infinite;
        }

        .animate-drift-2 {
          animation: drift-2 25s ease-in-out infinite;
        }

        .animate-typewriter {
          overflow: hidden;
          white-space: nowrap;
          animation: typewriter 2s steps(40, end) 1s both;
        }
      `}</style>
    </section>
  );
};

export default ExploreBlogsSection;