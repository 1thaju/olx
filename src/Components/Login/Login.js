import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router';
import { auth } from '../firebase/config';
function Login() {
  const navigate = useNavigate()
  const [email1,setEmail] = useState('')
  const [password1,setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
    try{
      signInWithEmailAndPassword(auth,email1,password1).then((userCredential)=>{
        navigate("/")
      })
     }
     catch(e){
      console.log('Error')
      alert('Error')
     }
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email1} onChange={(e)=>{
              setEmail(e.target.value)
              e.preventDefault()
            }}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password1} onChange={(e)=>{
              setPassword(e.target.value)
              e.preventDefault()
            }}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
