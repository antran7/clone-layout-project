import React from "react";
import { AppBar, Toolbar, Typography, InputBase, Box, IconButton, Button } from "@mui/material";
import { Search, Apps } from "@mui/icons-material";
import "./Header.css";
import driveLogo from "./Google_Drive_logo.png";
function Header() {
  const handleResetPage = () => {
    window.location.reload(); 
  }


  return (
    <div className="header-container">
      <AppBar position="static" className="header">
        <Toolbar>
        <Box className="header__left" onClick={handleResetPage}>
            <Typography variant="h6" className="header__title">
              <img src={driveLogo} alt="Drive Logo" className="header__logo" />
              Drive
            </Typography>
          </Box>

          <Box className="header__search">
            <Search className="header__searchIcon" />
            <InputBase placeholder="Search in Drive" className="header__input" />
          </Box>

          <Box className="header__right">
            <IconButton className="header__appsButton">
              <Apps />
            </IconButton>
            <Button variant="contained" className="header__button">
              + New
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
