import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaCode } from "react-icons/fa";
import './About.css';
const Social = () => {
  return (
    <div className='about_social'>
        <a href="https:linkedin.com/in/nanda-g-163812231" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/G-Nanda" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/u/NANDA__G/" target="_blank"><SiLeetcode/></a>
        <a href="https://www.skillrack.com/faces/resume.xhtml?id=352668&key=894032e84e62149a65d002bea560b07be682bcdd" target='_blank'><FaCode/></a>
    </div>
  )
}

export default Social