"use client";

import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useMediaQuery } from "@mui/material";
import { LocalizationProvider, StaticDatePicker, PickersDay } from "@mui/x-date-pickers";
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

  const isTrainingDay = (date: Dayjs) => {
    return trainingDates.some(
      (trainingDate) => trainingDate.format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );
  };

  const handleDayClick = (date: Dayjs | null) => {
    if (!date) return;
    setSelectedDate(date);
    const training = trainings.find(
      (t) => dayjs(t.date).format("YYYY-MM-DD") === date.format("YYYY-MM-DD")
    );
    if (training) {
      onDateSelect(training);
    }
  };

  const renderCustomDay = (dayProps: any) => {
    const date = dayProps.day;
    const isTraining = isTrainingDay(date);
    const isSelected = selectedDate && date.isSame(selectedDate, "day");

    return (
      <PickersDay
        {...dayProps}
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
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card className="shadow-md p-4 rounded-lg border max-w-md w-full mx-auto bg-white">
        <CardContent className="flex justify-center">
          {isSmallScreen ? (
            <StaticDatePicker
              displayStaticWrapperAs="mobile"
              value={selectedDate}
              onChange={handleDayClick}
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