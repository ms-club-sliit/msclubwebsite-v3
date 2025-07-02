"use client";
import React from "react";
import EventCard from "./EventCard";
import { ArrowRightIcon } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      title: "Campus Navigation App",
      description:
        "A mobile app that helps students navigate the campus efficiently. Get directions to classrooms, labs, and facilities.",
      image:
        "https://uploadthingy.s3.us-west-1.amazonaws.com/xuMGrRtrq3i6jr77UWV3d7/Home_%281%29.png",
    },
    {
      title: "Study Group Matcher",
      description:
        "Web platform that matches students with similar interests and study preferences to form effective study groups.",
      image:
        "https://uploadthingy.s3.us-west-1.amazonaws.com/xuMGrRtrq3i6jr77UWV3d7/Home_%281%29.png",
    },
    {
      title: "Event Attendance System",
      description:
        "QR-code based attendance tracking system for club events with analytics dashboard for event organizers.",
      image:
        "https://uploadthingy.s3.us-west-1.amazonaws.com/xuMGrRtrq3i6jr77UWV3d7/Home_%281%29.png",
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
          <a
            href="#"
            className="inline-flex items-center text-blue-400 hover:text-white transition duration-200"
          >
            View All Projects
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
