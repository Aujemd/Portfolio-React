import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

export const Content = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])
    return <div className="about-content" data-aos="fade-left">
    <h2 className="about-content-subtitle">About</h2>
    <h1 className="about-content-title">Why Should You Hire Me?</h1>
    <p className="about-content-text">I'm a Web developer in progress, with management of Frontend and Backend Technologies. Knowledge on creation and layout of web pages with user friendly interactive design.</p>
</div>
}