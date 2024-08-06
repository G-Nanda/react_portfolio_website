
import './App.css';
import './index.css'
import Project from './components/projects/project';
import Home from './components/Home/home';
import Experience  from './components/Experience/experience';
import Footer from './components/Footer/footer';
import Contact from './components/contact/contact';
import Nav from './components/nav/nav';
import React from 'react'
import About from './components/About/about';

const App = () => {
  return (
    <div className='.container'>
      <Home/>
      <Nav />
      <About/>
      <Experience/>
      <Project /> 
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App