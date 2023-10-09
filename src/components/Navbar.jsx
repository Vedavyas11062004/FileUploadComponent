import React from 'react'
import '../styles/navbarStyles.css'
import Dropdown from './Dropdown'

function Navbar() {
  return (
    <div className='navbar'>
      <img src="./logo.svg" alt="logo.." />
      <div className='rightPart' style={{color : 'white'}}>
        <Dropdown/>
      </div>
    </div>
  )
}

export default Navbar
