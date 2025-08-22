import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import JoinUsFormSection from "@/components/joinUs/JoinUsFormSection";
import React from "react";

function page() {
  return (
    <div className="bg-[#0F172A] text-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen px-6 lg:px-16">
        <div className="max-w-5xl w-full px-6 lg:px-16 mx-auto">
          <div className="flex flex-col items-start justify-start mt-6">
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-2">
              Have a question or idea?
            </p>
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Join With Us
            </h1>
          </div>
        </div>

        {/* Form Wrapper */}
        <JoinUsFormSection />
      </section>

      <Footer />
    </div>
  );
}

export default page;
