"use client";
import React from "react";
import FeatureCard from "./FeatureCard";
import {
  Users2Icon,
  LightbulbIcon,
  GraduationCapIcon,
} from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users2Icon className="w-12 h-12 text-blue-500" />,
      title: "Student-Led Community",
      description:
        "A community of passionate students from diverse backgrounds united by a shared passion for technology.",
    },
    {
      icon: <LightbulbIcon className="w-12 h-12 text-teal-500" />,
      title: "Innovation Hub",
      description:
        "A platform for creative experimentation, fostering innovation, and turning ideas into reality.",
    },
    {
      icon: <GraduationCapIcon className="w-12 h-12 text-green-500" />,
      title: "Learning Environment",
      description:
        "We bridge academic learning and industry needs through hands-on workshops and real-world projects.",
    },
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-[#0c1629] text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Who We Are?</h2>
        <p className="text-gray-300 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          MS Club of SLIIT is a student-driven community supporting peers in becoming impactful IT professionals. We promote open learning and innovation to empower members to grow and lead together.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
