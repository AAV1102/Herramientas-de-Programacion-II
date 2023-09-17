import React from 'react'
import './Skill.css'

function Skill(props) {
  return (
    <div className='skill'>
        <img src={props.imagen}></img>
        <p>{props.text}</p>
    </div>
  )
}

export default Skill