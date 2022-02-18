import React from 'react'
import "../Chat.css"
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton,Avatar } from '@mui/material';
import { SettingsInputAntenna } from '@mui/icons-material';
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
        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message chat_receiver">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Sonny</span>
          This is a message
          <span className="chat_timestamp">
            {new Date().toUTCString()}
          </span>
        </p>
      </div>

      <div className="chat_footer">
        <InsertEmoticonIcon/>
        <form>
          <input 
          placeholder="Type a message"
          type="text">
          </input>
          <button type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat;