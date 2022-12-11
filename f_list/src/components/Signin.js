import React from 'react'
import { useState } from 'react';
import UserService from '../service/UserServise';
import { useNavigate } from 'react-router-dom';

function Signin() {
 
  const navigate = useNavigate();

  const [email,setEmail]=useState('')
  const [pass,setPass]=useState('')


  const signUser = (e)=>{
    e.preventDefault() ;
    var user={email:email,password:pass}
    UserService.signin(user).then((Response) => {
    console.log(Response.data)
    navigate('/list'); }).catch(error=> {
        console.log(error.name)
    })
}





  return (
    <div className="Auth-form-container">
    <form className="Auth-form" style={{width: "500px" ,height:"500px"}}>
      <div className="Auth-form-content">
        <h3 className="Auth-form-title">Sign In</h3>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control mt-1"
            placeholder="Enter email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control mt-1"
            placeholder="Enter password"
            value={pass}
           onChange={(e)=>setPass(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={(e)=>signUser(e)}>
            Submit
          </button>
        </div>
        <p className="forgot-password text-right mt-2">
          <a href="signup"> create account now </a>
        </p>
      </div>
    </form>
  </div>
  )
}

export default Signin