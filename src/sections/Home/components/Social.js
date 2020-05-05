import React, {useEffect} from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

export const Social = () => {

    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return <div className="home-social" data-aos="fade-up">
        <ul>
            <li><a href="https://www.facebook.com/jemd1999"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://twitter.com/johanEmd"><i className="fab fa-twitter"></i></a></li>
            <li><a href="https://www.instagram.com/jemdu99/"><i className="fab fa-instagram"></i></a></li>
            <li><a href="https://www.linkedin.com/in/johan-mora-925421197/"><i className="fab fa-linkedin-in"></i></a></li>
        </ul>
    </div>
}