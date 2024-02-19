import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
export default function ViewUser() {
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
    })
 
    const {id}=useParams();
    useEffect (()=>{loadUserData();},[])
    const loadUserData  =async() =>{
  const result=await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
    
    }
  return (
    <div >
        
        <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Register User</h2>
          <form o>
          <div className="mb-3">
            <label htmlFor='Name' className="form-label">Name:</label>
            <input type={"text"}  readOnly className="form-control" placeholder="enter your name" name="name"value={user.name}/>
          </div>
          <div className="mb-3">
            <label htmlFor='username' className="form-label">Username:</label>
            <input type={"text"} readOnly className="form-control" placeholder="enter your username" name="username" value={user.username} />
          </div>
          <div className="mb-3">
            <label htmlFor='Email' className="form-label">Email:</label>
            <input type={"text"} readOnly className="form-control" placeholder="enter your email" name="email" value={user.email}/>
          </div>
          <div className="text-center"> {/* Added text-center class */}
          
            
          </div>
          </form>
        </div>
    </div>
    </div>
  )
}
