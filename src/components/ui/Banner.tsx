import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import teamTraining from '../../images/team_training.jpeg';
import managerTraning from '../../images/cx_master.jpeg';

const events = [
  {
    title: "Empowering Excellence",
    subtitle: "Team Training for Results That Stick",
    description:
      "Boost accountability, collaboration, and performance. Equip your team to lead, serve, and grow—together.",
    tags: ["Practical", "Engaging", "Impactful"],
    price: "Kes 12,500 / USD 100 per person",
    date: "27th to 29th August 2025",
    link: "https://forms.gle/SiydtWypQ8TgrPii8",
    image: teamTraining,
  },
  {
    title: "CX Mastery for Managers",
    subtitle: "Driving Loyalty, Retention, and Team Excellence",
    description:
      "Gain practical tools to increase customer loyalty, reduce churn, boost referrals, and stand out as a growth-focused leader.",
    tags: ["Strategic", "Insightful", "Results-Driven"],
    price: "Kes 22,500 / USD 180 per person",
    date: "4th September to 2nd October 2025",
    link: "https://forms.gle/VMZhrhxU2Yi5fLyT7",
    image: managerTraning,
  },
];

export default function EventCarouselBanner() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % events.length);
  const prev = () => setIndex((prev) => (prev - 1 + events.length) % events.length);

  return (
    <section className="w-full bg-white py-10 px-4 flex justify-center">
      <div className="w-full max-w-6xl relative overflow-hidden rounded-xl shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row bg-gradient-to-r from-red-100 via-white to-white rounded-xl overflow-hidden"
          >
            <div className="md:w-1/2 w-full h-56 md:h-auto">
              <img
                src={events[index].image}
                alt={events[index].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-2">
                {events[index].title}
              </h2>
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                {events[index].subtitle}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {events[index].description}
              </p>
              <ul className="flex flex-wrap gap-2 mb-3">
                {events[index].tags.map((tag, i) => (
                  <li
                    key={i}
                    className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded-full"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-700 mb-1">
                <strong>Date:</strong> {events[index].date}
              </p>
              <p className="text-sm text-gray-700 mb-4">
                <strong>Cost:</strong> {events[index].price}
              </p>
              <div>
                <Link
                  to={events[index].link}
                  className="inline-block bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded"
                >
                  Register
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
        >
          <ChevronRight size={20} />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {events.map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === i ? "bg-red-600 scale-110" : "bg-red-300"
              }`}
              onClick={() => setIndex(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
