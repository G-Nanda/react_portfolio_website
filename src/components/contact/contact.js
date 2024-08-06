import React from "react";
import Emailform from "./Emailform";
import './contact.css';
import '../../index.css';
import ContactSocial from './contactSocial';
import { MdMailOutline } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";



export default function Contact(){

    const recipientEmail = 'nandag2203@gmail.com';
  
  // Generate mailto link with only recipient
    const mailtoLink = `mailto:${recipientEmail}`;
    return(
      
       <section id="contact">
            <div className="box">
                <h2>Contact Me</h2>
            </div>
        <div className="contact-content">
            <div className="contact-left">
                <ContactSocial/>
            </div>
            <div className="contact-right">
                <div className="right-top">
                    <div className="mail_phone">
                        <a href={mailtoLink}><MdMailOutline/></a>
                        <h2>nandag2203@gmail.com</h2>
                    </div>
                    <div className="mail_phone">
                        <a><FaPhone/></a>
                        <h2>9344492308</h2>
                    </div>

                </div>

                <Emailform />
            </div>
        </div>
       </section>
    )
}