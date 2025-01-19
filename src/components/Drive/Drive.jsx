import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import DriveContent from "./DriveContent";
import "./Drive.css";

function Drive() {
  return (
    <div className="drive">
      <Header />
      <div className="drive__body">
        <Sidebar />
        <DriveContent />
      </div>
    </div>
  );
}

export default Drive;
