import React from "react";
import "./CardClassroom.css";
import { AssignmentIndOutlined, FolderOpen, MoreVert } from "@mui/icons-material";
import { Avatar } from "@mui/material";
function CardClassroom() {
  return (
    <div className="card">
        <div className="card-classroom">
      <div className="card-title">
        <div className="card-title-head">
          <p>HCM25_CPL_REACT...</p>
          <MoreVert className="card-icon" />
        </div>

        <p className="card-text">FA HCM</p>
      </div>
      <div className="card-body">
        <p className="card-deadline">Due Monday</p>
        <p className="card-deadline-content">11:59 PM-BTVN_Group_Demo...</p>
      </div>
      <div className="card-footer">
        <AssignmentIndOutlined />
        <FolderOpen />
      </div>
    </div>
    <div className="card-classroom">
      <div className="card-title">
        <div className="card-title-head">
          <p>HCM25_CPL_REACT...</p>
          <MoreVert className="card-icon" />
        </div>

        <p className="card-text">FA HCM</p>
      </div>
      <div className="card-body">
        <p className="card-deadline">Due Monday</p>
        <p className="card-deadline-content">11:59 PM-BTVN_Group_Demo...</p>
      </div>
      <div className="card-footer">
        <AssignmentIndOutlined />
        <FolderOpen />
      </div>
    </div>
    <div className="card-classroom">
      <div className="card-title">
        <div className="card-title-head">
          <p>HCM25_CPL_REACT...</p>
          <MoreVert className="card-icon" />
        </div>

        <p className="card-text">FA HCM</p>
      </div>
      <div className="card-body">
        <p className="card-deadline">Due Monday</p>
        <p className="card-deadline-content">11:59 PM-BTVN_Group_Demo...</p>
      </div>
      <div className="card-footer">
        <AssignmentIndOutlined />
        <FolderOpen />
      </div>
    </div>
    </div>
  );
}

export default CardClassroom;
