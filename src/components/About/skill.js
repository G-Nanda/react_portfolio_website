// Skills.js
import React from 'react';
import data from './data';
import './About.css';

const Skills = () => {
  const frontendSkills = data.filter(skill => skill.category === "Frontend");
  const backendSkills = data.filter(skill => skill.category === "Backend");

  return (
    <div className="skills-section">
      <div className="skill-card">
        <h2>Frontend Skills</h2>
        <div className="skills-grid">
          {frontendSkills.map(skill => (
            <div key={skill.id} className="skill-item">
              <img src={skill.icon} alt={skill.title} className="skill-icon" />
              <h2>{skill.title}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="skill-card">
        <h2>Backend Skills</h2>
        <div className="skills-grid">
          {backendSkills.map(skill => (
            <div key={skill.id} className="skill-item">
              <img src={skill.icon} alt={skill.title} className="skill-icon" />
              <h2 className='skill-title'>{skill.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
