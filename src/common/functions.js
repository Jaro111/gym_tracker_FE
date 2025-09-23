// get gay format YYYY-MM-DD with leading zeros

export const getDate = (yy, mm, dd) => {
  const date = `${yy}-${mm.toString().padStart(2, "0")}-${dd
    .toString()
    .padStart(2, "0")}`;

  return date;
};

//
// `${props.calendarYear
//   .toString()
//   .padStart(2, "0")}-${item.month
//   .toString()
//   .padStart(2, "0")}-${item.day
//   .toString()
//   .padStart(2, "0")}`
