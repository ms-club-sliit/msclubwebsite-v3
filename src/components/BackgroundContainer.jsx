"use client";
import React from 'react';

const BackgroundContainer = ({ children, className = "" }) => {
  return (
    <section className="min-h-screen pb-20">
      <div
        className={`bg-secondary-bg bg-no-repeat rounded-[32px] px-4 py-8 sm:rounded-[53px] sm:px-10 sm:py-16 lg:mx-20 lg:px-16 lg:py-20 z-0 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundContainer;