import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

interface CardProps {
  image: string;
  title: string;
}

const Card = ({ image, title }: CardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-transform w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg">
      {!imageLoaded && (
        <div className="animate-pulse">
          <Skeleton variant="rectangular" width="100%" height={320} />
          <div className="p-4">
            <Skeleton variant="text" width="80%" height={24} />
          </div>
        </div>
      )}

      <div className={`relative w-full h-72 sm:h-80 md:h-96 lg:h-112 ${imageLoaded ? "block" : "hidden"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-opacity duration-500 opacity-0"
          onLoad={(e) => {
            setImageLoaded(true);
            e.currentTarget.style.opacity = "1";
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 py-12 px-6 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;