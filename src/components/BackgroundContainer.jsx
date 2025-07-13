"use client";
import React from 'react';

const BackgroundContainer = ({ children, className = "" }) => {
  return (
    <section className="bg-[#0F172A] min-h-screen pb-20">
      <div
        className={`bg-custom-radial bg-no-repeat rounded-[53px] lg:mx-20 py-20 px-16 z-0 ${className}`}
        style={{
          backgroundImage: 'url("/assets/contactBgImage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundContainer;