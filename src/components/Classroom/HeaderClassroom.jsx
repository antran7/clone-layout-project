import React, { useState } from "react";
import "./HeaderClassroom.css";
import {
  Add,
  Apps,

  Menu,

} from "@mui/icons-material";
import { Avatar } from "@mui/material";
function HeaderClassroom() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="toolbar-classroom">
      <div className="header-classroom">
        <div className="header-left">
          <Menu className="menu-icon" onClick={toggleSidebar} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Google_Classroom_Logo.png" alt="" />
          <span className="classroom-text">Classroom</span>
        </div>
        <div className="header-right">
          <Add className="icon icon-add" />
          <Apps className="icon icon-apps" />
          <Avatar className="icon icon-avt" />
        </div>
      </div>
    
    </div>
  );
}

export default HeaderClassroom;
