import React, { useState } from 'react'
import { Link,useHistory } from 'react-router-dom';
import "./Login.css";
import {auth} from "./firebase";

function Login() {
    const history = useHistory();

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            //logged in, redirect to homepage
            //this will redirect to homepage and when they press back, it will make him go back to loginpage
            history.push("/")
        })
        .catch(e=>alert(e.message))
    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            //created a user login and redirect to homepage
            //this will redirect to homepage and when they press back, it will make him go back to loginpage
            history.push("/")
        })
        .catch(e=>alert(e.message))
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={e=>setEmail(e.target.value)} type="email"/>
                    <h5>Password</h5>
                    <input value={password} onChange={e=>setPassword(e.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signInButton">Sign In</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice. </p>
                <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
