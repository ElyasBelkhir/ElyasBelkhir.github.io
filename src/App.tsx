import { useState } from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import './styles/App.css';


export default function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}
