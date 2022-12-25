import React from 'react'
import '../MoreProject/MoreProject.css'
import SingleProject from '../SingleProject/SingleProject'
import ProjectDetailCard from './ProjectDetailsCard/ProjectDetailCard'

const projectsList = [
  {
    title: 'Running Tracker Android App',
    desc: 'The Project was to build an android app to track the running base on user location and show a user proper chart based data of their track. It was built upon an android studio with the kotlin language.',
    languages: ['Kotlin'],
    github: 'https://github.com/YashR25/WeatherApp'
  },
  {
    title: 'Weather Forecast App',
    desc: ' The Project was to build an android app that displays the weather forecast of chosen city. It was built using jetpack compose, MVVM clean architecture, Retrofit, dagger hilt, Room libraries',
    languages: ['Kotlin', 'Jetpack Compose'],
    github: 'https://github.com/YashR25/WeatherApp'
  },
  {
    title: 'Simple Pdf Scanner App',
    desc: 'The project was to build an android app that let users scan the images and convert them to pdf. It was built using kotlin, MVVM clean architecture, Room and third party scanner library.',
    languages: ['Kotlin', 'Jetpack Compose'],
    github: 'https://github.com/YashR25/PdfScanner'
  },
  {
    title: 'Netflix Home Page Clone',
    desc: 'Built simple Netflix home page clone using vanila html & css.',
    languages: ['Html', 'CSS'],
    github: 'https://github.com/YashR25/netflix-home-page-clone'
  },
  {
    title: 'Linkedin Home Page Clone',
    desc: 'Built simple Linkedin home page clone using vanila html & css.',
    languages: ['Html', 'CSS'],
    github:'https://github.com/YashR25/LinkedinHomePage'
  },
  {
    title: 'Cart Page',
    desc: 'Built a simple cart functionality page using react and redux library ',
    languages: ["React"],
    github:'https://github.com/YashR25/React-Redux-Card-Example'
  }
]

function MoreProject() {
  return (
    <div>
      <h1 className='more-project-title'>Android</h1>
      <div className="more-project-container">
        <ProjectDetailCard project={projectsList[0]} />
        <ProjectDetailCard project={projectsList[1]}/>
        <ProjectDetailCard project={projectsList[2]}/>
      </div>

      <hr />

      <h1 className='more-project-title'>Web</h1>
      <div className="more-project-container">
      <ProjectDetailCard project={projectsList[3]}/>
      <ProjectDetailCard project={projectsList[4]}/>
      <ProjectDetailCard project={projectsList[5]}/>
      </div>
      
    </div>
  )
}

export default MoreProject