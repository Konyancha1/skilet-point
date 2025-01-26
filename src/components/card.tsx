type CardProps = {
  image: string;
  title: string;
};

const Card = ({ image, title }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-112">
      <div
        className="w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="flex flex-col justify-end py-12 h-full p-4 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;