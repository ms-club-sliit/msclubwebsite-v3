"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BenefitCard from './BenefitCard';

const BenefitsSection = () => {
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
      title: 'Skill Development',
      description:
        'Access workshops, training sessions, and resources to build in-demand technical skills',
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" /></svg>,
      title: 'Networking',
      description:
        'Connect with industry professionals, alumni, and like-minded peers',
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      title: 'Competitions',
      description:
        'Participate in hackathons, coding challenges, and other tech competitions',
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v2a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0V4a2 2 0 012 2v6.5" /></svg>,
      title: 'Career Opportunities',
      description:
        'Get exclusive access to internships, job openings, and career guidance',
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: 'Community',
      description:
        'Be part of a supportive community that shares knowledge and experiences',
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
      title: 'Recognition',
      description:
        'Gain recognition for your projects and contributions to the tech community',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1,
        bounce: 0.4
      }
    }
  };

  const decorativeElementVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay: i * 0.2,
        duration: 0.8
      }
    })
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative py-20 px-6 md:px-12 bg-[#0c1629] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1],
              x: Math.sin(i) * 20,
              y: Math.cos(i) * 20
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            className="absolute w-40 h-40 bg-blue-500/5 rounded-full blur-3xl"
            style={{
              top: `${25 + i * 20}%`,
              left: `${20 + i * 25}%`
            }}
          />
        ))}
      </div>

      {/* Grid Pattern Overlay with Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </motion.div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Enhanced Header */}
        <motion.div 
          variants={headerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6 text-white"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              Benefits
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              Of
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-block bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent relative"
            >
              Membership
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"
              />
            </motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Join our club and unlock a world of{" "}
            <span className="text-blue-300 font-medium hover:text-blue-200 transition-colors duration-300">
              opportunities
            </span>{" "}
            to grow personally and professionally.
          </motion.p>

          {/* Decorative Elements */}
          <div className="flex items-center justify-center mt-8 space-x-3">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={decorativeElementVariants}
                className={i % 2 === 0 ? "w-2 h-2 bg-blue-400 rounded-full" : "w-20 h-0.5 bg-gradient-to-r from-blue-400/60 to-blue-300/60"}
              />
            ))}
          </div>
        </motion.div>

        {/* Enhanced Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              index={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>

        {/* Enhanced CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/membership"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600/15 to-blue-500/15 backdrop-blur-sm border border-blue-400/25 rounded-full text-gray-300 hover:text-white hover:border-blue-300/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="font-medium">Learn more about our membership</span>
            <motion.svg 
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="ml-3 w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/8 to-blue-500/8 blur-sm"
            />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;