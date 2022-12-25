import React, { useEffect, useRef, useState } from 'react'
import './Navigation.css'
import { FaStream } from "react-icons/fa";
import styled from "styled-components";
import {Drawer} from 'antd'
import {AiOutlineClose} from 'react-icons/ai'

function Navigation() {

  const [clicked,setClicked] = useState(false);
  const [state, setState] = useState(0)

  const navRef = useRef();
  const ulRef = useRef();


  const showDrawer = () => {
    setClicked(true);
  }

  const onClose = () => {
    setClicked(false)
  }

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navRef.current.style.top = "0";
    } else {
      navRef.current.style.top = "-150px";
    }
    prevScrollpos = currentScrollPos;
  }

  // function handleNavClick(){
  //   setClicked(!clicked)
  //   if(clicked){
  //     ulRef.current.style.display = "flex";
  //   }else{
  //     ulRef.current.style.display = "none";
  //   }
    
  // }

 

  // window.addEventListener("resize",() => {
  //     setState(window.innerWidth)
  // })

  // if(state > 600){
  //   ulRef.current.style.display = "flex";

  // }



  return (
    <nav ref={navRef}>
      <Drawer title={<p className="title-style">Yash Randeria</p>} 
      placement='right' 
      onClose={onClose} 
      open={clicked} 
      style={{backgroundColor: '#0a192fbb', backdropFilter: 'blur(10px)'}}
      closeIcon={<AiOutlineClose style={{color: 'white'}}/>}>
        <div className='drawer-body'>
        <a href='#home' className='nav-text'><p>01. </p>Home</a>
        <a href='#skills'className='nav-text'><p>02. </p>Skills</a>
        <a href='#work' className='nav-text'><p>03. </p>Work</a>
        <a href='#about' className='nav-text'><p>04. </p>About</a>
        <a target={'_blank'} href='YashResume.pdf' className='button'>Resume</a>
        </div>
      </Drawer>
      <div className="nav-container">
        <a href='#home'><img className='logo-image' src="logo.png" alt="Logo Image" /></a>
        <ul ref={ulRef}>
          <li><a href='#home' className='nav-text'><p>01. </p>Home</a></li>
          <li><a href='#skills'className='nav-text'><p>02. </p>Skills</a></li>
          <li><a href='#work' className='nav-text'><p>03. </p>Work</a></li>
          <li><a href='#about' className='nav-text'><p>04. </p>About</a></li>
          <a target={'_blank'} href='YashResume.pdf'><li className='button'><a>Resume</a></li></a>
        </ul>
        <p onClick={showDrawer} className='nav-icon'>
          {/* {(clicked) ? <FaStream /> : <AiOutlineClose /> } */}
          <FaStream />
        </p>
      </div>
    </nav>
  )
}

export default Navigation