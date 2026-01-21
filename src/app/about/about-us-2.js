"use client";

import Image from "next/image";
import { Card, ConfigProvider } from "antd";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import JoinOurSection from "../../components/aboutUs/join-our-section";
import Team from "../../components/aboutUs/Team";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls, ContactShadows } from "@react-three/drei";
import Logo3DModel from "../../components/logo-3d-model";

export default function AboutUs() {
  return (
    <>
    <Header />

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

              <div className="max-w-2xl gap-8 mb-6 -mt-10 -lg:mt-20">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mt-10 mb-4">
                  About Us
                </h1>
                <p className="text-base lg:text-lg text-slate-300 max-w-2xl leading-relaxed">
                  A MLSA driven student community aiming to bridge the skill gap
                  between an Undergraduate and an Industry Professional.
                </p>
              </div>
            </div>

            {/* Right Column - Large Content Area */}
            {/* <div className="flex flex-col items-center justify-start mt-10 lg:mt-52">
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
            </div> */}

            <div className="col-sm-12 col-md-6 col-lg-6 home-3d-model">
        <Canvas shadows camera={{ position: [0, 0, 1.6], fov: 45 }}>
          <fog attach="fog" args={["#f5f5f5", 0, 40]} />
          <ambientLight intensity={0.5} />
          <directionalLight
            castShadow
            position={[0, 10, 0]}
            intensity={0.5}
          />
          <pointLight position={[0, 1, 10]} intensity={0.2} />
          <OrbitControls
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}
            maxDistance={2}
            minDistance={1.6}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.6}
            rotateSpeed={0.1} />
          <Suspense fallback={null}>
            <Logo3DModel />
            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.4, 0]} opacity={0.55} width={10} height={10} blur={1} far={9} />
          </Suspense>
        </Canvas>
      </div>
          </div>

          {/* Mission, Vision and Strategy Section */}
          <div className="mb-20 -mt-5 lg:-mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card
                className="bg-[#212144]/60 border-slate-700 backdrop-blur-lg"
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
                  Our Mission
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  We aim to inspire young minds to be a better version of
                  themselves by improving their technical and soft skills.
                </p>
              </Card>

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
    <Footer />
    </>
  );
}
