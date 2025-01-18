import "./App.css";
import React from "react";
import Home from "./components/Home";
import Youtube from "./components/YouTube/Youtube";
import Shorts from "./components/YouTube/Shorts";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/google" replace />} />
          <Route path="/google" element={<Home />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/shorts" element={<Shorts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
