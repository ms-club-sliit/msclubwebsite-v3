"use client";
import React from "react";
import Link from "next/link";
import EventCard from "@/components/events/EventCard";
import { ArrowRightIcon } from "lucide-react";
import { workshopData } from "@/data/eventData";

const EventsSection = () => {
  // Get the most recent current events (from board 24/25) - show first 3
  const currentEvents = workshopData
    .filter(event => event.boardYear === "24/25")
    .slice(0, 3);

  return (
    <section id="events" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 bg-[#0c1629]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 sm:mb-4">
          Event Highlights
        </h2>
        <p className="text-sm sm:text-base text-gray-400 text-center mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
          Explore some of our recent events and workshops organized by MS Club.
        </p>
        
        {/* Events Grid */}
        {currentEvents.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10">
              {currentEvents.map((event) => (
                <EventCard
                  key={event.id}
                  imageSrc={event.imageSrc}
                  altText={event.altText || event.title}
                  title={event.title}
                  description={event.description}
                  badgeText={event.badgeText}
                  boardYear={event.boardYear}
                />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/events"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                View All Events
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400">No events available at the moment.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventsSection;
