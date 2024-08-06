import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";

const contactSocial = () => {
  return (
    <div className='social-icons'>
        <a href="https:linkedin.com/in/nanda-g-163812231" target="_blank"><FaLinkedin/></a>
        <a href="https://x.com/NandaG2203?t=9C0Qs65A2allCCo3eumUFg&s=09" target='_blank'><FaXTwitter/></a>
        <a href="https://web.whatsapp.com/" target='_blank'><FaWhatsapp/></a>
        
        
    </div>
  )
}

export default contactSocial