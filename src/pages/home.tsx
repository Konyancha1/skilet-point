import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import image from "../images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";
import bgImage from "../images/home-image.jpeg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from '../images/logo1.png';

type TrainingData = {
  image: string;
  title: string;
};

const HomePage = () => {
  const trainingData: TrainingData[] = [
    { image: image, title: "Communication & Presentation Skills" },
    { image: image, title: "Customer Experience Trainings" },
    { image: image, title: "Leadership & Management" },
    { image: image, title: "Personal Development Courses" },
    { image: image, title: "HR" },
    { image: image, title: "Professional Certification Courses" },
    { image: image, title: "John Maxwell Trainings" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  return (
    <div className="font-inter">
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
        <img
          src={bgImage}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <img
          src={logo}
          className="h-[13%] w-auto z-50"
        />
        
        <button
          className="absolute top-4 right-6 text-white z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </section>

      {menuOpen && (
        <nav className="fixed inset-0 bg-black/70 backdrop-blur-md flex flex-col items-center justify-center text-white z-100">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-6 text-white"
            aria-label="Close menu"
          >
            ✖
          </button>
          <ul className="text-lg space-y-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link to={link.route} onClick={() => setMenuOpen(false)}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <section id="services" className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Equip Your Workforce With The Skills For Success
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {trainingData.map((training, index) => (
              <Card key={index} image={training.image} title={training.title} />
            ))}
          </div>
        </div>
      </section>

      <footer className="w-full py-6 text-center text-black">
        <div className="flex justify-center space-x-4 mb-4">
          {[{ Icon: FaFacebookF, link: "https://facebook.com" },
            { Icon: BsTwitterX, link: "https://twitter.com" },
            { Icon: FaLinkedinIn, link: "https://linkedin.com" },
            { Icon: FaInstagram, link: "https://instagram.com" }].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                <social.Icon />
              </a>
            ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Skilet Point. All rights reserved.</p>
        <p className="text-sm">Nairobi, Kenya</p>
      </footer>
    </div>
  );
};

export default HomePage;