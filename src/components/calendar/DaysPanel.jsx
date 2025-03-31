import React from "react";
import { useEffect, useState } from "react";
import "./DaysPanel.css";

export const DaysPanel = (props) => {
  const [daysArray, setDaysArray] = useState([]);
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const createDaysArray = () => {
    const tempArray = [];
    const days = new Date(props.calendarYear, props.calendarMonth, 0).getDate();
    for (let i = 1; i <= days; i++) {
      tempArray.push(i);
    }
    setDaysArray(tempArray);
  };

  useEffect(() => {
    createDaysArray();
  }, []);

  //
  return (
    <div className="days-panel-warepper">
      <div className="weekDays-wrapper">
        {weekDays.map((item, index) => {
          return (
            <div className="weekDays-card" key={index}>
              <p>{item}</p>
            </div>
          );
        })}
      </div>
      <div className="days-wrapper">
        {daysArray.length > 0
          ? daysArray.map((item, index) => {
              return (
                <div className="dayCard" key={index}>
                  {item}
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
