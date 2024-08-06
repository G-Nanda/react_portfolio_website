import React, { useState, useEffect } from 'react';
import '../../index.css';
import './nav.css';
import { MdBusinessCenter } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { MdHome } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    // Intersection Observer options
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    // Intersection Observer callback
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          console.log(`Section ${id} is intersecting`); // Debugging line
          setActiveNav(`#${id}`);
        }
      });
    };

    // Create an Intersection Observer instance
    const observer = new IntersectionObserver(handleIntersection, options);

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup function to disconnect the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav>
      <a href='#home' onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><MdHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUser /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookOpen /></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><MdBusinessCenter /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoChatbubbleEllipsesSharp /></a>
    </nav>
  );
};

export default Nav;












// import React from 'react'
// import { useState } from 'react';
// import '../../index.css';
// import './nav.css';
// import { MdBusinessCenter } from "react-icons/md";
// import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
// import { MdHome } from "react-icons/md";
// import { FaBookOpen } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";;



// const Nav = () => {

//   const[activeNav,setActiveNav]=useState('#')
//   return (
//     <nav>
//         <a href='#' onClick={()=>setActiveNav('#')}  className={activeNav==='#' ? 'active':''}><MdHome/></a>
//         <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><FaUser/></a>
//         <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><FaBookOpen/></a>
//         <a href='#projects' onClick={()=>setActiveNav('#projects')} className={activeNav==='#projects' ? 'active':''}><MdBusinessCenter/></a>
//         <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><IoChatbubbleEllipsesSharp/></a>
//     </nav>
//   )
// }

// export default Nav

