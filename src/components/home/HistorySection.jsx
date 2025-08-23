"use client";
import React from "react";

const HistorySection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#0c1629]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Journey
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Since <span className="text-blue-400 font-semibold">2018</span>, the Microsoft Student Club has been a catalyst for student growth—helping aspiring technologists explore innovation, sharpen their skills, and build lasting connections that extend far beyond graduation.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
