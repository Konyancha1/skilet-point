import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const ProfessionalCertificationIndex = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 py-12 text-center space-y-6">
        <button 
          className="flex items-center text-gray-700 hover:text-gray-900 font-medium space-x-2 hover:cursor-pointer"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <span className="px-3 py-1 text-sm font-medium bg-[#FFA500] text-black rounded-full">
          Professional Certification Courses
        </span>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Professional Certification Courses
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We are working on bringing you high-quality professional certification courses. Stay tuned!
        </p>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-semibold text-gray-800">Coming Soon</h2>
          <p className="text-gray-600 mt-2">
            Our team is preparing specialized certification programs to help advance your career.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalCertificationIndex;