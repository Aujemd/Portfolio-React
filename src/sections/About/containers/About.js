import React, {useEffect} from 'react'
import {Content} from '../components/Content'
import {Stats} from '../components/Stats'
import Aos from "aos"
import 'aos/dist/aos.css'
import img from '../../../assets/undraw_about_me_wa29.svg'

export const About = () =>{
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return<div className="about-container" id="about">
        <img src={img}className="about-hero" data-aos="fade-right"/>
        <Content/>
        <Stats/>
    </div>
}