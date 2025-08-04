import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/card";
import jmLogo from '../images/JM logo.png';
import image1 from "../images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg";
import image2 from '../images/medium-shot-people-learning-together-office.jpg';
import image3 from '../images/patrick-tomasso-fMntI8HAAB8-unsplash.jpg';
import image4 from '../images/pexels-vlada-karpovich-4939645.jpg';
import image5 from '../images/pexels-cottonbro-5989925.jpg';
import image6 from '../images/alexander-grey-eMP4sYPJ9x0-unsplash.jpg';
import image7 from '../images/pexels-rdne-9034253.jpg';
import bgImage from "../images/image1.jpeg";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from '../images/logo1.png';
import EventBanner from "../components/ui/Banner";

type TrainingData = {
  image: string;
  title: string;
  route: string;
};

const HomePage = () => {
  const trainingData: TrainingData[] = [
    { image: image2, title: "Communication & Presentation Skills", route: "communication-skills"},
    { image: image3, title: "Customer Experience Trainings", route: "customer-experience-trainings"},
    { image: image1, title: "Leadership & Management", route: "leadership-and-management"},
    { image: image4, title: "Personal Development Courses", route: "personal-development-courses"},
    { image: image5, title: "HR", route: "hr"},
    { image: image6, title: "Professional Certification Courses", route: "professional-certificate-courses"},
    { image: image7, title: "John Maxwell Trainings", route: "john-maxwell-trainings"},
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);
  const navLinks = [
    { name: "Home", route: "/" },
    { name: "About Us", route: "/about" },
    { name: "Contact Us", route: "/contact-us" },
  ];

  return (
    <div className="font-inter">
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-white text-center overflow-hidden">
        {!heroLoaded && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        )}
        <img
          src={bgImage}
          alt="Background"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            heroLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setHeroLoaded(true)}
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <img
          src={logo}
          className="h-[30px] md:h-[50px] w-auto absolute top-4 left-6 z-50"
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
        <div className="z-50 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Transform Your Customer Experience
          </h1>
          <p className="text-lg md:text-2xl mb-8 px-1">
            Empower your team with world-class training to deliver exceptional service, build lasting relationships, and drive business growth.
          </p>
          <button
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white z-100 animate-bounce"
            onClick={() => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            aria-label="Scroll to Services Section"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-10 h-10 transition-transform duration-300 hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m0 0l6-6m-6 6l-6-6"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* Mobile Menu */}
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

       <section className="p-6 md:p-12">
          <EventBanner /> 
       </section>
      
      {/* Services Section */}
      <section id="services" className="p-6 md:p-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
            Equip Your Workforce With The Skills For Success
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
            {trainingData.map((training, index) => (
              <Card key={index} image={training.image} title={training.title} link={training.route}/>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-black flex flex-col items-center">
        <div className="flex justify-center space-x-4 mb-4 mt-2">
          {[
            { Icon: FaFacebookF, link: "https://facebook.com" },
            { Icon: BsTwitterX, link: "https://twitter.com" },
            { Icon: FaLinkedinIn, link: "https://linkedin.com" },
            { Icon: FaInstagram, link: "https://instagram.com" },
          ].map((social, index) => (
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
        <div className="flex justify-center mt-2">
          <img src={jmLogo} className="h-[50px] w-auto z-10" />
        </div>
      </footer>
    </div>
  );
};

export default HomePage;