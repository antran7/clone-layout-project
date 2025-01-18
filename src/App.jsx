import "./App.css";
import React from "react";
import Home from "./components/Home";
import Youtube from "./components/YouTube/Youtube";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gmail from "./components/Gmail/Gmail";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/google" element={<Home />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/gmail" element={<Gmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
