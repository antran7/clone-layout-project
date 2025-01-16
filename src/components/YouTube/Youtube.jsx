import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideos from "./RecommendedVideos";
import "./Youtube.css";

function Youtube() {
  return (
    <div className="youtube">
      <Header />
      <div className="youtube__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default Youtube;
