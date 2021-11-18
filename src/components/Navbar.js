import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="App-header">
            <p>Robbins' Drums</p>
            <NavLink 
                exact to='/' 
                className="main-nav"
                activeClassName="main-nav-active">
                Home
            </NavLink>
            <NavLink 
                exact to='/instruments' 
                className="main-nav"
                activeClassName="main-nav-active">
                Shop
            </NavLink>
            <NavLink 
                exact to='/contact' 
                className="main-nav"
                activeClassName="main-nav-active">
                Contact
            </NavLink>
        </div>
    )
}

export default Navbar
