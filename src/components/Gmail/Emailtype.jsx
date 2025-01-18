import React from 'react'
import './Emailist.css'
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
function Emailtype() {
  return (
    <div className="emailtype">
      <div className="emailtype_options emailtype_options--active">
         <InboxIcon />
         <p>Main</p>
      </div>
      <div className="emailtype_options">
         <PeopleIcon />
         <p>Social</p>
      </div>
      <div className="emailtype_options">
         <LocalOfferIcon />
         <p>Advertisement</p>
      </div>
    </div>
  )
}

export default Emailtype
