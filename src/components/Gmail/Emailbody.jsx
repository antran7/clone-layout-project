import React from 'react'
import './Emailist.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import LabelOutLinedIcon from '@material-ui/icons/LabelOutlined';
import  LabelImportantIcon  from '@mui/icons-material/LabelImportant';
import StarRateIcon from '@mui/icons-material/StarRate';

function Emailbody({name,subject,message,time}) {
  return (
    <div className="emailbody">
      <div className="emailbody_left">
       <CheckBoxOutlineBlankIcon/>
       <StarRateIcon/>    
       <LabelImportantIcon/>
       <h4> {name}
       </h4>
      </div>
      <div className="emailbody_middle">
        <div className="emailbody_middle_msg">
            <p><b>{subject}</b> {message}</p>
        </div>
      </div>
      <div className="emailbody_right">
        <p>{time}</p>
        
      </div>
    </div>
  )
}

export default Emailbody
