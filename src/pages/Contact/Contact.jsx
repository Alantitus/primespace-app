import React from 'react'
import './contact.scss'

function About() {
  return (
    <div className='contactPage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>Contact Us</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptate velit modi ea magni! Magnam adipisci itaque iste aliquam. Nulla reiciendis assumenda, aliquam suscipit iure laboriosam distinctio adipisci obcaecati recusandae.</p>
        <div className="boxes">
            <div className="box">
              <h1><i class="fa-solid fa-location-dot"></i></h1>
              <h2>Thrikkakkara,Ernakulam</h2>
            </div>
            <div className="box">
              <h1><i class="fa-solid fa-phone"></i></h1>
              <h2>+91 7306476389</h2>
            </div>
            <div className="box">
              <h1><i class="fa-solid fa-envelope"></i></h1>
              <h2>primespace@yahoo.in</h2>
            </div>
          </div>
        </div>
      </div>
    
     <div className="imgContainer">
         <img src="/bg1.png" alt="" />
     </div>
  </div>
  )
}

export default About
