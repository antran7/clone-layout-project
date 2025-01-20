import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { Avatar, Menu, MenuItem, IconButton, Button } from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import {
  YouTube,
  DriveFolderUpload,
  Mail,
  Description,
  CalendarToday,
  Chat,
  VideoCall,
  Assignment,
  WebAsset,
} from "@mui/icons-material";
import MailIcon from "@mui/icons-material/Mail";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import Search from "./Search";

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenu, setProfileMenu] = useState(false);
  const navigate = useNavigate();

  const handleYouTubeClick = () => {
    navigate("/youtube");
  };
  const handleClassroomClick = () => {
    navigate("/classroom");
  };
  const handleGmailClick = () => {
    navigate("/gmail");
  };

  const handleDocsClick = () => {
    navigate("/docs");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setProfileMenu(true);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
    setProfileMenu(false);
  };

  return (
    <div className="home">
      <div className="home-header">
        <div className="header-left">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="header-right">
          <Link to="/gmail">Gmail</Link>
          <Link to="/image">Image</Link>

          <IconButton onClick={handleMenuOpen}>
            <AppsIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            className="menu-dropdown"
            PaperProps={{
              elevation: 0,
              style: {
                borderRadius: "24px",
                padding: "16px",
                minWidth: "280px",
                maxWidth: "90vw",
                marginRight: "20px",
                "@media (min-width: 600px)": {
                  minWidth: "340px",
                  maxWidth: "340px",
                },
              },
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <div
              className="menu-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(80px, 1fr))",
                gap: "8px",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <div
                  className="icon-wrapper"
                  style={{
                    backgroundColor: "#5F6368",
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ color: "white", fontSize: "16px" }}>N</span>
                </div>
                <span className="menu-item-text">Account</span>
              </MenuItem>

              <MenuItem onClick={handleGmailClick}>
                <span className="app-icon icon-gmail"></span>
                <span className="menu-item-text">Gmail</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-drive"></span>
                <span className="menu-item-text">Drive</span>
              </MenuItem>

              <MenuItem onClick={handleClassroomClick}>
                <span className="app-icon icon-classroom"></span>
                <span className="menu-item-text">Classroom</span>
              </MenuItem>

              <MenuItem onClick={handleDocsClick}>
                <span className="app-icon icon-docs"></span>
                <span className="menu-item-text">Docs</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-sheets"></span>
                <span className="menu-item-text">Sheets</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-slides"></span>
                <span className="menu-item-text">Slides</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-calendar"></span>
                <span className="menu-item-text">Calendar</span>
              </MenuItem>

              <MenuItem onClick={handleYouTubeClick}>
                <div className="icon-container">
                  <div className="app-icon icon-youtube"></div>
                </div>
                <span className="menu-item-text">YouTube</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-meet"></span>
                <span className="menu-item-text">Meet</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-forms"></span>
                <span className="menu-item-text">Forms</span>
              </MenuItem>

              <MenuItem onClick={handleMenuClose}>
                <span className="app-icon icon-sites"></span>
                <span className="menu-item-text">Sites</span>
              </MenuItem>
            </div>
            <div className="menu-indicator"></div>
          </Menu>

          <IconButton onClick={handleProfileOpen}>
            <Avatar />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={profileMenu}
            onClose={handleProfileClose}
            className="profile-dropdown"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleProfileClose} className="profile-menu">
              <div className="profile-menu">
                <h3>nhom3@gmail.com</h3>
                <Avatar className="profile-avatar" src="" />
                <p>Hi, nhom3!</p>
                <Button className="first-button">
                  Manage your Google Account
                </Button>
                <div className="button-inline">
                  <Button
                    style={{
                      borderRadius: "30px 5px 5px 30px",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      backgroundColor: "#a3a3a3",
                    }}
                    className="second-button"
                  >
                    <AddIcon />
                    <p>Add account</p>
                  </Button>

                  <Button
                    style={{
                      borderRadius: "5px 30px 30px 5px",
                      borderStyle: "solid",
                      borderWidth: "1px",
                      backgroundColor: "#a3a3a3",
                    }}
                    className="third-button"
                  >
                    <LogoutIcon />
                    <p>Sign out</p>
                  </Button>
                </div>
                <div>
                  <span>Privacy Policy </span>
                  <span>• Terms of services</span>
                </div>
              </div>
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="home-body">
        <img
          className="google-logo"
          src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
          alt=""
        />
        <div className="search-bar">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default Home;
