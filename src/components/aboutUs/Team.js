"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Button, ConfigProvider } from "antd";
import boardMembers from "../../data/boardMembers.json";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import BackgroundContainer from "../common/BackgroundContainer.jsx";

export default function Team() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [theme, setTheme] = useState("dark");

  const currentTeam = boardMembers[currentYearIndex];

  useEffect(() => {
    setIsClient(true);
    
    // Set initial theme
    const root = document.documentElement;
    const currentTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(currentTheme);

    // Observe changes from global ThemeToggle
    const observer = new MutationObserver(() => {
      const updatedTheme = root.classList.contains("dark") ? "dark" : "light";
      setTheme(updatedTheme);
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === "string" &&
        args[0].includes("antd v5 support React")
      ) {
        return;
      }
      originalConsoleError(...args);
    };
    return () => {
      console.error = originalConsoleError;
      observer.disconnect();
    };
  }, []);

  const handlePrevious = () => {
    setCurrentYearIndex((prev) =>
      prev > 0 ? prev - 1 : boardMembers.length - 1
    );
  };

  const handleNext = () => {
    setCurrentYearIndex((prev) =>
      prev < boardMembers.length - 1 ? prev + 1 : 0
    );
  };

  const isDark = theme === "dark";

  if (!isClient) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#0C1428] text-slate-900 dark:text-white flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorBgContainer: isDark ? "#101930" : "#ffffff",
          },
          Button: {
            colorPrimary: "#2563eb",
          },
        },
      }}
    >
      <BackgroundContainer className="flex items-center justify-center min-h-screen !mx-1 !sm:mx-2 !lg:mx-2">
        <div className="w-full max-w-full mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="text-center">
            <div className="flex flex-row items-center justify-center mb-6 sm:mb-8 md:mb-12 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              <Button
                shape="circle"
                icon={<LeftOutlined className="text-xs sm:text-sm md:text-sm lg:text-base" />}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 touch-manipulation shadow-md hover:shadow-lg"
                onClick={handlePrevious}
                style={{
                  backgroundColor: isDark ? "rgba(16, 25, 48, 0.8)" : "rgba(255, 255, 255, 0.9)",
                  borderColor: isDark ? "#475569" : "#cbd5e1",
                  color: isDark ? "#ffffff" : "#0f172a",
                }}
              />
              <div className="px-3 sm:px-4 md:px-6 lg:px-8 text-center">
                <h2 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-slate-900 dark:text-white">
                  Meet Our Team
                </h2>
                <div className="text-blue-600 dark:text-blue-400 text-sm sm:text-lg md:text-xl lg:text-2xl font-semibold mt-0.5 sm:mt-1">
                  {currentTeam.year}/{parseInt(currentTeam.year) + 1}
                </div>
              </div>
              <Button
                shape="circle"
                icon={<RightOutlined className="text-xs sm:text-sm md:text-sm lg:text-base" />}
                className="w-8 h-8 sm:w-9 sm:h-9 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 touch-manipulation shadow-md hover:shadow-lg"
                onClick={handleNext}
                style={{
                  backgroundColor: isDark ? "rgba(16, 25, 48, 0.8)" : "rgba(255, 255, 255, 0.9)",
                  borderColor: isDark ? "#475569" : "#cbd5e1",
                  color: isDark ? "#ffffff" : "#0f172a",
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 px-1 sm:px-2 md:px-4">
              {currentTeam.board.map((member) => (
                <Card
                  key={`${member.id}-${currentTeam.year}`}
                  className="h-full border rounded-lg sm:rounded-xl md:rounded-2xl p-0.5 sm:p-1 backdrop-blur-lg relative overflow-hidden card-bg flex flex-col"
                  style={{
                    backgroundColor: isDark ? "rgba(29, 41, 68, 0.6)" : "rgba(255, 255, 255, 0.85)",
                    borderColor: isDark ? "#334155" : "#e2e8f0",
                    backdropFilter: "blur(16px)",
                  }}
                  styles={{
                    body: { padding: "0", backgroundColor: "transparent", height: "100%" },
                  }}
                >
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="h-48 sm:h-52 md:h-56 lg:h-60 overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center p-0.5 sm:p-1">
                        <Image
                          src={member.image || "/board/maleAvatar.jpg"}
                          alt={`${member.name} - ${member.position}`}
                          width={350}
                          height={350}
                          className="w-full h-full object-cover rounded-lg sm:rounded-xl md:rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="sm:p-4 md:p-2 flex-grow flex flex-col justify-between">
                      <div className="text-left">
                        <h4 className="font-semibold text-slate-900 dark:text-white sm:mb-2 text-sm sm:text-base md:text-base leading-tight line-clamp-2">
                          {member.name}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm md:text-sm sm:mb-4 line-clamp-2">
                          {member.position}
                        </p>
                      </div>
                      
                      {/* Social Media Icons */}
                      <div className="flex justify-start items-center gap-3 sm:gap-4 md:gap-1 mt-auto">
                        <div 
                          className="rounded-full bg-blue-600/20 hover:bg-blue-600/40 transition-colors duration-200 touch-manipulation flex items-center justify-center cursor-pointer"
                          onClick={() => member.socialmedia?.linkedin && window.open(member.socialmedia.linkedin, "_blank")}
                          style={{ width: "2rem", height: "2rem", aspectRatio: "1/1", minWidth: "2rem", minHeight: "2rem" }}
                        >
                          <FaLinkedin style={{ width: "1rem", height: "1rem", color: "#3b82f6" }} />
                        </div>
                        <div 
                          className="rounded-full bg-gray-600/20 hover:bg-gray-600/40 transition-colors duration-200 touch-manipulation flex items-center justify-center cursor-pointer"
                          onClick={() => member.socialmedia?.twitter && window.open(member.socialmedia.twitter, "_blank")}
                          style={{ width: "2rem", height: "2rem", aspectRatio: "1/1", minWidth: "2rem", minHeight: "2rem" }}
                        >
                          <FaGithub style={{ width: "1rem", height: "1rem", color: isDark ? "#9ca3af" : "#4b5563" }} />
                        </div>
                        <div 
                          className="rounded-full bg-blue-800/20 hover:bg-blue-800/40 transition-colors duration-200 touch-manipulation flex items-center justify-center cursor-pointer"
                          onClick={() => member.socialmedia?.facebook && window.open(member.socialmedia.facebook, "_blank")}
                          style={{ width: "2rem", height: "2rem", aspectRatio: "1/1", minWidth: "2rem", minHeight: "2rem" }}
                        >
                          <FaFacebook style={{ width: "1rem", height: "1rem", color: "#2563eb" }} />
                        </div>
                        <div 
                          className="rounded-full bg-pink-600/20 hover:bg-pink-600/40 transition-colors duration-200 touch-manipulation flex items-center justify-center cursor-pointer"
                          onClick={() => member.socialmedia?.instagram && window.open(member.socialmedia.instagram, "_blank")}
                          style={{ width: "2rem", height: "2rem", aspectRatio: "1/1", minWidth: "2rem", minHeight: "2rem" }}
                        >
                          <FaInstagram style={{ width: "1rem", height: "1rem", color: "#d53f8c" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </BackgroundContainer>
    </ConfigProvider>
  );
}
