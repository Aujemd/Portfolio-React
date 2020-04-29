import React from 'react'
import {AboutContent} from '../components/AboutContent'
import {AboutStats} from '../components/AboutStats'

export const About = () =>{
    return<div className="about-container">
        <div className="about-hero"></div>
        <AboutContent/>
        <AboutStats/>
    </div>
}