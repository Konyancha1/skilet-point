import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Calendar from '../../../components/calendar';
import TrainingModal from '../../../components/trainingModal';
import { trainings } from './trainings';
import { Training } from '../../../type';

const HrIndex = () => {
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
            HR
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Elevate Your Skills with Expert-Led Training
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our HR training sessions designed to enhance leadership, employee engagement, 
            and relationship management. Strengthen your HR expertise and make a lasting impact.
          </p>

          {/* Core Competencies Section */}
          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Core Competencies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li><span className="font-medium">Employee Engagement Training:</span> Learn strategies to boost employee motivation and retention.</li>
              <li><span className="font-medium">Coaching & Mentorship for HR Managers:</span> Develop leadership skills to guide and support teams effectively.</li>
              <li><span className="font-medium">Key Account Relationship Management:</span> Strengthen relationships with key stakeholders for business success.</li>
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
        onClose={() => setSelectedTraining(null)}
      />
    </div>
  );
};

export default HrIndex;