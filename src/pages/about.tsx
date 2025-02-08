import { FaLightbulb, FaBullseye } from "react-icons/fa";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import image from "../images/about-skilet.jpeg";
import image2 from "../images/about image.jpeg";

const About = () => {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageLoaded2, setImageLoaded2] = useState(false);

  return (
    <div>
      <section className="mb-6">
        {!imageLoaded1 && <Skeleton variant="rectangular" width="100%" height={320} />}
        <img
          src={image}
          alt="About Skilet"
          className={`w-full h-80 md:h-112 object-cover transition-opacity duration-500 ${imageLoaded1 ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setImageLoaded1(true)}
        />
      </section>

      <section className="text-left md:text-justify text-black leading-relaxed mb-6">
        <p className="text-lg mb-6">
          At SkiletPoint, our mission is to empower individuals and organizations
          with the skills and knowledge needed to excel in today’s fast-evolving world.
          We believe that success is rooted in continuous learning, and we are dedicated
          to providing transformative educational experiences that equip organizations
          with practical, real-world competencies.
        </p>
        <p className="text-lg mb-6">
          SkiletPoint is not just a platform—it’s a movement toward bettering the
          workforce and elevating industry standards through innovative training
          solutions. Our carefully crafted programs span a wide range of industries,
          including customer service, emotional intelligence, and advanced support
          techniques, with a special focus on enhancing professional skills in alignment
          with global best practices.
        </p>
        <p className="text-lg mb-6">
          We pride ourselves on our dynamic, hands-on approach to training.
          Our programs are designed to foster growth and personal development,
          ensuring that every participant leaves with the tools they need to thrive
          in their chosen field. Whether it’s empowering individuals with customer
          service excellence or sharpening emotional intelligence, SkiletPoint prepares
          its learners for success from day one.
        </p>
      </section>

      <section className="mb-6">
        {!imageLoaded2 && <Skeleton variant="rectangular" width="100%" height={320} />}
        <img
          src={image2}
          alt="About Skilet"
          className={`w-full h-80 md:h-112 object-cover transition-opacity duration-500 ${imageLoaded2 ? "opacity-100" : "opacity-0"}`}
          loading="lazy"
          onLoad={() => setImageLoaded2(true)}
        />
      </section>

      <section className="text-black mb-6">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between space-y-8 md:space-y-0 md:space-x-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
              <FaLightbulb className="mr-3 text-yellow-500" /> Our Vision
            </h3>
            <p className="text-lg leading-relaxed">
              Our vision is to revolutionize the industry by creating innovative
              solutions that empower businesses to thrive in a digital world.
            </p>
          </div>

          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
              <FaBullseye className="mr-3 text-red-500" /> Our Mission
            </h3>
            <p className="text-lg leading-relaxed">
              Our mission is to empower individuals and organizations with the
              skills and knowledge needed to excel in today’s fast-evolving world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
