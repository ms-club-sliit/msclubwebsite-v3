"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Card, Button, ConfigProvider } from "antd";
import boardMembers from "../data/boardMembers.json";
import {
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Team() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const years = boardMembers.map((team) => team.year);
  const currentTeam = boardMembers[currentYearIndex];

  useEffect(() => {
    setIsClient(true);
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

  if (!isClient) {
    return (
      <div className="min-h-screen bg-[#0C1428] text-white flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            colorBgContainer: "#101930",
          },
          Button: {
            colorPrimary: "#2563eb",
          },
        },
      }}
    >
      {/* Container */}
      <div className="relative min-h-screen w-full mx-auto max-w-7xl">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/contactBgImage.png')",
            backgroundSize: "cover",
            backgroundPosition: "",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* Optional overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#101930] to-[#0d1524] opacity-60 z-0" />

        {/* Content */}
        <div className="relative z-10 py-16">
          <div className="max-w-6xl mx-auto px-5">
            <div className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <Button
                shape="circle"
                icon={<LeftOutlined />}
                className="mr-4"
                onClick={handlePrevious}
                style={{
                  backgroundColor: "rgba(16, 25, 48, 0.7)",
                  borderColor: "#334155",
                  color: "#ffffff",
                }}
              />
              <h2 className="text-2xl md:text-3xl font-bold text-center">
                Meet Our Team{" "}
                <span className="text-blue-400">
                  {currentTeam.year}/{parseInt(currentTeam.year) + 1}
                </span>
              </h2>
              <Button
                shape="circle"
                icon={<RightOutlined />}
                className="ml-4"
                onClick={handleNext}
                style={{
                  backgroundColor: "rgba(16, 25, 48, 0.7)",
                  borderColor: "#334155",
                  color: "#ffffff",
                }}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
              {currentTeam.board.map((member) => (
                <Card
                  key={`${member.id}-${currentTeam.year}`}
                  className="h-auto border border-gray-500 rounded-2xl p-1 backdrop-blur-lg relative overflow-hidden"
                  style={{
                    backgroundColor: "rgba(13, 21, 36, 0.85)", // semi-transparent
                    borderColor: "#6b7280",
                  }}
                  styles={{
                    body: { padding: "0" },
                  }}
                >
                  <div className="relative z-10">
                    <div className="h-60 overflow-hidden rounded-t-3xl flex items-center justify-center bg-[#101930]">
                      <div className="w-full h-full flex items-center justify-center p-1">
                        <Image
                          src={member.image || "/kanji.png"}
                          alt={`${member.name} - ${member.position}`}
                          width={250}
                          height={250}
                          className="w-full h-full object-cover rounded-2xl"
                        />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-white mb-1 text-base">
                        {member.name}
                      </h4>
                      <p className="text-blue-400 text-sm mb-3">
                        {member.position}
                      </p>
                      
                      {/* Social Media Icons */}
                      <div className="flex justify-start items-center gap-3">
                        <button
                          onClick={() => member.socialmedia?.linkedin && window.open(member.socialmedia.linkedin, "_blank")}
                          className="p-2 rounded-full bg-blue-600/20 hover:bg-blue-600/40 transition-colors duration-200"
                        >
                          <FaLinkedin className="w-4 h-4 text-blue-400" />
                        </button>
                        <button
                          onClick={() => member.socialmedia?.twitter && window.open(member.socialmedia.twitter, "_blank")}
                          className="p-2 rounded-full bg-gray-600/20 hover:bg-gray-600/40 transition-colors duration-200"
                        >
                          <FaGithub className="w-4 h-4 text-gray-400" />
                        </button>
                        <button
                          onClick={() => member.socialmedia?.facebook && window.open(member.socialmedia.facebook, "_blank")}
                          className="p-2 rounded-full bg-blue-800/20 hover:bg-blue-800/40 transition-colors duration-200"
                        >
                          <FaFacebook className="w-4 h-4 text-blue-500" />
                        </button>
                        <button
                          onClick={() => member.socialmedia?.instagram && window.open(member.socialmedia.instagram, "_blank")}
                          className="p-2 rounded-full bg-pink-600/20 hover:bg-pink-600/40 transition-colors duration-200"
                        >
                          <FaInstagram className="w-4 h-4 text-pink-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
