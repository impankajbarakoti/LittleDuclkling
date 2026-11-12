const coreValuesData = [
  {
    id: 1,
    title: "Learning & Fun",
    description: "Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio",
    image: "https://smartyschool.stylemixthemes.com/kindergarten/wp-content/uploads/2015/11/img1.jpg",
    bgColor: "bg-[#8cc63f]", // Green
  },
  {
    id: 2,
    title: "Healthy Meals",
    description: "Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio",
    image: "https://smartyschool.stylemixthemes.com/kindergarten/wp-content/uploads/2015/11/img2.jpg",
    bgColor: "bg-[#9b51e0]", // Purple
  },
  {
    id: 3,
    title: "Children Safety",
    description: "Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio",
    image: "https://smartyschool.stylemixthemes.com/kindergarten/wp-content/uploads/2015/11/img3.jpg",
    bgColor: "bg-[#ffb020]", // Orange
  },
  {
    id: 4,
    title: "Sweet Vibes",
    description: "Prissy expectant involuntarily limpet until cobra less dear so overabundant contagio",
    image: "https://smartyschool.stylemixthemes.com/kindergarten/wp-content/uploads/2015/11/img4.jpg",
    bgColor: "bg-[#ff5a5f]", // Coral Red
  },
];

const CoreValues = () => {
  return (
    <section className="core-values-section py-2 px-3 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#0e0e0f] mb-15 tracking-wide">
          Our core values
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 sm:gap-10 lg:gap-8 pt-8">
          {coreValuesData.map((item) => (
            <div 
              key={item.id} 
              className={`core-value-card relative ${item.bgColor} rounded-[35px] p-6 sm:p-8 pt-20 sm:pt-24 text-white shadow-md flex flex-col items-center justify-between cursor-pointer transition-all duration-300 ease-in-out hover:z-10 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl`}
            >
              
              {/* Floating Circular Image with Hover Zoom */}
              <div className="core-value-image absolute -top-14 sm:-top-16 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-white overflow-hidden shadow-xl bg-white transition-all duration-300">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="text-center mt-2 flex flex-col items-center">
                <h3 className="core-value-title text-2xl sm:text-3xl  text-gray-200 font-bold mb-4 tracking-tight transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-white/95 text-sm sm:text-base leading-relaxed font-normal max-w-xs">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;