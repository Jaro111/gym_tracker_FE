import React from "react";
import { useEffect, useState, useContext } from "react";
import { userContext } from "../../common/context";
import { DaysPanel } from "./DaysPanel";
import { MonthPanel } from "./MonthPanel";

import "./Calendar.css";

export const Calendar = (props) => {
  const { dateNow } = props;
  const user = useContext(userContext).user;

  const [calendarDay, setCalendarDay] = useState(dateNow.day);
  const [calendarMonth, setCalendarMonth] = useState(dateNow.month);
  const [calendarYear, setCalendarYear] = useState(dateNow.year);

  useEffect(() => {}, [user.username]);

  //
  return (
    <div className="calendar-wrapper">
      <p>{user.username}</p>
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
