import React, { useState } from 'react';
import ViewSong from '../../Components/ViewSong/ViewSong';
import SongCard from '../../Components/SongCard/SongCard';
import './ViewSongPage.css';

type Props = {};

const ViewSongPage = (props: Props) => {
  const [fetchedSong, setFetchedSong] = useState<any>(null);

  return (
    <div className="viewSongPage">
      <ViewSong onSongFetched={setFetchedSong} />

      {fetchedSong && <SongCard song={fetchedSong} />}
    </div>
  );
};

export default ViewSongPage;
