import React from 'react'

function nav(props) {
  return (
    <div id= "navbar"><nav>
    <ul>
      <li><a href="#about" onClick= {(e) => {e.preventDefault(); props.setPage("about")}}>About</a></li>
      <li><a href="#projects" onClick= {(e) => {e.preventDefault(); props.setPage("projects")}}>Projects</a></li>
      <li><a href="#resume" onClick= {(e) => {e.preventDefault(); props.setPage("resume")}}>Resume</a></li>
      <li><a href="#contact" onClick= {(e) => {e.preventDefault(); props.setPage("contact")}}>Contact</a></li>
    </ul>
  </nav></div>
  )
}

export default nav