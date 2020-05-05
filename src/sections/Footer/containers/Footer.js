import React from 'react'
import Logo from '../../Home/components/SvgComponent'
import {Link} from 'react-scroll'

export const Footer = () => {
    return <div className="footer-container">
        <a href="#"><Logo/></a>
        <ul className="footer-social">
            <li><a href="https://www.facebook.com/jemd1999"className="footer-social-item"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/johanEmd"className="footer-social-item"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/jemdu99/"className="footer-social-item"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/johan-mora-925421197/"className="footer-social-item"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
        <h1 className="footer-email">joenmodu99@gmail.com</h1>
        <ul className="footer-nav">
        <li><a href='#' className="footer-nav-item"><Link smooth={true} duration={3000} to="home">Home</Link></a></li>
        <li><a href='#' className="footer-nav-item"><Link smooth={true} duration={3000} to="about">About</Link></a></li>
        <li><a href='#' className="footer-nav-item"><Link smooth={true} duration={3000} to="services">Services</Link></a></li>
        <li><a href='#' className="footer-nav-item"><Link smooth={true} duration={3000} to="portfolio">Portfolio</Link></a></li>
        </ul>
    <p className="footer-firm">Developed by <a href='https://github.com/Aujemd'>@Aujemd</a></p>
    </div>
}