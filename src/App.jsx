import "./App.css";
import React from "react";
import Home from "./components/Home";
import Youtube from "./components/YouTube/Youtube";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/google" element={<Home />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
