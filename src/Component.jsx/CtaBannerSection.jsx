import React, { useState } from 'react';

const CtaBannerSection = () => {
  // Contact Popup Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState(
    "I'm interested in Educational Institution. Please share more information."
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mobile.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setMobile('');
    }, 1800);
  };

  return (
    <section className="relative w-full bg-[#fca92a] pt-16 pb-28 px-4 sm:px-6 md:px-12 lg:pt-20 lg:pb-32 overflow-hidden text-white font-quicksand">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      {/* Background Pattern Overlay */}
      <div
        className="absolute inset-0 bg-repeat pointer-events-none opacity-100 z-0"
        style={{
          backgroundImage: `url('https://smartyschool.stylemixthemes.com/kindergarten-two/wp-content/uploads/2019/10/main_bg.png?id=5133')`,
          backgroundSize: '800px auto',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        {/* Left Text Block */}
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-white uppercase bg-white/20 px-4 py-1.5 rounded-full border border-white/30 inline-block">
            EDUCATIONAL INSTITUTION
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-patrick tracking-wide leading-tight">
            Have something in mind?
          </h2>

          <p className="text-white/95 text-base sm:text-lg font-medium leading-relaxed">
            Tell Little Duckling's Kindergarten what you’re looking for. We’re here to help you get started.
          </p>
        </div>

        {/* Right Rounded Contact Button */}
        <div className="flex-shrink-0">
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 bg-white hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-bold text-base shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer font-quicksand"
          >
            <svg
              className="w-4 h-4 text-black group-hover:text-white transition-colors"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448z" />
            </svg>
            Contact us
          </button>
        </div>

      </div>

      {/* Bottom Curvy Wavy Border (Gap & Line Completely Fixed) */}
      <div className="absolute -bottom-[4px] left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-[50px] md:h-[85px] text-[#0f172a] transform scale-y-110"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,128 L0,128 Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* CONTACT POPUP MODAL (Fully Responsive for Mobile & Desktop) */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs font-quicksand overflow-y-auto text-gray-900"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden border-4 border-[#fca92a] max-h-[90vh] flex flex-col my-auto"
          >
            {/* Top Accent Header */}
            <div className="bg-[#fff8eb] px-5 sm:px-6 pt-5 pb-4 border-b border-orange-100 flex items-start justify-between flex-shrink-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0a0a0e] font-patrick tracking-wide">
                  Contact Little Duckling's Kindergarten
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-1">
                  Share your details and we will get back to you.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                aria-label="Close popup"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-orange-100 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer shadow-xs flex-shrink-0 ml-2"
              >
                ✕
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-grow">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1.5">
                  Mobile number <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    className="border border-gray-300 focus:border-[#fca92a] focus:ring-2 focus:ring-[#fca92a]/30 rounded-xl px-2.5 py-2.5 text-sm font-semibold text-gray-800 bg-white outline-none cursor-pointer"
                  >
                    <option value="+91">+91 IN</option>
                    <option value="+1">+1 US</option>
                    <option value="+44">+44 UK</option>
                  </select>

                  <input
                    type="tel"
                    required
                    maxLength={15}
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                    placeholder="Your mobile number"
                    className="flex-1 border border-gray-300 focus:border-[#fca92a] focus:ring-2 focus:ring-[#fca92a]/30 rounded-xl px-3.5 py-2.5 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-bold text-gray-800">
                    Message <span className="text-gray-400 font-medium">(Optional)</span>
                  </label>
                  <span className="text-xs font-medium text-gray-400">
                    {message.length}/300
                  </span>
                </div>
                <textarea
                  rows={3}
                  maxLength={300}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-gray-300 focus:border-[#fca92a] focus:ring-2 focus:ring-[#fca92a]/30 rounded-xl p-3 text-sm text-gray-800 leading-relaxed outline-none resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#fca92a] hover:bg-orange-400 text-white font-bold py-3 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer mt-2"
              >
                {submitted ? '✓ Submitted! We will call you soon' : 'Submit'}
              </button>

              <p className="text-center text-xs text-gray-500 pt-1">
                By submitting, you agree to be contacted by us.
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default CtaBannerSection;