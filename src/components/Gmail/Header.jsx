import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import './Header.css';



const Header = () => {
    
  return (
    <div className="header">
        <div className="header_left">
            <IconButton>
                <ReorderIcon></ReorderIcon>
            </IconButton>
            <img className="header_logo" src="https://file.hstatic.net/1000262653/file/newgmaillogo.0_8721bc8a987e4e1ca085ab7ef7c46c9c_grande.jpg" alt="Logo" />	
        </div>

        <div className="header_middle">
           <div className="search_mail">
             <IconButton>
              <SearchIcon></SearchIcon>
             </IconButton>
             <input type="text" placeholder="Search mail" />
             <IconButton>
              <ExpandMoreIcon></ExpandMoreIcon>
             </IconButton>
           </div>
        </div>

        <div className="header_right">
        <IconButton>
              <HelpOutlineIcon></HelpOutlineIcon>
             </IconButton>
             <IconButton>
              <SettingsIcon></SettingsIcon>
             </IconButton>
             <IconButton>
              <AppsIcon></AppsIcon>
             </IconButton>
             <Avatar src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/471147819_934238615472202_7720145903820340034_n.jpg?stp=cp6_dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=WlRJXMazWpAQ7kNvgGb846b&_nc_oc=Adj6VvVHSTpJbc7i5d33QBE8LWDH4uXReJRgBc9yk7F7Q9T3KNjVnqJ3Y79HTRwVpHU&_nc_zt=24&_nc_ht=scontent.fsgn2-9.fna&_nc_gid=AiR9n-ZMJvusLUDHZ0RWMMs&oh=00_AYCzefOsjoth4BMJ2DWguUy6AhUfhHYbfNeKCyfxIDYohQ&oe=67913C59"></Avatar>
        </div>
    </div>
  )
}

export default Header
