import React from "react";
import { Users2, Lightbulb, GraduationCap } from "lucide-react";
import BackgroundContainer from "./BackgroundContainer";

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
    <BackgroundContainer>
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
    </BackgroundContainer>
  );
};

export default AboutSection;