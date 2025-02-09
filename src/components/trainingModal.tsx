import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/Dialog";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { Training } from "../type";
import { format } from "date-fns";
import { useSnackbar } from "notistack";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const trainingFormSchema = z.object({
  name: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  paymentReference: z.string().min(1, "Payment Reference is required"),
  session: z.string().min(1, "Session selection is required"),
});

type TrainingFormData = z.infer<typeof trainingFormSchema>;

interface TrainingModalProps {
  training: Training | null;
  isOpen: boolean;
  onClose: () => void;
}

const TrainingModal: React.FC<TrainingModalProps> = ({ training, isOpen, onClose }) => {
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TrainingFormData>({
    resolver: zodResolver(trainingFormSchema),
  });

  const onSubmit = async (data: TrainingFormData) => {
    console.log("Form Data Submitted:", data);

    const googleAppsScriptUrl = import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL;

    if (!googleAppsScriptUrl) {
      enqueueSnackbar("Configuration error: Google Apps Script URL is missing.", {
        variant: "error",
      });
      console.error("Google Apps Script URL is not configured.");
      return;
    }

    fetch(googleAppsScriptUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((responseData) => {
        console.log("Response from API:", responseData);

        if (responseData) {
          enqueueSnackbar("Registration Successful!", { variant: "success" });
          reset(); // Clear form fields
          onClose(); // Close modal
        } else {
          throw new Error("Unexpected response from the server.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        enqueueSnackbar("An error occurred while submitting the form.", { variant: "error" });
      });
  };

  if (!training) return null;

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
            <div className="flex justify-between text-sm text-gray-600">
              <span>Spots available: {training.spotsAvailable}</span>
              <span>Cost: ${training.cost}</span>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              {/* Full Name */}
              <Input
                placeholder="Full Name"
                {...register("name")}
                className={`border-gray-200 ${errors.name ? "border-red-500" : ""}`}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name.message}</p>
              )}

              {/* Email */}
              <Input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`border-gray-200 ${errors.email ? "border-red-500" : ""}`}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email.message}</p>
              )}

              {/* Phone Number */}
              <Input
                type="tel"
                placeholder="Phone Number"
                {...register("phone")}
                className={`border-gray-200 ${errors.phone ? "border-red-500" : ""}`}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">{errors.phone.message}</p>
              )}

              {/* Payment Reference */}
              <Input
                placeholder="Payment Reference"
                {...register("paymentReference")}
                className={`border-gray-200 ${errors.paymentReference ? "border-red-500" : ""}`}
              />
              {errors.paymentReference && (
                <p className="text-sm text-red-500">{errors.paymentReference.message}</p>
              )}

              {/* Session Selection */}
              <select
                {...register("session")}
                className={`border-gray-200 p-2 rounded-md w-full ${errors.session ? "border-red-500" : ""}`}
              >
                <option value="" disabled>
                  Select a session
                </option>
                <option value={training.topic}>{training.topic}</option>
              </select>
              {errors.session && (
                <p className="text-sm text-red-500">{errors.session.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-[#FFA500] hover:bg-[#8d764c] transition-colors"
            >
              Register Now
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrainingModal;