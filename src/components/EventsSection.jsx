"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const EventCard = ({ title, description, image, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 hover:border-blue-400/50 transition-all duration-700 transform hover:scale-105 hover:-translate-y-2 ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Animated Border Gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 via-blue-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      {/* Image Container with Overlay Effects */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Animated Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        
        {/* Floating Particles on Hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-particle"
              style={{
                left: `${20 + i * 30}%`,
                top: `${30 + i * 20}%`,
                animationDelay: `${i * 0.3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Content with Enhanced Typography */}
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300 transform group-hover:translate-x-1">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        
        {/* Animated Underline */}
        <div className="mt-4 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300 group-hover:w-12 transition-all duration-500"></div>
      </div>
      
      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </div>
  );
};

const EventsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const events = [
    {
      title: "Campus Navigation App",
      description:
        "A mobile app that helps students navigate the campus efficiently. Get directions to classrooms, labs, and facilities.",
      image:
        "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Study Group Matcher",
      description:
        "Web platform that matches students with similar interests and study preferences to form effective study groups.",
      image:
        "https://images.unsplash.com/photo-1616587891945-94053c3ad1e6?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Event Attendance System",
      description:
        "QR-code based attendance tracking system for club events with analytics dashboard for event organizers.",
      image:
        "https://images.unsplash.com/photo-1635776062253-57c4d470ce41?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="events" className="relative py-20 px-6 md:px-12 bg-[#0c1629] overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Enhanced Header with Staggered Animations */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold text-white mb-4 transform transition-all duration-1000 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <span className="inline-block animate-fade-in-up">Our</span>{" "}
            <span className="inline-block animate-fade-in-up bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent" style={{animationDelay: '0.2s'}}>
              Upcoming
            </span>{" "}
            <span className="inline-block animate-fade-in-up relative" style={{animationDelay: '0.4s'}}>
              Events
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
            </span>
          </h2>
          
          <p className={`text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg transform transition-all duration-1000 hover:text-gray-300 ${
            headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`} style={{transitionDelay: '0.3s'}}>
            Explore some of the{" "}
            <span className="text-blue-300 font-medium hover:text-blue-200 transition-colors duration-300">
              innovative projects
            </span>{" "}
            and events our members are working on.
          </p>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center mt-6 space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400/50 to-blue-300/50"></div>
            <div className="w-3 h-3 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-blue-300/50 to-blue-400/50"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <EventCard
              key={index}
              index={index}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>

        {/* Enhanced CTA Button */}
        <div className="text-center">
          <Link
            href="/projects"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/20 to-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-400 hover:text-white hover:border-blue-300 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 transform"
          >
            <span className="font-medium">View All Projects</span>
            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Button Glow Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
          </Link>
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
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-10px) scale(1.2);
            opacity: 0.8;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        
        .animate-float-particle {
          animation: float-particle 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default EventsSection;