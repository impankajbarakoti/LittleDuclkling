import { useState } from 'react';

const InstitutionAndServicesGrid = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  // 6 Services with Pexels images for circular top badges
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
    },
    { 
      id: 6, 
      title: "Activity Center", 
      desc: "Creative arts, music, and physical play sessions.",
      image: "https://images.pexels.com/photos/8612929/pexels-photo-8612929.jpeg?auto=compress&cs=tinysrgb&w=600",
      bgColor: "bg-[#e84393]" // Pink
    },
  ];

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
    <section className="w-full bg-[#f9fafb] px-4 py-10 sm:px-6 sm:py-12 md:px-8 lg:py-16">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick {
          font-family: 'Patrick Hand', cursive;
        }
        .font-quicksand {
          font-family: 'Quicksand', sans-serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        
        {/* Main Layout Grid: Left Side At a Glance | Right Side Services */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 font-quicksand lg:grid-cols-12">
          
          {/* LEFT SIDE: At a Glance Card */}
          <div className="min-w-0 rounded-3xl border border-gray-200 bg-white p-5 shadow-lg sm:p-6 md:p-8 lg:sticky lg:top-8 lg:col-span-4">
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              AT A GLANCE
            </span>
            
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-6 font-patrick">
              Little Duckling's Kindergarten
            </h2>

            <hr className="border-gray-100 my-4" />

            {/* What we do */}
            <div className="py-2 space-y-1">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">What we do</p>
              <p className="text-gray-800 font-medium">Educational Institution, Primary school</p>
            </div>

            <hr className="border-gray-100 my-4" />

            {/* Location */}
            <div className="py-2 space-y-1">
              <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Location</p>
              <p className="text-gray-800 font-medium text-sm">
                Plot No 7, Geeta Colony, Azad Nagar, Hisar, Haryana, 125001
              </p>
            </div>

            <hr className="border-gray-100 my-4" />

            {/* Business Hours */}
            <div className="flex items-center justify-between py-2">
              <div className="flex items-start space-x-3">
                <svg className="w-6 h-6 text-gray-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-gray-900 font-bold">Business hours</p>
                  <p className="text-sm text-gray-600">Monday-Saturday: 8am-12pm</p>
                </div>
              </div>
              
              {/* View All Days Trigger Button */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-black hover:text-orange-400 text-sm font-semibold underline underline-offset-4 cursor-pointer transition-colors"
              >
                View all days
              </button>
            </div>
          </div>


          {/* RIGHT SIDE: Services Section */}
          <div className="min-w-0 space-y-6 sm:space-y-8 lg:col-span-8">
            
            {/* Section Title */}
            <h2 className="text-3xl font-bold leading-tight text-gray-900 font-patrick sm:text-4xl">
              Services From The Best Educational Institution in Hisar
            </h2>

            {/* 3x2 Services Cards Grid */}
            <div className="grid grid-cols-1 gap-6 pt-8 sm:grid-cols-2 sm:pt-10 md:grid-cols-3">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className={`group relative ${service.bgColor} rounded-[28px] p-5 pt-16 text-white shadow-md flex flex-col justify-between cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
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
                    <h3 className="text-xl font-bold mb-1.5">{service.title}</h3>
                    <p className="text-white/90 text-xs leading-relaxed mb-5">
                      {service.desc}
                    </p>
                  </div>

                  {/* Enquire Button (Opens Contact Modal) */}
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenEnquire(service.title);
                      }}
                      className="inline-flex items-center gap-1.5 bg-white text-gray-800 hover:text-white hover:bg-black px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-xs cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448z" />
                      </svg>
                      Enquire
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Services Link Button */}
            <div className="flex justify-center md:justify-start pt-4">
              <a
                href="/services" 
                className="inline-flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:bg-orange-400 hover:border-0 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                View all services
              </a>
            </div>

          </div>

        </div>

      </div>

      {/* POPUP MODAL FOR BUSINESS HOURS (Fully Responsive for Mobile) */}
      {isModalOpen && (
        <div
          onClick={() => setIsModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs font-quicksand overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col my-auto"
          >
            
            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100 flex-shrink-0">
              <div>
                <h3 className="text-xl font-bold text-gray-900 font-patrick">Business hours</h3>
                <p className="text-sm text-gray-500">Little Duckling's Kindergarten</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors cursor-pointer flex-shrink-0"
              >
                ✕
              </button>
            </div>

            {/* Days List (Scrollable) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-3 flex-grow">
              {weeklyHours.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="font-semibold text-gray-800">{item.day}</span>
                  <span className="text-gray-600 text-sm">{item.time}</span>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-50 border-t border-gray-100 text-center text-xs text-gray-600 flex-shrink-0">
              You can{' '}
              <button
                type="button"
                onClick={() => {
                  setIsModalOpen(false);
                  handleOpenEnquire('Educational Institution');
                }}
                className="text-orange-600 underline font-medium cursor-pointer"
              >
                contact us
              </button>{' '}
              anytime during the day with your query.
            </div>

          </div>
        </div>
      )}

      {/* ENQUIRE / CONTACT POPUP MODAL (Fully Responsive for Mobile) */}
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
                <h3 className="text-xl sm:text-2xl font-bold text-[#030304] font-patrick tracking-wide">
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
                className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 hover:bg-black text-gray-600 hover:text-gray-100 transition-colors cursor-pointer shadow-xs flex-shrink-0 ml-2"
              >
                ✕
              </button>
            </div>

            {/* Form Body (Scrollable on small viewports) */}
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

    </section>
  );
};

export default InstitutionAndServicesGrid;