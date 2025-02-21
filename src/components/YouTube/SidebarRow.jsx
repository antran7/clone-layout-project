import React from "react";
import "./SidebarRow.css";

function SidebarRow({ selected, Icon, CustomIcon, title }) {
  return (
    <div className={`sidebarRow ${selected && "selected"}`}>
      {Icon && <Icon className="sidebarRow__icon" />}
      {CustomIcon && <div className="sidebarRow__icon">{CustomIcon}</div>}
      <h2 className="sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;
