import React from 'react'
import List from '../../components/list/List'
import './profilepage.scss'
import Chat from '../../components/chat/Chat'

function Profilepage() {
  return (
    <div className='profilepage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User details</h1>
                    <button>Update Profile</button>
                </div>
                <div className="info">
                    <span>Avatar: <img src="" alt="" /></span>
                    <span>Username:<b>John Doe</b></span>
                    <span>Email:<b>john@69.com</b></span>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <button>Create new Post</button>
                </div>
                <List/>
                <div className="title">
                    <h1>Saved List</h1>
                </div>
            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default Profilepage
