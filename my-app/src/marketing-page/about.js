
import React from "react";
import { NavLink } from "react-router-dom";
/* <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div class="right-side">
          <NavLink to="/signup">Sing Up</NavLink>
          <NavLink to="/login">Log In</NavLink>*/
export function About(){
return (
<body>
 
  <header id="about">
      <nav>
        <div class="left-side2">
          <h2>Plant Parenthood</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
        <div class="right-side2">
          <NavLink to="/signup">Sing Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </div>
      </nav>
  </header>
  <section id="meet-the-team">
      <h2>Meet the team</h2>
      <div class="container">
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W012X6R5D4H-4424e621f02f-512" alt="Image of Nick Hansen"/>
            </a>
            <div class="container-text">
                <h3>Nick Hansen</h3>
                <h4>Project Manager</h4>
            </div>
          </div>
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W012XJ080C9-ed7973b51ee2-512" alt="Image of Lauren Emick"/>
            </a>
            <div class="container-text inverse">
                <h3>Lauren Emick</h3>
                <h4>User Interface Developer</h4>
            </div>
          </div>
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W0123RTNEFR-34f13f280108-512" alt="Image of Shane Kaestner"/>
            </a>
            <div class="container-text">
                <h3>Shane Kaestner</h3>
                <h4>Frontend Architect</h4>
            </div>
          </div>
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W012JQ412KV-93ace0b40d3e-512" alt="Image of Ivan Tejano"/>
            </a>
            <div class="container-text inverse">
                <h3>Ivan Tejano</h3>
                <h4>Frontend Architect</h4>
            </div>
          </div>
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W0123RU151V-ffba83afb622-512" alt="Image of Manuel Muratalla"/>
            </a>
            <div class="container-text">
                <h3>Manuel Muratalla</h3>
                <h4>Frontend Architect</h4>
            </div>
          </div>
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W012JQ3P3DZ-68c978a15818-512" alt="Image of Xavier Hoskins"/>
            </a>
            <div class="container-text inverse">
                <h3>Xavier Hoskins</h3>
                <h4>Backend Architect</h4>
            </div>
          </div>
          <div>
            <a href='#' target="_block">
                <img src="https://ca.slack-edge.com/ESZCHB482-W0123RRNMK9-6d226361ac51-512" alt="Image of Vrndavana Hines"/>
            </a>
            <div class="container-text">
                <h3>Vrndavana Hines</h3>
                <h4>Backend Architect</h4>
            </div>
          </div>
    </div>
  </section>

</body>
)
}