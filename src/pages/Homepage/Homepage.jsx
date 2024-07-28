import Searchbar from "../../components/Searchbar/Searchbar"
import { AuthContext } from "../../contextAPI/AuthContext"
import "./homePage.scss"
import React, { useContext } from 'react'

function Homepage() {

  const {currentUser}=useContext(AuthContext)
  console.log(currentUser)
  return (
    <div className='homePage'>
        <div className="textContainer">
         <div className="wrapper"> 
          <h1 className="title"> 
          Find Real Estate & Choose a Home that Suits Your Lifestyle.
          </h1>
          <p className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio maiores at quam suscipit odit nisi quia. A mollitia voluptatum corporis porro sint harum, dolores tenetur quaerat, in atque quidem dolorum.
          </p>
          <Searchbar/>
          <div className="boxes">
            <div className="box">
              <h1>20+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>100+</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Happy Customers</h2>
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

export default Homepage
