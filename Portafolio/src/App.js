import { useEffect } from 'react'
import './App.css';
import Home from './components/Homee/Home';
import Nav from './components/NavBar/Nav';
import Projects from './components/Projects/Projects';
import Skill from './components/Skills/Skill';

import HTML from './assets/html.png'
import CSS from './assets/css.png'
import GIT from './assets/git.png'
import MYSQL from './assets/icons8-logo-de-mysql-244.png'
import JS from './assets/js.png'
import WP from './assets/wordpress.png'
import C from './assets/Csharp_Logo.png'
import React from './assets/react.png'

import IPUC from './assets/ipuc.png'
import BIBLIA from './assets/bibliatodo.png'
import Contact from './components/Contact/Contact';

import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {
  useEffect (
    ()=> {
      AOS.init({duration:2000});
    },[])
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <section data-aos="fade-right" className='projects' id='projects'>
        <h1>My Projects </h1>
        <div className='projectss'>
          <Projects 
            title = 'IPUC'
            text = 'Este proyecto es una página informativa para la iglesia pentecostal unida de colombia' 
            imagen = {IPUC}
            link = 'https://ipuc.org.co/'
          />
          <Projects 
            title = 'BIBLIATODO'
            text = 'Este proyecto es una página donde puedes ver las ultimas noticias cristianas y la biblia' 
            imagen = {BIBLIA} 
            link = 'https://www.bibliatodo.com/es'
          />
        </div>
      </section>
      <section data-aos="fade-right" className='skills' id='skills'>
        <h1>My Skills</h1>
        <div>
          <Skill text = 'HTML' imagen = {HTML} />
          <Skill text = 'CSS' imagen = {CSS} />
          <Skill text = 'JavaScript' imagen = {JS} />
          <Skill text = 'Git' imagen = {GIT} />
          <Skill text = 'Mysql' imagen = {MYSQL} />
          <Skill text = 'WordPress' imagen = {WP} />
          <Skill text = 'C#' imagen = {C} />
          <Skill text = 'React' imagen = {React} />
        </div>
      </section>
      <section className='contacto'>
        <Contact></Contact>
      </section>
    </div>
  );
}

export default App;
