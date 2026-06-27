"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/generalConstants";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-12 px-6 md:px-12 text-slate-700 dark:bg-[#0c1629] dark:text-gray-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-12">
          {/* Brand Section */}
          <div className="max-w-sm">
            <div className="flex items-center mb-4">
              <Image
                src="/ms_club_logo_light.png"
                alt="MS Club SLIIT Logo"
                width={48}
                height={48}
                className="w-auto h-12 filter-none"
                style={{ filter: 'none' }}
                unoptimized
              />
            </div>
            <p className="text-slate-600 dark:text-gray-400">
              A student-driven community bridging the gap between undergraduates
              and industry professionals.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href={SOCIAL_LINKS.FACEBOOK} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">
                <LinkedinIcon className="w-5 h-5" />
              </Link>
              <Link href={SOCIAL_LINKS.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Home</Link></li>
                <li><Link href="/about" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">About Us</Link></li>
                <li><Link href="/events" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Events</Link></li>
                <li><Link href="/blogs" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Blogs</Link></li>
                <li><Link href="/contact" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/blogs" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Blogs</Link></li>
                <li><Link href="/join-us" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Join Us</Link></li>
                <li><Link href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">Projects</Link></li>
                <li><Link href="/contact#faq" className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-900 dark:text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li>
                  <a href={SOCIAL_LINKS.EMAIL} className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">
                    Email: msclub.foc@sliit.lk
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.CONTACT_NUMBER} className="text-slate-700 hover:text-slate-900 dark:text-gray-300 dark:hover:text-white">
                    Phone: +94 71 583 5840
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-700 dark:text-gray-400">
          © {new Date().getFullYear()} MS Club of SLIIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
