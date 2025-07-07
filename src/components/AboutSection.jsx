import React from "react";
import { Users2, Lightbulb, GraduationCap } from "lucide-react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 rounded-lg bg-[#1a2942] border border-[#2d3f5f] hover:border-[#3d4f6f] transition-all duration-300">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-[#0f1a2e] border border-[#2d3f5f]">
          {icon}
        </div>
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-gray-300">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const features = [
    {
      icon: <Users2 className="w-6 h-6 text-blue-400" />,
      title: "Student-Led Community",
      description:
        "Founded by students, for students. We're a diverse group from various disciplines united by our passion for technology.",
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-teal-400" />,
      title: "Innovation Hub",
      description:
        "We provide a platform for creative problem-solving, experimentation, and bringing innovative ideas to life.",
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-400" />,
      title: "Learning Environment",
      description:
        "We bridge the gap between academic learning and industry requirements through hands-on workshops and projects.",
    },
  ];

  return (
    <section className="relative py-16 px-6 md:px-12 bg-[#0c1629] text-white min-h-screen flex items-center">
      {/* Left side decorative pattern */}
      <div className="absolute top-0 left-0 w-1/4 h-full opacity-10">
        <svg className="w-full h-full" viewBox="0 0 300 600" fill="none">
          {/* Vertical lines pattern */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.3">
            <line x1="50" y1="0" x2="50" y2="600" />
            <line x1="100" y1="0" x2="100" y2="600" />
            <line x1="150" y1="0" x2="150" y2="600" />
            <line x1="200" y1="0" x2="200" y2="600" />
          </g>
          
          {/* Horizontal lines pattern */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.2">
            <line x1="0" y1="100" x2="300" y2="100" />
            <line x1="0" y1="200" x2="300" y2="200" />
            <line x1="0" y1="300" x2="300" y2="300" />
            <line x1="0" y1="400" x2="300" y2="400" />
            <line x1="0" y1="500" x2="300" y2="500" />
          </g>
          
          {/* Circuit-like nodes */}
          <g fill="currentColor" opacity="0.4">
            <circle cx="50" cy="150" r="3" />
            <circle cx="100" cy="250" r="3" />
            <circle cx="150" cy="180" r="3" />
            <circle cx="200" cy="320" r="3" />
            <circle cx="50" cy="400" r="3" />
            <circle cx="150" cy="450" r="3" />
          </g>
          
          {/* Connecting lines */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.3">
            <line x1="50" y1="150" x2="100" y2="250" />
            <line x1="100" y1="250" x2="150" y2="180" />
            <line x1="150" y1="180" x2="200" y2="320" />
            <line x1="50" y1="400" x2="150" y2="450" />
          </g>
        </svg>
      </div>
      
      {/* Main content container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Content box */}
        <div className="bg-[#0f1a2e]/20 backdrop-blur-sm rounded-2xl border-l-2 border-t-2 border-[#4a5c7a]/60 p-8 md:p-12 shadow-2xl shadow-black/20">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
              Who We Are?
            </h2>
            <p className="max-w-4xl mx-auto text-base leading-relaxed text-gray-300 md:text-lg">
              MS Club of SLIIT is a community group to support students in their quest of being a significant IT Professional. 
              We encourage a peer-to-peer learning environment to facilitate an organic growth of knowledge. Our members 
              are volunteers who aim to provide value back to their community.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
            {features.map((feature, idx) => (
              <FeatureCard
                key={idx}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* Bottom text */}
          <div className="text-center">
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-gray-300">
              Since 2018, the Microsoft Student Club has been empowering students to explore 
              technology, develop skills, and build connections that last beyond graduation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;