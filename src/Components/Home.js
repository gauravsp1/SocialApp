import React from 'react'
import NavBarLogout from './NavBarLogout'
import { useState } from 'react';


function Home() {
    const [list, setList] = useState(JSON.parse(localStorage.getItem("user")))


    return (<>
        <NavBarLogout/>
        <div className="home">
            
            <h1>Hi <i>{list.username}</i>,</h1>
            <h1>Welcome to SocialApp</h1>
            <img src="./images/welcome.jpg" alt="Welcome Image"/>
        </div>
        </>
    )
}

export default Home
