import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/Dialog";
import { Button } from "../components/ui/Button";
import { Training } from "../type";
import { format } from "date-fns";

interface TrainingModalProps {
  training: Training | null;
  isOpen: boolean;
  onClose: () => void;
  registrationLink: string;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ training, isOpen, onClose, registrationLink }) => {
  if (!training) return null;

  registrationLink = 'https://bit.ly/DrivingOrganizationalSuccessthroughCustomerExperience'

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        aria-describedby="dialog-description"
        className="sm:max-w-[425px] bg-white/95 backdrop-blur-sm overflow-y-auto"
        onOpenAutoFocus={(event) => event.preventDefault()}
        onCloseAutoFocus={(event) => event.preventDefault()}
      >
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {training.topic}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">
              Date: {format(new Date(training.date), "MMMM d, yyyy")}
            </p>
            <p className="text-sm text-gray-600">{training.description}</p>
            <div className="flex justify-between text-sm text-gray-600 font-bold">
              <span>Limited Spots Available</span>
              <span>March Discount: KSH{training.cost}</span>
            </div>
          </div>

          {/* Training Objectives */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Training Objectives</h3>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>Enhance Customer Interactions: Improve communication skills, empathy, and responsiveness.</li>
              <li>Improve Customer Satisfaction: Equip employees with tools to resolve issues effectively.</li>
              <li>Create Consistency: Develop a professional and consistent approach to customer service.</li>
              <li>Strengthen Brand Loyalty: Encourage customer-centric behavior to boost retention.</li>
              <li>Develop Problem-Solving Skills: Handle customer complaints and issues with confidence.</li>
            </ul>
          </div>

          {/* Registration Link */}
          <div className="text-center">
            <Button asChild className="w-full bg-[#FFA500] hover:bg-[#8d764c] transition-colors cursor-pointer">
              <a href={registrationLink} target="_blank" rel="noopener noreferrer">
                Register Now
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrainingModal;