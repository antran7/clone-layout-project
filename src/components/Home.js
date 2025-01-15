import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Home.css';
import { Avatar, Menu, MenuItem, IconButton } from "@mui/material";
import AppsIcon from "@material-ui/icons/Apps";
import { YouTube, DriveFolderUpload } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';

import Search from "./Search";

const Home = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
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
                            <MailIcon style={{ marginBottom: 5 }}/> Gmail
                        </MenuItem>
                        <MenuItem onClick={handleMenuClose}>
                            <DriveFolderUpload style={{ marginBottom: 5 }} /> Drive
                        </MenuItem>
                    </Menu>

                    <Avatar />
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
