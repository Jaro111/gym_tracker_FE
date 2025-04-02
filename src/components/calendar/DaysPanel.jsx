import React from "react";
import { weekDays } from "../../data/monthsWeekdays.js";
import { months } from "../../data/monthsWeekdays.js";
import { useEffect, useState } from "react";
import "./DaysPanel.css";

export const DaysPanel = (props) => {
  const [daysArray, setDaysArray] = useState([]);
  const [tempDay, setTempDay] = useState(null);

  // get number of the week day number providing a day.
  const getDayOftheWeek = (day) => {
    const newDate = new Date(
      `${months[props.calendarMonth]} ${day}, ${props.calendarYear}`
    );
    // Return sun - sat: 0 - 6
    const dayOftheWeek = newDate.getDay();
    const dayOftheWeekArray = [6, 0, 1, 2, 3, 4, 5];
    // We want to return mon - sun: 0 -6
    console.log(dayOftheWeekArray[dayOftheWeek]);
    return dayOftheWeekArray[dayOftheWeek];
  };

  // Create all days array from provided month
  const createDaysArray = (year, month, setter) => {
    const tempArray = [];
    const days = new Date(year, month, 0).getDate();
    for (let i = 1; i <= days; i++) {
      tempArray.push(i);
    }

    setter(tempArray);
  };

  const dayClick = (item) => {
    getDayOftheWeek(item);
  };

  useEffect(() => {
    createDaysArray(props.calendarYear, props.calendarMonth, setDaysArray);
  }, [props.calendarMonth, props.calendarYear]);

  //
  return (
    <div className="calendar-days-panel-warepper">
      <div className="calendar-weekDays-wrapper">
        {weekDays.map((item, index) => {
          return (
            <div className="calendar-weekDays-card" key={index}>
              <p
                style={{ color: item === "Sun" ? "red" : "black" }}
                className="calendar-weekDay-nanme"
              >
                {item}
              </p>
            </div>
          );
        })}
      </div>

      <div className="calendar-days-wrapper">
        {daysArray.length > 0
          ? daysArray.map((item, index) => {
              return (
                <div
                  className="calendar-dayCard"
                  key={index}
                  onClick={() => dayClick(item)}
                >
                  <p className="calendar-weekDay-number">{item}</p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
