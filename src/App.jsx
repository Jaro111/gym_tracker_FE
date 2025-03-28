import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./pages/Navbar";
import { CalendarPage } from "./pages/CalendarPage";
import { WeekPlanPage } from "./pages/WeekPlanPage";
import { CreateTraining } from "./pages/CreateTraining";
import { SchedulePage } from "./pages/SchedulePage";
import { MyCurrentWorkout } from "./pages/MyCurrentWorkout";
import { Footer } from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="" element={<CalendarPage />} />
        <Route path="/myCurrentWorkout" element={<MyCurrentWorkout />} />
        <Route path="/createTraining" element={<CreateTraining />} />
        <Route path="/weekPlanPage" element={<WeekPlanPage />} />
        <Route path="/schedulePage" element={<SchedulePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
