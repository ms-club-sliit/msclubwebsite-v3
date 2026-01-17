import React from 'react';

const EventCard = ({
  badgeText,
  imageSrc,
  altText = "Event Image",
  title,
  description,
  boardYear,
}) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-2xl bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-[1.02] hover:bg-gray-800 hover:border-blue-500/30 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden">
        {imageSrc && (
          <img
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imageSrc}
            alt={altText}
          />
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
            {boardYear === "24/25" ? "Current Vision" : "Legacy Archive"}
          </span>
          <div className={`h-1 w-12 ${boardYear === "24/25" ? 'bg-blue-500' : 'bg-gray-500'} rounded-full transition-all duration-300 group-hover:w-20`}></div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
