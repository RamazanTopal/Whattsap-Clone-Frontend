import React from 'react'
import "../Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { IconButton,Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar></Avatar>
        <div className="sidebar_headerRight">
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
      <div className="sidebar_search">
          <div className="sidebar_searchContainer">
            <SearchIcon></SearchIcon>
            <input placeholder="Search or start new chat" type="text"></input>
          </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar;