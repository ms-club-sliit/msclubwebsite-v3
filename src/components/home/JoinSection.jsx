"use client";

import React, { useState } from "react";
import { CheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const JoinSection = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    yearOfStudy: ""
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    yearOfStudy: ""
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      return "Email is required";
    }
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    setErrors(prev => ({ ...prev, email: "" }));
  };

  const handleFullNameChange = (e) => {
    const fullName = e.target.value;
    setFormData(prev => ({ ...prev, fullName }));
    setErrors(prev => ({ ...prev, fullName: "" }));
  };

  const handleYearChange = (e) => {
    const yearOfStudy = e.target.value;
    setFormData(prev => ({ ...prev, yearOfStudy }));
    setErrors(prev => ({ ...prev, yearOfStudy: "" }));
  };

  const validateForm = () => {
    const newErrors = {
      fullName: "",
      email: "",
      yearOfStudy: ""
    };

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    if (!formData.yearOfStudy) {
      newErrors.yearOfStudy = "Please select your year of study";
    }

    setErrors(newErrors);
    return !newErrors.fullName && !newErrors.email && !newErrors.yearOfStudy;
  };

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
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              
              if (!validateForm()) {
                return;
              }
              
              const params = new URLSearchParams();
              if (formData.fullName) params.set('fullName', formData.fullName);
              if (formData.email) params.set('email', formData.email);
              if (formData.yearOfStudy) params.set('yearOfStudy', formData.yearOfStudy);
              router.push(`/join-us?${params.toString()}`);
            }}>
              <div>
                <label className="block text-sm text-[#8898aa] mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleFullNameChange}
                  className={`w-full bg-transparent border ${errors.fullName ? 'border-red-500' : 'border-[#8898aa]'} rounded-md px-4 py-3 focus:outline-none ${errors.fullName ? 'focus:border-red-500' : 'focus:border-blue-500'} text-base`}
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-[#8898aa] mb-1">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleEmailChange}
                  className={`w-full bg-transparent border ${errors.email ? 'border-red-500' : 'border-[#8898aa]'} rounded-md px-4 py-3 focus:outline-none ${errors.email ? 'focus:border-red-500' : 'focus:border-blue-500'} text-base`}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-sm text-[#8898aa] mb-1">
                  Year of Study <span className="text-red-400">*</span>
                </label>
                <select
                  value={formData.yearOfStudy}
                  onChange={handleYearChange}
                  className={`w-full bg-transparent border ${errors.yearOfStudy ? 'border-red-500' : 'border-[#8898aa]'} rounded-md px-4 py-3 pr-10 focus:outline-none ${errors.yearOfStudy ? 'focus:border-red-500' : 'focus:border-blue-500'} text-base appearance-none bg-no-repeat bg-[center_right_1rem] bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')] [&>option]:bg-[#1e293b] [&>option]:text-white`}
                >
                  <option value="" className="bg-[#1e293b] text-gray-400">Select Year</option>
                  <option value="1st Year - Semester 1" className="bg-[#1e293b] text-white">1st Year - Semester 1</option>
                  <option value="1st Year - Semester 2" className="bg-[#1e293b] text-white">1st Year - Semester 2</option>
                  <option value="2nd Year - Semester 1" className="bg-[#1e293b] text-white">2nd Year - Semester 1</option>
                  <option value="2nd Year - Semester 2" className="bg-[#1e293b] text-white">2nd Year - Semester 2</option>
                  <option value="3rd Year - Semester 1" className="bg-[#1e293b] text-white">3rd Year - Semester 1</option>
                  <option value="3rd Year - Semester 2" className="bg-[#1e293b] text-white">3rd Year - Semester 2</option>
                  <option value="4th Year - Semester 1" className="bg-[#1e293b] text-white">4th Year - Semester 1</option>
                  <option value="4th Year - Semester 2" className="bg-[#1e293b] text-white">4th Year - Semester 2</option>
                </select>
                {errors.yearOfStudy && (
                  <p className="text-red-400 text-xs mt-1">{errors.yearOfStudy}</p>
                )}
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