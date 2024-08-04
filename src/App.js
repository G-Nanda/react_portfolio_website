
import './App.css';
import './index.css'
import Project from './components/projects/project';
import Home from './components/Home/home';
import Experience  from './components/Experience/experience';
import Skill from './components/Skills/skill';
import Contact from './components/contact/contact';
import Nav from './components/nav/nav';
import React from 'react'

const App = () => {
  return (
    <div className='.container'>
      {/* <Home />
      <Skill/> */}
      <Nav />
      {/* <Experience/>
      <br></br>
      <br></br>
      <br></br>*/}
      <Experience/>
      <Project /> 
      {/* <Contact/> */}
    </div>
  )
}

export default App