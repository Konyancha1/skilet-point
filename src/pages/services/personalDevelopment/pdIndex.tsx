import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Calendar from '../../../components/calendar';
import TrainingModal from '../../../components/trainingModal';
import { trainings } from './trainings';
import { Training } from '../../../type';

const PersonalDevelopmentIndex = () => {
  const [selectedTraining, setSelectedTraining] = React.useState<Training | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-12">
        
        {/* Back to Home Button */}
        <button 
          className="flex items-center text-gray-700 hover:text-gray-900 font-medium space-x-2 hover:cursor-pointer"
          onClick={() => navigate('/')}
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        {/* Header Section */}
        <div className="space-y-6 text-center">
          <span className="px-3 py-1 text-sm font-medium bg-[#FFA500] text-black rounded-full">
            Personal Development Courses
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Unlock Your Full Potential with Personal Development
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Invest in yourself with expert-led personal development courses designed to enhance 
            productivity, goal setting, and work-life balance.
          </p>

          {/* Core Competencies Section */}
          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Core Competencies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li><span className="font-medium">Time Management Skills Training:</span> Learn how to prioritize tasks and manage time effectively.</li>
              <li><span className="font-medium">Personal Excellence Training:</span> Enhance self-awareness and personal effectiveness.</li>
              <li><span className="font-medium">The Power of Delegation Skills Training:</span> Develop the ability to delegate tasks efficiently.</li>
              <li><span className="font-medium">Goal Setting Training:</span> Master the art of setting and achieving meaningful goals.</li>
              <li><span className="font-medium">Productivity Training:</span> Boost efficiency and effectiveness in both personal and professional life.</li>
              <li><span className="font-medium">Negotiating for Self Skills Training:</span> Learn to advocate for yourself in professional and personal settings.</li>
              <li><span className="font-medium">Work-Life Integration Program:</span> Balance work and personal life for overall well-being.</li>
            </ul>
          </div>
        </div>

        {/* Available Sessions Section */}
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

      {/* Training Modal */}
      <TrainingModal
        training={selectedTraining}
        isOpen={!!selectedTraining}
        onClose={() => setSelectedTraining(null)}
      />
    </div>
  );
};

export default PersonalDevelopmentIndex;