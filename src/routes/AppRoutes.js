import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Correct import
import CalendarHeader from "../components/CalendarHeader";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import EventModal from "../components/EventModal";
import EventsPage from "../components/EventsPage";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";
import HelpPage from "../SupportPages/HelpPage";
import SendFeedbackToGooglePage from "../SupportPages/SendFeedbackToGooglePage";
import TrainingPage from "../SupportPages/TrainingPage";
import UpdatesPage from "../SupportPages/UpdatesPage";
import MainSettingsPage from "../settings/MainSettingsPage";
import TrashPage from "../settings/TrashPage";
import DensityAndColorPage from "../settings/DensityAndColorPage";
import GetAddonsPage from "../settings/GetAddonsPage";
import RegisterPage from "../registerPage/RegisterPage";
import LoginPage from "../loginPage/LoginPage";
import ProfilePage from "../components/ProfilePage";

const AppRoutes = () => {
  const { monthIndex, showEventModal, calendarEventToggle } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth()); // Correct variable name
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Router>
      <Routes>
        {/* Register/Login routes */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Profile route with conditional redirect */}
        <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />

        {/* Home/Calendar Route */}
        <Route
          path="/"
          element={
            <>
              {showEventModal && <EventModal />}
              <div className="h-screen flex flex-col">
                <CalendarHeader />
                {calendarEventToggle ? (
                  <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currentMonth} />
                  </div>
                ) : (
                  <EventsPage />
                )}
              </div>
            </>
          }
        />

        {/* Support Pages */}
        <Route path="/help" element={<><CalendarHeader /><HelpPage /></>} />
        <Route path="/training" element={<><CalendarHeader /><TrainingPage /></>} />
        <Route path="/updates" element={<><CalendarHeader /><UpdatesPage /></>} />
        <Route path="/feedback" element={<><CalendarHeader /><SendFeedbackToGooglePage /></>} />

        {/* Settings Pages */}
        <Route path="/setting" element={<><CalendarHeader /><MainSettingsPage /></>} />
        <Route path="/trash" element={<><CalendarHeader /><TrashPage /></>} />
        <Route path="/DensityAndColor" element={<><CalendarHeader /><DensityAndColorPage /></>} />
        <Route path="/Get-add-ons" element={<><CalendarHeader /><GetAddonsPage /></>} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
