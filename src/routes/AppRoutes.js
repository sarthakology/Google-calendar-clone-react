import React, { useState, useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route, 
  } 
  from "react-router-dom";
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

const AppRoutes = () => {
  const { monthIndex, showEventModal, calendarEventToggle } = useContext(GlobalContext);
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Router>
      <Routes>
        {/* register/login routes */}
        <Route path="/register" element={<RegisterPage/>}/>





        {/* Home/Calendar Route */}
        <Route path="/" element={
          <>
            {showEventModal && <EventModal />}

            <div className="h-screen flex flex-col">
              <CalendarHeader />
              
              {calendarEventToggle ? (
                <div className="flex flex-1">
                  <Sidebar />
                  <Month month={currenMonth} />
                </div>
              ) : (
                <EventsPage />
              )}
            </div>


            
          </>
          }/>
          {/* SupportPages */}
        <Route path="/help" element={<><CalendarHeader/><HelpPage/> </>}/>
        <Route path="/training" element={<><CalendarHeader/><TrainingPage/> </>}/>
        <Route path="/updates" element={<><CalendarHeader /><UpdatesPage/> </>}/>
        <Route path="/feedback" element={<><CalendarHeader /><SendFeedbackToGooglePage/> </>}/>
          {/* SettingsPages */}
        <Route path="/setting" element={<><CalendarHeader /><MainSettingsPage/> </>}/>
        <Route path="/trash" element={<><CalendarHeader /><TrashPage/> </>}/>
        <Route path="/DensityAndColor" element={<><CalendarHeader /><DensityAndColorPage/> </>}/>
        <Route path="/Get-add-ons" element={<><CalendarHeader /><GetAddonsPage/> </>}/>



        <Route path="*" element={<>
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold text-red-500">404 - Page Not Found</h1>
          </div>
        </>}/>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
