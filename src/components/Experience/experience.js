import React from "react";
import { useState,useEffect } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";
import data from './data';
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './experience.css';

export default function Experience() {
    const [selectedCategory, setSelectedCategory] = useState("Education");

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const filteredData = data.filter((element) => element.category === selectedCategory);


    return (
        <section id="experience">
            <div className="box">

                <h2>MY JOURNEY</h2>
                <h1 >Discover My Expedition in Academia and the Digital Realm</h1>
            </div>
            
                
            
            <div className="experience__categories">
                <a className={`btn cat__btn ${selectedCategory === "Education" ? "active" : ""}`} onClick={() => handleCategoryChange("Education")}>
                    
                    Education
                </a>
                <a className={`btn cat__btn ${selectedCategory === "Work" ? "active" : ""}`} onClick={() => handleCategoryChange("Work")}>
                    Work
                </a>
            </div>
            <VerticalTimeline>
                {filteredData.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            className="vertical-timeline-element--education"
                            iconStyle={{ background: "#4db5ff", color: "#fff" }}
                            icon={
                                element.category === "Education" ? (
                                    <FaGraduationCap />
                                ) : (
                                    <BsBriefcaseFill />
                                )
                            }
                            contentStyle={{ background: "#2c2c6c" }}
                            date={element.date}
                        >
                            <h4>{element.organization}</h4>
                            <br />
                            <h5 className="light-text">{element.title}</h5>
                            <ul className="list">
                                {element.desc.map((point, index) => (
                                    <li className="list-item" key={index}>
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </section>
    );
}


// export default function Experience(){
//     return(
//         <section id="experience">
//             <h2>Experiene</h2>
//             <VerticalTimeline>
//                 {
//                     data.map(element=>{
//                         let isWork=element.category==="work";
                    
//                         return(
//                             <VerticalTimelineElement 
//                                 key={element.id}
//                                 className="vertical-timeline-element--education"
//                                     iconStyle={{ background: "#4db5ff", color: "#fff" }}
//                                     icon={
//                                         element.category === "Education" ? (
//                                         <FaGraduationCap />
//                                         ) : (
//                                         <BsBriefcaseFill />
//                                         )
//                                     }
//                                     contentStyle={{ background: "#2c2c6c" }}
//                                     date={element.date}
//                             >
//                                     <h4>{element.organization}</h4>
//                                     <br />
//                                     <h5 className="light-text">{element.title}</h5>
//                                     <ul className="list">
//                                         {element.desc.map((point, index) => (
//                                         <li className="list-item" key={index}>
//                                             {point}
//                                         </li>
//                                         ))}
//                                     </ul>
//                             </VerticalTimelineElement>
//                         )
//                     })
//                 }
//             </VerticalTimeline>
            
//         </section>
//     )
// }