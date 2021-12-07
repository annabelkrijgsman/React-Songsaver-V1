import React, {Component} from 'react'
import SongForm from './SongForm'
import SongList from './SongList'
import SortSongs from './SortSongs'

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

        let nextId = this.getNextId(this.state.songs)
        this.setState(previousState => ({
            songs: [
                ...previousState.songs,
                {id: nextId, title: title, artist: artist, genre: genre, rating: rating}
            ]
        }))
    }

    getNextId = (mySongs) => {
        let highestId = 0;
        mySongs.forEach(song => {
            if (song.id > highestId) {
                highestId = song.id
            }
        })
        const nextId = highestId + 1
        return nextId
    }

    sortByAscending = () => {
        let sortedAsceding = this.state.songs.sort((a, b) => {
            return a.title.localeCompare(b.title)
        })
        this.setState({
            songs: sortedAsceding
        })
    }

    sortByDescending = () => {
        let sortedDesceding = this.state.songs.sort((a, b) => {
            return b.title.localeCompare(a.title)
        })
        this.setState({
            songs: sortedDesceding
        })
    }

    render() {
      return (
        <section>
            <SongForm addSong={this.addSong}/>
            <SortSongs sortByAscending={this.sortByAscending} sortByDescending={this.sortByDescending}/>
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
                    <SongList songs={this.state.songs}/>
                </tbody>
            </table>
        </section>
      )
    }
  }
  
  export default SongOverview