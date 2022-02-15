import React from 'react'
import "../Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton,Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar></Avatar>
        <div className="sidebar_headerRight">
            {/* <ChatIcon/> */}
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>
            <IconButton>
              <ChatIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;