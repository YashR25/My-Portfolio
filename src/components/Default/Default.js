import React from 'react'
import Navigation from '../Navigation/Navigation'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import Projects from '../Projects/Projects'
import About from '../About/About'

function Default() {
  return (
    <div>
        <div className="App">
            <Navigation />
            <Home />
            <Skills />
            <hr style={{border: '1px solid darkslategray'}}/>
            <Projects />
            <hr style={{border: '1px solid darkslategray'}}/>
            <About />
            <p style={{color: 'gray', fontSize: '0.8rem'}}>Design & built by Yash Radneria</p>
        </div>
    </div>
  )
}

export default Default