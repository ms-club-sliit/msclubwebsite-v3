import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

function page() {
  return (
    <div className="bg-[#0F172A] text-white">
      <Header />

      {/* Hero Section */}
      <section className="min-h-screen  pb-20 px-6 lg:px-16">
        <div className="max-w-5xl w-full px-6 lg:px-16 mx-auto">
  <div className="flex flex-col items-start justify-start mt-6">
    <p className="text-gray-400 text-base sm:text-lg lg:text-xl mb-2">
      Have a question or idea?
    </p>
    <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
      Join With Us
    </h1>
  </div>
</div>


        {/* Form Wrapper */}
         <section className="bg-[#0F172A] min-h-screen pb-20">
      <div
        className="bg-custom-radial rounded-[53px] lg:mx-20 py-20 px-16 z-0"
        style={{
          backgroundImage: 'url("/assets/contactBgImage.png")',
          backgroundSize: "cover",
        }}
      >
          <div className="bg-[#0F172A]/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-lg">
            <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold  mb-2">Application Form</h2>
            <p className="text-gray-400 mb-8">
              We&apos;ll need a few details to get you started!
            </p>
</div>
            <form className="grid grid-cols-1 gap-6">
              <input type="text" placeholder="SLIIT Student ID" className="input-style" />
              <input type="text" placeholder="Full Name" className="input-style" />
              <input type="email" placeholder="Email Address" className="input-style" />
              <input type="tel" placeholder="Mobile Number" className="input-style" />
              <input type="text" placeholder="Academic Year" className="input-style" />
              <textarea rows={3} placeholder="Self Introduction" className="input-style" />
              <textarea rows={3} placeholder="Why would you like to join the Organizing committee of MS Club?" className="input-style" />
              <input type="url" placeholder="LinkedIn Profile Link" className="input-style" />
              <input type="url" placeholder="GitHub Profile Link" className="input-style" />
              <input type="url" placeholder="Blog Page Link" className="input-style" />
              <textarea rows={3} placeholder="What are your prior volunteering/leadership experiences?" className="input-style" />
              <textarea rows={3} placeholder="Tell us about a challenge you faced and how you solved it" className="input-style" />
              <textarea rows={3} placeholder="Where do you see yourself in 5 years time?" className="input-style" />
              <input type="text" placeholder="What are your skills/talent?" className="input-style" />

              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-xl shadow-lg transition-all"
                >
                  Join the Club
                </button>
              </div>
            </form>
          </div>
        </div>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default page;
