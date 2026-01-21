"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { workshopData } from '@/data/eventData'
import EventCard from './EventCard'
import BackgroundContainer from "@/components/common/BackgroundContainer";
import { Sparkles, History } from 'lucide-react';

const EventSection = () => {
    const [activeTab, setActiveTab] = useState('current'); // 'current' or 'past'
    const [direction, setDirection] = useState(0);

    const currentEvents = workshopData.filter(event => event.boardYear === "24/25");
    const pastEvents = workshopData.filter(event => event.boardYear !== "24/25");

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const handleTabChange = (tab) => {
        if (tab === activeTab) return;
        setDirection(tab === 'current' ? -1 : 1);
        setActiveTab(tab);
    };

    const onDragEnd = (e, { offset, velocity }) => {
        const swipe = swipePower(offset.x, velocity.x);

        if (swipe < -swipeConfidenceThreshold && activeTab === 'current') {
            handleTabChange('past');
        } else if (swipe > swipeConfidenceThreshold && activeTab === 'past') {
            handleTabChange('current');
        }
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <BackgroundContainer>
            {/* Tab Switcher - Visual Buttons */}
            <div className="flex flex-col items-center mb-16">
                <div className="bg-gray-800/80 p-1.5 rounded-2xl border border-gray-700/50 backdrop-blur-xl flex relative mb-6">
                    <motion.div
                        className="absolute inset-y-1.5 rounded-xl bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                        initial={false}
                        animate={{
                            x: activeTab === 'current' ? 0 : '100%',
                            width: '50%'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <button
                        onClick={() => handleTabChange('current')}
                        className={`relative z-10 px-6 sm:px-10 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 ${activeTab === 'current' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        <Sparkles size={16} />
                        <span>Current Board</span>
                    </button>
                    <button
                        onClick={() => handleTabChange('past')}
                        className={`relative z-10 px-6 sm:px-10 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase transition-colors duration-300 flex items-center gap-2 ${activeTab === 'past' ? 'text-white' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        <History size={16} />
                        <span>Legacy Archive</span>
                    </button>
                </div>

                <p className="text-gray-500 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-center px-4">
                    {activeTab === 'current'
                        ? "Exploring current milestones by Board 24/25"
                        : "Browsing through our rich history of events"
                    }
                </p>
                <div className="mt-4 flex gap-1 sm:hidden">
                    <div className={`h-1 w-8 rounded-full ${activeTab === 'current' ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                    <div className={`h-1 w-8 rounded-full ${activeTab === 'past' ? 'bg-blue-500' : 'bg-gray-700'}`}></div>
                </div>
            </div>

            {/* Swipable Content Area */}
            <div className="relative min-h-[400px]">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                    <motion.div
                        key={activeTab}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={onDragEnd}
                        className="w-full cursor-grab active:cursor-grabbing"
                        style={{ touchAction: 'none' }}
                    >
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10'>
                            {(activeTab === 'current' ? currentEvents : pastEvents).map(event => (
                                <EventCard
                                    key={event.id}
                                    imageSrc={event.imageSrc}
                                    altText={event.title}
                                    title={event.title}
                                    description={event.description}
                                    badgeText={event.badgeText}
                                    boardYear={event.boardYear}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Swipe Hint for mobile */}
            <div className="mt-8 text-center sm:hidden">
                <p className="text-gray-600 text-[10px] animate-pulse">
                    Swipe left or right to switch boards
                </p>
            </div>
        </BackgroundContainer>
    )
}

export default EventSection