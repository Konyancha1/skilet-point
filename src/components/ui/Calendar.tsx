"use client";

import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Card
        className={cn(
          "shadow-md p-4 rounded-lg border max-w-md mx-auto bg-white",
          className
        )}
      >
        <CardContent>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
              if (onChange) onChange(newValue);
            }}
          />
        </CardContent>
      </Card>
    </LocalizationProvider>
  );
}