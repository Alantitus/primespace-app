import React from 'react'
import './about.scss'

function About() {
  return (
    <div className='aboutPage'>
      <div className="textContainer">
        <div className="wrapper">
        <h1 className='title'>About Us</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum officiis labore illo quaerat ex doloribus, ullam ratione ducimus. Minima ullam doloribus quos praesentium iusto sit quibusdam illum asperiores possimus doloremque?
        A, velit quas. Doloremque maiores, quasi deleniti ab asperiores libero fugiat quis voluptates amet necessitatibus molestias nobis natus omnis quia, aperiam cum deserunt recusandae architecto. Debitis molestias inventore dolorum adipisci.
        Alias, mollitia harum fugiat eum, deleniti magnam cum iusto ex doloribus incidunt nihil at similique, amet inventore deserunt laudantium officia voluptatibus quis sint. Nulla dicta magni dolor tempora facere obcaecati.
        Nihil, quam, sunt cum, minima iste consequuntur autem quidem deserunt natus tempore iure et harum ea? Sunt eos, eligendi blanditiis dolores dicta aliquam laboriosam quaerat optio quasi quod eum voluptatem?</p>
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

export default About
