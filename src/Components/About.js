import React from 'react'
import { Link } from "react-router-dom"
import Image from '../stock-photo.jpg'

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

export default About

