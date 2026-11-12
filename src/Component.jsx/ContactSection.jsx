import React, { useState } from 'react';

const ContactSection = () => {
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

  const weeklyHours = [
    { day: "Monday", time: "8am-12pm" },
    { day: "Tuesday", time: "8am-12pm" },
    { day: "Wednesday", time: "8am-12pm" },
    { day: "Thursday", time: "8am-12pm" },
    { day: "Friday", time: "8am-12pm" },
    { day: "Saturday", time: "8am-12pm" },
    { day: "Sunday", time: "Not provided" },
  ];

  return (
    <section className="w-full bg-[#f9fafb] px-4 py-12 sm:px-6 md:px-12 lg:py-16 font-quicksand">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* LEFT COLUMN (Width: 7 cols on lg) */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Top Card: Contact details & directions */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-patrick mb-6">
              Contact details & directions
            </h3>

            {/* Address Row */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg font-patrick">
                  Little Duckling's Kindergarten
                </h4>
                <p className="text-gray-600 text-sm sm:text-base mt-0.5 leading-relaxed">
                  Plot No 7, Geeta Colony, Azad Nagar, Hisar, Hisar, Haryana, 125001
                </p>
              </div>
            </div>

            {/* Phone Row */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <a href="tel:+917988411414" className="text-gray-900 font-bold text-base hover:text-[#201402] transition-colors">
                +91 7988411414
              </a>
            </div>

            {/* Action Buttons: Get directions & View map */}
            <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-100">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Little+Duckling%27s+Kindergarten%2C+Plot+No+7%2CGeeta+Colony%2CAzad+Nagar%2CHisar%2C+Hisar%2C+Haryana%2C+125001&destination_place_id=ChIJLfJJh9rNEzkRWdwFLVUk_mQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 px-5 py-2.5 rounded-xl font-semibold text-sm shadow-xs transition-all cursor-pointer"
              >
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                Get directions
              </a>

              <a
                href="https://www.google.com/maps/place/Little+Duckling's+Kindergarten/@29.1198024,75.6950995,17z/data=!3m1!4b1!4m6!3m5!1s0x3913cdda8749f22d:0x64fe24552d05dc59!8m2!3d29.1198024!4d75.6950995!16s%2Fg%2F11sskycb3_?entry=ttu&g_ep=EgoyMDI2MTEwOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-[#311d01] font-semibold text-sm underline underline-offset-4 transition-colors cursor-pointer"
              >
                View map
              </a>
            </div>
          </div>

          {/* Bottom Card: Have something in mind? */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              EDUCATIONAL INSTITUTION
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-patrick mt-2 mb-3">
              Have something in mind?
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              Tell Little Duckling's Kindergarten what you're looking for. We're here to help you get started.
            </p>

            {/* Contact Us Rounded Button */}
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center gap-3 bg-white hover:bg-black text-black hover:text-white px-8 py-4 rounded-full font-bold text-base shadow-lg border border-gray-200 transition-all transform hover:scale-105 cursor-pointer font-quicksand"
              >
                <svg className="w-4 h-4 text-black group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448z" />
                </svg>
                Contact us
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN (Width: 5 cols on lg): Business Hours Table */}
        <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/80 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 font-patrick mb-1">
            Business hours
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Little Duckling's Kindergarten
          </p>

          <div className="space-y-4">
            {weeklyHours.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center py-2.5 border-b border-gray-100 last:border-0 text-sm sm:text-base">
                <span className="font-semibold text-gray-800">{item.day}</span>
                <span className="text-gray-600">{item.time}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-8 pt-4 border-t border-gray-100 text-center">
            You can{' '}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-[#fca92a] hover:underline font-semibold cursor-pointer"
            >
              contact us
            </button>{' '}
            anytime during the day with your query.
          </p>
        </div>

      </div>

      {/* CONTACT POPUP MODAL (Fully Responsive for Mobile & Desktop) */}
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
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-orange-100 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer shadow-xs flex-shrink-0 ml-2"
              >
                ✕
              </button>
            </div>

            {/* Form Body (Scrollable on small viewports) */}
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
                className="w-full bg-[#fca92a] hover:bg-orange-400 text-white font-bold py-3 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 cursor-pointer mt-2"
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
    </section>
  );
};

export default ContactSection;