import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import {useTranslation} from "react-i18next";

export default function EventsPage() {
  const {t} = useTranslation();
  const { savedEvents } = useContext(GlobalContext);

  // Helper function to dynamically set the color of the label
  const getLabelColorClass = (label) => {
    const labelColors = {
      indigo: "bg-indigo-500 text-white",
      gray: "bg-gray-500 text-white",
      green: "bg-green-500 text-white",
      blue: "bg-blue-500 text-white",
      red: "bg-red-500 text-white",
      purple: "bg-purple-500 text-white",
    };
    return labelColors[label] || "bg-gray-300 text-white"; // Default color if label doesn't match
  };

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">{t("events")}</h1>
      {savedEvents.length > 0 ? (
        <div className="w-full max-w-4xl">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-gray-600 font-semibold">
                  {t("title")}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-gray-600 font-semibold">
                  {t("description")}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-gray-600 font-semibold">
                  {t("label")}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-gray-600 font-semibold">
                  {t("day")}
                </th>
              </tr>
            </thead>
            <tbody>
              {savedEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 border-b border-gray-300">
                    <h2 className="text-lg font-semibold text-gray-800">{event.title}</h2>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-700">
                    {event.description}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getLabelColorClass(event.label)}`}>
                      {event.label}
                    </span>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-300 text-gray-500">
                    {new Date(event.day).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-xl text-gray-700">{t("noeventsavailable")}</p>
      )}
    </div>
  );
}
