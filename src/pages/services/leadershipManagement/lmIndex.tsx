import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Calendar from '../../../components/calendar';
import TrainingModal from '../../../components/trainingModal';
import { trainings } from './trainings';
import { Training } from '../../../type';

const LeadershipManagementIndex = () => {
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
            Leadership & Management Trainings
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Develop Strong Leadership & Management Skills
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your leadership and management capabilities with expert-led training sessions 
            designed to strengthen team leadership, communication, and strategic decision-making.
          </p>

          {/* Core Competencies Section */}
          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Core Competencies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li><span className="font-medium">Supervisory Management Skills Training:</span> Equip supervisors with the skills to manage teams effectively.</li>
              <li><span className="font-medium">Admins and Executive Skills Training:</span> Develop essential administrative and executive leadership skills.</li>
              <li><span className="font-medium">Operational Excellence Skills:</span> Learn techniques to enhance efficiency and streamline operations.</li>
              <li><span className="font-medium">Interpersonal Skills Training for Managers:</span> Improve workplace relationships and team communication.</li>
              <li><span className="font-medium">Time Management Skills for Managers:</span> Master time management strategies to increase productivity.</li>
              <li><span className="font-medium">Team Cohesion Skills Training for Managers:</span> Build strong, collaborative, and high-performing teams.</li>
              <li><span className="font-medium">Leading Change:</span> Learn how to drive and manage organizational change effectively.</li>
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

      <TrainingModal
        training={selectedTraining}
        isOpen={!!selectedTraining}
        onClose={() => setSelectedTraining(null)}
      />
    </div>
  );
};

export default LeadershipManagementIndex;