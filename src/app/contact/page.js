import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#0f172a] overflow-x-hidden flex justify-center px-4 py-10">
      <div
        className="relative rounded-[53px] bg-center bg-cover bg-no-repeat w-full max-w-[980px] min-h-[732px] px-6 md:px-10"
        style={{
          backgroundImage: 'url("/assets/contactBgImage.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        
        }}
      >
        {/* Social Icons Section */}
        <div className="pt-11 flex flex-wrap justify-between w-full max-w-[480px] mx-auto z-10 gap-4 md:gap-0">
          {/* Facebook */}
          <div className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px]">
            <FaFacebookF className="text-blue-500 text-2xl" />
            <div>
              <div className="text-white font-semibold text-sm leading-7">
                Facebook
              </div>
              <div className="text-[#B0B0B0] text-xs leading-6 font-normal">
                @msclubofficial
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px]">
            <FaInstagram className="text-pink-500 text-2xl" />
            <div>
              <div className="text-white font-semibold text-sm leading-7">
                Instagram
              </div>
              <div className="text-[#B0B0B0] text-xs leading-6 font-normal">
                @msclubofficial
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px]">
            <FaLinkedinIn className="text-blue-300 text-2xl" />
            <div>
              <div className="text-white font-semibold text-sm leading-7">
                LinkedIn
              </div>
              <div className="text-[#B0B0B0] text-xs leading-6 font-normal">
                @msclubofficial
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-3 w-[45%] sm:w-[193.65px] h-[56px]">
            <FaGithub className="text-gray-300 text-2xl" />
            <div>
              <div className="text-white font-semibold text-sm leading-7">
                GitHub
              </div>
              <div className="text-[#B0B0B0] text-xs leading-6 font-normal">
                @msclubofficial
              </div>
            </div>
          </div>
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
      </div>
    </div>
    <Footer/>
    </>
  );
}
