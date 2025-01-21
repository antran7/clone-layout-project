import React from "react";
import "./SidebarClassroom.css";

import {
  CalendarToday,
  HomeOutlined,
  PlaylistAddCheckOutlined,
  School,
  SettingsOutlined,
  SystemUpdateAlt,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
function SidebarClassroom() {
  return (
    <div>
      <div className="container-classroom">
        <ul>
          <div className="sidebar-top">
            <li>
              <HomeOutlined className="sidebar-icon" />
              <span>Home</span>
            </li>
            <li>
              <CalendarToday className="sidebar-icon" />
              <span>Calendar</span>
            </li>
          </div>
          <div className="sidebar-middle">
            <li>
              <School className="sidebar-icon" />
              <span>Enrolled</span>
            </li>
            <li>
              <PlaylistAddCheckOutlined className="sidebar-icon" />
              <span>To do</span>
            </li>
            <li>
              <Avatar className="sidebar-icon" />
              <span>HCM25_CPL_REACT_03</span>
            </li>
          </div>
          <li>
            <SystemUpdateAlt className="sidebar-icon" />
            <span>Archived classes</span>
          </li>
          <li>
            <SettingsOutlined className="sidebar-icon" />
            <span>Settings</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarClassroom;
