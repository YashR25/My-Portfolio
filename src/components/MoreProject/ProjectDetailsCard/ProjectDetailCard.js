import React from 'react'
import {AiOutlineFolder, AiFillGithub} from 'react-icons/ai'
import './ProjectDetailCard.css'

function ProjectDetailCard(props) {
  return (
    <div className='Main-Container'>
        <div className="project-card-container">
            <div className="project-header">
                <AiOutlineFolder style={{fontSize: '3rem'}}/>
                <a target={'_blank'} href={props.project.github} className='git-link'><AiFillGithub style={{color: 'lightgray'}}/></a>
            </div>
            <div className="project-body">
                <h3>{props.project.title}</h3>
                <p>{props.project.desc}</p>
            </div>
            <div className="project-footer">
                {
                    props.project.languages.map((language) => {
                        return (
                            <p>{language}</p>
                        )
                    })
                }
            </div>
        </div>

    </div>
  )
}

export default ProjectDetailCard