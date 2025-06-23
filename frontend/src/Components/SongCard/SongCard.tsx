
import React from 'react';
import './SongCard.css';

interface SongCardProps {
  song: any;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  return (
    <div className="song-card">
      <h3>{song.title}</h3>
      <p><strong>User:</strong> {song._userFirstName + " "+ song._userLastName}</p>
      <p><strong>Publish Date:</strong> {song._publishDate}</p>
      <p><strong>Lyrics:</strong>
        <div className="lyrics-box">
            {song._lyrics}
        </div>
      </p>
    </div>
  );
};

export default SongCard;