"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between">
      {/* Left Text Content */}
      <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          MS CLUB OF SLIIT
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl">
          A MLSA-driven student community aiming to bridge the skill gap
          between undergraduates and industry professionals.
        </p>
        <div className="flex space-x-4">
          <a
            href="#join"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
          >
            Join the Club
          </a>
          <a
            href="#events"
            className="border border-gray-600 hover:border-gray-400 text-white px-6 py-3 rounded-md transition"
          >
            Explore Events
          </a>
        </div>
      </div>

      {/* Logo Visual with Effects */}
      <div className="md:w-1/2 flex justify-center">
        <div className="w-80 h-80 relative flex items-center justify-center">
          {/* Main logo container with hover effects */}
          <div className="relative group">
            <img
              src="ms_club_logo_light.png" 
              alt="MS Club SLIIT Logo"
              className="object-contain w-72 h-72 relative z-10 transition-all duration-500 
                         group-hover:scale-110 group-hover:rotate-3 
                         filter drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]
                         animate-float"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4)) drop-shadow(0 0 40px rgba(59, 130, 246, 0.2))'
              }}
            />
            
            {/* Subtle glow effect behind logo */}
            <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full 
                            group-hover:bg-blue-400/30 transition-all duration-500 animate-pulse-slow"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;