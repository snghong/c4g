import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Events from "./Events";
import Social from "./Social";
import Courses from "./Courses";
import Profile from "./Profile";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/events" element={<Events />} />
        <Route path="/social" element={<Social />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/courses" element={<Courses />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
