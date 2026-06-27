"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, ConfigProvider, theme as antdTheme } from "antd";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import JoinOurSection from "../../components/aboutUs/join-our-section";
import Team from "../../components/aboutUs/Team";

export default function AboutUs() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    // Set initial theme
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

    return () => observer.disconnect();
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      <Header />

      <ConfigProvider
        theme={{
          algorithm: isDark
            ? antdTheme.darkAlgorithm
            : antdTheme.defaultAlgorithm,
          components: {
            Card: {
              colorBgContainer: isDark ? "#101930" : "#ffffff",
              colorBorderSecondary: isDark ? "#334155" : "#cbd5e1",
            },
            Button: {
              colorPrimary: "#2563eb",
            },
          },
          token: {
            colorText: isDark ? "#ffffff" : "#0f172a",
          },
        }}
      >
        <div className="min-h-screen bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-white overflow-hidden relative transition-colors duration-300">
          
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
            <div className="absolute top-[5%] right-[0%] w-[500px] h-[500px] bg-blue-300/20 dark:bg-blue-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-indigo-300/20 dark:bg-indigo-900/10 rounded-full blur-[100px]" />
          </div>

          <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10 py-12 lg:py-20">
            

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-8 lg:mb-20 items-start">
              
              <div className="flex flex-col gap-6 lg:gap-10">
                <div className="max-w-xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                    About Us
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    A MLSA driven student community aiming to bridge the skill gap
                    between an Undergraduate and an Industry Professional.
                  </p>
                </div>

                <div className="w-full">
                  <div className="flex lg:hidden justify-center items-center w-full mb-6">
                    <Image
                      src="/ms_club_logo_light.png"
                      alt="About Us Illustration"
                      width={300}
                      height={300}
                      className="w-full max-w-[300px] h-auto object-contain drop-shadow-2xl animate-float filter-none"
                      style={{ filter: "none" }}
                      priority
                      unoptimized
                    />
                  </div>

                  <Card
                    className="bg-white/80 dark:bg-[#1e293b]/60 border-slate-200 dark:border-slate-700/50 backdrop-blur-md hover:border-blue-400 dark:hover:border-blue-500/30 transition-all duration-300"
                    variant="borderless"
                    styles={{
                      body: {
                        padding: "32px",
                        color: isDark ? "white" : "#0f172a",
                      },
                    }}
                  >
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                      <span className="w-1.5 h-8 bg-blue-500 rounded-full inline-block"></span>
                      Our Mission
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-5">
                      We aim to inspire young minds to be a better version of
                      themselves by improving their technical and soft skills.
                    </p>
                  </Card>
                </div>
              </div>

              <div className="hidden lg:flex justify-center lg:justify-end items-start mt-8 lg:mt-0">
                <div className="relative w-full max-w-md">
                  <Image
                    src="/ms_club_logo_light.png"
                    alt="About Us Illustration"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain drop-shadow-2xl mx-auto animate-float filter-none"
                    style={{ filter: "none" }}
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-12 lg:mb-24">
              <Card
                className="bg-white/80 dark:bg-[#1e293b]/60 border-slate-200 dark:border-slate-700/50 backdrop-blur-md hover:border-teal-400 dark:hover:border-teal-500/30 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-lg"
                variant="borderless"
                styles={{
                  body: {
                    padding: "32px",
                    color: isDark ? "white" : "#0f172a",
                  },
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-teal-500 rounded-full inline-block"></span>
                  Our Vision
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-5">
                  To be one of the most active student communities by providing
                  value and nurturing curious minds.
                </p>
              </Card>

              <Card
                className="bg-white/80 dark:bg-[#1e293b]/60 border-slate-200 dark:border-slate-700/50 backdrop-blur-md hover:border-purple-400 dark:hover:border-purple-500/30 transition-all duration-300 h-full hover:-translate-y-1 hover:shadow-lg"
                variant="borderless"
                styles={{
                  body: {
                    padding: "32px",
                    color: isDark ? "white" : "#0f172a",
                  },
                }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="w-1.5 h-8 bg-purple-500 rounded-full inline-block"></span>
                  Our Strategy
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed pl-5">
                  Initiate projects, workshops and competitions to expose club
                  members to various technologies, concepts and ideas.
                </p>
              </Card>
            </div>

            <Team />
            <JoinOurSection />
          </div>
        </div>
      </ConfigProvider>

      <Footer />
    </>
  );
}