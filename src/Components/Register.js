import React from 'react'
import { NavLink } from "react-router-dom"
import { useState } from 'react';
import NavBar from "./NavBar";
import { useHistory } from 'react-router'



function Register() {
    const history=useHistory()

    //States
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        repassword: ""
    })

    

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

        if (user.username === "" || user.email === "" || user.password === "" || user.repassword === "") {
            alert("Complete All Feilds");
            e.preventDefault()
        }
        else if (user.username.includes("@")) {
            alert("Invalid Username");
            e.preventDefault()
        }
        else if (!user.email.includes("@")) {
            alert("Invalid Email");
            e.preventDefault()
        }
        else if (user.password.length < 8) {
            alert("Password length should greater than 8");
            e.preventDefault()
        }
        else if (user.password !== user.repassword) {
            alert("Password doesn't match");
            e.preventDefault()
        }
        else {
            localStorage.setItem("user", JSON.stringify(user))
            alert("Submitted Successfully")
            history.push('/home')
        }
    }

    return (
        <>
        <NavBar/>
        <div className="register">
            <form>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />

                    <label for="name"><b>User Name</b></label>
                    <input type="text" placeholder="Enter Name" name="username" value={user.username} onChange={(e) => { handleChange(e) }} required />

                    <label for="email"><b>Email</b></label>
                    <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={(e) => { handleChange(e) }} required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={(e) => { handleChange(e) }} required />

                    <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="repassword" value={user.repassword} onChange={(e) => { handleChange(e) }} required />

                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    <button onClick={handleSubmit} type="submit" className="signupbtn">Sign Up</button>
                </div>
            </form>
            <p className="bottom_link">Already have an accout? <NavLink to="/login">Login</NavLink></p>

        </div >
        </>
    )
}

export default Register
