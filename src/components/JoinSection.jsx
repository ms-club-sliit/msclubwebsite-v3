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
      className="bg-[#0f172a] text-white py-16 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Ready to join our tech community?</h2>
          <p className="text-[#8898aa] mb-8">
            Becoming a member is free and get access to exclusive workshops,
            networking opportunities, and resources to boost your tech career.
          </p>
          <ul className="space-y-4 mb-8">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1" />
                <span className="text-[#8898aa]">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section (Form) */}
        <div className="md:w-1/2 bg-[#1e293b] p-8 rounded-lg">
          <h3 className="text-xl font-semibold mb-6">Apply to Join</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-[#8898aa] mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-[#8898aa] mb-1">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm text-[#8898aa] mb-1">Year of Study</label>
              <select
                className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option>First Year</option>
                <option>Second Year</option>
                <option>Third Year</option>
                <option>Fourth Year</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-[#0d6efd] hover:bg-[#0b5ed7] text-white py-2 rounded-md transition"
            >
              Join the Club
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;