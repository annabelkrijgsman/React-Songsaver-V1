import React from 'react'

function SongForm(props) {
    return (
        <div className="add-song-form">
            <input 
                type="text"
                placeholder="Title"
                id="title"
            />
            <input 
                type="text"
                placeholder="Artist"
                id="artist"
            />
            <input 
                type="text"
                placeholder="Genre"
                id="genre"
            />
            <input 
                type="number"
                placeholder="Rating"
                id="rating"
            />
            <button onClick={props.addSong}>Add Song</button>
        </div>
    )
}

export default SongForm