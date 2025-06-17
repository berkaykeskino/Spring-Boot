import React from 'react'
import CreateSong from '../../Components/CreateSong/CreateSong'
import "./CreateSongPage.css"

type Props = {}

const CreateSongPage = (props: Props) => {
  return (
    <div className='createSongPage'>
        <CreateSong/>
    </div>
  )
}

export default CreateSongPage