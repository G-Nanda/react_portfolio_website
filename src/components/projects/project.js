import React, { useState } from "react";
import './projects.css';
import data from './data';
import '../../index.css';

export default function Project() {
  const [selectedCategory, setSelectedCategory] = useState('Web App');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredData = data.filter(project => project.category === selectedCategory);

  return (
    <section id="projects">
      <div className="box">
        <h2>My Works</h2>
      </div>

      <div className="experience__categories">
        <button
          className={`btn cat__btn ${selectedCategory === "Web App" ? "active" : ""}`}
          onClick={() => handleCategoryChange("Web App")}
        >
          Web App
        </button>
        <button
          className={`btn cat__btn ${selectedCategory === "Mobile App" ? "active" : ""}`}
          onClick={() => handleCategoryChange("Mobile App")}
        >
          Mobile App
        </button>
      </div>

      <div className="container project_container">
        
        {filteredData.map((project) => (
          <article className="project_item" key={project.id}>
            <div className="front">
            <div className="project_item-image">
              <img src={project.image} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            
            <div className="project_item-cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
            </div>
            <div className="back">
                <p>
                    {project.desc}
                </p>
            </div>
          </article>
        ))}
      </div>
     
      
      
    </section>
  );
}





// import React from "react";
// import IMG from '../../assets/images/BMI.png';
// import './projects.css';
// import data from './data';
// import '../../index.css';

// export default function Project(){
//     return (
//         <section id="projects">
//             <div className="box">
//                 <h2>My Works</h2>
                
//             </div>

            
//         <div className="container project_container">
//             {data.map((project) => (
//             <article className="project_item" key={project.id}>
//                 <div className="project_item-image">
//                 <img src={project.image} alt={project.title} />
//                 </div>
//                 <h3>{project.title}</h3>
//                 <p>{project.desc}</p>
//                 <div className="project_item-cta">
//                 <a
//                     href={project.github}
//                     className="btn"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     GitHub
//                 </a>
//                 <a
//                     href={project.demo}
//                     className="btn btn-primary"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                 >
//                     Demo
//                 </a>
//                 </div>
//             </article>
//             ))}
//       </div>
            
            
//         </section>
//     )
// }