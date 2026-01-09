"use client";
import React from 'react';
import Link from 'next/link'; // ✅ Import Link
import BenefitCard from './BenefitCard';
import {
  CodeIcon,
  UsersIcon,
  TrophyIcon,
  BriefcaseIcon,
  Users2Icon,
  AwardIcon,
  ArrowRightIcon,
} from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <CodeIcon className="w-8 h-8" />,
      title: 'Skill Development',
      description:
        'Access workshops, training sessions, and resources to build in-demand technical skills',
    },
    {
      icon: <UsersIcon className="w-8 h-8" />,
      title: 'Networking',
      description:
        'Connect with industry professionals, alumni, and like-minded peers',
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: 'Competitions',
      description:
        'Participate in hackathons, coding challenges, and other tech competitions',
    },
    {
      icon: <BriefcaseIcon className="w-8 h-8" />,
      title: 'Career Opportunities',
      description:
        'Get exclusive access to internships, job openings, and career guidance',
    },
    {
      icon: <Users2Icon className="w-8 h-8" />,
      title: 'Community',
      description:
        'Be part of a supportive community that shares knowledge and experiences',
    },
    {
      icon: <AwardIcon className="w-8 h-8" />,
      title: 'Recognition',
      description:
        'Gain recognition for your projects and contributions to the tech community',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 bg-[#0c1629]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Benefits Of Membership</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Join our club and unlock a world of opportunities to grow personally
            and professionally.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
        {/* <div className="text-center mt-8">
          <Link
            href="/membership"
            className="inline-flex items-center text-gray-300 hover:text-white"
          >
            Learn more about our membership{' '}
            <ArrowRightIcon className="ml-2 w-4 h-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default BenefitsSection;
