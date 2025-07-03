import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] overflow-x-hidden flex justify-center">
      <div
        className="relative h-[732px] rounded-[53px] bg-center bg-cover"
        style={{
          backgroundImage: 'url("/assets/contactBgImage.png")',
          marginLeft: "59px",
          marginRight: "56px",
          width: "calc(100% - 115px)",
          maxWidth: "904px",
        }}
      >
        {/* Social Icons Section */}
        <div
          className="flex flex-wrap justify-between absolute"
          style={{
            width: "475.65px",
            height: "174px",
            top: "44px",
            left: "216px",
            zIndex: 10,
          }}
        >
          {/* Facebook */}
          <div
            className="flex items-center gap-3"
            style={{ width: "193.65px", height: "56px" }}
          >
            <FaFacebookF className="text-blue-500 text-2xl" />
            <div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15.3px",
                  lineHeight: "28px",
                  color: "white",
                }}
              >
                Facebook
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "24px",
                  color: "#B0B0B0",
                }}
              >
                @msclubofficial
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div
            className="flex items-center gap-3"
            style={{ width: "193.65px", height: "56px" }}
          >
            <FaInstagram className="text-pink-500 text-2xl" />
            <div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15.3px",
                  lineHeight: "28px",
                  color: "white",
                }}
              >
                Instagram
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "24px",
                  color: "#B0B0B0",
                }}
              >
                @msclubofficial
              </div>
            </div>
          </div>

          {/* LinkedIn */}
          <div
            className="flex items-center gap-3"
            style={{ width: "193.65px", height: "56px" }}
          >
            <FaLinkedinIn className="text-blue-300 text-2xl" />
            <div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15.3px",
                  lineHeight: "28px",
                  color: "white",
                }}
              >
                LinkedIn
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "24px",
                  color: "#B0B0B0",
                }}
              >
                Microsoft Student Club
              </div>
            </div>
          </div>

          {/* GitHub */}
          <div
            className="flex items-center gap-3"
            style={{ width: "193.65px", height: "56px" }}
          >
            <FaGithub className="text-gray-300 text-2xl" />
            <div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "15.3px",
                  lineHeight: "28px",
                  color: "white",
                }}
              >
                GitHub
              </div>
              <div
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontSize: "13.6px",
                  lineHeight: "24px",
                  color: "#B0B0B0",
                }}
              >
                @msclubofficial
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
