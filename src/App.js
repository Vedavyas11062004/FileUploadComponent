import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";import './App.css';
import LandingPage from "./pages/LandingPage";
import DownloadPage from "./pages/DownloadPage";


function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/download" element={<DownloadPage/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
