import React, { useState, useEffect, useContext } from "react";
import CalendarHeader from "../components/CalendarHeader";
import Sidebar from "../components/Sidebar";
import Month from "../components/Month";
import EventModal from "../components/EventModal";
import EventsPage from "../components/EventsPage";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

const AppRoutes = () => {
  const { monthIndex, showEventModal, calendarEventToggle } = useContext(GlobalContext);
  const [currenMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
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
  );
};

export default AppRoutes;
