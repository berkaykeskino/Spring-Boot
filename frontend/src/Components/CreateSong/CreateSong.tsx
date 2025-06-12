import axios from 'axios';
import React, { useState } from 'react'
import "./CreateSong.css"

type Props = {}

const CreateSong = (props: Props) => {
    const [songData, setSongData] = useState({
        _songId : "",
        _publishDate: "",
        _lyrics: "",
        _user: ""
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSongData({
          ...songData,
          [name]: value
        });
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {

            

            const payload = {
                _lyrics: songData._lyrics,
                _publishDate: songData._publishDate,
                _user: {
                  _id: songData._user
                }
              };

              console.log(payload);

          const response = await axios.post("http://localhost:8080/api/song/create", payload);
            
          // Optional: handle token only if backend returns it
          if (response.data.token) {
            localStorage.setItem('token', response.data.token);
          }
          console.log("song created");
    
        } catch (error) {
          console.error("Error creating song:", error);
        }
      };

  return (
    <div className='page-bg'>
      <form onSubmit={handleSubmit} className='input-container'>

        <div className="input-item">
          <label htmlFor="email">User:</label>
          <input
            type="text"
            id="email"
            name="_user"
            value={songData._user}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div className="input-item">
          <label htmlFor="password">Lyrics:</label>
          <input
            type="text"
            id="a"
            name="_lyrics"
            value={songData._lyrics}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <div className="input-item">
          <label htmlFor="password">Publish Date:</label>
          <input
            type="text"
            id="b"
            name="_publishDate"
            value={songData._publishDate}
            onChange={handleChange}
            className="input-text"
          />
        </div>

        <button className='submit-button' type="submit">Create User</button>
      </form>
    </div>
  )
}

export default CreateSong