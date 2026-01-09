import React from "react";
import Image from "next/image"; // ✅ Next.js optimized image component
import { CodeIcon, EyeIcon } from "lucide-react";

const EventCard = ({ title, description, image }) => {
  return (
    <div className="bg-[#0e1a33] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="h-48 relative w-full">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
          priority={false}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-[#1E293B] text-blue-300 text-xs px-2 py-1 rounded-full cursor-default">
            ReactJs
          </span>
          <span className="bg-[#1E293B] text-blue-300 text-xs px-2 py-1 rounded-full cursor-default">
            NextJs
          </span>
          <span className="bg-[#1E293B] text-blue-300 text-xs px-2 py-1 rounded-full cursor-default">
            Springboot
          </span>
        </div>
        <div className="flex space-x-4">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 flex items-center hover:text-white transition"
          >
            <EyeIcon className="w-4 h-4 mr-1" /> Live Demo
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-gray-400 flex items-center hover:text-white transition"
          >
            <CodeIcon className="w-4 h-4 mr-1" /> Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
