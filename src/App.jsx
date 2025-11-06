// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Doctor from "./pages/Doctor";
import Appointments from "./pages/Appointments";
import { AppointmentsProvider } from "./context/AppointmentsContext";

export default function App() {
  return (
    <AppointmentsProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </Router>
    </AppointmentsProvider>
  );
}
