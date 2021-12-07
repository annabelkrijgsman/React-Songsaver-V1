import React, {Component} from 'react'
import SongForm from './SongForm'
import SongList from './SongList'

class SongOverview extends Component {
    constructor() {
      super()
      this.state = {
        songs: []
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

    render() {
      return (
        <div>
            <SongForm addSong={this.addSong}/>
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