import React from 'react'
import {Content} from '../components/Content'
import {Stats} from '../components/Stats'

export const About = () =>{
    return<div className="about-container" id="about">
        <div className="about-hero"></div>
        <Content/>
        <Stats/>
    </div>
}