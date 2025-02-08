import { useState } from "react";
import { Link } from "react-router-dom";
import logo from'../images/logo1.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  return (
    <header className="relative top-0 left-0 w-full flex items-center justify-between p-6 md:px-[10%] z-50">
      <div className="text-xl font-bold text-black font-inter p-4">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img 
            src={logo}
            className="h-8 w-auto"
          />
        </Link>
      </div>
      <button
        className="text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 md:w-8 md:h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>

      <nav
        className={`fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center text-white z-20 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="background"></div>
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4 md:top-6 md:right-6 text-white"
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="text-lg space-y-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.route} onClick={() => setMenuOpen(false)} className="hover:underline">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;