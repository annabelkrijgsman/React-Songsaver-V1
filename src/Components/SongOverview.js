import React, {Component} from 'react'
import SongForm from './SongForm'
import SongList from './SongList'
import SortSongs from './SortSongs'

class SongOverview extends Component {
    constructor() {
      super()
      this.state = {
        songs: [
            {id: 1, title: 'Christmas Sweater', artist: 'Michael Buble', genre: 'Christmas', rating: 5},
            {id: 2, title: 'Changes', artist: 'Tupac', genre: 'Hiphop', rating: 5}
        ]
      }
    }

    addSong = () => {
        let title = document.getElementById('title').value
        let artist = document.getElementById('artist').value
        let genre = document.getElementById('genre').value
        let rating = document.getElementById('rating').value

        this.setState(previousState => ({
            songs: [
                ...previousState.songs,
                {title: title, artist: artist, genre: genre, rating: rating}
            ]
        }))
    }

    sortByAscending = () => {
        let sortedAsceding = this.state.songs.sort((a, b) => {
            return a.artist.localeCompare(b.artist)
        })
        this.setState({
            songs: sortedAsceding
        })
    }

    sortByDescending = () => {
        let sortedDesceding = this.state.songs.sort((a, b) => {
            return b.artist.localeCompare(a.artist)
        })
        this.setState({
            songs: sortedDesceding
        })
    }

    render() {
      return (
        <div>
            <SongForm addSong={this.addSong}/>
            <SortSongs sortByAscending={this.sortByAscending} sortByDescending={this.sortByDescending}/>
            <table style={{width: "100%", textAlign: "left"}}>
                <thead>
                    <tr className="song-header">  
                        <th className="song-row__item">Song</th>
                        <th className="song-row__item">Artist</th>
                        <th className="song-row__item">Genre</th>
                        <th className="song-row__item">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    <SongList songs={this.state.songs}/>
                </tbody>
            </table>
        </div>
      );
    }
  }
  
  export default SongOverview;