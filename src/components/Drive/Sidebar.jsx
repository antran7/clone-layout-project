import React from "react";
import { List, ListItem, ListItemIcon, ListItemText, Box } from "@mui/material";
import { Folder, Delete, History, Storage, Share } from "@mui/icons-material";
import "./Sidebar.css";

function Sidebar() {
  const menuItems = [
    { icon: <Folder />, text: "My Drive" },
    { icon: <Share />, text: "Shared with me" },
    { icon: <History />, text: "Recent" },
    { icon: <Delete />, text: "Trash" },
    { icon: <Storage />, text: "Storage" },
  ];

  return (
    <Box className="sidebar">
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index} className="sidebar__item">
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Sidebar;
