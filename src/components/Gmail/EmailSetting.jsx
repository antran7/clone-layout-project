import React from 'react'
import './Emailist.css'
import { IconButton } from '@mui/material'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function EmailSetting() {
    return (
        <div className='emailist_setting'>
            <div className="emailist_settingleft">
                <IconButton>
                    <CheckBoxOutlineBlankIcon />
                </IconButton>
                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
                <IconButton>
                    <RefreshIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>

            </div>
            <div className="emailist_settingsright">
                <p>1-50 of 2,345</p>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
    )
}

export default EmailSetting
