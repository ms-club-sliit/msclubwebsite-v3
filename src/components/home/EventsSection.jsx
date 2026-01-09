"use client";
import React from "react";
import Link from "next/link";
import EventCard from "./EventCard";
import { ArrowRightIcon } from "lucide-react";
import {SOCIAL_LINKS} from "@/constants/generalConstants";

const EventsSection = () => {
  // const events = [
  //   {
  //     title: "Campus Navigation App",
  //     description:
  //       "A mobile app that helps students navigate the campus efficiently. Get directions to classrooms, labs, and facilities.",
  //     image:
  //       "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
  //   },
  //   {
  //     title: "Study Group Matcher",
  //     description:
  //       "Web platform that matches students with similar interests and study preferences to form effective study groups.",
  //     image:
  //       "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
  //   },
  //   {
  //     title: "Event Attendance System",
  //     description:
  //       "QR-code based attendance tracking system for club events with analytics dashboard for event organizers.",
  //     image:
  //       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  //   },
  // ];

  return (
    <section id="events" className="py-20 px-6 md:px-12 bg-[#0c1629]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Our Upcoming Events
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore some of the innovative projects and events our members are working on.
        </p>
        
        {/* No upcoming events message */}
        <div className="flex flex-col items-center justify-center py-16 mb-10">
          <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-12 max-w-2xl text-center">
            <div className="mb-4">
              <svg className="w-16 h-16 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">No Upcoming Events</h3>
            <p className="text-gray-400 text-lg">
              Stay tuned! We&apos;re planning exciting events and will announce them soon.
            </p>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </div> */}
        <div className="text-center">
          <Link
            href={SOCIAL_LINKS.GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-400 hover:text-white transition duration-200"
          >
            View All Projects
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
