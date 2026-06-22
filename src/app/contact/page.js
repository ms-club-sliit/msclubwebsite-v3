import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import {FaFacebookF,FaInstagram,FaLinkedinIn,FaGithub,} from "react-icons/fa";
import BackgroundContainer from "@/components/common/BackgroundContainer";
import { SOCIAL_LINKS } from "@/constants/generalConstants";
<<<<<<< HEAD
import ContactForm from "@/components/contact/contactFormSection";
=======

const socialItems = [
  {
    name: "Facebook",
    handle: "@msclubofficial",
    icon: FaFacebookF,
    href: SOCIAL_LINKS.FACEBOOK,
    iconClass: "text-blue-600 dark:text-blue-400",
    hoverClass:
      "hover:border-blue-300 hover:shadow-blue-100 dark:hover:border-blue-500/40",
  },
  {
    name: "Instagram",
    handle: "@msclubofficial",
    icon: FaInstagram,
    href: SOCIAL_LINKS.INSTAGRAM,
    iconClass: "text-pink-500 dark:text-pink-400",
    hoverClass:
      "hover:border-pink-300 hover:shadow-pink-100 dark:hover:border-pink-500/40",
  },
  {
    name: "LinkedIn",
    handle: "@msclubofficial",
    icon: FaLinkedinIn,
    href: SOCIAL_LINKS.LINKEDIN,
    iconClass: "text-sky-600 dark:text-sky-400",
    hoverClass:
      "hover:border-sky-300 hover:shadow-sky-100 dark:hover:border-sky-500/40",
  },
  {
    name: "GitHub",
    handle: "@msclubofficial",
    icon: FaGithub,
    href: SOCIAL_LINKS.GITHUB,
    iconClass: "text-slate-700 dark:text-slate-200",
    hoverClass:
      "hover:border-slate-300 hover:shadow-slate-100 dark:hover:border-slate-500/40",
  },
];

const faqs = [
  {
    question: "What is the MS Club of SLIIT?",
    answer:
      "The MS Club of SLIIT is an MLSA-driven student community that aims to bridge the skill gap between an undergraduate and an industry professional. The club focuses on technology, innovation, leadership, and industry-level exposure for students.",
  },
  {
    question: "How can I join the MS Club of SLIIT?",
    answer:
      "To join the MS Club, you need to visit our website and fill out the registration form. Once you register, one of our members will contact you for a short interview. If you are selected after the interview, you will be added to the Alpha Group of the MS Club.",
  },
  {
    question: "Who can join the MS Club?",
    answer:
      "All SLIIT students from Year 1 to Year 4 are eligible to apply, regardless of their degree program.",
  },
  {
    question: "What is the Alpha Group of the MS Club?",
    answer:
      "The Alpha Group is the initial group you join after successfully completing the interview. Your contributions, work, and engagement will be evaluated during this phase. Based on your performance, you will later be moved to the main group of the MS Club of SLIIT.",
  },
  {
    question: "What can I gain by joining the MS Club?",
    answer: [
      "Meet industry experts and professionals",
      "Gain teamwork and leadership experience",
      "Improve problem-solving skills",
      "Learn development and design skills",
      "Take part in workshops, events, and hands-on activities",
    ],
  },
  {
    question: "What areas can I contribute to in the MS Club?",
    answer: [
      "Development",
      "Design",
      "Content Writing",
      "Public Speaking",
      "Event Management",
    ],
  },
];
>>>>>>> 379d652 (feat: implement site layout and core navigation with dark mode support)

export default function ContactPage() {
  return (
    <>
      <Header />
<<<<<<< HEAD
=======

>>>>>>> 379d652 (feat: implement site layout and core navigation with dark mode support)
      <Hero
        title="Let’s Connect"
        paragraph="Stay updated with our latest events, projects and announcements by following us."
        button1Text="Follow us on Social Media"
        button1Link="#social-media"
        showSecondButton={true}
        button2Text="Subscribe on Youtube"
        button2Link={SOCIAL_LINKS.YOUTUBE}
<<<<<<< HEAD
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
=======
        button2Target="_blank"
      />

      <section
        id="social-media"
        className="relative min-h-screen overflow-x-hidden bg-slate-50 dark:bg-[#0f172a] px-4 py-14 transition-colors duration-300"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-blue-100/70 blur-3xl dark:bg-blue-900/10" />
          <div className="absolute top-32 right-10 h-80 w-80 rounded-full bg-indigo-100/70 blur-3xl dark:bg-indigo-900/10" />
        </div>

        <BackgroundContainer>
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                Connect With Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Follow us on social platforms
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm md:text-base text-slate-600 dark:text-slate-300">
                Stay in touch with our latest updates, projects, events, and
                opportunities through our official social channels.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
              {socialItems.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/75 px-5 py-5 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/60 dark:hover:bg-slate-800/80 ${item.hoverClass}`}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800">
                      <Icon className={`text-2xl ${item.iconClass}`} />
                    </div>

                    <div>
                      <div className="font-semibold text-base text-slate-900 dark:text-white">
                        {item.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {item.handle}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div
              id="faq"
              className="text-center mt-24 md:mt-28 relative z-10 px-4 md:px-0"
            >
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                FAQ
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                Find quick answers to common questions about our club
>>>>>>> 379d652 (feat: implement site layout and core navigation with dark mode support)
              </p>
            </div>

            <div className="mt-10 space-y-4 relative z-10 max-w-4xl mx-auto pb-10">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group rounded-2xl border border-slate-200/80 bg-white/80 p-0 shadow-[0_10px_30px_rgba(15,23,42,0.05)] backdrop-blur-xl transition-all duration-300 open:shadow-lg dark:border-slate-700/60 dark:bg-slate-900/65"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5">
                    <h3 className="font-semibold text-left text-base md:text-lg text-slate-900 dark:text-white">
                      {faq.question}
                    </h3>
                    <span className="text-slate-400 transition-transform duration-300 group-open:rotate-45 dark:text-slate-500">
                      +
                    </span>
                  </summary>

                  <div className="px-6 pb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {Array.isArray(faq.answer) ? (
                      <ul className="list-disc list-inside space-y-2 ml-1">
                        {faq.answer.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{faq.answer}</p>
                    )}
                  </div>
                </details>
              ))}
            </div>
            <div className="bg-[#162135] p-6 rounded-xl">
              <ContactForm></ContactForm>
            </div>
          </div>
        </BackgroundContainer>
<<<<<<< HEAD
      </div>
=======
      </section>

>>>>>>> 379d652 (feat: implement site layout and core navigation with dark mode support)
      <Footer />
    </>
  );
}