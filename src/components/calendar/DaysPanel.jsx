import React from "react";
import { getAllTrainingDays } from "../../utils/trainingDay.js";
import { useNavigate } from "react-router-dom";
import { getDate } from "../../common/functions.js";
import { AddTrainingModal } from "./AddTrainingModal.jsx";
import { weekDays } from "../../data/monthsWeekdays.js";
import { months } from "../../data/monthsWeekdays.js";
import { useEffect, useState } from "react";
import "./DaysPanel.css";

export const DaysPanel = (props) => {
  //
  const [daysArray, setDaysArray] = useState([]);
  const [trainingDayDate, setTrainingDayDate] = useState(null);
  const [trainingDays, setTrainingDays] = useState(null);
  const [isAddTrainingModalVisible, setIsAddTrainingModalVisible] =
    useState(false);
  const { chosenDateString, setChosenDateString, user } = props;
  //
  const navigate = useNavigate();
  //
  const createArrayObject = (monthArray, arrayObject, m, y) => {
    monthArray.map((item) =>
      arrayObject.push({
        day: item,
        month: m,
        year: y,
      })
    );
    return;
  };
  // Fetch functions
  const fetchTrainingDays = async () => {
    const data = await getAllTrainingDays(user.token);
    setTrainingDays(data.trainingDays);
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
  // ---------------------------------------------------------------------
  // Create array from 3 arrays. Previous month, current and next

  const createCalendarArray = () => {
    let previousMonth = [];
    let currentMonth = [];
    let nextMonth = [];
    let tempArrayObjects = [];
    let tempYear = props.calendarYear;

    previousMonth = createDaysArray(
      props.calendarYear,
      props.calendarMonth - 1
    );
    currentMonth = createDaysArray(props.calendarYear, props.calendarMonth);
    nextMonth = createDaysArray(props.calendarYear, props.calendarMonth + 1);

    if (getDayOftheWeek(1) === 0) {
      createArrayObject(
        currentMonth,
        tempArrayObjects,
        props.calendarMonth,
        tempYear
      );
      if (props.calendarMonth === 12) {
        createArrayObject(
          nextMonth.slice(0, 42 - currentMonth.length),
          tempArrayObjects,
          1,
          tempYear + 1
        );
      } else {
        createArrayObject(
          nextMonth.slice(0, 42 - currentMonth.length),
          tempArrayObjects,
          props.calendarMonth + 1,
          tempYear
        );
      }

      setDaysArray(tempArrayObjects);
    } else {
      if (props.calendarMonth === 1) {
        createArrayObject(
          previousMonth.slice(-getDayOftheWeek(1), previousMonth.length),
          tempArrayObjects,
          12,
          tempYear - 1
        );
      } else {
        createArrayObject(
          previousMonth.slice(-getDayOftheWeek(1), previousMonth.length),
          tempArrayObjects,
          props.calendarMonth - 1,
          tempYear
        );
      }
      createArrayObject(
        currentMonth,
        tempArrayObjects,
        props.calendarMonth,
        tempYear
      );
      //
      if (props.calendarMonth === 12) {
        createArrayObject(
          nextMonth.slice(0, 42 - tempArrayObjects.length),
          tempArrayObjects,
          1,
          tempYear + 1
        );
      } else {
        createArrayObject(
          nextMonth.slice(0, 42 - tempArrayObjects.length),
          tempArrayObjects,
          props.calendarMonth + 1,
          tempYear
        );
      }

      setDaysArray(tempArrayObjects);
    }
  };
  // ---------------------------------------------------------------------
  // Day click function
  const dayClick = (item) => {
    setTrainingDayDate(
      `${props.calendarYear}-${props.calendarMonth}-${item.day}`
    );
    if (trainingDays) {
      const result = trainingDays.filter((day) => {
        return day.date === getDate(props.calendarYear, item.month, item.day);
      });
      result.length > 0
        ? goToTraining(day)
        : setIsAddTrainingModalVisible(true);
    } else {
      setIsAddTrainingModalVisible(true);
    }
  };
  //
  const goToTraining = (day) => {
    navigate("/myCurrentWorkout", {
      state: { training: day },
    });
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
  //
  useEffect(() => {
    createCalendarArray();
    if (user.username) {
      fetchTrainingDays();
    }
  }, [
    props.calendarMonth,
    props.calendarYear,
    user.username,
    isAddTrainingModalVisible,
  ]);

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
            user={user}
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
                    border: !(item.day === props.calendarDay)
                      ? `1px solid ${dayColorFunc(index, "#ff4d4d")}`
                      : "1px solid black",
                    backgroundColor: !(item.day === props.calendarDay)
                      ? `white`
                      : "lightgrey",
                  }}
                >
                  <p
                    style={{ color: dayColorFunc(index, "black") }}
                    className="calendar-weekDay-number"
                  >
                    {item.day}
                  </p>

                  <div className="calendar-dayCard-trainingName-wrapper">
                    {trainingDays
                      ? trainingDays.map((day, index2) => {
                          return day.date ===
                            getDate(
                              props.calendarYear,
                              item.month,
                              item.day
                            ) ? (
                            <div
                              key={index2}
                              className="calendar-weekDay-trainingName-content-wrapper"
                              onClick={() => goToTraining(day)}
                            >
                              <p className="calendar-weekDay-trainingName">
                                {" "}
                                {day.trainingName}
                              </p>
                            </div>
                          ) : null;
                        })
                      : null}
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};
