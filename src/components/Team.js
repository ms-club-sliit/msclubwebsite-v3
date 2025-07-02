"use client";

import React from 'react'
import Image from 'next/image'
import { Card, Button, ConfigProvider } from "antd"
import { useState, useEffect } from "react";
import boardMembers from "../data/boardMembers.json";
import {
  LeftOutlined,
  RightOutlined,
  GithubFilled,
  FacebookFilled,
  InstagramOutlined,
  LinkedinFilled,
} from "@ant-design/icons";

export default function Team() {
  const [currentYearIndex, setCurrentYearIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  const years = boardMembers.map((team) => team.year);
  const currentTeam = boardMembers[currentYearIndex];
  
  useEffect(() => {
    setIsClient(true);
    // Suppress Ant Design React version warnings
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (typeof args[0] === 'string' && args[0].includes('antd v5 support React')) {
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
            colorBgContainer: '#101930',
          },
          Button: {
            colorPrimary: '#2563eb',
          },
        },
      }}
    >
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
            <span className="text-blue-400">{currentTeam.year}</span>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {currentTeam.board.map((member) => (
            <Card
              key={`${member.id}-${currentTeam.year}`}
              className="h-auto border border-gray-500 rounded-2xl p-1"
              style={{
                backgroundColor: "#0d1524",
                borderColor: "#6b7280",
                
              }}
              styles={{
                body: { padding: "0", backgroundColor: "#101930" },
                actions: {
                  backgroundColor: "#101930",
                  borderTop: "none",
                  border: "none",
                  textAlign: "left",
                  justifyContent: "flex-start",
                  paddingLeft: "16px",
                  gap: "0px",
                  display: "flex",
                },
              }}
              actions={[
                <Button
                  key="linkedin"
                  type="text"
                  icon={<LinkedinFilled />}
                  style={{ color: "#e2e8f0", margin: "0", padding: "4px 8px" }}
                  onClick={() =>
                    member.socialmedia?.linkedin &&
                    window.open(member.socialmedia.linkedin, "_blank")
                  }
                />,
                <Button
                  key="github"
                  type="text"
                  icon={<GithubFilled />}
                  style={{ color: "#e2e8f0", margin: "0", padding: "4px 8px" }}
                  onClick={() =>
                    member.socialmedia?.twitter &&
                    window.open(member.socialmedia.twitter, "_blank")
                  }
                />,
                <Button
                  key="facebook"
                  type="text"
                  icon={<FacebookFilled />}
                  style={{ color: "#e2e8f0", margin: "0", padding: "4px 8px" }}
                  onClick={() =>
                    member.socialmedia?.facebook &&
                    window.open(member.socialmedia.facebook, "_blank")
                  }
                />,
                <Button
                  key="instagram"
                  type="text"
                  icon={<InstagramOutlined />}
                  style={{ color: "#e2e8f0", margin: "0", padding: "4px 8px" }}
                  onClick={() =>
                    member.socialmedia?.instagram &&
                    window.open(member.socialmedia.instagram, "_blank")
                  }
                />,
              ]}
            >
              <div className="h-72 overflow-hidden rounded-t-3xl flex items-center justify-center bg-[#101930]">
                <div className="w-full h-full flex items-center justify-center p-2">
                  <Image
                    src={member.image || "/kanji.png"}
                    alt={`${member.name} - ${member.position}`}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-white mb-2 text-lg">
                  {member.name}
                </h4>
                <p className="text-blue-400 text-base">{member.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ConfigProvider>
  )
}
