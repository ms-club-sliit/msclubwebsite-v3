"use client";
import React from 'react';

const BackgroundContainer = ({ children, className = "" }) => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      <div
        className={`bg-secondary-bg bg-no-repeat rounded-[32px] px-4 py-8 sm:rounded-[40px] sm:px-6 sm:py-12 md:rounded-[53px] md:px-10 md:py-16 lg:mx-4 xl:mx-12 2xl:mx-20 lg:px-16 lg:py-20 z-0 ${className}`}
      >
        {children}
      </div>
    </section>
  );
};

export default BackgroundContainer;