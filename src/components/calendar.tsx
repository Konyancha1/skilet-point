"use client";

import React, { useState, useCallback } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useMediaQuery } from "@mui/material";
import { 
  LocalizationProvider, 
  StaticDatePicker, 
  MobileDatePicker, 
  PickersDay, 
  PickersDayProps 
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Training } from "../type";
import { Card, CardContent } from "@mui/material";

interface CalendarProps {
  trainings: Training[];
  onDateSelect: (training: Training) => void;
}

const Calendar: React.FC<CalendarProps> = ({ trainings, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
  const isSmallScreen = useMediaQuery("(max-width: 640px)"); // Detect small screens

  const trainingDates = trainings.map((t) => dayjs(t.date));

  // Function to check if a date has a training
  const isTrainingDay = (date: Dayjs) => {
    return trainingDates.some(
      (trainingDate) => trainingDate.format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );
  };

  // Memoized function to handle day selection
  const handleDayClick = useCallback((date: Dayjs | null) => {
    if (!date || (selectedDate && selectedDate.isSame(date, "day"))) return;

    setSelectedDate(date);

    const training = trainings.find(
      (t) => dayjs(t.date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );

    if (training) {
      onDateSelect(training);
    }
  }, [selectedDate, trainings, onDateSelect]); 

  const renderCustomDay = useCallback((props: PickersDayProps<Dayjs>) => {
    const { day, selected, ...other } = props;
    const isTraining = isTrainingDay(day);
    const isSelected = selectedDate ? day.isSame(selectedDate, "day") : undefined;

    return (
      <PickersDay
        {...other}
        day={day}
        selected={isSelected}
        sx={{
          backgroundColor: isSelected
            ? "#007BFF"
            : isTraining
            ? "#FFA500"
            : "inherit",
          color: isTraining || isSelected ? "white" : "inherit",
          fontWeight: isTraining ? "bold" : "normal",
          borderRadius: "50%",
          "&:hover": {
            backgroundColor: isTraining ? "#FF8C00" : "#0056b3",
          },
        }}
      />
    );
  }, [selectedDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card className="shadow-md p-4 rounded-lg border max-w-md w-full mx-auto bg-white">
        <CardContent className="flex justify-center">
          {isSmallScreen ? (
            <MobileDatePicker
              value={selectedDate}
              onChange={(newDate) => {
                if (newDate && !newDate.isSame(selectedDate, "day")) {
                  handleDayClick(newDate);
                }
              }}
              slotProps={{ textField: { fullWidth: true } }}
              slots={{ day: renderCustomDay }}
            />
          ) : (
            <div className="overflow-auto max-h-[400px] w-full">
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={selectedDate}
                onChange={handleDayClick}
                slots={{ day: renderCustomDay }}
              />
            </div>
          )}
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
};

export default Calendar;