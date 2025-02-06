import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from '../images/JM logo.png';

const Footer = () => {
  return (
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
      <div className="flex justify-center mt-2">
        <img src={logo} className="h-[50px] w-auto z-10" />
      </div>
    </footer>
  );
};

export default Footer;