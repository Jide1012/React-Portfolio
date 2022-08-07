import React from 'react'
import Nav from './Nav'


function Header(props) {
  return (
    <header>
      <h1>Jide Adesanya</h1>
  
  <Nav setPage={props.setPage}/>
    </header>
  )
}

export default Header