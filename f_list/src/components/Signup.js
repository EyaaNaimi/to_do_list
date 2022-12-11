import React from 'react'


import { useState } from 'react';

import UserService from '../service/UserServise';
import { useNavigate } from 'react-router-dom';



function Signup() {


  
  const [email,setEmail]=useState('')
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [phone,setPhone]=useState('')
  const [pass,setPass]=useState('')
  const navigate = useNavigate();
  const saveUser = (e)=>{
      e.preventDefault() ;
      var task ={email:email,first_name:fname, phoneNumber:phone ,password:pass ,last_name:lname}
      UserService.create(task).then((Response) => {
      console.log(Response.data)
      navigate('/list'); }).catch(error=> {
          console.log(error.name)
      })
  }

  return (
    <div className="Auth-form-container">
    <form className="Auth-form" style={{width: "700px" ,height:"700px"}}>
      <div className="Auth-form-content"style={{width: "700px" ,height:"700px"}}>
        <h3 className="Auth-form-title">Sign Up</h3>
        <div className="text-center">
          Already registered?{" "}
          <a className="link-primary" href="signin" >
            Sign In
          </a>
        </div>
        <div className="form-group mt-3">
          <label>First Name</label>
          <input
           value={fname}
           onChange={(e)=>setFname(e.target.value)}
            type="text"
            className="form-control mt-1"
            placeholder="Your first name"
          />
        </div>

        <div className="form-group mt-3">
          <label>Last Name</label>
          <input
           value={lname}
           onChange={(e)=>setLname(e.target.value)}
            type="text"
            className="form-control mt-1"
            placeholder="Your last name"
          />
        </div>

        <div className="form-group mt-3">
          <label>Phone Number</label>
          <input
           value={phone}
           onChange={(e)=>setPhone(e.target.value)}
            type="text"
            className="form-control mt-1"
            placeholder="Your phone number"
          />
        </div>
        <div className="form-group mt-3">
          <label>Email address</label>
          <input
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
            type="email"
            className="form-control mt-1"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group mt-3">
          <label>Password</label>
          <input
           value={pass}
           onChange={(e)=>setPass(e.target.value)}
            type="password"
            className="form-control mt-1"
            placeholder="Password"
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary" onClick={(e)=>saveUser(e)} >
            Submit
          </button>
        </div>
       
      </div>
    </form>
  </div>
  )
}

export default Signup