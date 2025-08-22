"use client";

import React from "react";
import { CheckIcon } from "lucide-react";

const JoinSection = () => {
  const benefits = [
    "Hands-on workshops and training",
    "Networking with industry professionals",
    "Exclusive access to resources and opportunities",
  ];

  return (
    <section
      id="join"
      className="bg-[#0f172a] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to join our tech community?</h2>
          <p className="text-[#8898aa] mb-6 sm:mb-8">
            Becoming a member is free and get access to exclusive workshops,
            networking opportunities, and resources to boost your tech career.
          </p>
          <ul className="space-y-4 mb-8 inline-block text-left">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                <span className="text-[#8898aa]">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Form) */}
        <div className="w-full md:w-1/2">
          <div className="bg-[#1e293b] p-6 sm:p-8 rounded-lg max-w-md mx-auto">
            <h3 className="text-xl font-semibold mb-6 text-center md:text-left">Apply to Join</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-[#8898aa] mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 text-base"
                />
              </div>
              <div>
                <label className="block text-sm text-[#8898aa] mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 text-base"
                />
              </div>
              <div>
                <label className="block text-sm text-[#8898aa] mb-1">Year of Study</label>
                <select
                  className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 text-base appearance-none bg-no-repeat bg-right bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')]"
                >
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Fourth Year</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#0d6efd] hover:bg-[#0b5ed7] text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg text-base font-medium mt-2"
              >
                Join the Club
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;