import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { Avatar, Menu, MenuItem, IconButton, Button } from "@mui/material";
import AppsIcon from "@material-ui/icons/Apps";
import { YouTube, DriveFolderUpload, Add } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import Search from "./Search";

const Home = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [profileMenu, setProfileMenu] = useState(false);

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
        <div className='home'>
            <div className='home-header'>
                <div className='header-left'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className='header-right'>
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/image">Image</Link>

                    <IconButton onClick={handleMenuOpen}>
                        <AppsIcon />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                        className='menu-dropdown'
                    >
                        <MenuItem onClick={handleMenuClose}>
                            <YouTube style={{ marginBottom: 5 }} /> YouTube
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <MailIcon style={{ marginBottom: 5 }} /> Gmail
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <DriveFolderUpload style={{ marginBottom: 5 }} /> Drive
                        </MenuItem>
                    </Menu>


                    <IconButton onClick={handleProfileOpen}>
                        <Avatar />
                    </IconButton>

                    <Menu
                        anchorEl={anchorEl}
                        open={profileMenu}
                        onClose={handleProfileClose}
                        className='profile-dropdown'
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <MenuItem onClick={handleProfileClose} className='profile-menu'>
                            <div className='profile-menu'>
                                <h3>nhom3@gmail.com</h3>
                                <Avatar className='profile-avatar' src='' />
                                <p>Hi, nhom3!</p>
                                <Button className='first-button'>Manage your Google Account</Button>
                                <div className='button-inline'>
                                    <Button
                                        style={{
                                            borderRadius: '30px 5px 5px 30px',
                                            borderStyle: 'solid',
                                            borderWidth: '1px',
                                            backgroundColor: '#a3a3a3',
                                        }}
                                        className='second-button'
                                    >
                                        <Add />
                                        <p>Add account</p>
                                    </Button>

                                    <Button
                                        style={{
                                            borderRadius: '5px 30px 30px 5px',
                                            borderStyle: 'solid',
                                            borderWidth: '1px',
                                            backgroundColor: '#a3a3a3',
                                        }}
                                        className='third-button'
                                    >
                                        <LogoutIcon />
                                        <p>Sign out</p>
                                    </Button>

                                </div>
                                <div>
                                    <span>Privacy Policy  </span>
                                    <span>• Terms of services</span>
                                </div>
                            </div>
                        </MenuItem>
                    </Menu>

                </div>
            </div>
            <div className='home-body'>
                <img className='google-logo'
                    src="https://cdn.pixabay.com/photo/2015/10/31/12/54/google-1015751_1280.png"
                    alt=""
                />
                <div className='search-bar'>
                    <Search />
                </div>
            </div>
        </div>
    );
};

export default Home;
