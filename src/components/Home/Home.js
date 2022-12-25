import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Header() {
  return (
    <div id='home'>
      <div className='home-container'>
          <p style={{color: '#64ffda'}}>Hi, my name is</p>
          <h1 className='title-text'>Yash Randeria.</h1>
          <h1 className='subtitle-text'>I build things for the web & android.</h1>
          <p className='description-text'>I am a software engineer specializing in building web and android application.</p>
          <Link style={{textDecoration: 'none'}} to='/projects'><p className='button'>Check out My Projects !</p></Link>
      </div>
    </div>
    
  )
}

export default Header