import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./pages/Navbar";
import { CalendarPage } from "./pages/CalendarPage";
import { WeekPlanPage } from "./pages/WeekPlanPage";
import { TrainingPage } from "./pages/TrainingPage";
import { SchedulePage } from "./pages/SchedulePage";
import { Footer } from "./pages/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="">
      <Navbar />
      <Routes>
        <Route path="" element={<CalendarPage />} />
        <Route path="/trainingPage" element={<TrainingPage />} />
        <Route path="/weekPlanPage" element={<WeekPlanPage />} />
        <Route path="/schedulePage" element={<SchedulePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
