import React from 'react';

const EevntCard = ({
  badgeText = "Workshop",
  imageSrc,
  altText = "Workshop Image",
  title,
  description,
  date,
  time,
  location,
  buttonText = "Register Now",
  onRegister = () => {},
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-[#121e3c] text-white p-6 relative">
      {/* Badge */}
      {badgeText && (
        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {badgeText}
        </div>
      )}

      {/* Image */}
      {imageSrc && (
        <img
          className="rounded-md mb-4"
          src={imageSrc}
          alt={altText}
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
            <span className="mr-2">📅</span>
            {date}
          </div>
        )}
        {time && (
          <div className="flex items-center">
            <span className="mr-2">⏰</span>
            {time}
          </div>
        )}
        {location && (
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            {location}
          </div>
        )}
      </div>

      {/* Button */}
      <button
        className="mt-6 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default EevntCard;
