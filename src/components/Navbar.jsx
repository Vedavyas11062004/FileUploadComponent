import React from 'react'
import '../styles/navbarStyles.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img src="./logo.svg" alt="logo.." />
      <div className='rightPart' style={{color : 'white'}}>
        dropdown
      </div>
    </div>
  )
}

export default Navbar
