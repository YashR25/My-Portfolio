import React from 'react'
import './About.css'
import {AiFillGithub, AiFillLinkedin, AiFillCodepenCircle, AiFillYoutube, AiOutlineMail} from 'react-icons/ai'

function About() {
  return (
    <div id='about'>
        <h1 className='about-title'>About</h1>
        <div className="about-container">
            <div className="about-text">
            <p>
            I am Full Stack Android developer.I will develop an android app for you using Java/Kotlin/Jetpack Compose.I can work with third party api, firebase or any other third party libarary.I will develop your app using best modern practices like MVVM clean architecture.I can also develop apps with jetpack compose that google recently introduced.I will develop any android app with great performance, High quality and bug free and well structured code writing.
            </p>
            <div className="link-container">
              <a target={'_blank'} href='https://github.com/YashR25'><AiFillGithub className='link'/></a>
              <a target={'_blank'} href='https://www.linkedin.com/in/yash-randeria-b72323210/'><AiFillLinkedin className='link'/></a>
              <a target={'_blank'} href='https://codepen.io/YashR25'><AiFillCodepenCircle className='link'/></a>
              <a target={'_blank'} href='https://www.youtube.com/@androidcodingtime8747'><AiFillYoutube className='link'/></a>
              <a href='mailto:yashranderia1999@gmail.com'><AiOutlineMail className='link'/></a>
            </div>
            </div>
            <div className="image-container">
                <img className="profile-image" src='YashProfile.jpeg'  alt='Profile Image'/>
            </div>
        </div>
    </div>
  )
}

export default About