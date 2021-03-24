import React from 'react'
import {NavLink} from "react-router-dom"

function NavBar() {
    return (
     
      <div id="navBar" className="navBar">
        <img src="./images/logo.png" className="navImg" alt="Logo"/>
        <h3 className="site_title" >SocialApp</h3>
      <ul className="navList">
          <li className="navItem"><NavLink to="/">Register</NavLink></li>
          <li className="navItem"><NavLink to="/login">Login</NavLink></li>
      </ul>
      </div>
      
    )
}

export default NavBar
