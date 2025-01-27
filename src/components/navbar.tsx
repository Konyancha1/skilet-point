import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 md:px-6 z-50">
      <div className="text-xl font-bold text-black font-inter p-4">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          Logo
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

      <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
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
        <ul className="space-y-6 text-lg md:text-xl font-medium font-inter text-right">
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