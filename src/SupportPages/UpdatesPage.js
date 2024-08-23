import React from 'react';

const updates = [
  { date: 'February 2023', items: [
    "Save time with suggested work locations",
    "Report a task as spam",
    "Client-side encryption (CSE) is now available to more customers on desktop"
  ]},
  { date: 'January 2023', items: [
    "Avoid appointment schedule conflicts",
    "Manage client-side encrypted (CSE) events on mobile (beta)"
  ]},
  { date: 'October 2022', items: [
    "Manage client-side encrypted (CSE) events on desktop (beta)"
  ]},
  { date: 'August 2022', items: [
    "Add or edit your working location",
    "User color labels in Google Calendar"
  ]},
  { date: 'July 2022', items: [
    "Add or block invitations from senders",
    "Add booking pages to your website"
  ]},
  { date: 'May 2022', items: [
    "Share appointment schedules from your mobile device",
    "Use email verification to book appointments"
  ]},
  { date: 'April 2022', items: [
    "Add existing meeting notes to an event from Google Calendar"
  ]},
  { date: 'March 2022', items: [
    "Use appointment schedules for work and school"
  ]},
  { date: 'February 2022', items: [
    "Find & manage pending tasks"
  ]},
  { date: 'January 2022', items: [
    "New features in appointment schedules"
  ]},
  { date: 'December 2021', items: [
    "Switch between Google Accounts in the Google Calendar app",
    "Manage invitations you receive",
    "Manage repeating tasks in Google Calendar"
  ]},
  { date: 'October 2021', items: [
    "Use focus time in Google Calendar",
    "Add meeting notes to events"
  ]},
  { date: 'September 2021', items: [
    "Email or chat with event attendees"
  ]},
  { date: 'August 2021', items: [
    "Set your working location",
    "Use Time Insights"
  ]},
  { date: 'July 2021', items: [
    "Respond to event invitations"
  ]},
  { date: 'June 2021', items: [
    "Google Workspace Individual",
    "Add holidays to Google Calendar"
  ]},
  { date: 'May 2021', items: [
    "Add or remove Birthdays, Holidays & other calendars"
  ]},
  { date: 'April 2021', items: [
    "Learn how to use Google Calendar on your iPhone & iPad"
  ]},
  { date: 'March 2021', items: [
    "Turn smart events on or off in Gmail",
    "Snooze event notifications in Google Calendar"
  ]},
  { date: 'February 2021', items: [
    "Add multiple working periods to your calendar",
    "Replace declined meeting rooms automatically"
  ]},
  { date: 'January 2021', items: [
    "Use Google Calendar offline on your computer"
  ]},
  { date: 'December 2020', items: [
    "Add the Google Calendar widget to your iPhone or iPad",
    "Create & view Tasks in the Calendar app"
  ]},
  { date: 'November 2020', items: [
    "Check out the new Google Calendar logo"
  ]},
  { date: 'October 2020', items: [
    "View & edit personal and work events in one place on Android Work Profile"
  ]},
  { date: 'September 2020', items: [
    "Use Google Maps in Google Calendar"
  ]},
  { date: 'September 2019', items: [
    "Report event invitations as spam on Android"
  ]},
  { date: 'May 2019', items: [
    "View your calendar in dark mode on Android"
  ]},
  { date: 'April 2019', items: [
    "See your coworker’s calendar and schedule events more quickly",
    "RSVP to Calendar events from forwarded invitations"
  ]},
  { date: 'January 2019', items: [
    "SMS notifications removed from Calendar"
  ]},
  { date: 'December 2018', items: [
    "View Calendar attachments in Google Meet"
  ]},
  { date: 'October 2018', items: [
    "Non-Google Calendar users always get email notifications",
    "Add non-Google conferencing apps to events"
  ]},
  { date: 'July 2018', items: [
    "Suggest a new meeting time"
  ]},
  { date: 'June 2018', items: [
    "Better manage your work & personal"
  ]}
];

export default function UpdatesPage() {
  return (
    <div className="p-6 max-w-4xl mx-auto mt-10 bg-white rounded shadow-md">
      <h1 className="text-2xl font-bold mb-4">What's New in Google Calendar</h1>
      <p className="mb-6">Get the latest updates in Google Calendar.</p>
      {updates.map((update, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-xl font-semibold mb-2">{update.date}</h2>
          <ul className="list-disc list-inside space-y-2">
            {update.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
