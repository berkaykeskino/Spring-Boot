import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
//import "./LoginForm.css"

type Props = {}

const LoginForm = (props: Props) => {
  const [userData, setLoginData] = useState({
    _email: "",
    _password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...userData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", userData);
        
      // Optional: handle token only if backend returns it
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      console.log("login successful");
      navigate("/");

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className='page-bg'>
      <form onSubmit={handleSubmit} className='input-container'>

        <div className="input-item">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="_email"
            value={userData._email}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div className="input-item">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="_password"
            value={userData._password}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <button className='submit-button' type="submit">Create User</button>
      </form>
    </div>
  );
}

export default LoginForm