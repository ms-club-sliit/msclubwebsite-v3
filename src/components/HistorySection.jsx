"use client";
import React from "react";

const HistorySection = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 bg-[#0c1629] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 bg-blue-400/20 rounded-full blur-lg animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-blue-800/5"></div>
        
        {/* Animated Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-blue-400/30 to-transparent animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i * 0.5}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* Animated Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 transform transition-all duration-1000 hover:scale-105">
          <span className="inline-block animate-fade-in-up">Our</span>{" "}
          <span className="inline-block animate-fade-in-up bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent" style={{animationDelay: '0.2s'}}>
            Journey
          </span>
        </h2>
        
        {/* Enhanced Description with Hover Effects */}
        <div className="relative">
          <p className="text-gray-400 text-lg leading-relaxed transform transition-all duration-700 hover:text-gray-300 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            Since{" "}
            <span className="relative inline-block text-blue-400 font-semibold hover:text-blue-300 transition-colors duration-300 group">
              2018
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
            , the Microsoft Student Club has been a{" "}
            <span className="relative inline-block text-blue-300 font-medium hover:text-blue-200 transition-colors duration-300">
              catalyst
            </span>{" "}
            for student growth—helping aspiring technologists explore innovation, sharpen their skills, and build lasting connections that extend far beyond graduation.
          </p>
          
          {/* Subtle glow effect behind text */}
          <div className="absolute inset-0 bg-blue-500/5 blur-3xl rounded-full scale-150 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Timeline Indicator */}
        <div className="mt-12 flex items-center justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="flex items-center space-x-4">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300"></div>
            <div className="text-blue-300 font-medium">2018 - Present</div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-300 to-blue-400"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HistorySection;