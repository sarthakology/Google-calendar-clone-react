import React from "react";

// Default values for the global context, including loader state
const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: () => {},
  smallCalendarMonth: 0,
  setSmallCalendarMonth: () => {},
  daySelected: null,
  setDaySelected: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: () => {},
  savedEvents: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  setLabels: () => {},
  labels: [],
  updateLabel: () => {},
  filteredEvents: [],
  showSidebar: true,
  setShowSidebar: () => {},
  calendarEventToggle: true,
  setCalendarEventToggle: () => {},
  loader: false, // Adding loader state
  setLoader: () => {}, // Adding function to set loader
});

export default GlobalContext;
