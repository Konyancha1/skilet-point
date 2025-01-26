const Footer = () => {
    return (
        <footer className="w-full text-black py-6">
        <div className="text-center font-inter">
            <p className="text-sm md:text-base">
            &copy; {new Date().getFullYear()} Skilet Point. All rights reserved.
            </p>
            <p className="text-sm md:text-base mt-1">
            Nairobi, Kenya
            </p>
        </div>
        </footer>
    );
};

export default Footer;  