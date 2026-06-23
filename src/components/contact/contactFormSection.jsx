"use client";
import React, { useState, useRef, useEffect } from "react";
import { submitContactForm } from "@/apis";

const ContactForm = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState("");
    const [errors, setErrors] = useState({}); //for feild validation
    const [error, setError] = useState(""); //for API failures
    const [formData, setFormData] = useState({ name: "", email: "", regNo: "", subject: "", message: "", });
    const successTimeout = useRef(null); //for timeout the sucessmessege

    // handling input changes 
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    // validations 
    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim() || formData.name.length < 3) {
            newErrors.name = "Name must be at least 3 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.regNo.trim() || formData.regNo.length < 10) {
            newErrors.regNo = "Invalid registration number";
        }

        if (!formData.subject.trim() || formData.subject.length < 5) {
            newErrors.subject = "Subject must be at least 5 characters";
        }

        if (!formData.message.trim() || formData.message.length < 10) {
            newErrors.message = "Message must be at least 10 characters";
        }

        return newErrors;
    };

    // submit handler 
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) {return};

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            try {
                setIsSubmitting(true);

                // sanitizing payload before sending 
                const cleanData = {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    regNo: formData.regNo.trim(),
                    subject: formData.subject.trim(),
                    message: formData.message.trim(),
                };

                await submitContactForm(cleanData);

                setFormData({
                    name: "",
                    email: "",
                    regNo: "",
                    subject: "",
                    message: "",
                });

                setSuccess("Message sent successfully!");
                setError("");
                setErrors({});

                // setting the sucess timeout 
                successTimeout.current = setTimeout(() => {
                    setSuccess("");
                }, 3000);

            } catch (err) {
                console.error("Contact form error:", err);

                setError("Failed to send message. Please try again.");
                setSuccess("");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    // clearing the timeout 
    useEffect(() => {
        return () => {
            if (successTimeout.current) {
                clearTimeout(successTimeout.current);
            }
        };
    }, []);

    return (
        <>
            <h2 className="text-2xl font-semibold mb-6 text-left text-white">
                Contact Us
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 w-full">

                <div className="space-y-5 w-full">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">

                        {/* Name */}
                        <div>
                            <label className="block text-sm mb-1 text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-gray-800 border text-white border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm mb-1 text-white">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full px-4 py-3 bg-gray-800 border text-white border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}
                        </div>

                        {/* Registration Number */}
                        <div>
                            <label className="block text-sm mb-1 text-white">Registration Number</label>
                            <input
                                type="text"
                                name="regNo"
                                value={formData.regNo}
                                onChange={handleChange}
                                placeholder="Your registration number"
                                className="w-full px-4 py-3 bg-gray-800 border text-white border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.regNo && <p className="text-red-400 text-sm">{errors.regNo}</p>}
                        </div>

                    </div>

                    {/* Subject */}
                    <div>
                        <label className="block text-sm mb-1 text-white">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="w-full px-4 py-3 bg-gray-800 border text-white border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.subject && <p className="text-red-400 text-sm">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block text-sm mb-1 text-white">Message</label>
                        <textarea
                            rows={8}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className="w-full px-4 py-3 bg-gray-800 border text-white border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        />
                        {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                    </div>

                    {/* Button */}
                    <div className="flex flex-col items-end gap-2">

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-48 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-all duration-300 active:scale-[0.98]"
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                    Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>

                        {success && (
                            <p className="text-green-400 text-sm">{success}</p>

                        )}

                        {error && (
                            <p className="text-red-400 text-sm">{error}</p>
                        )}

                    </div>

                </div>

            </form>
        </>
    );
};

export default ContactForm;