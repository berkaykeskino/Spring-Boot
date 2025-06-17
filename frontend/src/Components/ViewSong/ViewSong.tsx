import axios from 'axios';
import React, { useState } from 'react'
import "./ViewSong.css"

type Props = {}

const ViewSong = (props: Props) => {
    const [songData, setSongData] = useState({ songId: '' });
    const [fetchedSong, setFetchedSong] = useState(null);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSongData({
        ...songData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      try {
        const response = await axios.get(`http://localhost:8080/api/song/${songData.songId}`);
        console.log('Song got:', response.data);
        setFetchedSong(response.data);
      } catch (error) {
        console.error('Error getting song:', error);
      }
    };
  
    return (
      <>
        <form onSubmit={handleSubmit} className="vs-input-container">
          <div className="input-item">
            <label htmlFor="songId">Song ID:</label>
            <input
              type="text"
              id="songId"
              name="songId"
              value={songData.songId}
              onChange={handleChange}
              className="input-text"
            />
          </div>
  
          <button className="vs-submit-button" type="submit">
            Get Song
          </button>
        </form>
  
        {fetchedSong && (
          <div className="song-result">
            <h3>Fetched Song:</h3>
            <pre>{JSON.stringify(fetchedSong, null, 2)}</pre>
          </div>
        )}
      </>
    );
};

export default ViewSong