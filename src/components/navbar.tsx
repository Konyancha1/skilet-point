import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    {
      title: "Customer Service Excellence",
      route: "customer-service-excellence", 
    },
    {
      title: "Emotional Intelligence in Customer Interactions",
      route: "emotional-intelligence-customer-interactions",
    },
    {
      title: "Advanced Customer Support Techniques",
      route: "advanced-customer-support-techniques",
    }
  ];

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-4 md:px-6 z-50">
      <div className="text-xl font-bold text-black font-inter">
        <a href="#">Logo</a>
      </div>
      <button
        className="text-black focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {!menuOpen ? (
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        ) : (
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>

      {menuOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-10 text-white flex flex-col items-end justify-center space-y-8 z-40 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 md:w-8 md:h-8 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <nav className="text-right px-4">
            <ul className="space-y-6 text-lg md:text-xl font-medium font-inter">
              <li>
                <a
                  href="/"
                  className="hover:underline"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:underline"
                >
                  About
                </a>
              </li>
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left flex items-center justify-between hover:underline"
                >
                  <span>Services</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className={`w-5 h-5 transform transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="flex flex-col items-start space-y-4 mt-4 pl-6">
                    {services.map((service, index) => (
                      <div key={index} className="w-full py-2 px-4">
                        <Link
                          to={`/services/${service.route}`}
                          className="text-base font-semibold text-white hover:underline"
                        >
                          {service.title}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:underline focus:outline-none"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;