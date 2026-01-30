import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import BackgroundContainer from "@/components/common/BackgroundContainer";
import {SOCIAL_LINKS} from "@/constants/generalConstants";

export default function ContactPage() {
  return (
    <>
    <Header />
    <Hero
        title="Let’s Connect"
        paragraph="Stay updated with our latest events, projects and announcements by following us."
        button1Text="Follow us on Social Media"
        button1Link="#social-media"
        showSecondButton={true}
        button2Text="Subscribe on Youtube"
        button2Link={SOCIAL_LINKS.YOUTUBE}        
        button2Target="_blank" />
    <div id="social-media" className="min-h-screen bg-[#0f172a] overflow-x-hidden flex justify-center px-4 py-10">
        <BackgroundContainer>
          <div className="pt-11 flex flex-wrap justify-between w-full max-w-[480px] mx-auto z-10 gap-4 md:gap-0">
            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href={SOCIAL_LINKS.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaFacebookF className="text-blue-500 text-3xl" />
              <div>
                <div className="text-white font-semibold text-base leading-7">
                  Facebook
                </div>
                <div className="text-[#B0B0B0] text-sm leading-6 font-normal">
                  @msclubofficial
                </div>
              </div>
            </a>

            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href={SOCIAL_LINKS.INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaInstagram className="text-pink-500 text-3xl" />
              <div>
                <div className="text-white font-semibold text-base leading-7">
                  Instagram
                </div>
                <div className="text-[#B0B0B0] text-sm leading-6 font-normal">
                  @msclubofficial
                </div>
              </div>
            </a>

            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href={SOCIAL_LINKS.LINKEDIN}
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaLinkedinIn className="text-blue-300 text-3xl" />
              <div>
                <div className="text-white font-semibold text-base leading-7">
                  LinkedIn
                </div>
                <div className="text-[#B0B0B0] text-sm leading-6 font-normal">
                  @msclubofficial
                </div>
              </div>
            </a>

            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                rel="noopener noreferrer"
            >
              <FaGithub className="text-gray-300 text-3xl" />
              <div>
                <div className="text-white font-semibold text-base leading-7">
                  GitHub
                </div>
                <div className="text-[#B0B0B0] text-sm leading-6 font-normal">
                  @msclubofficial
                </div>
              </div>
            </a>
          </div>

          <div id="faq" className="text-center mt-24 md:mt-28 z-10 relative px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-[#9CA3AF] max-w-xl mx-auto">
              Find quick answers to common questions about our club
            </p>
          </div>

          <div className="mt-10 space-y-4 relative z-10 px-0 md:px-10 pb-10">
            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                What is the MS Club of SLIIT?
              </h3>
              <p className="text-gray-300 text-sm">
                The MS Club of SLIIT is an MLSA-driven student community that aims to bridge the skill gap between an undergraduate and an industry professional. The club focuses on technology, innovation, leadership, and industry-level exposure for students.
              </p>
            </div>

            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                How can I join the MS Club of SLIIT?
              </h3>
              <p className="text-gray-300 text-sm">
                To join the MS Club, you need to visit our website and fill out the registration form.
Once you register, one of our members will contact you for a short interview. If you are selected after the interview, you will be added to the Alpha Group of the MS Club.
              </p>
            </div>

            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                Who can join the MS Club?
              </h3>
              <p className="text-gray-300 text-sm">
                All SLIIT students from Year 1 to Year 4 are eligible to apply, regardless of their degree program.
              </p>
            </div>

            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                What is the Alpha Group of the MS Club?
              </h3>
              <p className="text-gray-300 text-sm">
                The Alpha Group is the initial group you join after successfully completing the interview.
                Your contributions, work, and engagement will be evaluated during this phase. Based on your performance, you will later be moved to the main group of the MS Club of SLIIT.
              </p>
            </div>
            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                What can I gain by joining the MS Club?
              </h3>
              <div className="text-gray-300 text-sm">
                <p className="mb-3">By joining the MS Club, you will:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Meet industry experts and professionals</li>
                  <li>Gain teamwork and leadership experience</li>
                  <li>Improve problem-solving skills</li>
                  <li>Learn development and design skills</li>
                  <li>Take part in workshops, events, and hands-on activities</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                What areas can I contribute to in the MS Club?
              </h3>
              <div className="text-gray-300 text-sm">
                <p className="mb-3">You can contribute in multiple areas, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-2">
                  <li>Development</li>
                  <li>Design</li>
                  <li>Content Writing</li>
                  <li>Public Speaking</li>
                  <li>Event Management</li>
                </ul>
              </div>
            </div>
          </div>
        </BackgroundContainer>
      </div>
    <Footer/>
    </>
  );
}
