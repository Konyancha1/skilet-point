
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/Dialog";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Training } from '../type';
import { format } from 'date-fns';
import { useToast } from '../components/ui/use-toast';

interface TrainingModalProps {
  training: Training | null;
  isOpen: boolean;
  onClose: () => void;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ training, isOpen, onClose }) => {
  const { toast } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    paymentReference: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', { ...formData, training });
    toast({
      title: "Registration successful!",
      description: "You will receive a confirmation email shortly.",
    });
    onClose();
    setFormData({ name: '', email: '', phone: '', paymentReference: '' });
  };

  if (!training) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-gray-900">
            {training.topic}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-900">Date: {format(new Date(training.date), 'MMMM d, yyyy')}</p>
            <p className="text-sm text-gray-600">{training.description}</p>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Spots available: {training.spotsAvailable}</span>
              <span>Cost: ${training.cost}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="border-gray-200"
              />
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-gray-200"
              />
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                className="border-gray-200"
              />
              <Input
                placeholder="Payment Reference"
                value={formData.paymentReference}
                onChange={(e) => setFormData({ ...formData, paymentReference: e.target.value })}
                required
                className="border-gray-200"
              />
            </div>
            <Button type="submit" className="w-full bg-[#FFA500] hover:bg-[#8d764c] transition-colors">
              Register Now
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrainingModal;