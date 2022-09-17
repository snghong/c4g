import React from "react";
//"@ericz1803/react-google-calendar" using an online react google calendar API
import Calendar from "@ericz1803/react-google-calendar";

let calendars = [
  { calendarId: "https://calendar.google.com/calendar/embed?src=snghong12345%40gmail.com&ctz=America%2FNew_York" },
];

export default class MyCalendar extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={""} calendars={calendars} />
      </div>
    );
  }
}