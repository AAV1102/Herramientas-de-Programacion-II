import React from 'react'

import wp from '../../assets/wordpress.png'
import css from '../../assets/css.png'

import './Project.css'

function Projects(props) {
  return (
    <div className='project'>
        <h2>{props.title}</h2>
        <div className='container_image'>
            <img src={props.imagen}></img>
        </div>
        <div className='container_descripcion'>
            <p>{props.text}</p>
            <p>Hecha con:</p>
            <div className='logos'>
                <img src={wp}></img>
                <img src={css}></img>
            </div>
            <a href={props.link}>
                <button>Visitar pagina</button>
            </a>
        </div>
    </div>
  )
}

export default Projects