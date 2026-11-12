import React, { useState } from 'react';

const HelpfulDetailsSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What should I include in my enquiry?",
      answer: "Please mention your child's age, the specific program you are interested in (such as Kindergarten, KG-1, KG-2, or Tutoring), and any preferred timings so we can assist you better."
    },
    {
      question: "Can I ask about a specific product or service?",
      answer: "Yes, absolutely! You can inquire about any of our academic programs, library access, activity center sessions, or tutoring support through our contact options."
    },
    {
      question: "Where can I find the business?",
      answer: "Little Duckling's Kindergarten is conveniently located at Plot No 7, Geeta Colony, Azad Nagar, Hisar, Haryana, 125001."
    },
    {
      question: "What are the opening hours?",
      answer: "We are open from Monday to Saturday, 8:00 AM to 12:00 PM. You can reach out to us anytime during the day with your queries."
    }
  ];

  return (
    <section className="w-full bg-[#f9fafb] px-4 py-12 sm:px-6 md:px-12 lg:py-20 font-quicksand">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Left Column: Heading & Subtitle */}
        <div className="lg:col-span-5 space-y-3 lg:sticky lg:top-8">
          <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
            BEFORE YOU GET IN TOUCH
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-patrick leading-tight">
            A few helpful details.
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed pt-2">
            Got questions before reaching out to Little Duckling's Kindergarten? Here are quick answers to some of the most common things parents ask us.
          </p>
        </div>

        {/* Right Column: Accordion List */}
        <div className="lg:col-span-7 space-y-4">
          <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden divide-y divide-gray-100">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left font-bold text-gray-900 hover:text-[#fca92a] transition-colors cursor-pointer group"
                  >
                    <span className="text-base sm:text-lg flex items-center gap-3">
                      <span className={`transform transition-transform duration-300 text-gray-400 group-hover:text-[#fca92a] ${isOpen ? 'rotate-90 text-[#fca92a]' : ''}`}>
                        ▶
                      </span>
                      {faq.question}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-7 sm:px-7 text-gray-600 text-sm sm:text-base leading-relaxed animate-fadeIn">
                      <p className="pl-6 border-l-2 border-[#fca92a]/40">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HelpfulDetailsSection;