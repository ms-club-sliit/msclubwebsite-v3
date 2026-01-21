"use client";
import React from "react";

const HistorySection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0c1629]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 md:mb-6">
          Our Journey
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-2 sm:px-4">
          Since <span className="text-blue-400 font-semibold">2018</span>, the Microsoft Student Club has been a catalyst for student growth—helping aspiring technologists explore innovation, sharpen their skills, and build lasting connections that extend far beyond graduation.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;
