import React from 'react'

function SongList(songs) {
    return (
        <table>
            <thead>
                <tr>  
                    <th>Song</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {Object.values(songs.songs).map(song => {
                    return (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                            <td>{song.rating}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SongList