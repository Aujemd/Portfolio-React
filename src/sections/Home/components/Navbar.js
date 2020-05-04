import React from 'react'
import Logo from './SvgComponent'

export const Navbar = () => {
    return<div className="home-navbar">
        <ul>
        <li><Logo/></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
    </ul>
    </div>
}