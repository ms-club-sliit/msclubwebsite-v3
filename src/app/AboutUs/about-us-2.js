"use client";

import Image from "next/image";
import { Card, Button, ConfigProvider } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import JoinOurSection from "../../components/join-our-section";
import Team from "../../components/Team";

export default function AboutUs() {
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
      <div className="min-h-screen bg-[#0d1524] text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {/* Left Column - Stacked Cards */}
            <div className="flex flex-col gap-8 mt-10">
              <br />

              <div className="max-w-2xl gap-8 mb-6 mt-10 lg:mt-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-10 mb-4">
                  About Us
                </h1>
                <p className="text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  A MLSA driven student community aiming to bridge the skill gap
                  between an Undergraduate and an Industry Professional.
                </p>
              </div>
              <div className="flex flex-col mt-6 lg:mt-10">
                <Card
                  className="bg-[#212144]/60 border-slate-700 backdrop-blur-lg"
                  style={{
                    backgroundColor: "rgba(29, 41, 68, 0.6)",
                    borderColor: "#334155",
                    backdropFilter: "blur(16px)",
                  }}
                  styles={{
                    body: {
                      padding: "16px sm:20px lg:24px",
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                >
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                    Our Mission
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    We aim to inspire young minds to be a better version of
                    themselves by improving their technical and soft skills.
                  </p>
                </Card>
              </div>
            </div>

            {/* Right Column - Large Content Area */}
            <div className="flex flex-col items-center justify-start mt-10 lg:mt-52">
              <div className="h-auto w-full max-w-md  border-slate-300 rounded-lg backdrop-blur-lg p-4">
                <Image
                  src="/msclub.png"
                  alt="About Us Illustration"
                  width={400}
                  height={400}
                  className="w-full h-auto max-w-80 mx-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Strategy and Vision Section */}
          <div className="mb-20 -mt-5 lg:-mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card
                className="bg-[#1d2944]/60 border-slate-700 backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(29, 41, 68, 0.6)",
                  borderColor: "#334155",
                  backdropFilter: "blur(16px)",
                }}
                styles={{
                  body: {
                    padding: "24px",
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Vision
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To be one of the most active student communities by providing
                  value and nurturing curious minds.
                </p>
              </Card>

              <Card
                className="bg-[#2c4444]/60 border-slate-700 backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(29, 41, 68, 0.6)",
                  borderColor: "#334155",
                  backdropFilter: "blur(16px)",
                }}
                styles={{
                  body: {
                    padding: "24px",
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Our Strategy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Initiate projects, workshops and competitions to expose club
                  members to various technologies, concepts and ideas.
                </p>
              </Card>
            </div>
          </div>

          {/* Meet Our Team Section */}
          <Team />

          {/* Join Our Team Section */}
          <JoinOurSection />
        </div>
      </div>
    </ConfigProvider>
  );
}
