import React from 'react'
import './Sidebar.css'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import Sidebaroptions from './Sidebaroptions';
// import { Inbox } from '@mui/icons-material';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import  LabelImportantIcon  from '@mui/icons-material/LabelImportant';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import LabelIcon from '@mui/icons-material/Label';
import DeleteIcon from '@mui/icons-material/Delete';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';

function Sidebar ()  {
  return (
    <div className='sidebar'>
      <div className="sidebar1">
      <Button startIcon={<AddIcon/>} className="compose_btn">Compose</Button>
      </div>
      <Sidebaroptions Icon={InboxIcon} title="Inbox" number="224" isactive={true}/>
      <Sidebaroptions Icon={StarRateIcon} title="Starred" number=""/>
      <Sidebaroptions Icon={WatchLaterIcon} title="Snoozed" number="100"/>
      <Sidebaroptions Icon={LabelImportantIcon} title="Important" number=""/>
      <Sidebaroptions Icon={SendIcon} title="Sent" number="50"/>
      <Sidebaroptions Icon={DraftsIcon} title="Drafts" number=""/>
      <Sidebaroptions Icon={LabelIcon} title="Category" number=""/>
      <Sidebaroptions Icon={DeleteIcon} title="[Map]/Trash}" number="50"/>
      <Sidebaroptions Icon={FindInPageIcon} title="Documents" number=""/>
      <Sidebaroptions Icon={ExpandMoreIcon} title="More" number=""/>
      
      <h3 className="SidebarOptions_heading"> Meet</h3>
      <Sidebaroptions Icon={VideocamIcon} title="New meeting"/>
      <Sidebaroptions Icon={KeyboardIcon} title="Join a meeting" />
      

    </div>
  )
}

export default Sidebar
