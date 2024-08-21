import dayjs from "dayjs";
import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import GlobalContext from "../context/GlobalContext";

export default function CalendarHeader() {
  const { monthIndex, setMonthIndex, showSidebar, setShowSidebar,calendarEventToggle, setCalendarEventToggle } = useContext(GlobalContext);
  const [helpDropdown, setHelpDropdown] = useState(false);
  const [settingsDropdown, setSettingsDropdown] = useState(false);


  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month()
    );
  }

  function handleSidebar() {
    setShowSidebar(!showSidebar);
  }

  function toggleHelpDropdown() {
    setHelpDropdown(!helpDropdown);
    setSettingsDropdown(false); // Close settings dropdown if open
  }

  function toggleSettingsDropdown() {
    setSettingsDropdown(!settingsDropdown);
    setHelpDropdown(false); // Close help dropdown if open
  }


  
  return (
    <header className="px-4 py-2 flex items-center border-b">
      <button onClick={handleSidebar}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          menu
        </span>
      </button>
      <img src={logo} alt="calendar" className="mr-2 w-12 h-12" />
      <h1 className="mr-10 text-xl text-gray-500 font-bold">Calendar</h1>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>

      {/* Wrap last 3 buttons in a div and push them to the right */}
      <div className="ml-auto flex relative">
        <button>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            search
          </span>
        </button>
        <button onClick={toggleHelpDropdown}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            help
          </span>
        </button>
        <button onClick={toggleSettingsDropdown}>
          <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
            settings
          </span>
        </button>

        {/* Help Dropdown */}
        {helpDropdown && (
          <div className="absolute right-16 top-12 bg-white border rounded shadow-lg p-2 w-64">
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Help</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Training</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Updates</li>
              <li><hr className="border-t border-gray-300 my-2" /></li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Send feedback to Google</li>
            </ul>
          </div>
        )}

        {/* Settings Dropdown */}
        {settingsDropdown && (
          <div className="absolute right-16 top-12 bg-white border rounded shadow-lg p-2 w-64">
            <ul>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Trash</li>
              <li><hr className="border-t border-gray-300 my-2" /></li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Density and color</li>
              <li><hr className="border-t border-gray-300 my-2" /></li>
              <li className="p-2 hover:bg-gray-100 cursor-pointer">Get add-ons</li>
            </ul>
          </div>
        )}
      </div>

      {/* Calendar toggle switch */}
      <div className=" flex p-1 relative items-center w-30">
        <div className="w-full flex justify-center">
          <button 
          onClick={()=> setCalendarEventToggle(true)}
          className={`${calendarEventToggle?"bg-blue-500 text-white":"bg-gray-200 text-gray-700 hover:bg-gray-300"} h-10 py-2 px-4  rounded-l-xl w-full`}

          >
            <span className="material-icons-outlined cursor-pointer">
              calendar_month
            </span>
          </button>
        </div>
        <div 
        className="w-full flex justify-center">
          <button 
          className={`${calendarEventToggle?"bg-gray-200 text-gray-700 hover:bg-gray-300":"bg-blue-500 text-white"} h-10 py-2 px-4 rounded-r-xl w-full`}
          onClick={()=> setCalendarEventToggle(false)}
          >
            <span className="material-icons-outlined cursor-pointer">
              task_alt
            </span>
          </button>
        </div>
      </div>

    </header>
  );
}
