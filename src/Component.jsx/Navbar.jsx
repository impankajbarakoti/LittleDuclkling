import { useState, useEffect } from "react";
import img from "../assets/Duckling.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services ", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar fixed w-full min-h-16 top-0 z-50 flex justify-between items-center gap-3 bg-white px-4 py-2 shadow-md transition-all duration-300 ease-in-out sm:px-6 sm:py-3 lg:px-12 ${
        isScrolled
          ? "lg:bg-gray-100 lg:shadow-md"
          : "lg:bg-gray-100 lg:shadow-none"
      }`}
    >
      {/* Logo */}
      <div className="flex min-w-0 items-center">
        <a href="/">
          <img
            src={img}
            alt="Logo"
            className="w-12 shrink-0 sm:w-16 lg:w-20"
          />
        </a>
        <h6 className="ml-2 max-w-[190px] text-sm font-bold leading-tight sm:max-w-none sm:text-base lg:text-xl"> <a href="/" > Little Duckling's Kindergarten </a> </h6>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex space-x-6 text-xl font-semibold">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className={`relative transition duration-300 pb-1 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                after:w-0 after:transition-all after:duration-300 hover:after:w-full
                ${
                  isScrolled
                    ? "text-black after:bg-black hover:text-orange-500"
                    : "text-black after:bg-black hover:text-orange-500"
                }`}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA Button */}
      <div className="hidden lg:block">
        <a href="/contact">
          <button className="bg-white text-black hover:text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-black hover:scale-105 transition-all focus:outline-none focus:ring-0">
            Contact Us
          </button>
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="shrink-0 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 z-10 w-full bg-white shadow-md lg:hidden">
          <ul className="flex flex-col space-y-4 px-6 py-4 text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="relative text-black hover:text-yellow-500 transition duration-300 pb-1
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                    after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a href="/contact">
                <button className="bg-gradient-to-r bg-[#0a0907] text-white font-semibold px-6 py-3 w-full shadow-md hover:scale-105 transition-transform">
                  Contact Us
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;