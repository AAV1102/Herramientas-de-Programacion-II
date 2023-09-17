import React from 'react'
import { useEffect } from 'react'
import './Home.css'
import imagen from '../../assets/perfilA.jpg'

import AOS from 'aos'
import 'aos/dist/aos.css'

function Home() {
  useEffect (
    ()=> {
      AOS.init({duration:2000});
    },[])
  return (
    <>
     <div data-aos="fade-right" id='home' className='container'>
      <section className='nombres'>
        <h1>I´m Anderson Ayala Vera</h1>
        <h1>Web developer</h1>

        <p>Passionate, creative programmer with efficient solutions. Welcome</p>

        <a href='#'>
          <button>Contactame</button>
        </a>
      </section>

      <section className='imagen'>
        <img src={imagen}></img>
      </section>
    </div>
    </>
  )
}

export default Home