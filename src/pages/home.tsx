import Card from "../components/card";
import image from '../images/dylan-gillis-KdeqA3aTnBY-unsplash.jpg';

type TrainingData = {
  image: string;
  title: string;
};

const HomePage = () => {
  const trainingData: TrainingData[] = [
    {
      image: image,
      title: 'Customer Service Excellence',
    },
    {
      image: image,
      title: 'Emotional Intelligence in Customer Interactions',
    },
    {
      image: image,
      title: 'Advanced Customer Support Techniques',
    }
  ];

  return (
    <div>
        <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: 'url("your-hero-image-url.jpg")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
              Elevate Your Team with Skilet Point
            </h1>
          </div>
          
          <a href="#offerings" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 transform animate-pulse"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </section>

        <section id="offerings" className="p-6" >
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-12">
              Equip Your workforce With The Skills For Success
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {trainingData.map((training, index) => (
                <Card key={index} image={training.image} title={training.title} />
              ))}
            </div>
          </div>
        </section>
    </div>
  );
};

export default HomePage;