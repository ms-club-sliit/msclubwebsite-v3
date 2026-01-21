import React from 'react';
import Image from 'next/image';
import { Clock } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { MapPin } from 'lucide-react';

const EventCard = ({
  badgeText,
  imageSrc,
  altText = "Event Image",
  title,
  description,
  boardYear,
}) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-card-bg text-white p-6 relative">
      {/* Badge */}
      {badgeText && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {badgeText}
        </div>
      )}

      {/* Image */}
      {imageSrc && (
        <Image
          className="rounded-md mb-4"
          src={imageSrc}
          alt={altText}
          width={400}
          height={300}
        />
      )}

      {/* Title */}
      <h2 className="text-xl font-bold mb-2">{title}</h2>

      {/* Description */}
      <p className="text-gray-300 mb-4">{description}</p>

      {/* Info Section */}
      <div className="space-y-2 text-sm">
        {date && (
          <div className="flex items-center">
            <span className="mr-2"><Calendar className='w-[16px] text-blue-500' /></span>
            {date}
          </div>
        )}
        {/* Badge */}
        {badgeText && (
          <div className={`absolute top-4 right-4 ${badgeText === 'Current Board' ? 'bg-blue-600' : 'bg-gray-600'} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-md`}>
            {badgeText}
          </div>
        )}
        {/* Year Overly for Past Events */}
        {boardYear && boardYear !== "24/25" && (
          <div className="absolute bottom-4 left-4 bg-black/60 text-white px-2 py-1 rounded text-xs font-mono backdrop-blur-sm">
            Board {boardYear}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {description}
        </p>

        {/* Visual Decoration */}
        <div className="mt-auto pt-4 border-t border-gray-700/30 flex justify-between items-center">
          <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
            {boardYear === "24/25" ? "Current Board" : "Legacy Archive"}
          </span>
          <div className={`h-1 w-12 ${boardYear === "24/25" ? 'bg-blue-500' : 'bg-gray-500'} rounded-full transition-all duration-300 group-hover:w-20`}></div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
