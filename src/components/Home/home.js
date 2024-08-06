import React from "react";
import Earth from './earth';

import '../About/About.css';
import { useTypewriter } from "react-simple-typewriter";
import CV from '../../assets/images/Resume.pdf';


export default function Home(){
    const [text] = useTypewriter({
        words: [
          "Technophile",
          "Professional Coder",
          "FullStack Developer",
          "IOT Explorer",
        ],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 8,
        delaySpeed: 2000,
      });

      
    return(
        <section id="home" className="home">
            <div className="home-left">
                <h1>HELLO FOLKS!</h1>
                <h2> It's ME <span>NANDA    G</span></h2>
                
                <h4>And I'm a <span>{text}</span></h4>
                <div className="buttons">
                <a href={CV} download className="btn primary">MY RESUME</a>
                <a href="#contact" className="btn white">Let's Talk</a>
                
                </div>
                
            </div>
            <div><Earth /></div>
            

        </section>
    )
}