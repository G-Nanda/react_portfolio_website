import React from 'react'
import { useState } from 'react';
import '../../index.css';
import './nav.css';
import { MdBusinessCenter } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";;



const Nav = () => {

  const[activeNav,setActiveNav]=useState('#')
  return (
    <nav>
        <a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}><MdHome/></a>
        <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><FaUser/></a>
        <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><FaBookOpen/></a>
        <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects' ? 'active':''}><MdBusinessCenter/></a>
        <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><IoChatbubbleEllipsesSharp/></a>
    </nav>
  )
}

export default Nav

