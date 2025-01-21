import React from "react";
import HeaderClassroom from "./HeaderClassroom";
import CardClassroom from "./CardClassroom";
import SidebarClassroom from "./SidebarClassroom";
import "./Classroom.css";
function Classroom() {
  return (
    <div>
      <div>
        <HeaderClassroom />
      </div>
      <div className="content-classroom">
        <SidebarClassroom />
        <div  className="content-card">
          <CardClassroom />
        </div>
      </div>
    </div>
  );
}

export default Classroom;
