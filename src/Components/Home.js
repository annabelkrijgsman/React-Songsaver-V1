import React from 'react'
import { Link } from "react-router-dom"
import SongOverview from './SongOverview'

function Home() {
    return (
      <>
        <nav>
          <Link to="./about">About</Link>
        </nav>
        <main>
          <SongOverview />
        </main>
      </>
    )
  }

  export default Home