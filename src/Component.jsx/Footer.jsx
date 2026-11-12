// import logoUrl from "../assets/Duckling.png";
// const Footer = () => {
//   const quickLinksColumn1 = ["Home", "About Us", "Program", "Classes", "News"];
//   const quickLinksColumn2 = [
//     "Events",
//     "Typography",
//     "Contacts",
//     "Page 404",
//     "Shortcodes",
//   ];

//   const infoForColumn1 = ["Donations", "Gallery", "Program"];
//   const infoForColumn2 = ["FAQ", "Price Table", "Timetable"];

//   return (
//     <footer className="site-footer relative  overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12">
//       <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
//         {/* Column 1: Logo & Description */}
//         <div className="flex flex-col space-y-5 lg:col-span-3">
//           <div className="flex items-center space-x-3">
//             <img
//               src={logoUrl}
//               alt="Little Duckling's Kindergarten logo"
//               className="h-12 w-12 shrink-0 object-contain"
//             />
//             <div className="flex flex-col leading-tight">
//               <span className="text-xl font-bold tracking-tight text-[#f2994a]">
//                 Little Duckling's
//               </span>
//               <span className="text-sm font-semibold tracking-wide text-[#f2994a]">
//                 Kindergarten
//               </span>
//             </div>
//           </div>
//           <p className="max-w-xs text-sm leading-relaxed text-[#c4cfcc]">
//             Little Ducklings Kindergarten: A safe, joyful early learning center
//             nurturing curiosity, creativity, and holistic growth through play.
//           </p>
//         </div>

//         {/* Column 2: Contact Info */}
//         <div className="space-y-4 lg:col-span-3">
//           <h3 className="mb-6 text-2xl font-bold tracking-wide text-white">
//             CONTACT INFO
//           </h3>
//           <ul className="space-y-4 text-sm text-[#e1e7e5]">
//             {/* Address */}
//             <li className="flex items-start space-x-3">
//               <svg
//                 className="w-5 h-5 text-[#f2994a] flex-shrink-0 mt-0.5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//               <span>
//                 Plot No 7,Geeta Colony,Azad Nagar,Hisar, Hisar, Haryana, 125001
//               </span>
//             </li>

//             {/* Phone */}
//             <li className="flex items-center space-x-3">
//               <svg
//                 className="w-5 h-5 text-[#f2994a] flex-shrink-0"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
//                 />
//               </svg>
//               <span>Call Free: +91 7988411414</span>
//             </li>

//             {/* Email */}
//             <li className="flex items-center space-x-3">
//               <svg
//                 className="w-5 h-5 text-[#f2994a] flex-shrink-0"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                 />
//               </svg>
//               <a
//                 href="mailto:info@stylemixthemes.com"
//                 className="text-[#f2994a] hover:underline"
//               >
//                 info@.littleducklingkindergarten.com
//               </a>
//             </li>

//             {/* Timing */}
//             <li className="flex items-center space-x-3">
//               <svg
//                 className="w-5 h-5 text-[#f2994a] flex-shrink-0"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               <span>Mon — Sat: 8.00 AM — 12.00 PM</span>
//             </li>
//           </ul>
//         </div>

//         {/* Column 3: Quick Links (2-Sub-Columns) */}
//         <div className="space-y-4 lg:col-span-3">
//           <h3 className="mb-6 text-2xl font-bold tracking-wide text-white">
//             QUICK LINKS
//           </h3>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <ul className="space-y-3">
//               {quickLinksColumn1.map((link, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center space-x-2 group cursor-pointer"
//                 >
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#f2994a]"></span>
//                   <span className="text-[#e1e7e5] transition-colors group-hover:text-[#fca92a]">
//                     {link}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <ul className="space-y-3">
//               {quickLinksColumn2.map((link, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center space-x-2 group cursor-pointer"
//                 >
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#f2994a]"></span>
//                   <span className="text-[#e1e7e5] transition-colors group-hover:text-[#fca92a]">
//                     {link}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Column 4: Information For (2-Sub-Columns) */}
//         <div className="space-y-4 lg:col-span-3">
//           <h3 className="mb-6 text-2xl font-bold tracking-wide text-white">
//             INFORMATION FOR
//           </h3>
//           <div className="grid grid-cols-2 gap-4 text-sm">
//             <ul className="space-y-3">
//               {infoForColumn1.map((link, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center space-x-2 group cursor-pointer"
//                 >
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#f2994a]"></span>
//                   <span className="text-[#e1e7e5] transition-colors group-hover:text-[#fca92a]">
//                     {link}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//             <ul className="space-y-3">
//               {infoForColumn2.map((link, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center space-x-2 group cursor-pointer"
//                 >
//                   <span className="w-1.5 h-1.5 rounded-full bg-orange-300"></span>
//                   <span className="text-[#e1e7e5] transition-colors group-hover:text-[#fca92a]">
//                     {link}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from 'react';
import logo from "../assets/Duckling.png"

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-white pt-16 pb-12 px-4 sm:px-6 md:px-12 font-quicksand border-t-0 md:border-t md:border-gray-800">
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Quicksand:wght@400;500;600;700&display=swap');
        .font-patrick { font-family: 'Patrick Hand', cursive; }
        .font-quicksand { font-family: 'Quicksand', sans-serif; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
        
        {/* Column 1: Brand Logo & Info */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3.5">
            <img
              src={logo}
              alt="Little Duckling's Kindergarten Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl object-contain bg-white p-1.5 shadow-md flex-shrink-0"
            />
            <h3 className="text-2xl sm:text-3xl font-bold font-patrick text-[#fca92a] tracking-wide leading-tight">
              Little Duckling's Kindergarten
            </h3>
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-sm">
            Nurturing young minds with love, laughter, and purposeful play in Azad Nagar, Hisar. A safe second home for your child's early education.
          </p>

          <div className="pt-2 text-sm text-gray-300 space-y-1">
            <p><strong className="text-white">Phone:</strong> 7988411414</p>
            <p><strong className="text-white">Address:</strong> Plot No 7, Geeta Colony, Azad Nagar, Hisar, Haryana, 125001</p>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="text-lg font-bold font-patrick tracking-wider text-white uppercase">
            Quick Links
          </h4>
          <ul className="space-y-2.5 text-sm text-gray-400">
            <li>
              <a href="/" className="hover:text-[#fca92a] transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#fca92a] transition-colors">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-[#fca92a] transition-colors">Services & Programs</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#fca92a] transition-colors">Contact & Map</a>
            </li>
          </ul>
        </div>

        {/* Column 3: Timing & Hours */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="text-lg font-bold font-patrick tracking-wider text-white uppercase">
            Working Hours
          </h4>
          <div className="text-sm text-gray-400 space-y-2">
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span>Monday – Saturday:</span>
              <span className="text-white font-semibold">8:00 AM – 12:00 PM</span>
            </div>
            <div className="flex justify-between pb-2">
              <span>Sunday:</span>
              <span className="text-gray-500">Closed</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 pt-2">
            Feel free to reach out to us anytime during working hours with your queries!
          </p>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Little Duckling's Kindergarten. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;