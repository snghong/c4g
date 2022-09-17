import React from "react";
//"@ericz1803/react-google-calendar" using an online react google calendar API
// install these
// npm install --save react react-dom @emotion/react
// npm install --save @ericz1803/react-google-calendar
//
// import Calendar from "@ericz1803/react-google-calendar";

let calendars = [
  { calendarId: "c25naG9uZzEyMzQ1QGdtYWlsLmNvbQ" }
];

export default class MyCalendar extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={"AIzaSyCV-FnL_jamglJRoC8Y5EHcGRsKy9hN6Mw"} calendars={calendars} />
      </div>
    );
  }
}