type CardProps = {
  image: string;
  title: string;
};

const Card = ({ image, title }: CardProps) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden transform hover:scale-105 transition-transform w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
      <div
        className="w-full h-72 sm:h-80 md:h-96 lg:h-112 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col justify-end h-full py-12 px-6 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-lg sm:text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;