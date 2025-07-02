"use client";
import React from "react";
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#070d18] py-12 px-6 md:px-12 text-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-12">
          {/* Brand Section */}
          <div className="max-w-sm">
            <div className="flex items-center mb-4">
              <img
                src="ms_club_logo_light.png" // Update the path if needed
                alt="MS Club SLIIT Logo"
                className="h-12 w-auto"
              />
            </div>
            <p>
              A student-driven community bridging the gap between undergraduates
              and industry professionals.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="hover:text-white">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Events</a></li>
                <li><a href="#" className="hover:text-white">Team</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Gallery</a></li>
                <li><a href="#" className="hover:text-white">Downloads</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>Email: ms.club@sliit.edu</li>
                <li>Phone: +94 77 123 4567</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} MS Club of SLIIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
