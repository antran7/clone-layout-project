import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Menu, MenuItem, IconButton, Button, Box, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import "./Docs.css";
import templateData from './data/Template.json';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import GridViewIcon from '@mui/icons-material/GridView';
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import FolderIcon from '@mui/icons-material/Folder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import recentData from './data/Recent.json';

const Docs = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileMenu, setProfileMenu] = useState(false);
  const handleProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setProfileMenu(true);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
    setProfileMenu(false);
  };

  const iconComponents = {
    LooksOneIcon: LooksOneIcon,
    LooksTwoIcon: LooksTwoIcon,
    Looks3Icon: Looks3Icon,
  };

  return (
    <div>
      {/* Navbar */}
      <div className="docs-navbar">
        <div className="left">
          <MenuIcon />
          <div className="logo">
          <img 
              src="/googlelogo.png"
              alt="Docs"
              style={{ width: '40px', height: '40px' }}
            />
                      <span style={{ 
              color: '#444746', 
              fontSize: '22px',
              marginLeft: '4px',
              fontFamily: 'Google Sans,Roboto,Arial,sans-serif'
            }}>
              Docs
            </span>
          </div>
        </div>
        <div className="center">
          <div className="searchbar">
            <div className="searchbar-wrapper">
              <div className="searchbar-left">
                <div className="search-icon-wrapper">
                  <span className="search-icon searchbar-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="searchbar-center">
                <div className="searchbar-input-spacer"></div>
                <input
                  type="text"
                  className="searchbar-input"
                  maxLength="3048"
                  name="q"
                  autoCapitalize="off"
                  autoComplete="off"
                  title="Search"
                  // role="combobox"
                  placeholder="Search..."
                />
              </div>

              <div className="searchbar-right">
                <svg
                  className="voice-search"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#4285f4"
                    d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
                  />
                  <path fill="#34a853" d="m11 18.08h2v3.92h-2z" />
                  <path
                    fill="#fbbc05"
                    d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
                  />
                  <path
                    fill="#ea4335"
                    d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="">
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
              <MenuItem onClick={handleProfileClose} className="">
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
      </div>

      <div className="docs-template">
        <div className="template-header">
          <div className="start-doc">Start a new document</div>
          <div className="template-gallery">
            <button className="template-gallery-btn">
              Template gallery
              <span className="arrow-icon">▼</span>
            </button>
            <button className="more-options-btn">
              <span className="more-icon">⋮</span>
            </button>
          </div>
        </div>
        
        <div className="template-grid">
          {templateData.templates.map((template, index) => (
            <div key={index} className="template-item">
              <div className="template-preview">
                <img src={template.imageUrl} alt={template.name} />
              </div>
              <div className="template-info">
                <div className="template-name">{template.name}</div>
                <div className="template-type">{template.type}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="recent-documents-container">
        <div className="recent-header">
          <Typography className="recent-title">Recent documents</Typography>
          <div className="recent-controls">
            <Typography className="owned-by-dropdown">
              Owned by anyone ▼
            </Typography>
            <IconButton size="small">
              <GridViewIcon className="control-icon" />
            </IconButton>
            <IconButton size="small">
              <SortByAlphaIcon className="control-icon" />
            </IconButton>
            <IconButton size="small">
              <FolderIcon className="control-icon" />
            </IconButton>
          </div>
        </div>

        <div className="documents-grid">
          {recentData.documents.map((doc) => {
            const IconComponent = iconComponents[doc.type.icon];
            
            return (
              <div key={doc.id} className="document-card">
                <div 
                  className="document-thumbnail"
                  style={{ backgroundImage: `url(${doc.thumbnail})` }}
                />
                
                <div className="document-info">
                  <div className="document-header">
                    <div className="document-title-container">
                      {IconComponent && (
                        <IconComponent 
                          className="document-icon"
                          style={{ color: doc.type.color }}
                        />
                      )}
                      <Typography className="document-title">
                        {doc.title}
                      </Typography>
                    </div>
                    <IconButton className="more-button" size="small">
                      <MoreVertIcon />
                    </IconButton>
                  </div>
                  <Typography className="document-date">
                    {doc.date}
                  </Typography>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Docs;
