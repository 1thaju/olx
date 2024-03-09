import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile  } from 'firebase/auth';
import Logo from '../../olx-logo.png';
import './Signup.css';
import { auth,db } from '../firebase/config';
import { FirebaseContext } from '../../store/Context';
import { addDoc, collection } from 'firebase/firestore';
import { doc,setDoc } from 'firebase/firestore';


export default function Signup() {
  const navigate = useNavigate()
  const [userName,setUser] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  
  

  function handleClick(e) {
    
    e.preventDefault();
          createUserWithEmailAndPassword(auth,email,password).then(async(result)=>{
            result.user.displayName = userName;
            
            await addDoc(collection(db, "users"), {
            name : `${result.user.displayName}`,
            id : `${result.user.uid}` ,
            phone : `${result.user.phone}`
          });
         
      })
      .catch((error) => {
        console.error(error.message);
      });
    navigate ('/login')
}
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleClick}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName} onChange={(e)=>{
              setUser(e.target.value)
              e.preventDefault()
            }}
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email} onChange={(e)=>{
              setEmail(e.target.value)
              e.preventDefault()
            }}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone} onChange={(e)=>{
              setPhone(e.target.value)
              e.preventDefault()
            }}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password} onChange={(e)=>{
              setPassword(e.target.value) 
              e.preventDefault()
            }}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
