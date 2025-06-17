import React from 'react'
import ViewSong from '../../Components/ViewSong/ViewSong'
import "./ViewSongPage.css"

type Props = {}

const ViewSongPage = (props: Props) => {
  return (
    <div className='viewSongPage'>
        <ViewSong/>
    </div>
  )
}

export default ViewSongPage