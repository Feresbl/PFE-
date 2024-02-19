import axios from 'axios';
import React, { useState } from 'react'

export default function Search() {
    const [userId,setUserId]=useState('');
    const [userData,setUserData]=useState(null);
    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/user/${userId}`);
            setUserData(response.data);
        } catch (error) {
            setUserData("usernotfound");
        }
    }

    return (
        <div className="container">
            <div>
                <div className="text-center">
                <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter a user Id" />
                <button onClick={handleSearch}>Search</button></div>
                {userData && (
                    <div className="row">
                        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                            <h2 className="text-center m-4">User Details</h2>
                            <div className="mb-3">
                                <label htmlFor='Name' className="form-label">Name:</label>
                                <input type="text" readOnly className="form-control" placeholder="Enter your name" name="name" value={userData.name} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='username' className="form-label">Username:</label>
                                <input type="text" readOnly className="form-control" placeholder="Enter your username" name="username" value={userData.username} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor='Email' className="form-label">Email:</label>
                                <input type="text" readOnly className="form-control" placeholder="Enter your email" name="email" value={userData.email} />
                            </div>
                        </div>
                    </div>
                )}
                
            </div>
        </div>
    );
}
