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
        <div className="container mx-auto px-10 py-12">
          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {/* Left Column - Stacked Cards */}
            <div className="flex flex-col gap-8 mt-10">
              <br />

              <div className="max-w-2xl gap-8 mb-6 mt-20">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mt-10 mb-4">
                  About Us
                </h1>
                <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                  A MLSA driven student community aiming to bridge the skill gap
                  between an Undergraduate and an Industry Professional.
                </p>
              </div>
              <div className="flex flex-col mt-10">
                <Card
                  className="bg-[#101930]/60 border-slate-700 backdrop-blur-lg"
                  style={{
                    backgroundColor: "rgba(16, 25, 48, 0.9)",
                    borderColor: "#334155",
                  }}
                  styles={{
                    body: {
                      padding: "24px",
                      backgroundColor: "transparent",
                      color: "white",
                    },
                  }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    Our Mission
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    We aim to inspire young minds to be a better version of
                    themselves by improving their technical and soft skills.
                  </p>
                </Card>
              </div>
            </div>

            {/* Right Column - Large Content Area */}
            <div className="flex flex-col items-center justify-start mt-52">
              <div className="h-200 w-200 bg-[#101930]/40 border border-slate-300 rounded-lg backdrop-blur-lg">
                <Image
                  src="/msclub.png"
                  alt="About Us Illustration"
                  width={400}
                  height={400}
                  className="w-315 h-315"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Strategy and Vision Section */}
          <div className="mb-20">
            <div className="grid grid-cols-2 gap-8">
              <Card
                className="bg-[#101930]/60 border-slate-700 backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(16, 25, 48, 0.9)",
                  borderColor: "#334155",
                }}
                styles={{
                  body: {
                    padding: "24px",
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Our Strategy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Initiate projects, workshops and competitions to expose club
                  members to various technologies, concepts and ideas.
                </p>
              </Card>

              <Card
                className="bg-[#101930]/60 border-slate-700 backdrop-blur-lg"
                style={{
                  backgroundColor: "rgba(16, 25, 48, 0.9)",
                  borderColor: "#334155",
                }}
                styles={{
                  body: {
                    padding: "24px",
                    backgroundColor: "transparent",
                    color: "white",
                  },
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Our Vision
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  To be one of the most active student communities by providing
                  value and nurturing curious minds.
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
