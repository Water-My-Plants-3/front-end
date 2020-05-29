import React from "react";
import { NavLink } from "react-router-dom";

export function MarketingPage(){
return(
<body>
<meta charset="utf-8"/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,700;1,300&display=swap" rel="stylesheet"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="shortcut icon" type="image/png" href="https://static.thenounproject.com/png/2711844-200.png"/>
  <header id="home">
    <nav>
        <div className="left-side">
            <h2>Plant Parenthood</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div className="right-side">
          <NavLink to="/signup">Sing Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
    </nav>
    <section className="nav-main">
        <h1>Keep your plants</h1>
        <h1 className="special-font">alive & thriving</h1>
    </section>
  </header>
  <section className="bottom-section">
    <div className="bottom-section-text"> 
      <p>Plant Parenthood is an app that helps you care for all the plants you have brought into your life.</p>
      <div className="second-para">By making sure you get watering reminders at the right time for each plant, we hope that you and your plants live a long and healthy life together!</div>
      <NavLink className='btn' to="/">SIGN UP TODAY!</NavLink>
      <NavLink className='btn2' to="/">GET STARTED!</NavLink>
      <NavLink className='btn3' to="/about">ABOUT US</NavLink>
    </div>
  </section>

</body> )
}