"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, FileText, User } from "lucide-react";
import BackgroundContainer from "@/components/common/BackgroundContainer";
import { submitJoinForm } from "@/apis";
import ToastUtils from "@/utils/toastUtils";
import { joinUsSchema1, joinUsSchema2 } from "@/types/joinUs";
import { useSearchParams } from "next/navigation";

/* ---------- Reusable Fields ---------- */

const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
  error = "",
  maxLength,
  pattern,
}) => {
  const getAutoComplete = (inputType) => {
    if (inputType === "email") {
      return "email";
    }
    if (inputType === "tel") {
      return "tel";
    }
    return "off";
  };

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-slate-900 dark:text-white text-sm sm:text-base font-medium mb-2"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
        pattern={pattern}
        className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border transition-all duration-200
          bg-white text-slate-900 border-slate-300 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400
          dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:shadow-none
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
        required={required}
        autoComplete={getAutoComplete(type)}
      />
      {error && (
        <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>
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
      className="block text-slate-900 dark:text-white text-sm sm:text-base font-medium mb-2"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={id}
      name={id}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border resize-y min-h-[80px] transition-all duration-200
        bg-white text-slate-900 border-slate-300 shadow-sm
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400
        dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:shadow-none
        ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
      required={required}
    />
    {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
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
      className="block text-sm sm:text-base font-medium text-slate-900 dark:text-white mb-2"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <div className="relative">
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`w-full px-3 sm:px-4 py-3 sm:py-3.5 text-sm sm:text-base rounded-lg border appearance-none transition-all duration-200
          bg-white text-slate-900 border-slate-300 shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-400
          dark:bg-slate-900 dark:text-white dark:border-slate-700 dark:shadow-none
          ${error ? "border-red-500 focus:ring-red-500 focus:border-red-500" : ""}`}
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400 dark:text-slate-500">
        ▼
      </span>
    </div>
    {error && <p className="text-red-500 text-xs sm:text-sm mt-1">{error}</p>}
  </div>
);

/* ---------- Progress / Step Indicator ---------- */

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-blue-500">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};

const StepIndicator = ({ currentStep, totalSteps }) => (
  <div className="flex justify-center items-center mb-8">
    {[...Array(totalSteps)].map((_, index) => (
      <React.Fragment key={index}>
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
            index + 1 <= currentStep
              ? "bg-blue-600 border-blue-600 text-white"
              : "bg-transparent border-slate-300 text-slate-500 dark:border-slate-600 dark:text-slate-400"
          }`}
        >
          {index + 1 === 1 ? <User size={20} /> : <FileText size={20} />}
        </div>
        {index < totalSteps - 1 && (
          <div
            className={`w-16 h-0.5 transition-all duration-300 ${
              index + 1 < currentStep ? "bg-blue-600" : "bg-slate-300 dark:bg-slate-700"
            }`}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

/* ---------- Main Form Section ---------- */

const JoinUsFormSection = () => {
  const searchParams = useSearchParams();
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

  const validateMobile = (mobile) => {
    if (!mobile) {
      return "Mobile number is required";
    }

    const cleanMobile = mobile.replace(/[\s-]/g, "");
    const mobileRegex = /^0[1-9]\d{8}$/;

    if (!mobileRegex.test(cleanMobile)) {
      return "Invalid format (e.g., 0771234567)";
    }
    return "";
  };

  const handleMobileChange = (e) => {
    let mobile = e.target.value;
    mobile = mobile.replace(/\D/g, "").slice(0, 10);

    setFormData((prev) => ({ ...prev, mobile }));

    if (mobile) {
      const mobileError = validateMobile(mobile);
      setErrors((prev) => ({ ...prev, mobile: mobileError }));
    } else {
      setErrors((prev) => ({ ...prev, mobile: "" }));
    }
  };

  // Auto-fill from URL params
  useEffect(() => {
    const fullName = searchParams.get("fullName");
    const email = searchParams.get("email");
    const yearOfStudy = searchParams.get("yearOfStudy");

    if (fullName || email || yearOfStudy) {
      setFormData((prev) => ({
        ...prev,
        ...(fullName && { fullName }),
        ...(email && { email }),
        ...(yearOfStudy && { academicYear: yearOfStudy }),
      }));
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateStep1 = async () => {
    try {
      const mobileError = validateMobile(formData.mobile);
      if (mobileError) {
        return { mobile: mobileError };
      }

      await joinUsSchema1.validate(formData, { abortEarly: false });
      return {};
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      return validationErrors;
    }
  };

  const validateStep2 = async () => {
    try {
      await joinUsSchema2.validate(formData, { abortEarly: false });
      return {};
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      return validationErrors;
    }
  };

  const handleNext = async () => {
    const validationErrors = await validateStep1();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setCurrentStep(2);
  };

  const handleBack = () => setCurrentStep(1);

  const prepareSubmissionData = () => ({
    studentId: formData.studentId.trim(),
    name: formData.fullName.trim(),
    email: formData.email.trim(),
    contactNumber: formData.mobile.trim(),
    currentAcademicYear: formData.academicYear,
    selfIntroduction: formData.selfIntroduction.trim(),
    reasonForJoin: formData.whyJoin.trim(),
    linkedIn: formData.linkedIn.trim() || "",
    gitHub: formData.github.trim() || "",
    blog: formData.blogPage.trim() || "",
    experiences: formData.volunteeringExperience.trim() || "",
    challenges: formData.challengeSolved.trim() || "",
    goal: formData.futureVision.trim() || "",
    skillsAndTalents: formData.skills.trim()
      ? formData.skills
          .split(",")
          .map((skill) => skill.trim())
          .filter((skill) => skill)
      : [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = await validateStep2();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      const submissionData = prepareSubmissionData();
      await submitJoinForm(submissionData);
      ToastUtils.success("Application submitted successfully!");
      setFormData(initialFormState);
      setCurrentStep(1);
    } catch (_error) {
      ToastUtils.warn("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderStepContent = () => {
    if (currentStep === 1) {
      return (
        <>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
              Basic Information
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
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
              maxLength={10}
              pattern="[0-9]{10}"
              type="tel"
              value={formData.mobile}
              onChange={handleMobileChange}
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
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900"
            >
              <span>Next Step</span>
              <ChevronRight size={20} className="text-white" />
            </button>
          </div>
        </>
      );
    }

    return (
      <>
        <div className="text-center mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-2">
            Tell Us More About You
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Share your experiences, interests, and goals with us
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
              required
              error={errors.linkedIn}
            />

            <InputField
              id="github"
              label="GitHub Profile"
              type="url"
              value={formData.github}
              onChange={handleInputChange}
              placeholder="https://github.com/yourusername"
              required
              error={errors.github}
            />
          </div>

          <InputField
            id="blogPage"
            label="Blog Page"
            type="url"
            value={formData.blogPage}
            onChange={handleInputChange}
            placeholder="https://yourblog.com"
            error={errors.blogPage}
          />

          <TextareaField
            id="skills"
            label="Skills & Talents"
            value={formData.skills}
            onChange={handleInputChange}
            placeholder="Programming, Web Development, UI/UX Design, Public Speaking, Content Writing, Video Editing (comma separated)"
            required
            error={errors.skills}
          />

          <TextareaField
            id="volunteeringExperience"
            label="Leadership & Volunteering Experience"
            value={formData.volunteeringExperience}
            onChange={handleInputChange}
            placeholder="Any leadership roles or volunteering experience..."
            error={errors.volunteeringExperience}
          />

          <TextareaField
            id="challengeSolved"
            label="Challenge & Solution"
            value={formData.challengeSolved}
            onChange={handleInputChange}
            placeholder="Describe a challenge you faced and how you solved it..."
            error={errors.challengeSolved}
          />

          <TextareaField
            id="futureVision"
            label="Future Vision"
            value={formData.futureVision}
            onChange={handleInputChange}
            placeholder="Where do you see yourself in 5 years?"
            required
            error={errors.futureVision}
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <button
            type="button"
            onClick={handleBack}
            className="order-2 sm:order-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-200 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium text-slate-900 shadow-sm transition-all duration-300 hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-100 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700 dark:focus:ring-slate-600 dark:focus:ring-offset-slate-900"
          >
            <ChevronLeft size={20} />
            Back
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            onClick={handleSubmit}
            className={`order-1 sm:order-2 inline-flex min-w-[160px] items-center justify-center gap-2 rounded-xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-slate-500 cursor-not-allowed"
                : "bg-[#2E6EFA] hover:bg-[#2B5BBF] shadow-lg hover:shadow-xl"
            } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900`}
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
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
    <section className="join-us-section bg-slate-100 dark:bg-primary-bg min-h-screen py-section-y px-section-x sm:px-2 sm:py-6">
      <BackgroundContainer>
        <div className="join-us-panel bg-white/95 dark:bg-[#0F172A]/90 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-slate-900 dark:text-white">
                Application Form
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                We&apos;ll need a few details to get you started!
              </p>
            </div>

            <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
            <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

            <div className="space-y-6">{renderStepContent()}</div>
          </div>
        </div>
      </BackgroundContainer>
    </section>
  );
};

export default JoinUsFormSection;