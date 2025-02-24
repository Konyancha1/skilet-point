import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Calendar from '../../../components/calendar';
import TrainingModal from '../../../components/trainingModal';
import { trainings } from './trainings';
import { Training } from '../../../type';

const CustomerExperienceIndex = () => {
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
            Customer Experience Trainings
          </span>
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight mt-2">
            Elevate Your Customer Experience Skills with Expert-Led Training
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our training sessions focus on enhancing customer experience strategies, equipping you with 
            the skills needed to lead, engage customers effectively, and build lasting relationships.
          </p>

          <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Core Competencies</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
              <li><span className="font-medium">Customer Experience Leadership Training:</span> Develop leadership skills for driving customer satisfaction and loyalty.</li>
              <li><span className="font-medium">Customer Service Trainings:</span> Master customer service techniques to enhance customer interactions.</li>
              <li><span className="font-medium">Customer Service Leaders Training:</span> Train managers and team leads to provide excellent service.</li>
              <li><span className="font-medium">Customer Relationship Management Training:</span> Build and maintain strong customer relationships.</li>
              <li><span className="font-medium">Handling Objection Training:</span> Learn techniques for addressing and resolving customer objections.</li>
              <li><span className="font-medium">Internal Customer Service Trainings:</span> Improve service delivery within teams and departments.</li>
              <li><span className="font-medium">Taking Ownership and Accountability:</span> Foster a culture of accountability in customer interactions.</li>
              <li><span className="font-medium">Telephone Customer Service Training:</span> Enhance phone etiquette and communication skills.</li>
              <li><span className="font-medium">Customer Centricity Training:</span> Develop a customer-first mindset across all service interactions.</li>
              <li><span className="font-medium">Handling Complaints Training:</span> Equip yourself with techniques to manage and resolve customer complaints effectively.</li>
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

export default CustomerExperienceIndex;