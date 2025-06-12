import axios from 'axios';
import React, { useState } from 'react';
import "./CreateUserTab.css";
import { useNavigate } from 'react-router-dom';

type Props = {}

const CreateUserTab = (props: Props) => {
  const [userData, setSignupData] = useState({
    _firstName: "",
    _lastName: "",
    _email: "",
    _password: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData({
      ...userData,
      [name]: value
    });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        console.log(userData);
      const response = await axios.post("http://localhost:8080/api/auth/register", userData);

      // Optional: handle token only if backend returns it
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      console.log("user created");
      navigate("/login");

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
      <form onSubmit={handleSubmit} className='su-input-container'>

        <div className="su-input-item">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="_firstName"
            value={userData._firstName}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div className="su-input-item">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="_lastName"
            value={userData._lastName}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div className="su-input-item">
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

        <div className="su-input-item">
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

        <button className='su-submit-button' type="submit">Create User</button>
      </form>
  );
};

export default CreateUserTab;
