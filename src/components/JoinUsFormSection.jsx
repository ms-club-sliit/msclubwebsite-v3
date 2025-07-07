"use client";
import React, { useState } from "react";
import PropTypes from "prop-types";

// 🔧 Reusable Input
const InputField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  required = false,
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
        className="input-style text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        required={required}
        autoComplete={getAutoComplete(type)}
      />
    </div>
  );
};

// PropTypes for InputField
InputField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

// 🔧 Reusable Textarea
const TextareaField = ({
  id,
  label,
  rows = 3,
  value,
  onChange,
  placeholder = "",
  required = false,
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
      className="input-style text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-y min-h-[80px]"
      required={required}
    />
  </div>
);

// PropTypes for TextareaField
TextareaField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  rows: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
};

// 🔧 Reusable Select
const SelectField = ({
  id,
  label,
  options,
  value,
  onChange,
  required = false,
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
      className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-gray-800 text-white text-sm sm:text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-no-repeat bg-right bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')]"
      required={required}
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

// PropTypes for SelectField
SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

const JoinUsFormSection = () => {
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

  const validate = () => {
    const newErrors = {};
    const requiredFields = [
      "studentId",
      "fullName",
      "email",
      "mobile",
      "academicYear",
      "selfIntroduction",
      "whyJoin",
    ];

    requiredFields.forEach((field) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
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
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong! Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[#0F172A] min-h-screen pb-8 sm:pb-12 lg:pb-20">
      <div
        className="rounded-[20px] sm:rounded-[35px] lg:rounded-[53px] mx-4 sm:mx-8 lg:mx-20 py-8 sm:py-12 lg:py-20 px-4 sm:px-8 lg:px-16 bg-gray-900"
        style={{
          backgroundImage: 'url("/assets/joinusBg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-[#0F172A]/85 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 xl:p-12 shadow-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3">
              Application Form
            </h2>
            <p className="text-gray-400 mb-6 sm:mb-8 text-sm sm:text-base">
              We&apos;ll need a few details to get you started!
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-4 sm:gap-6"
          >
            <InputField
              id="studentId"
              label="SLIIT Student ID"
              value={formData.studentId}
              onChange={handleInputChange}
              placeholder="SLIIT Student ID"
              required
            />
            {errors.studentId && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.studentId}
              </p>
            )}

            <InputField
              id="fullName"
              label="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Full Name"
              required
            />
            {errors.fullName && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.fullName}
              </p>
            )}

            <InputField
              id="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              required
            />
            {errors.email && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.email}
              </p>
            )}

            <InputField
              id="mobile"
              label="Mobile Number"
              type="tel"
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Mobile Number"
              required
            />
            {errors.mobile && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.mobile}
              </p>
            )}

            <SelectField
              id="academicYear"
              label="Academic Year"
              options={academicOptions}
              value={formData.academicYear}
              onChange={handleInputChange}
              required
            />
            {errors.academicYear && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.academicYear}
              </p>
            )}

            <TextareaField
              id="selfIntroduction"
              label="Self Introduction"
              rows={4}
              value={formData.selfIntroduction}
              onChange={handleInputChange}
              placeholder="Tell us about yourself"
              required
            />
            {errors.selfIntroduction && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.selfIntroduction}
              </p>
            )}

            <TextareaField
              id="whyJoin"
              label="Why Join MS Club?"
              rows={3}
              value={formData.whyJoin}
              onChange={handleInputChange}
              placeholder="Why would you like to join?"
              required
            />
            {errors.whyJoin && (
              <p className="text-red-400 text-xs sm:text-sm mt-1">
                {errors.whyJoin}
              </p>
            )}

            <InputField
              id="linkedIn"
              label="LinkedIn Profile Link"
              type="url"
              value={formData.linkedIn}
              onChange={handleInputChange}
              placeholder="LinkedIn URL"
            />
            <InputField
              id="github"
              label="GitHub Profile Link"
              type="url"
              value={formData.github}
              onChange={handleInputChange}
              placeholder="GitHub URL"
            />
            <InputField
              id="blogPage"
              label="Blog Page Link"
              type="url"
              value={formData.blogPage}
              onChange={handleInputChange}
              placeholder="Blog Page URL"
            />

            <TextareaField
              id="volunteeringExperience"
              label="Volunteering/Leadership Experience"
              value={formData.volunteeringExperience}
              onChange={handleInputChange}
              placeholder="Experience details"
            />
            <TextareaField
              id="challengeSolved"
              label="Challenge and Solution"
              value={formData.challengeSolved}
              onChange={handleInputChange}
              placeholder="Share your story"
            />
            <TextareaField
              id="futureVision"
              label="Future Vision"
              value={formData.futureVision}
              onChange={handleInputChange}
              placeholder="Where do you see yourself in 5 years?"
            />
            <InputField
              id="skills"
              label="Skills/Talents"
              value={formData.skills}
              onChange={handleInputChange}
              placeholder="What are your skills?"
            />

            <div className="flex justify-center mt-4 sm:mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed shadow-[0px_4px_6px_-4px_#00A2E833]"
                    : "bg-blue-600 hover:bg-blue-700 shadow-[0px_10px_15px_-3px_#00A2E833] hover:shadow-[0px_12px_20px_-3px_#00A2E844] active:bg-blue-800"
                } text-white font-medium py-3 sm:py-4 px-6 sm:px-8 text-sm sm:text-base rounded-xl transition-all duration-300 w-full sm:w-auto min-w-[200px] touch-manipulation`}
              >
                {isSubmitting ? "Submitting..." : "Join the Club"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUsFormSection;
