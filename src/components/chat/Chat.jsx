import React, { useState } from 'react'
import './chat.scss'

function Chat() {
    const [chat,setChat]=useState(true)
  return (
    <div className='chat'>
      <div className="messages">
        <h1>Messages</h1>
        <div className="message">
            <img src="" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor </p>
        </div>
        <div className="message">
            <img src="" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor </p>
        </div>
        <div className="message">
            <img src="" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor </p>
        </div>
        <div className="message">
            <img src="" alt="" />
            <span>John</span>
            <p>Lorem ipsum dolor </p>
        </div>
            <div className="message">
                <img src="" alt="" />
                <span>John</span>
                <p>Lorem ipsum dolor </p>
            </div>
      </div>
   {chat && <div className="chatBox">
    <div className="top">
        <div className="user">
            <img src="" alt="" />
            <span>John</span>
           
        </div>
        <span className='close' onClick={()=>setChat(null)}>X</span>
    </div>
    <div className="center">
        <div className="chatMessage">
            <p>sjdfhkasdhfkadshfk</p>
            <span>2 min ago</span>
        </div>
        <div className="chatMessage own">
            <p>sjdfhkasdhfkadshfk</p>
            <span>2 min ago</span>
        </div>
        <div className="chatMessage">
            <p>sjdfhkasdhfkadshfk</p>
            <span>2 min ago</span>
        </div>
        <div className="chatMessage own">
            <p>sjdfhkasdhfkadshfk</p>
            <span>2 min ago</span>
        </div>
            <div className="chatMessage">
                <p>sjdfhkasdhfkadshfk</p>
                <span>2 min ago</span>
            </div>
    </div>
    <div className="bottom">
        <textarea name="" id=""></textarea>
        <button>Send</button>
    </div>
    </div>}
    </div>
  )
}

export default Chat
