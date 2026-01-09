"use client";
import React from "react";
import Link from "next/link";
import EventCard from "./EventCard";
import { ArrowRightIcon } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      title: "Campus Navigation App",
      description:
        "A mobile app that helps students navigate the campus efficiently. Get directions to classrooms, labs, and facilities.",
      image:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Study Group Matcher",
      description:
        "Web platform that matches students with similar interests and study preferences to form effective study groups.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Event Attendance System",
      description:
        "QR-code based attendance tracking system for club events with analytics dashboard for event organizers.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section id="events" className="py-20 px-6 md:px-12 bg-[#0c1629]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Our Upcoming Events
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Explore some of the innovative projects and events our members are working on.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
            />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
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
