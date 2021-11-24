import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="App-header">
            <p><strong>Robbins Drums</strong></p>
            <NavLink 
                exact to='/' 
                className="main-nav"
                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                Home
            </NavLink>
            <NavLink 
                exact to='/instruments' 
                className="main-nav"
                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                Instruments
            </NavLink>
            <NavLink 
                exact to='/brands' 
                className="main-nav"
                style={({ isActive }) => ({ color: isActive ? 'black' : 'white' })}>
                Brands
            </NavLink>
        </div>
    )
}

export default Navbar
