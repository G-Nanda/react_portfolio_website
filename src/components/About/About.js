import React, { useState } from "react";
import "./About.css";
import Social from './social';
import Skills from './skill';

export default function About() {
  const [activeSection, setActiveSection] = useState("Skills");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };


  return (
    <section id="about">
        <div className="box">
          <h2>ABOUT ME</h2>
        
      

          <div className="about_categories">
          <button
            className={`btn cat__btn ${activeSection === "Skills" ? "active" : ""}`}
            onClick={() => handleSectionChange("Skills")}
          >
            Skills
          </button>
          <button
            className={`btn cat__btn ${activeSection === "AboutMe" ? "active" : ""}`}
            onClick={() => handleSectionChange("AboutMe")}
          >
            About Me
          </button>
          
        </div>
        </div>


        <div className="about_data">
        <div> 
          <Social/>
        </div>

        <div className="about_content">
        
          {activeSection === "AboutMe" && (
            <div className="about_me"> 
            <h1>ABOUT ME</h1>
              <h4>Versatile Developer and Engineer proficient in C, SQL, Python, HTML, and CSS. Skilled in Flutter for mobile and web app development.Aspiring IOT Developer and Passionate about leveraging technology to solve real-world problems.I’m an inquisitive person to enrich myself with new technologies.</h4>
              <h1>ACHIEVEMENTS</h1>
              <span>1. Second Runner-up in National Level Hackathon</span>
              <h4> Organized by Cybrom Technologies, Bhopal. Led a team in the development of a Mobile Application using Flutter, integrating a sophisticated ML model for Smart Crop Fertilizer suggestion and Crop Disease Detection in the Theme of Smart Agriculture.</h4>
            </div>
          )}

          {activeSection === "Skills" && (
            <div className="about_skills">
              <Skills/>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
