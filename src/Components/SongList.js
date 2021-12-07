import React from 'react'

function SongList(songs) {
    return (
        Object.values(songs.songs).map(song => {
            return (
                <tr key={song.id}>
                    <td>{song.title}</td>
                    <td>{song.artist}</td>
                    <td>{song.genre}</td>
                    <td>{song.rating}</td>
                </tr>
            )
        })
    )
}

export default SongList