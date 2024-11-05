import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";
import useProfile from "../profileDataBackend/ProfileData";
import {useTranslation} from "react-i18next";


export default function CalendarHeader() {
  const {t} = useTranslation();  
  const { monthIndex, setMonthIndex, showSidebar, setShowSidebar, calendarEventToggle, setCalendarEventToggle } = useContext(GlobalContext);
  const navigate = useNavigate();

  const profile = useProfile() || {
    email: "Error",
    gender: "Error",
    role: "Error",
    name: "Error",
    phno: 0,
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
  };

  const [profilePicture, setProfilePicture] = useState(profile.profilePicture);

  useEffect(() => {
    setProfilePicture(profile.profilePicture);
  }, [profile.profilePicture]);

  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }

  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }

  function handleReset() {
    setMonthIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
  }

  function handleSidebar() {
    setShowSidebar(!showSidebar);
  }



  return (
    <header className="px-4 py-2 flex items-center border-b bg-custom text-custom">
      <button onClick={handleSidebar}>
        <span className="material-icons-outlined cursor-pointer mx-2">
          menu
        </span>
      </button>
      <Link to="/" className="flex items-center px-2">
      <img 
        src={`https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${new Date().getDate()}_2x.png`} 
        alt="calendar" 
        className="mr-2 w-12 h-12" 
      />
      <h1 className="text-xl text-gray-500 font-bold">Calendar</h1>
    </Link>
      <button onClick={handleReset} className="border rounded py-2 px-4 mr-5">
      {t("today")}
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl font-bold text-custom">
        {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
      </h2>

      {profile.role === "admin" && (
        <button 
        onClick={() => navigate('/admin')}
        className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-200 hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-600 ml-4">
        {t("admin")}
        </button>
      )}
      <button 
        onClick={() => navigate('/screensaver')}
        className="border rounded py-2 px-6 ml-4 bg-custom text-custom">
        {t("screenSaver")}
      </button>

      <div className="ml-auto flex relative">

      <Link to="/setting" className="block w-full h-full">
        <button className="flex items-center">
          <span className="material-icons-outlined cursor-pointer mx-2 text-custom">
            settings
          </span>
        </button>
      </Link>


      </div>
      <div className="flex p-1 relative items-center w-30">
        <div className="w-full flex justify-center">
          <button 
            onClick={() => setCalendarEventToggle(true)}
            className={`${calendarEventToggle ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"} h-10 py-2 px-4 rounded-l-xl w-full`}>
            <span className="material-icons-outlined cursor-pointer">
              calendar_month
            </span>
          </button>
        </div>
        <div className="w-full flex justify-center">
          <button 
            className={`${calendarEventToggle ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-blue-500 text-white"} h-10 py-2 px-4 rounded-r-xl w-full`}
            onClick={() => setCalendarEventToggle(false)}>
            <span className="material-icons-outlined cursor-pointer">
              task_alt
            </span>
          </button>
        </div>
        <div className="w-full flex justify-center px-2">
          <button onClick={() => navigate('/profile')}>
            <img src={profilePicture} alt="calendar" className="w-12 h-12 rounded-full border-2 border-gray-300" />
          </button>
        </div>
      </div>
    </header>
  );
}
