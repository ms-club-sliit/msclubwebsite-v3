import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BenefitCard = ({ icon, title, description, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 150);

    return () => clearTimeout(timer);
  }, [index]);

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: index * 0.2,
        bounce: 0.4
      }
    }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: (index * 0.2) + 0.3,
        bounce: 0.5
      }
    },
    hover: {
      scale: 1.2,
      rotate: 12,
      transition: {
        type: "spring",
        duration: 0.4,
        bounce: 0.4
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: 1, 
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={cardVariants}
      whileHover="hover"
      className="group relative bg-gradient-to-br from-[#0e1a33] to-[#0a1426] p-6 rounded-xl overflow-hidden border border-gray-700/30 hover:border-blue-400/50 transition-all duration-700"
    >
      {/* Animated Background Elements */}
      <motion.div 
        variants={glowVariants}
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-400/10"
      />
      
      {/* Floating Orb */}
      <motion.div 
        variants={glowVariants}
        className="absolute -top-4 -right-4 w-16 h-16 bg-blue-400/10 rounded-full blur-xl"
      />
      
      {/* Icon Container with Enhanced Effects */}
      <motion.div 
        variants={iconVariants}
        className="relative mb-6"
      >
        <div className="relative inline-block">
          {/* Icon Background Glow */}
          <motion.div 
            variants={glowVariants}
            className="absolute inset-0 bg-blue-400/20 rounded-full blur-md scale-150"
          />
          
          {/* Icon */}
          <div className="relative text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
            {icon}
          </div>
          
          {/* Rotating Ring */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-blue-400/20 rounded-full opacity-0 group-hover:opacity-100"
            style={{width: '60px', height: '60px', left: '-10px', top: '-10px'}}
          />
        </div>
      </motion.div>
      
      {/* Title with Enhanced Typography */}
      <motion.h3 
        variants={{
          hover: { x: 8, transition: { duration: 0.3 } }
        }}
        className="text-xl font-bold mb-4 text-white group-hover:text-blue-100"
      >
        <span className="relative">
          {title}
          <motion.div 
            variants={{
              hover: { width: "100%", transition: { duration: 0.3 } }
            }}
            className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-300"
          />
        </span>
      </motion.h3>
      
      {/* Description with Better Readability */}
      <motion.p 
        variants={{
          hover: { y: -4, transition: { duration: 0.3 } }
        }}
        className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed"
      >
        {description}
      </motion.p>
      
      {/* Floating Particles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 0],
            y: [-20, -40],
            x: Math.sin(i) * 20
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut"
          }}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          style={{
            left: `${20 + i * 20}%`,
            bottom: '20%'
          }}
        />
      ))}
    </motion.div>
  );
};

export default BenefitCard;
