import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { click } from '@testing-library/user-event/dist/click';

export default function EditUser() {
    let Navigate=useNavigate()
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:""
    })
    const {id}=useParams()
    const {name,username,email}=user
    const oninputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user)
    };
    useEffect (()=>{
        loadUser();
    },[]);
    const onSubmit= async(e)=>{
       e.preventDefault();
       await axios.put(`http://localhost:8080/user/${id}`,user)
       Navigate("/")

    }
    const loadUser=async ()=> {
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }
    const ClickCancel=()=>{
      Navigate ("/")
    }
  return (
    <div className="Container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor='Name' className="form-label">Name:</label>
            <input type={"text"} className="form-control" placeholder="enter your name" name="name"value={name}onChange={(e)=>oninputChange(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor='username' className="form-label">Username:</label>
            <input type={"text"} className="form-control" placeholder="enter your username" name="username" value={username} onChange={(e)=>oninputChange(e)}/>
          </div>
          <div className="mb-3">
            <label htmlFor='Email' className="form-label">Email:</label>
            <input type={"text"} className="form-control" placeholder="enter your email" name="email" value={email} onChange={(e)=>oninputChange(e)}/>
          </div>
          <div className="text-center"> {/* Added text-center class */}
            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
            
          </div>
          </form>
        </div>
      </div>
    </div>
  );
}
