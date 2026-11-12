import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';

const GoogleReviews = () => {
  // Real reviews extracted from Google Maps listing
  const reviews = [
    {
      id: 1,
      author: "Thota Teja",
      date: "May 25, 2026",
      rating: 5,
      comment: "Best play school fully ac and wel furnished and good staff.",
      avatarBg: "bg-amber-700"
    },
    {
      id: 2,
      author: "Suman Gupta",
      date: "April 25, 2026",
      rating: 5,
      comment: "Nice playschool and well managed transport",
      avatarBg: "bg-red-600"
    },
    {
      id: 3,
      author: "Rajesh Rathi",
      date: "April 2, 2026",
      rating: 5,
      comment: "अशोक विहार, गीता कॉलोनी, चंद्रलोक कॉलोनी, फ्रेंड्स एन्क्लेव, आज़ाद नगर हिसार के छोटे बच्चो के लिए बेहतरीन स्कूल",
      avatarBg: "bg-blue-600"
    }
  ];

  return (
    <section className="w-full bg-[#f9fafb] py-6 md:py-4 px-4 md:px-12">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto font-quicksand">
        
        {/* Section Header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <FcGoogle className="h-7 w-7" aria-label="Google" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-patrick">
                Google reviews
              </h2>
            </div>
            
            {/* Overall Rating Score */}
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">5.0</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5" />
                ))}
              </div>
              <span className="text-sm text-gray-500 font-medium">110+ reviews</span>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Author Info & Google Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold flex items-center justify-center text-lg shadow-xs`}>
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{item.author}</h4>
                      <p className="text-xs text-gray-400">{item.date}</p>
                    </div>
                  </div>
                  {/* React Icon Google Logo */}
                  <FcGoogle className="h-5 w-5" aria-label="Google" />
                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {item.comment}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Read All Reviews Button */}
        <div className="flex justify-center mt-5">
          <a
            href="https://www.google.com/maps/place/Little+Duckling's+Kindergarten/@29.1198024,75.6950995,17z/data=!4m8!3m7!1s0x3913cdda8749f22d:0x64fe24552d05dc59!8m2!3d29.1198024!4d75.6950995!9m1!1b1!16s%2Fg%2F11sskycb3_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center  border border-gray-300gap-2 bg-white  hover:border-orange-500 text-gray-700 hover:text-orange-500 px-6 py-3 rounded-xl text-sm font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer"
          >
            <FcGoogle className="h-5 w-5" aria-label="Google" />
            Read all reviews on Google
          </a>
        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;