import React from 'react'
import './Skills.css'
import { FaReact } from 'react-icons/fa';
import {TbBrandAndroid} from 'react-icons/tb'

function Skills() {
  return (
    <div id='skills'>
        <h1 className='skills-title'>My Skills</h1>
        <div className='skills-container'>
            <div className="skill-box">
                <div className="single-skill">
                    <div className="icon-text">
                        <FaReact className='icon'/>
                        <h2 className='text'>Front End Developer React</h2>
                    </div>
                    <div className="desc-text">
                        <p>&lt;h3&gt;</p>
                        <p className='desc'>Skilled in developing FrontEnd website. Experience in HTML, CSS, JS, React.</p>
                        <p>&lt;h3&gt;</p>
                    </div>
                </div>
                <div className="single-skill">
                    <div className="icon-text">
                        <TbBrandAndroid className='icon'/>
                        <h2 className='text-android'>Android Developer</h2>
                    </div>
                    <div className="desc-text">
                        <p>&lt;h3&gt;</p>
                            <p className='desc'>Skilled in developing Android Application using Java, Kotlin & Jetpack Compose.</p>
                        <p>&lt;h3&gt;</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Skills