import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <span>Header component</span>
        <ul>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/service">Service</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </ul>
    </div>
  )
}

export default Header