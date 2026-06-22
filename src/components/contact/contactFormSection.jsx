"use client";

import React from "react";

const ContactForm = () => {
    return (
        <>
            <h2 className="text-2xl font-semibold mb-6 text-left text-white">
                Contact Us
            </h2>

            <div className="space-y-5 w-full">

                <div className="grid grid-cols-3 gap-5 w-full">

                    {/* Name */}
                    <div>
                        <label className="block text-sm mb-1 text-white">Name</label>
                        <input
                            type="text"
                            placeholder="Your name"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm mb-1 text-white">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Registration Number */}
                    <div>
                        <label className="block text-sm mb-1 text-white">Registration Number</label>
                        <input
                            type="text"
                            placeholder="Your registration number"
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                </div>

                {/* Message */}
                <div>
                    <label className="block text-sm mb-1 text-white">Message</label>
                    <textarea
                        rows={8}
                        placeholder="Write your message..."
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    />
                </div>

                {/* Button */}
                <div className="flex justify-end">
                    <button className="w-48 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition">
                        Send Message
                    </button>
                </div>

            </div>
        </>
    );
};

export default ContactForm;