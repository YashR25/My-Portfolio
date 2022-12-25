import React from 'react'
import './Projects.css'

import {AiOutlineRight} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import SingleProject from '../SingleProject/SingleProject'

function Projects() {
  return (
    <div id='work'>
      <h1 className='project-title'>Projects</h1>
      <div className="show-case">
        <div className="show-case-text">
          <h2 style={{color: 'var(--heading-text-color)'}}>Weather Forecast App</h2>
          <p> The Project was to build an android app that 
              displays the weather forecast of chosen city. It was built using jetpack 
              compose, MVVM clean architecture, Retrofit, dagger hilt, Room libraries.
          </p>
        </div>
        <img className='show-case-image' src='androidMobile.png' alt="andorid" />
      </div>
        <div className="projects-container">
              <SingleProject image='linkedIn.PNG' text='A Simple single page linkedin Home page clone buit using vanila HTML & CSS' github='https://github.com/YashR25/LinkedinHomePage' redirect='https://linkedinhome.netlify.app/' title='Linkedin Home Page Clone'/>
              <SingleProject image='Netflix.JPG' text='A Simple single page Netflix home page clone buit using vanila HTML & CSS' github='https://github.com/YashR25/netflix-home-page-clone' redirect='https://netflix-homepageclone.netlify.app/' title='Netflix Home Page Clone'/>
              <SingleProject image='Cart.jpg' text='A Simple single page Cart buit using React.' github='https://github.com/YashR25/netflix-home-page-clone' redirect='https://netflix-homepageclone.netlify.app/' title='Cart Page'/>

        </div>
      <Link to='/projects' style={{textDecoration: 'none'}}>
        <div className="button">
          <p>More Projects</p>
          <AiOutlineRight />  
        </div>
      </Link>  
    </div>
  )
}

export default Projects