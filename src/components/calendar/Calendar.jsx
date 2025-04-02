import React from "react";
import { useEffect, useState } from "react";
import { DaysPanel } from "./DaysPanel";
import { MonthPanel } from "./MonthPanel";

import "./Calendar.css";

export const Calendar = (props) => {
  const { dateNow } = props;

  const [calendarDay, setCalendarDay] = useState(dateNow.day);
  const [calendarMonth, setCalendarMonth] = useState(dateNow.month);
  const [calendarYear, setCalendarYear] = useState(dateNow.year);

  useEffect(() => {}, []);

  //
  return (
    <div className="calendar-wrapper">
      <MonthPanel
        dateNow={dateNow}
        calendarMonth={calendarMonth}
        calendarYear={calendarYear}
        setCalendarMonth={setCalendarMonth}
        setCalendarYear={setCalendarYear}
      />
      <DaysPanel
        calendarDay={calendarDay}
        calendarMonth={calendarMonth}
        calendarYear={calendarYear}
      />
    </div>
  );
};
