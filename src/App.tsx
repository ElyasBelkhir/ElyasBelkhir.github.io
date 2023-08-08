import { useState } from "react";
import HomePage from "./Pages/HomePage";
import Projects from "./Pages/Projects";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Experience from "./Pages/Experience";
import Navbar from "./Components/Navbar";
import './styles/App.css';


export default function App() {
  return (
    <div className="">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}
