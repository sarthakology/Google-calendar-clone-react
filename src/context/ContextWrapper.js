import React, { useState, useEffect, useReducer, useMemo } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import saveEvent from '../services/SaveEvent';

// Reducer for handling event-related actions
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    case "deleteAll":  // Add a new action for deleting all events
      return [];
    default:
      throw new Error("Invalid action type");
  }
}

// Initialize events from localStorage
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  return storageEvents ? JSON.parse(storageEvents) : [];
}

export default function ContextWrapper({ children }) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [daySelected, setDaySelected] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [labels, setLabels] = useState([]);
  const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer, [], initEvents);
  const [showSidebar, setShowSidebar] = useState(true);
  const [calendarEventToggle, setCalendarEventToggle] = useState(true); // true: calendar view, false: event view

  const [loader, setLoader] = useState(false); // State for loader

  // Filter events based on selected labels
  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  // Sync saved events with localStorage and backend
  useEffect(() => {
    const handleSaveEvents = async () => {
      try {
        localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
        await saveEvent(savedEvents);
      } catch (error) {
        console.error('Error saving events:', error);
      }
    };
      handleSaveEvents();
  }, [savedEvents]);

  // Update labels whenever saved events change
  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        const currentLabel = prevLabels.find((lbl) => lbl.label === label);
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
        };
      });
    });
  }, [savedEvents]);

  // Set month index if small calendar month is selected
  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  // Reset selected event when event modal closes
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);

  // Update label checkboxes
  function updateLabel(label) {
    setLabels(
      labels.map((lbl) => (lbl.label === label.label ? label : lbl))
    );
  }

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        smallCalendarMonth,
        setSmallCalendarMonth,
        daySelected,
        setDaySelected,
        showEventModal,
        setShowEventModal,
        dispatchCalEvent,
        selectedEvent,
        setSelectedEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents,
        showSidebar,
        setShowSidebar,
        calendarEventToggle,
        setCalendarEventToggle,
        loader,  // Provide loader state to context
        setLoader,  // Provide function to set loader state
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
