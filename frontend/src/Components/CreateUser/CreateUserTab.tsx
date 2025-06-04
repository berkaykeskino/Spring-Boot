import axios from 'axios';
import React, { useState } from 'react';
import "./CreateUserTab.css";

type Props = {}

const CreateUserTab = (props: Props) => {
  const [userData, setLoginData] = useState({
    _firstName: "",
    _lastName: "",
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


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        console.log(userData);
      const response = await axios.post("http://localhost:8080/api/user", userData);

      // Optional: handle token only if backend returns it
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
      }
      console.log("user created");

    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className='page-bg'>
      <form onSubmit={handleSubmit} className='input-container'>

        <div className="input-item">
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

        <div className="input-item">
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
};

export default CreateUserTab;
