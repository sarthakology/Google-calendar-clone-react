import React, { useContext } from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import GlobalContext from "../context/GlobalContext";

export default function Sidebar() {
  const { showSidebar } = useContext(GlobalContext);

  const sidebarWidth = showSidebar ? "64" : "";

  return (
    <aside className={`border p-5 w-${sidebarWidth}`}>
      <CreateEventButton />
      {showSidebar ? (
        <>
          <SmallCalendar />
          <Labels />
        </>
      ) : null}
    </aside>
  );
}
