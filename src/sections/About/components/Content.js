import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

export const Content = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <div className="about-content" data-aos="fade-left">
    <h2 className="about-content-subtitle">About</h2>
    <h1 className="about-content-title">Why You Hire Me?</h1>
    <p className="about-content-text">I'm Web developer in progress with management of Fronted and Backend Technologies. Knowledge in
    the creation and layout of web pages with user friendly interactive design.</p>
</div>
}