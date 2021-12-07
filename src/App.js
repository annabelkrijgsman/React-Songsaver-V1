import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import SongOverview from './Components/SongOverview'

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
  );
}

function About() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
    </>
  );
}

export default App;
