"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, User, FileText } from "lucide-react";
import BackgroundContainer from "@/components/BackgroundContainer";

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
}) => {
  const getAutoComplete = (inputType) => {
    if (inputType === "email") return "email";
    if (inputType === "tel") return "tel";
    return "off";
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-white text-sm sm:text-base font-medium mb-2"
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white text-sm sm:text-base border ${
          error ? 'border-red-500' : 'border-gray-600'
        } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200`}
        required={required}
        autoComplete={getAutoComplete(type)}
      />
      {error && (
        <p className="text-red-400 text-xs sm:text-sm mt-1">{error}</p>
      )}
    </div>
  );
};

const TextareaField = ({
  id,
  label,
  rows = 3,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-white text-sm sm:text-base font-medium mb-2"
    >
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white text-sm sm:text-base border ${
        error ? 'border-red-500' : 'border-gray-600'
      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-y min-h-[80px]`}
      required={required}
    />
    {error && (
      <p className="text-red-400 text-xs sm:text-sm mt-1">{error}</p>
    )}
  </div>
);

const SelectField = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
  error = "",
}) => (
  <div>
    <label
      htmlFor={id}
      className="block text-sm sm:text-base font-medium text-white mb-2"
    >
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <select
      id={id}
      name={id}
      value={value}
      onChange={onChange}
      className={`w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white text-sm sm:text-base border ${
        error ? 'border-red-500' : 'border-gray-600'
      } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')]`}
      required={required}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
    {error && (
      <p className="text-red-400 text-xs sm:text-sm mt-1">{error}</p>
    )}
  </div>
);

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-gray-300">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-blue-400">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const StepIndicator = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex justify-center items-center mb-8">
      {[...Array(totalSteps)].map((_, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
              index + 1 <= currentStep
                ? 'bg-blue-600 border-blue-600 text-white'
                : 'bg-transparent border-gray-600 text-gray-400'
            }`}
          >
            {index + 1 === 1 ? (
              <User size={20} />
            ) : (
              <FileText size={20} />
            )}
          </div>
          {index < totalSteps - 1 && (
            <div
              className={`w-16 h-0.5 transition-all duration-300 ${
                index + 1 < currentStep ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

const JoinUsFormSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 2;

  const academicOptions = [
    "1st Year - Semester 1",
    "1st Year - Semester 2",
    "2nd Year - Semester 1",
    "2nd Year - Semester 2",
    "3rd Year - Semester 1",
    "3rd Year - Semester 2",
    "4th Year - Semester 1",
    "4th Year - Semester 2",
  ];

  const initialFormState = {
    studentId: "",
    fullName: "",
    email: "",
    mobile: "",
    academicYear: "",
    selfIntroduction: "",
    whyJoin: "",
    linkedIn: "",
    github: "",
    blogPage: "",
    volunteeringExperience: "",
    challengeSolved: "",
    futureVision: "",
    skills: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    const step1Fields = [
      "studentId",
      "fullName",
      "email",
      "mobile",
      "academicYear",
      "selfIntroduction",
    ];

    step1Fields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a 10-digit mobile number.";
    }

    return newErrors;
  };

  const validateStep2 = () => {
    const newErrors = {};
    const step2RequiredFields = ["whyJoin"];

    step2RequiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field is required.";
      }
    });

    return newErrors;
  };

  const handleNext = () => {
    const validationErrors = validateStep1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateStep2();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Submitting Data:", formData);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      alert("Application submitted successfully!");

      setFormData(initialFormState);
      setCurrentStep(1);
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
              Basic Information
            </h3>
            <p className="text-gray-400 text-sm sm:text-base">
              Let&apos;s start with your basic details
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <InputField
              id="studentId"
              label="SLIIT Student ID"
              value={formData.studentId}
              onChange={handleInputChange}
              placeholder="IT21012345"
              required
              error={errors.studentId}
            />

            <InputField
              id="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Tharindu Jayasingha"
              required
              error={errors.fullName}
            />

            <InputField
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="tharindu@example.com"
              required
              error={errors.email}
            />

            <InputField
              id="mobile"
              label="Mobile Number"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="0771234567"
              required
              error={errors.mobile}
            />

            <SelectField
              id="academicYear"
              label="Academic Year"
              options={academicOptions}
              value={formData.academicYear}
              onChange={handleInputChange}
              required
              error={errors.academicYear}
            />

            <TextareaField
              id="selfIntroduction"
              label="Self Introduction"
              rows={4}
              value={formData.selfIntroduction}
              onChange={handleInputChange}
              placeholder="Tell us about yourself, your interests, and background..."
              required
              error={errors.selfIntroduction}
          />

          </div>

          <div className="flex justify-end mt-8">
            <button
              type="button"
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              Next Step
              <ChevronRight size={20} />
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">
            Tell Us More About You
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Share your story and aspirations with us
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          
          <TextareaField
            id="whyJoin"
            label="Why Join MS Club?"
            rows={3}
            value={formData.whyJoin}
            onChange={handleInputChange}
            placeholder="What motivates you to join our club?"
            required
            error={errors.whyJoin}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              id="linkedIn"
              label="LinkedIn Profile"
              type="url"
              value={formData.linkedIn}
              onChange={handleInputChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />

            <InputField
              id="github"
              label="GitHub Profile"
              type="url"
              value={formData.github}
              onChange={handleInputChange}
              placeholder="https://github.com/yourusername"
            />
          </div>

          <InputField
            id="blogPage"
            label="Blog Page"
            type="url"
            value={formData.blogPage}
            onChange={handleInputChange}
            placeholder="https://yourblog.com"
          />

          <TextareaField
            id="skills"
            label="Skills & Talents"
            value={formData.skills}
            onChange={handleInputChange}
            placeholder="Programming languages, soft skills, hobbies..."
          />

          <TextareaField
            id="volunteeringExperience"
            label="Leadership & Volunteering Experience"
            value={formData.volunteeringExperience}
            onChange={handleInputChange}
            placeholder="Any leadership roles or volunteering experience..."
          />

          <TextareaField
            id="challengeSolved"
            label="Challenge & Solution"
            value={formData.challengeSolved}
            onChange={handleInputChange}
            placeholder="Describe a challenge you faced and how you solved it..."
          />

          <TextareaField
            id="futureVision"
            label="Future Vision"
            value={formData.futureVision}
            onChange={handleInputChange}
            placeholder="Where do you see yourself in 5 years?"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 order-2 sm:order-1"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${
              isSubmitting
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#2E6EFA] hover:bg-[#2B5BBF] shadow-lg hover:shadow-xl"
            } text-white font-medium py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 flex items-center justify-center gap-2 min-w-[160px] order-1 sm:order-2`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Submitting...
              </>
            ) : (
              "Join the Club"
            )}
          </button>
        </div>
      </>
    );
  };

  return (
    <section className="bg-primary-bg min-h-screen py-section-y px-section-x sm:px-2 sm:py-6">
      <BackgroundContainer>
        <div className="bg-[#0F172A]/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 bg-clip-text">
                Application Form
              </h2>
              <p className="text-gray-400 text-sm sm:text-base">
                We&apos;ll need a few details to get you started!
              </p>
            </div>

            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

            <div className="space-y-6">
              {renderStepContent()}
            </div>
          </div>
        </div>
      </BackgroundContainer>
    </section>
  );
};

export default JoinUsFormSection;