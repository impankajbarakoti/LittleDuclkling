import React, { useState } from 'react';

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Contact Modal States (Same as NextStepBanner)
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
    <div className="hero-section relative flex min-h-[100svh] w-full flex-col justify-between overflow-hidden bg-[#fca92a] pt-10 text-white sm:pt-28 lg:pt-14">
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
          backgroundSize: '800px auto'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto my-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-8 sm:py-12 lg:grid-cols-2 lg:gap-12 lg:px-12 lg:py-16 font-quicksand">
        
        {/* Left Side: Content */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-start space-y-5 sm:space-y-6 lg:mx-0">
          {/* Tagline / Subtitle */}
          <span className="max-w-full rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-xs font-medium uppercase tracking-wide backdrop-blur-sm sm:px-4 sm:text-sm md:text-base">
            Educational Institution
          </span>

          {/* Heading */}
          <h1 className="text-4xl text-grey-200 leading-tight tracking-tight drop-shadow-sm sm:text-5xl lg:text-6xl font-patrick">
            Little Duckling's Kindergarten - Educational Institution
          </h1>

          {/* Paragraph Description */}
          <div className="space-y-4 text-base font-normal leading-relaxed text-white/95 sm:text-lg">
            <p>
              Little Ducklings Kindergarten is a vibrant and caring early learning center dedicated to inspiring curiosity and creativity in every child. Here, young learners embark on a joyful journey through imaginative play, hands-on exploration, and age-appropriate activities designed to foster social, emotional, cognitive, and physical growth.
            </p>
            <p className="hidden md:block">
              Our experienced teachers serve as facilitators, guiding children as they develop essential skills—communication, problem-solving, and empathy—while building lifelong friendships. Safety is our highest priority, reflected in our secure, child-friendly environment and attentive supervision at every step.
            </p>
          </div>

          {/* CTA Button (Opens Contact Modal) */}
          <div className="pt-2">
  <button
    onClick={() => setIsModalOpen(true)}
    className="group inline-flex items-center gap-3 bg-white hover:bg-black text-black hover:text-white font-semibold text-lg px-8 py-3.5 rounded-full shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
  >
    <svg 
      className="w-5 h-5 text-black group-hover:text-white transition-colors" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448z" />
    </svg>
    Contact us
  </button>
</div>
        </div>

        {/* Right Side: Organic Blob Image Mask */}
        <div className="relative flex w-full items-center justify-center">
          <div 
            className="relative aspect-[4/3] w-full max-w-[900px] bg-cover bg-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%'
            }}
          >
            {/* Play Button Container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Play Video"
                className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-[#f2a711] shadow-2xl transition-transform hover:scale-110 active:scale-95 sm:h-20 sm:w-20 cursor-pointer"
              >
                {/* Subtle Ripple Animation */}
                <span className="absolute inset-0 rounded-full bg-[#f2a711] opacity-75 animate-ping"></span>
                
                {/* Play Icon */}
                <svg className="w-8 h-8 text-white relative z-10 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wavy Border (SVG Divider) */}
      <div className="relative w-full overflow-hidden leading-none z-10">
        <svg 
          className="relative block w-full h-[60px] md:h-[90px] text-white" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Video Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="relative w-full max-w-3xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black rounded-full p-2 z-10 cursor-pointer"
            >
              ✕
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Kindergarten Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* CONTACT POPUP MODAL (Fully Responsive for Mobile View) */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs font-quicksand overflow-y-auto"
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
                onClick={() => setIsModalOpen(false)}
                aria-label="Close popup"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 hover:bg-black text-gray-600 hover:text-gray-100 transition-colors cursor-pointer shadow-xs flex-shrink-0 ml-2"
              >
                ✕
              </button>
            </div>

            {/* Form Body (Scrollable on small devices) */}
            <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-grow">
              {/* Mobile Number Field */}
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

              {/* Message Field */}
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

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-black text-white font-bold py-3 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer mt-2"
              >
                {submitted ? '✓ Submitted! We will call you soon' : 'Submit'}
              </button>

              {/* Footer Disclaimer */}
              <p className="text-center text-xs text-gray-500 pt-1">
                By submitting, you agree to be contacted by us.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;