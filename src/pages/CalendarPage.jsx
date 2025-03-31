import React from "react";
import { Calendar } from "../components/calendar/Calendar";

export const CalendarPage = (props) => {
  return <Calendar dateNow={props.dateNow} />;
};
