import React from 'react'
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import NavBar from "./NavBar";
import { useHistory } from 'react-router'



function Login() {
    const history = useHistory()

    //States
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [list, setList] = useState(JSON.parse(localStorage.getItem("user")))


    // Functions 
    function handleChange(e) {
        const { name, value } = e.target
        setUser((PreviousValue) => {
            return {
                ...PreviousValue,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!list){
            alert("Wrong Credentials");
        }
        
        else if (list.email !== user.email || list.password !== user.password) {
            alert("Wrong Credentials");
        }
        else {
            history.push('/home')
        }
    }

    
    return (
        <>
            <NavBar />
            <div className="login">
                <form>
                    <div className="container">
                        <h1>Login</h1>
                        <hr />
                        <label for="email"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={(e) => { handleChange(e) }} required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={(e) => { handleChange(e) }} required />

                        <button onClick={handleSubmit} type="submit" className="loginbtn">Login</button>
                    </div>
                </form>
                <p className="bottom_link">Don't have an accout? <NavLink to="/">Register</NavLink></p>

            </div >
        </>
    )
}

export default Login
