import React, { useState } from "react";
import './projects.css';
import data from './data';
import '../../index.css';
import ReactCardFlip from 'react-card-flip';

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState('Web App');
  const [flippedCards, setFlippedCards] = useState({}); // Track flipped state of each card

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setFlippedCards({}); // Reset all flips on category change
  };

  const flipCard = (id) => {
    setFlippedCards(prevFlippedCards => ({
      ...prevFlippedCards,
      [id]: !prevFlippedCards[id] // Toggle the flip state of the specific card
    }));
  };

  const filteredData = data.filter(project => project.category === selectedCategory);

  return (
    <section id="projects">
      <div className="box">
        <h2>My Works</h2>
      </div>

      <div className="experience__categories">
        {['Web App', 'Mobile App'].map(category => (
          <a
            key={category}
            className={`btn cat__btn ${selectedCategory === category ? "active" : ""}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="container project_container">
        {filteredData.map((project) => (
          <ReactCardFlip
            key={project.id}
            flipDirection="horizontal"
            isFlipped={flippedCards[project.id] || false} // Check if the card is flipped
          >
            <article className="project_item" onClick={() => flipCard(project.id)}>
            <div className="project_item-image">
                 <img src={project.image} alt={project.title} />
                 </div>
              <h3>{project.title}</h3>
              <div className="project_item-cta">
                 <a
                     href={project.github}
                     className="btn"
                     target="_blank"
                     rel="noopener noreferrer">
                     GitHub
                 </a>
                 <a
                     href={project.demo}
                     className="btn btn-primary"
                     target="_blank"
                     rel="noopener noreferrer">
                     Demo
                 </a>
                 </div>
              
              
              
            </article>
            <article className="project_item" onClick={() => flipCard(project.id)}>
            <div className="project_item-image">
                 <img src={project.image} alt={project.title} />
                 </div>
              <p className="project_desc">{project.desc}</p>
            </article>
          </ReactCardFlip>
        ))}
      </div>
    </section>
  );
}

