
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Calendar from '../../../components/calendar';
import TrainingModal from '../../../components/trainingModal';
import { trainings } from './trainings';
import { Training } from '../../../type';

const Index = () => {
  const [selectedTraining, setSelectedTraining] = React.useState<Training | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        <button 
          className="flex items-center text-gray-700 hover:text-gray-900 font-medium space-x-2 hover:cursor-pointer"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>
        <div className="space-y-6 text-center">
          <span className="px-3 py-1 text-sm font-medium bg-[#FFA500] text-black rounded-full">
            Communication & Presentation Skills
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Elevate Your Skills with Expert-Led Training
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our comprehensive training sessions designed to enhance your communication and 
            presentation skills. This program equips you with essential business skills, helping you 
            communicate effectively, engage professionally, and present confidently.
          </p>

          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Core Competencies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li><span className="font-medium">Effective Communication:</span> Master verbal and written communication for professional success.</li>
              <li><span className="font-medium">Business Communication Skills:</span> Learn how to handle clients and customers professionally.</li>
              <li><span className="font-medium">Reports Training:</span> Develop structured and impactful business reports.</li>
              <li><span className="font-medium">Presentation & Speaking Skills:</span> Gain confidence in delivering compelling presentations.</li>
              <li><span className="font-medium">Emotional Intelligence:</span> Improve self-awareness and interpersonal skills in the workplace.</li>
              <li><span className="font-medium">Business Etiquette Training:</span> Understand professional behavior and workplace etiquette.</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900">Available Sessions</h2>
            <p className="text-sm text-gray-600 mt-1">
              Click on a highlighted date to view session details and register
            </p>
          </div>
          <Calendar 
            trainings={trainings} 
            onDateSelect={(training) => setSelectedTraining(training)} 
          />
        </div>
      </div>

      <TrainingModal
        training={selectedTraining}
        isOpen={!!selectedTraining}
        onClose={() => setSelectedTraining(null)} registrationLink={''}      />
    </div>
  );
};

export default Index;