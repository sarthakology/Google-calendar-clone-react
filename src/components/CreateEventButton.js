import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from "../context/GlobalContext";
import {useTranslation} from "react-i18next";

export default function CreateEventButton() {
  const {t} = useTranslation();  
  const { setShowEventModal, showSidebar } = useContext(GlobalContext);
  return (
    <button
      onClick={() => setShowEventModal(true)}
      className="border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl"
    >
      <img src={plusImg} alt="create_event" className="w-7 h-7" />
      {showSidebar? (<span className="pl-3 pr-7">{t("create")}</span>):''}
    </button>
  );
}
