import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#101b30] rounded-lg shadow-lg p-6 text-center hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default FeatureCard;
