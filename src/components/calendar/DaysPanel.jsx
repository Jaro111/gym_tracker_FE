import React from "react";
import { getAllTrainingDays } from "../../utils/trainingDay.js";
import { AddTrainingModal } from "./AddTrainingModal.jsx";
import { weekDays } from "../../data/monthsWeekdays.js";
import { months } from "../../data/monthsWeekdays.js";
import { useEffect, useState } from "react";
import "./DaysPanel.css";

export const DaysPanel = (props) => {
  //
  const [daysArray, setDaysArray] = useState([]);
  const [trainingDayDate, setTrainingDayDate] = useState(null);
  const [isAddTrainingModalVisible, setIsAddTrainingModalVisible] =
    useState(false);
  const { chosenDateString, setChosenDateString, user } = props;
  //
  // Fetch functions
  const fetchTrainingDays = async () => {
    const data = await getAllTrainingDays(user.token);
  };

  // get number of the week day number providing a day.
  const getDayOftheWeek = (day) => {
    const newDate = new Date(
      `${months[props.calendarMonth]} ${day}, ${props.calendarYear}`
    );
    // Return sun - sat: 0 - 6
    const dayOftheWeek = newDate.getDay();
    const dayOftheWeekArray = [6, 0, 1, 2, 3, 4, 5];
    // We want to return mon - sun: 0 -6
    return dayOftheWeekArray[dayOftheWeek];
  };

  // Create all days array from provided month
  const createDaysArray = (year, month) => {
    const tempArray = [];
    const days = new Date(year, month, 0).getDate();
    for (let i = 1; i <= days; i++) {
      tempArray.push(i);
    }
    return tempArray;
  };

  // Create array from 3 arrays. Previous month, current and next
  const createCalendarArray = () => {
    let finalArray = [];
    let previousMonth = [];
    let currentMonth = [];
    let nextMonth = [];

    previousMonth = createDaysArray(
      props.calendarYear,
      props.calendarMonth - 1
    );
    currentMonth = createDaysArray(props.calendarYear, props.calendarMonth);
    nextMonth = createDaysArray(props.calendarYear, props.calendarMonth + 1);

    if (getDayOftheWeek(1) === 0) {
      const finalArray = currentMonth.concat(
        nextMonth.slice(0, 42 - currentMonth.length)
      );
      setDaysArray(finalArray);
    } else {
      const previousAndCurrent = previousMonth
        .slice(-getDayOftheWeek(1), previousMonth.length)
        .concat(currentMonth);
      const finalArray = previousAndCurrent.concat(
        nextMonth.slice(0, 42 - previousAndCurrent.length)
      );
      setDaysArray(finalArray);
    }
  };

  const dayClick = (item) => {
    setTrainingDayDate(`${item}-${props.calendarMonth}-${props.calendarDay}`);
    setIsAddTrainingModalVisible(!isAddTrainingModalVisible);
  };
  // Color function
  const dayColorFunc = (index, color) => {
    const currentMonth = createDaysArray(
      props.calendarYear,
      props.calendarMonth
    );
    if (
      index < getDayOftheWeek(1) ||
      index > currentMonth.length + getDayOftheWeek(1) - 1
    ) {
      return "lightgrey";
    } else return color;
  };
  useEffect(() => {
    createCalendarArray();
    if (user.username) {
      fetchTrainingDays();
    }
  }, [props.calendarMonth, props.calendarYear, user.username]);

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
        {isAddTrainingModalVisible && (
          <AddTrainingModal
            setIsAddTrainingModalVisible={setIsAddTrainingModalVisible}
            trainingDayDate={trainingDayDate}
          />
        )}
        {daysArray.length > 0
          ? daysArray.map((item, index) => {
              return (
                <div
                  className="calendar-dayCard"
                  key={index}
                  onClick={() => dayClick(item)}
                  style={{
                    border: `1px solid ${dayColorFunc(index, "#ff4d4d")}`,
                  }}
                >
                  <p
                    style={{ color: dayColorFunc(index, "black") }}
                    className="calendar-weekDay-number"
                  >
                    {item}
                  </p>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
