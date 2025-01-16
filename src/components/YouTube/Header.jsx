import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import MicIcon from "@mui/icons-material/Mic";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link to="/">
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube Logo"
          />
        </Link>
      </div>

      <div className="header__center">
        <div className="header__search">
          <input
            type="text"
            placeholder="Search"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
          />
          <IconButton className="header__searchButton">
            <SearchIcon />
          </IconButton>
        </div>
        <IconButton className="header__mic">
          <MicIcon />
        </IconButton>
      </div>

      <div className="header__right">
        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar alt="User Avatar" src="" />
      </div>
    </div>
  );
}

export default Header;
