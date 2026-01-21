import React from "react";
import { Users2, Lightbulb, GraduationCap } from "lucide-react";
import BackgroundContainer from "../common/BackgroundContainer";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="text-center p-5 sm:p-6 rounded-lg bg-[#1a2942] border border-[#2d3f5f] hover:border-[#3d4f6f] transition-all duration-300 h-full">
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className="p-2.5 sm:p-3 rounded-full bg-[#0f1a2e] border border-[#2d3f5f]">
          {icon}
        </div>
      </div>
      <h3 className="mb-2 sm:mb-3 text-base sm:text-lg font-semibold text-white">{title}</h3>
      <p className="text-xs sm:text-sm leading-relaxed text-gray-300">{description}</p>
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
    <BackgroundContainer>
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Content box */}
        <div className="bg-[#0f1a2e]/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl shadow-black/20">
          {/* Header */}
          <div className="mb-8 sm:mb-10 md:mb-12 text-center">
            <h2 className="mb-4 sm:mb-5 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Who We Are?
            </h2>
            <p className="max-w-4xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed text-gray-300 px-2 sm:px-4">
              MS Club of SLIIT is a community group to support students in their quest of being a significant IT Professional. 
              We encourage a peer-to-peer learning environment to facilitate an organic growth of knowledge. Our members 
              are volunteers who aim to provide value back to their community.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
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
          <div className="text-center px-2 sm:px-4">
            <p className="max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-gray-300">
              Since 2018, the Microsoft Student Club has been empowering students to explore 
              technology, develop skills, and build connections that last beyond graduation.
            </p>
          </div>
        </div>
      </div>
    </BackgroundContainer>
  );
};

export default AboutSection;