import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import image from '../images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';
import bgImage from '../images/medium-shot-people-learning-together-office.jpg';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

type TrainingData = {
  image: string;
  title: string;
};

const HomePage = () => {
  const trainingData: TrainingData[] = [
    {
      image: image,
      title: 'Customer Service Excellence',
    },
    {
      image: image,
      title: 'Emotional Intelligence in Customer Interactions',
    },
    {
      image: image,
      title: 'Advanced Customer Support Techniques',
    }
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  
  const services = [
    { title: "Customer Service Excellence", route: "customer-service-excellence" },
    { title: "Emotional Intelligence in Customer Interactions", route: "emotional-intelligence-customer-interactions" },
    { title: "Advanced Customer Support Techniques", route: "advanced-customer-support-techniques" },
  ];

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About", route: "/about" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  const menu = (
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
        <li className="space-y-6">
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/services/${service.route}`}
              onClick={() => setMenuOpen(false)}
              className="block hover:underline"
            >
              {service.title}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );

  return (
    <div>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div> 
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-semibold">
          <h1>Logo</h1>
        </div>

        <button
          className="absolute top-4 right-6 md:top-6 md:right-6 text-white transition-transform duration-300"
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
              className="transition-transform duration-300 ease-in-out"
            />
          </svg>
        </button>

        <a
          href="#services"
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl transition-transform duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-12 h-12 transform animate-pulse"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {menuOpen && menu}

      <section id="services" className="p-12 mt-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-16">
            Equip Your Workforce With The Skills For Success
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center">
            {trainingData.map((training, index) => (
              <Card key={index} image={training.image} title={training.title} />
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full text-black py-6">
        <div className="text-center font-inter">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <BsTwitterX />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-black hover:text-white transition"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Skilet Point. All rights reserved.
          </p>
          <p className="text-sm md:text-base mt-1">Nairobi, Kenya</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;