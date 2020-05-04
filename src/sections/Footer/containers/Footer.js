import React from 'react'
import Logo from '../../Home/components/SvgComponent'

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
        <li><a href="#" className="footer-nav-item">Home</a></li>
        <li><a href="#" className="footer-nav-item">About</a></li>
        <li><a href="#" className="footer-nav-item">Services</a></li>
        <li><a href="#" className="footer-nav-item">Portfolio</a></li>
        </ul>
    <p className="footer-firm">Developed by <a href='https://github.com/Aujemd'>@Aujemd</a></p>
    </div>
}