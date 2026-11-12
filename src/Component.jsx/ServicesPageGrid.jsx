import React, { useState } from 'react';

const ServicesPageGrid = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Enquiry Contact Modal States
  const [isEnquireOpen, setIsEnquireOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('+91');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleOpenEnquire = (serviceTitle) => {
    setMessage(`I'm interested in ${serviceTitle}. Please share more information.`);
    setSubmitted(false);
    setIsEnquireOpen(true);
  };

  const handleEnquireSubmit = (e) => {
    e.preventDefault();
    if (!mobile.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsEnquireOpen(false);
      setMobile('');
    }, 1800);
  };

  // Services list with Pexels images and matching vibrant background colors
  const services = [
    { 
      id: 1, 
      title: "Kindergarten", 
      desc: "Fun and foundational learning activities for kids.",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-[#8cc63f]" // Green
    },
    { 
      id: 2, 
      title: "Tutoring", 
      desc: "Personalized academic support and guidance.",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-[#9b51e0]" // Purple
    },
    { 
      id: 3, 
      title: "Library", 
      desc: "A rich collection of books to foster reading habits.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-[#ffb020]" // Orange
    },
    { 
      id: 4, 
      title: "KG-1", 
      desc: "Early developmental stages designed for toddlers.",
      image: "https://images.pexels.com/photos/3662630/pexels-photo-3662630.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-[#ff5a5f]" // Red
    },
    { 
      id: 5, 
      title: "KG-2", 
      desc: "Advanced pre-school curriculum for steady growth.",
      image: "https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-[#00cec9]" // Teal
    }
  ];

  // Filtered services based on search query
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="w-full bg-[#f9fafb] px-4 py-12 sm:px-6 md:px-12 lg:py-16 font-quicksand">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-patrick">
            Services From The Best Educational Institution in Hisar
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Explore Educational Institution, Primary school from Little Duckling's Kindergarten. Ask us about availability, details or your specific needs.
          </p>
        </div>

        {/* Search Bar Container */}
        <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm space-y-3">
          <label className="block text-sm font-bold text-gray-800">
            Search products & services
          </label>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="What are you looking for?"
                className="w-full border border-gray-300 focus:border-[#100a01] focus:ring-2 focus:ring-[#100a01] rounded-2xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition-all"
              />
            </div>
            <button
              type="button"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-black hover:bg-orange-400 text-white font-bold px-8 py-3 rounded-2xl text-sm transition-all shadow-md cursor-pointer flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* Tabs Indicator */}
        <div className="border-b border-gray-200 pb-3">
          <span className="font-bold text-gray-900 text-base border-b-2 border-black pb-3">
            Services
          </span>
        </div>

        {/* Services Grid (Added top padding 'pt-10' to accommodate floating circular badge) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {filteredServices.length > 0 ? (
            filteredServices.map((service) => (
              <div 
                key={service.id}
                className={`group relative ${service.bgColor} rounded-[28px] p-6 pt-16 text-white shadow-md flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
              >
                {/* Floating Circular Image */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full border-4 border-white overflow-hidden shadow-lg bg-white transition-transform duration-300 group-hover:scale-110">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115"
                  />
                </div>

                {/* Content */}
                <div className="text-center mt-2">
                  <h3 className="text-2xl font-bold mb-2 font-patrick">{service.title}</h3>
                  <p className="text-white/95 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                {/* Enquire Button */}
                <div className="flex justify-center pt-4 border-t border-white/20">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenEnquire(service.title);
                    }}
                    className="group/btn inline-flex items-center gap-2 bg-white hover:bg-black text-gray-800 hover:text-white border border-gray-300 hover:border-black px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                  >
                    <svg 
                      className="w-3.5 h-3.5 text-black group-hover/btn:text-white transition-colors" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448z" />
                    </svg>
                    Enquire
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-10 text-center text-gray-500 font-medium">
              No services found matching "{searchQuery}".
            </div>
          )}
        </div>

        {/* Footer text */}
        <div className=" text-center text-xs text-ornage-400 font-medium ">
          You've explored all available products and services.
        </div>

      </div>

      {/* ENQUIRE / CONTACT POPUP MODAL (Fully Responsive) */}
      {isEnquireOpen && (
        <div
          onClick={() => setIsEnquireOpen(false)}
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
                onClick={() => setIsEnquireOpen(false)}
                aria-label="Close popup"
                className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-orange-100 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer shadow-xs flex-shrink-0 ml-2"
              >
                ✕
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleEnquireSubmit} className="p-5 sm:p-6 space-y-4 overflow-y-auto flex-grow">
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

export default ServicesPageGrid;