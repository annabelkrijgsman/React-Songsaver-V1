import React from 'react'
import { Routes, Route, Link } from "react-router-dom"
import SongOverview from './Components/SongOverview'
import Image from './stock-photo.jpg'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  )
}

function Home() {
  return (
    <>
      <nav>
        <Link to="/about">About</Link>
      </nav>
      <main>
        <h1>Songsaver</h1>
        <SongOverview />
      </main>
    </>
  )
}

function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <div className="about">
        <h2>Who am I?</h2>
        <p>
          My name is Annabel. Currently I am following the Winc Acamdemy Full-stack Development course. So far I have had HTML5, CSS3, JavaScript and right now I am practicing React.
          For React I had to build this Songsaver. Hope you enjoy!
        </p>
        <img src={Image} alt="Girl Coding" />
      </div>
    </>
  )
}

export default App
