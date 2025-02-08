"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useMediaQuery } from "@mui/material";
import { LocalizationProvider, StaticDatePicker, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Card, CardContent } from "@mui/material";
import { cn } from "../../lib/utils";

export type CalendarProps = {
  value?: Dayjs | null;
  onChange?: (newValue: Dayjs | null) => void;
  className?: string;
};

export function Calendar({ value, onChange, className }: CalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(
    value || dayjs()
  );

  // Detect screen size for responsiveness
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card
        className={cn(
          "shadow-md p-4 rounded-lg border mx-auto bg-white w-full max-w-md sm:max-w-lg",
          className
        )}
      >
        <CardContent className="flex justify-center">
          {isSmallScreen ? (
            <MobileDatePicker
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
                if (onChange) onChange(newValue);
              }}
              slotProps={{ textField: { fullWidth: true } }}
            />
          ) : (
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              value={selectedDate}
              onChange={(newValue) => {
                setSelectedDate(newValue);
                if (onChange) onChange(newValue);
              }}
            />
          )}
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
}