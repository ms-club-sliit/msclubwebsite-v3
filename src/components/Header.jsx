"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative py-4 px-6 md:px-12 bg-gray-900 shadow-md">
      <div className="flex items-center">
        <div className="flex items-center mr-auto">
          <Image
            src="/ms_club_logo_light.png"
            alt="MS Club SLIIT Logo"
            width={40}
            height={40}
            className="w-auto h-10"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 mr-8">
          <Link href="/" className="text-white hover:text-blue-400 transition">
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-blue-400 transition"
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="text-white hover:text-blue-400 transition"
          >
            Blogs
          </Link>
          <Link
            href="/events"
            className="text-white hover:text-blue-400 transition"
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="text-white hover:text-blue-400 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Join Us Button */}
        <Link
          href="/join-us"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
        >
          Join Us
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col items-center justify-center w-8 h-8 ml-auto"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : "mb-1"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "mb-1"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute md:hidden mt-4 border-t border-gray-700 bg-gray-900 w-full z-20 transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ top: '100%' }}
      >
        <nav className="pt-4 pb-2 space-y-2">
          <Link
            href="/"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/events"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/contact"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/join-us"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition mt-4 w-fit"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;