import React from "react";
import Register from "./pages/Register.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import LoggedIn from "./pages/LoggedIn.jsx";
import Feedback from "./pages/Feedback.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LoggedIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
