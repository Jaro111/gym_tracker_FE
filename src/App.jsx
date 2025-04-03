import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { NavbarPanel } from "./components/navbarPanel/NavbarPanel";
import { CalendarPage } from "./pages/CalendarPage";
import { WeekPlanPage } from "./pages/WeekPlanPage";
import { CreateTraining } from "./pages/CreateTraining";
import { SchedulePage } from "./pages/SchedulePage";
import { MyCurrentWorkout } from "./pages/MyCurrentWorkout";
import { Footer } from "./components/footer/Footer";
import { Register } from "./pages/Register";
import "./App.css";

function App() {
  //
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  //
  const [dayNow, setDayNow] = useState(day);
  const [monthNow, setMonthNow] = useState(month);
  const [yearNow, setYearNow] = useState(year);
  //
  const [dateNow, setDateNow] = useState({
    day: dayNow,
    month: monthNow,
    year: yearNow,
  });
  //

  return (
    <BrowserRouter basename="">
      <NavbarPanel />
      <Routes>
        <Route path="" element={<CalendarPage dateNow={dateNow} />} />
        <Route path="/myCurrentWorkout" element={<MyCurrentWorkout />} />
        <Route path="/createTraining" element={<CreateTraining />} />
        <Route path="/weekPlanPage" element={<WeekPlanPage />} />
        <Route path="/schedulePage" element={<SchedulePage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
