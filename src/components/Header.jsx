"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="py-4 px-6 md:px-12 flex items-center bg-gray-900 shadow-md">
      <div className="flex items-center mr-auto">
        <Image
          src="/ms_club_logo_light.png"
          alt="MS Club SLIIT Logo"
          width={40}
          height={40}
          className="w-auto h-10"
        />
      </div>
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
      <Link
        href="/join-us"
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm transition"
      >
        Join Us
      </Link>
    </header>
  );
};

export default Header;
