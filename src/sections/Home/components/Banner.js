import React from 'react'
import {Social} from './Social'

export const Banner = () => {
    return <div className="home-banner">
        <Social/>
        <div className="home-banner-content">
            <h2 className="home-banner-salute">Hello I'm</h2>
            <h1 className="home-banner-name">Johan Mora</h1>
            <p className="home-banner-title">Web Developer</p>
            <p className="home-banner-text">Frontend and Backend for all types of projects and applications.</p>
            <a href='#' className="home-banner-button rounded">Contact Me</a>
        </div>
    </div>
}