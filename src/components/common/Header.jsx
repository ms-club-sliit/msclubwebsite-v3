"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinkClass = (path) =>
  `text-white transition ${
    pathname === path
      ? "border-b-2 border-blue-400"
      : "hover:text-blue-400"
  }`;

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
          <Link href="/" className={navLinkClass("/")}>Home</Link>
          <Link href="/about" className={navLinkClass("/about")}>About</Link>
          <Link href="/blogs" className={navLinkClass("/blogs")}>Blogs</Link>
          <Link href="/events" className={navLinkClass("/events")}>Events</Link>
          <Link href="/contact" className={navLinkClass("/contact")}>Contact</Link>
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
        className={`absolute md:hidden left-0 right-0 border-t border-gray-700 bg-gray-900 z-20 transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        style={{ top: '100%' }}
      >
        <nav className="px-6 py-3 space-y-1">
          <Link
            href="/"
            className={`block text-white hover:bg-gray-800 transition-all py-3 px-4 rounded-lg ${
              pathname === "/" ? "bg-gray-800 text-blue-400" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`block text-white hover:bg-gray-800 transition-all py-3 px-4 rounded-lg ${
              pathname === "/about" ? "bg-gray-800 text-blue-400" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className={`block text-white hover:bg-gray-800 transition-all py-3 px-4 rounded-lg ${
              pathname === "/blogs" ? "bg-gray-800 text-blue-400" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/events"
            className={`block text-white hover:bg-gray-800 transition-all py-3 px-4 rounded-lg ${
              pathname === "/events" ? "bg-gray-800 text-blue-400" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Events
          </Link>
          <Link
            href="/contact"
            className={`block text-white hover:bg-gray-800 transition-all py-3 px-4 rounded-lg ${
              pathname === "/contact" ? "bg-gray-800 text-blue-400" : ""
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          {/* Mobile Join Us Button */}
          <div className="pt-3">
            <Link
              href="/join-us"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 rounded-lg text-base font-medium transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;