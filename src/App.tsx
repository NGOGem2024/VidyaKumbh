import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Colleges from "./pages/Colleges";
import News from "./pages/News";
import AlertsPage from "./pages/AlertsPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import CollegeDetailPage from "./pages/CollegeDetailPage";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colleges" element={<Colleges />} />
          <Route path="/collegedetailpage" element={<CollegeDetailPage />} />

          <Route path="/news" element={<News />} />
          <Route path="/alerts" element={<AlertsPage />} />

          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
