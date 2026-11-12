import React from 'react';

const MapSection = () => {
  return (
    <section className="w-full bg-[#f9fafb] py-12 px-4 sm:px-6 md:px-12 lg:py-16 font-quicksand">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Section Header */}
        <div className="space-y-1">
          <span className="text-xs font-bold tracking-widest text-black uppercase">
            FIND US
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-patrick tracking-wide">
            Contact Little Duckling's Kindergarten
          </h2>
        </div>

        {/* Embedded Map Container */}
        <div className="w-full h-[350px] sm:h-[450px] md:h-[500px] rounded-3xl overflow-hidden shadow-md border border-gray-200/80 bg-white">
          <iframe
            title="Little Duckling's Kindergarten Location Map"
            src="https://www.google.com/maps?ll=29.116094,75.700005&z=15&t=m&hl=en-US&gl=US&mapclient=embed&cid=7277293996123479129&output=embed"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default MapSection;