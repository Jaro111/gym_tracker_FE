import React from "react";
import { months } from "../../data/monthsWeekdays";
import "./MonthPanel.css";

export const MonthPanel = (props) => {
  const { calendarMonth, calendarYear, setCalendarMonth, setCalendarYear } =
    props;
  const plusMonth = () => {
    if (calendarMonth < 12) {
      setCalendarMonth(calendarMonth + 1);
    } else {
      setCalendarYear(calendarYear + 1);
      setCalendarMonth(1);
    }
  };

  const minusMOnth = () => {
    if (calendarMonth > 1) {
      setCalendarMonth(calendarMonth - 1);
    } else {
      setCalendarYear(calendarYear - 1);
      setCalendarMonth(12);
    }
  };
  return (
    <div className="calendar-month-panel-wrapper">
      <div className="calendar-minus-month">
        <p className="calendar-change-month-content" onClick={minusMOnth}>
          {"<"}
        </p>
      </div>
      <div className="calendar-year-display-wrapper">
        <p className="calendar-year-display-content">
          {months[props.calendarMonth]} {props.calendarYear}
        </p>
      </div>
      <div className="calendar-plus-month">
        <p className="calendar-change-month-content" onClick={plusMonth}>
          {">"}
        </p>
      </div>
    </div>
  );
};
