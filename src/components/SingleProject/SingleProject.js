import React from 'react'
import '../SingleProject/SingleProject.css'
import {AiOutlineRight} from 'react-icons/ai'
import {AiFillGithub, AiFillLinkedin, AiFillCodepenCircle, AiFillYoutube, AiOutlineMail} from 'react-icons/ai'
import {TbExternalLink} from 'react-icons/tb'

function SingleProject(props) {
  return (
    <div>
        <div className="single-project">
            <div className="project-image-container">
                <img className="project-image" src={props.image} alt="dummy-img" />
            </div>
            <div className='project-desc'>
              <h3>{props.title}</h3>
                <p>{props.text}</p>
                  {/* <div className="more-button">
                    <p>More About Project</p>
                    <AiOutlineRight />
                  </div> */}
                <div className="link-container">
                  <a target={'_blank'} href={props.github}><AiFillGithub className='link'/></a>
                  <a target={'_blank'} href={props.redirect}><TbExternalLink className='link'/></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleProject