"use client";

import React from "react";
import { CheckIcon } from "lucide-react";
import { motion } from "framer-motion";

const JoinSection = () => {
  const benefits = [
    "Hands-on workshops and training",
    "Networking with industry professionals",
    "Exclusive access to resources and opportunities",
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

  const itemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        duration: 0.8
      }
    }
  };

  const formFieldVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      id="join"
      className="bg-[#0f172a] text-white py-12 sm:py-16 px-4 sm:px-6 md:px-12 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
      />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.15, 0.1],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
        {/* Left Section */}
        <motion.div 
          variants={containerVariants}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold mb-4"
          >
            Ready to join our tech community?
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-[#8898aa] mb-6 sm:mb-8"
          >
            Becoming a member is free and get access to exclusive workshops,
            networking opportunities, and resources to boost your tech career.
          </motion.p>
          <motion.ul 
            variants={containerVariants}
            className="space-y-4 mb-8 inline-block text-left"
          >
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index}
                variants={itemVariants}
                className="flex items-start"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                >
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                </motion.div>
                <span className="text-[#8898aa]">{benefit}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Section (Form) */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1e293b] p-6 sm:p-8 rounded-lg max-w-md mx-auto relative"
          >
            {/* Form glow effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scale: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur-xl -z-10"
            />

            <motion.h3 
              variants={itemVariants}
              className="text-xl font-semibold mb-6 text-center md:text-left"
            >
              Apply to Join
            </motion.h3>
            <form className="space-y-4">
              <motion.div
                custom={0}
                variants={formFieldVariants}
              >
                <label className="block text-sm text-[#8898aa] mb-1">Full Name</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 text-base transition-all duration-300"
                />
              </motion.div>
              <motion.div
                custom={1}
                variants={formFieldVariants}
              >
                <label className="block text-sm text-[#8898aa] mb-1">Email Address</label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="john@example.com"
                  className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 text-base transition-all duration-300"
                />
              </motion.div>
              <motion.div
                custom={2}
                variants={formFieldVariants}
              >
                <label className="block text-sm text-[#8898aa] mb-1">Year of Study</label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  className="w-full bg-transparent border border-[#8898aa] rounded-md px-4 py-3 focus:outline-none focus:border-blue-500 text-base appearance-none bg-no-repeat bg-right bg-[length:16px] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==')]"
                >
                  <option>First Year</option>
                  <option>Second Year</option>
                  <option>Third Year</option>
                  <option>Fourth Year</option>
                </motion.select>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#0d6efd] hover:bg-[#0b5ed7] text-white py-3 rounded-md transition-all duration-300 hover:shadow-lg text-base font-medium mt-2 relative overflow-hidden group"
              >
                <span className="relative z-10">Join the Club</span>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-blue-400/0"
                />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default JoinSection;