import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import BackgroundContainer from "@/components/BackgroundContainer";

export default function ContactPage() {
  return (
    <>
    <Header />
    <Hero
        title="Let’s Connect"
        paragraph="Stay updated with our latest events, Projects and announcement by following us."
        button1Text="Follow us on Social Media"
        button1Link=""
        showSecondButton={true}
        button2Text="Subscribe on Youtube"
        button2Link=""
      />
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden flex justify-center px-4 py-10">
        <BackgroundContainer>
          {/* Social Icons Section */}
          <div className="pt-11 flex flex-wrap justify-between w-full max-w-[480px] mx-auto z-10 gap-4 md:gap-0">
            {/* Facebook */}
            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href="https://www.facebook.com/msclubsliit"
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

            {/* Instagram */}
            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href="https://www.instagram.com/msclub.sliit"
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

            {/* LinkedIn */}
            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href="https://www.linkedin.com/company/msclubsliit"
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

            {/* GitHub */}
            <a className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px] mb-4"
                href="https://github.com/ms-club-sliit"
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

          {/* FAQ Title */}
          <div className="text-center mt-24 md:mt-28 z-10 relative px-4 md:px-0">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm md:text-base text-[#9CA3AF] max-w-xl mx-auto">
              Find quick answers to common questions about our club
            </p>
          </div>

          {/* FAQ Items */}
          <div className="mt-10 space-y-4 relative z-10 px-0 md:px-10 pb-10">
            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                How can I join the Microsoft Student Club?
              </h3>
              <p className="text-gray-300 text-sm">
                You can join by filling out the membership form on our website or
                by visiting our office during office hours. We also have
                membership drives at the beginning of each semester.
              </p>
            </div>

            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                Are there any membership fees?
              </h3>
              <p className="text-gray-300 text-sm">
                No, membership is completely free for all university students. We
                believe in making technology education and resources accessible to
                everyone.
              </p>
            </div>

            <div className="bg-[#162135] p-6 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-white">
                Do I need to be a Computer Science student to join?
              </h3>
              <p className="text-gray-300 text-sm">
                Not at all! We welcome students from all academic backgrounds who
                are interested in technology and innovation. Our diverse community
                is one of our greatest strengths.
              </p>
            </div>
          </div>
        </BackgroundContainer>
      </div>
    <Footer/>
    </>
  );
}
