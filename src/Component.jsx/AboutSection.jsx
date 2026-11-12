import React, { useState } from 'react';

const AboutSection = () => {
  // Contact Popup Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState(
    "I'm interested in learning more about Little Duckling's Kindergarten. Please share details."
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

  const highlights = [
    {
      title: "Play-Based Learning",
      desc: "Hands-on activities that spark curiosity, creativity, and early problem-solving.",
      bgColor: "bg-[#8cc63f]",
    },
    {
      title: "Safe & Caring Space",
      desc: "Child-friendly classrooms with attentive supervision and a warm, second-home vibe.",
      bgColor: "bg-[#ffb020]",
    },
    {
      title: "Dedicated Educators",
      desc: "Patient, experienced facilitators who guide every child at their own pace.",
      bgColor: "bg-[#9b51e0]",
    },
  ];

  return (
    <section className="w-full bg-[#f9fafb] px-4 py-12 sm:px-6 md:px-12 lg:py-20 font-quicksand">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Split Layout: Organic Image + Our Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Side: Organic Blob Image */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Decorative Soft Accent Circle */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-[#fca92a]/20 -z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#8cc63f]/20 -z-0" />
              
              <div
                className="relative aspect-[4/3] w-full bg-cover bg-center shadow-xl border-4 border-white transition-transform duration-500 hover:scale-[1.02]"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
                  borderRadius: '60% 40% 50% 50% / 40% 50% 50% 60%',
                }}
              />
            </div>
          </div>

          {/* Right Side: Story & Mission */}
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold tracking-widest text-[#fca92a] uppercase bg-[#fff8eb] px-3.5 py-1.5 rounded-full border border-orange-200 inline-block">
              WELCOME TO LITTLE DUCKLING'S
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-patrick leading-tight">
              Where Every Child’s Learning Journey Begins With Joy
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Located in the heart of Azad Nagar, Hisar, <strong>Little Duckling's Kindergarten</strong> is dedicated to building strong early foundations through love, laughter, and purposeful play. We believe every child is naturally curious and learns best when encouraged to explore freely.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              From Kindergarten and KG-1/KG-2 programs to personalized tutoring, a cozy children's library, and creative activity sessions, we nurture social, emotional, cognitive, and physical growth in a secure environment.
            </p>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-3">
              <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#fca92a] font-patrick">6+</p>
                <p className="text-xs text-gray-600 font-semibold mt-0.5">Learning Programs</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#8cc63f] font-patrick">100%</p>
                <p className="text-xs text-gray-600 font-semibold mt-0.5">Child-Safe Campus</p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-gray-200/80 shadow-xs text-center">
                <p className="text-2xl sm:text-3xl font-bold text-[#9b51e0] font-patrick">Hisar</p>
                <p className="text-xs text-gray-600 font-semibold mt-0.5">Trusted Community</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 bg-white hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-bold text-base shadow-lg border border-gray-200 transition-all transform hover:scale-105 cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-black group-hover:text-white transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448z" />
                </svg>
                Book a Campus Visit
              </button>
            </div>
          </div>

        </div>

        {/* Bottom 3-Column Philosophy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className={`w-12 h-12 ${item.bgColor} rounded-2xl flex items-center justify-center text-white font-bold text-xl font-patrick mb-4 shadow-sm`}>
                0{idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-patrick mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* CONTACT POPUP MODAL (Fully Responsive) */}
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

export default AboutSection;