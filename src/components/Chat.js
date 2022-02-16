import React from 'react'
import "../Chat.css"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { IconButton,Avatar } from '@mui/material';
function Chat() {
  return (
    <div className="chat">
      <div className="chat_header">
          <Avatar/>
          <div className="chat_headerInfo">
            <h3>Room name</h3>
            <p>Last seen at..</p>
          </div>
          <div className="chat_headerRight">
            <IconButton>
              <SearchIcon/>
            </IconButton>
            <IconButton>
              <AttachFileIcon/>
            </IconButton>
            <IconButton>
              <MoreVertIcon/>
            </IconButton>
          </div>
      </div>
      <div className="chat_body">
        <p>This is a message</p>
      </div>
    </div>
  )
}

export default Chat;