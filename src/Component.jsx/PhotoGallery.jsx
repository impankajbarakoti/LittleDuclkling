import { useRef, useState } from 'react';

const PhotoGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('fade-in');
  const touchStartX = useRef(null);

  // Real high-resolution images from Google Maps listing
  const photos = [
    { 
      id: 1, 
      url: "https://lh3.googleusercontent.com/k77KBZ00LW7zbGHzsDBgguuGJDsI0_n8QncZLkMNlzpfBjvW2O9FCRkStZlwp-P_s6qEeDJUkqjwWKXYUQ", 
      alt: "School Activity & Medical Camp" 
    },
    { 
      id: 2, 
      url: "https://lh3.googleusercontent.com/rsHrMr-MDt1U9LB6x-jrwnQ0fhW99TtkfwiGxe8AeiB1U53xLnuzO2t85n0nsJpxB_sqUnLgy5ufJlGq3w", 
      alt: "Classroom Interaction" 
    },
    { 
      id: 3, 
      url: "https://lh3.googleusercontent.com/M05xpWCJaq1xfcqCpmkjC77WokhtxkjhEfZamUwuYnbKhSMpLH0zLfVfNSV8zxmvS0kUhyaWyFSEHh-bgQ", 
      alt: "Kids Playing and Learning" 
    },
    { 
      id: 4, 
      url: "https://lh3.googleusercontent.com/lMlK4ZMnFSfrpqOG61DAlZN7DXzLT7AJdRO0xyenpcfi5pZQe7TwgFNLAFz1Hidm11KOu1QxLg4LWCDi0g", 
      alt: "Happy Toddlers" 
    },
    { 
      id: 5, 
      url: "https://lh3.googleusercontent.com/ZdF5nQkE51O2alVi9ZNjVXu_3E6Pqid_AUcjHEB6CV__gcbcHLJQ2oUcXXCvYjY93A9cC8X-IQyGuK1QAQ", 
      alt: "Kindergarten Students" 
    },
    { 
      id: 6, 
      url: "https://lh3.googleusercontent.com/mXr3SXP2_NsqBAv7CtpfEsDqQLjo3t8__7q-T6BujYAry8uFLUV6PdA8tbiXe38boDNqaJHHaj_wlhQJ5w", 
      alt: "Creative Session" 
    },
    { 
      id: 7, 
      url: "https://lh3.googleusercontent.com/B4v6p1s6ywojPyGM5ZYzPPT-93bp7vnKJmoeZ9ss2u3mIqJjBz7Q3QorKurIiUlF3RSndK6MQRc3f-32_A", 
      alt: "Interactive Learning" 
    },
    { 
      id: 8, 
      url: "https://lh3.googleusercontent.com/XlugRzdEUg5Y-7C0u7ta5waxOKIuf9EFSvgkPfn5P_tAt6HlnRkFs-gfBP4cWyoboRkirlmwBzaXDhqn-g", 
      alt: "School Environment" 
    }
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleNext = () => {
    setSlideDirection('slide-left');
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setTimeout(() => {
      setSlideDirection('fade-in');
    }, 250);
  };

  const handlePrev = () => {
    setSlideDirection('slide-right');
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setTimeout(() => {
      setSlideDirection('fade-in');
    }, 250);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) return;

    const swipeDistance = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(swipeDistance) < 50) return;
    if (swipeDistance < 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section className="w-full bg-white px-4 py-16 md:px-12">
      {/* Google Fonts & Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }

        @keyframes photoSlideLeft {
          0% { transform: translateX(32px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        @keyframes photoSlideRight {
          0% { transform: translateX(-32px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .slide-left { animation: photoSlideLeft 0.25s ease-out both; }
        .slide-right { animation: photoSlideRight 0.25s ease-out both; }
      `}</style>

      <div className="mx-auto max-w-7xl font-quicksand">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold -mt-15 text-gray-900 mb-8 font-patrick">
          Our photo gallery
        </h2>

        {/* Photo Grid with Stylish Tilt & Skew Hover Effect */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              onClick={() => openModal(index)}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-2xl bg-gray-100 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              <img 
                src={photo.url} 
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:skew-x-2"
              />
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-semibold tracking-wide bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs">
                  Click to view
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Photos Button */}
       <div className="flex justify-center mt-10">
  <button
    onClick={() => openModal(0)}
    className="group inline-flex items-center gap-2.5 bg-black  text-gray-800 px-7 py-3 rounded-2xl text-sm font-bold shadow-md hover:bg-orange-400 hover:text-white hover:shadow-xl hover:scale-105 hover:-translate-y-1 active:scale-95 transition-all duration-300 ease-out cursor-pointer"
  >
    <svg
      className="w-5 h-5 text-[#fefefe] group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
    <span className='text-white'>View all photos ({photos.length})</span>
  </button>
</div>

      </div>

      {/* STYLISH LIGHTBOX MODAL WITH BOOK PAGE SWIPE ANIMATION */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm font-quicksand">
          <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
           
{/* Modal Header */}
<div className="relative flex items-center justify-between px-4 py-4 pr-16 border-b border-gray-100 sm:px-6">

  <div className="min-w-0">
    
<h3 className="text-base sm:text-lg font-bold text-gray-900 font-patrick">
  <a
    href="https://www.google.com/maps/search/?api=1&query=Little+Duckling%27s+Kindergarten+Hisar+Haryana"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline hover:text-orange-500 transition-colors"
  >
    Little Duckling's Kindergarten
  </a>
  {" "}· Photos
</h3>

  </div>

  {/* Always Visible Close Button */}
  <button
    type="button"
    onClick={closeModal}
    aria-label="Close photo gallery"
    className="absolute top-1/2 right-3 sm:right-5 -translate-y-1/2 z-[70] flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-white shadow-lg hover:bg-orange-500 active:scale-90 transition-all duration-200 cursor-pointer"
  >
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.5"
        d="M6 6l12 12M18 6L6 18"
      />
    </svg>
  </button>

</div>


            {/* Modal Image Body with Book Page Swipe Animation */}
            <div
              className="relative flex min-h-[300px] flex-1 touch-pan-y items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4 perspective-1000 sm:min-h-[400px] sm:p-6"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                key={currentIndex}
                src={photos[currentIndex].url} 
                alt="Enlarged view" 
                className={`max-h-[60vh] max-w-full rounded-lg object-contain shadow-2xl transition-all duration-300 ${slideDirection}`}
              />

              {/* Left Arrow Button */}
              <button 
                onClick={handlePrev}
                className="group absolute left-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-[#fca92a] hover:bg-[#fca92a] focus:outline-none focus:ring-2 focus:ring-[#fca92a] focus:ring-offset-2 focus:ring-offset-gray-900 sm:left-5 sm:h-14 sm:w-14"
                aria-label="Previous Photo"
              >
                <svg className="h-5 w-5 transition-transform group-hover:-translate-x-0.5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button 
                onClick={handleNext}
                className="group absolute right-3 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 hover:border-[#fca92a] hover:bg-[#fca92a] focus:outline-none focus:ring-2 focus:ring-[#fca92a] focus:ring-offset-2 focus:ring-offset-gray-900 sm:right-5 sm:h-14 sm:w-14"
                aria-label="Next Photo"
              >
                <svg className="h-5 w-5 transition-transform group-hover:translate-x-0.5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Modal Footer / Counter */}
            <div className="flex items-center justify-between gap-4 border-t border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-600 sm:px-6">
              <span className="min-w-0 truncate font-medium">{photos[currentIndex].alt}</span>
              <span className="shrink-0 rounded-full bg-[#fca92a]/15 px-3 py-1 font-semibold text-gray-900">{currentIndex + 1} / {photos.length}</span>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default PhotoGallery;