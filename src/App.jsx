import "./App.css";
import React from "react";
import Home from "./components/Home";
import Youtube from "./components/YouTube/Youtube";
import Shorts from "./components/YouTube/Shorts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Gmail from "./components/Gmail/Gmail";
import Drive from "./components/Drive/Drive"
import About from "./components/About/About";
import Classroom from './components/Classroom/Classroom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/google" replace />} />
          <Route path="/google" element={<Home />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/gmail" element={<Gmail />} />
          <Route path="/drive" element={<Drive />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/classroom" element={<Classroom />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
