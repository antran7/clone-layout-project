import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <MenuIcon />
        <Link to="/">
          <img
            className="header__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
      </div>

      <div className="header__center">
        <div className="header__search">
          <input type="text" placeholder="Search" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <MicIcon className="header__mic" />
      </div>

      <div className="header__right">
        <VideoCallIcon />
        <NotificationsIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

export default Header;
