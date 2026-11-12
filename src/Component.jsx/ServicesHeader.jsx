import React from 'react';

const ServicesHeader = () => {
  return (
    <div className="relative w-full bg-[#fca92a] pt-16 pb-20 px-6 md:px-16 overflow-hidden text-white font-quicksand">
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

      {/* Header Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
        {/* Subtitle Badge */}
        <span className="text-xs md:text-sm font-bold tracking-widest text-white uppercase bg-white/20 px-4 py-1.5 mt-16  rounded-full border border-white/30 inline-block">
          WHAT WE OFFER
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-wide font-patrick drop-shadow-sm">
          Explore Our Programs & Services
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-white/95 text-base md:text-lg font-medium leading-relaxed">
          Discover a joyful world of learning at Little Duckling's Kindergarten, designed to nurture curiosity, creativity, and foundational growth in every child.
        </p>
      </div>

      {/* Bottom Wavy Border (SVG Divider) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10">
        <svg 
          className="relative block w-full h-[40px] md:h-[70px] text-[#f9fafb]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,40 L1200,120 L0,120 Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ServicesHeader;