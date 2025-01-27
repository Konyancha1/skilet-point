import { FaLightbulb, FaBullseye } from "react-icons/fa";
import image from '../images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg'

const About = () => {
  return (
    <div className="mt-6 md:mt-12  px-8 md:px-24">
      <section className="mb-6">
        <img
          src={image}
          alt="About Skilet"
          className="w-full h-96 object-cover"
        />
      </section>

      <section className="text-justify text-black">
        <p className="text-lg mb-6"> 
          At SkiletPoint, our mission is to empower individuals and organizations 
          with the skills and knowledge needed to excel in today’s fast-evolving world. 
          We believe that success is rooted in continuous learning, and we are dedicated to providing transformative educational experiences that equip organizations with practical, real-world competencies.
        </p>
        <p className="text-lg mb-6"> 
          SkiletPoint is not just a platform—it’s a movement toward bettering the 
          workforce and elevating the industry standards through innovative training 
          solutions. Our carefully crafted programs span a wide range of industries, 
          including customer service, emotional intelligence, and advanced support techniques, with a special focus on enhancing professional skills in a way that aligns with global best practices.
        </p>
        <img
          src={image}
          alt="About Skilet"
          className="w-full h-96 object-cover mb-6"
        />
        <p className="text-lg mb-6"> 
          We pride ourselves on our dynamic, hands-on approach to trainings. 
          Our trainings are designed to foster growth and personal development, 
          ensuring that every participant leaves with the tools they need to thrive 
          in their chosen field. Whether it’s empowering individuals with customer 
          service excellence or sharpening emotional intelligence, SkiletPoint prepares its learners for success from the very first day.
        </p>
      </section>

      <section className="text-justify text-black mb-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-x-0 md:space-x-8 space-y-8 md:space-y-0">
          <div className="vision-text md:w-1/2 text-justify">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
              <FaLightbulb className="mr-3" /> Our Vision
            </h3>
            <p className="text-lg">
              Our vision is to revolutionize the industry by creating innovative
              solutions that empower businesses to thrive in a digital world.
            </p>
          </div>

          <div className="mission-text md:w-1/2 text-justify">
            <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center md:justify-start">
              <FaBullseye className="mr-3" /> Our Mission
            </h3>
            <p className="text-lg">
              Our mission is to empower individuals and organizations with the 
              skills and knowledge needed to excel in today’s fast-evolving world
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
