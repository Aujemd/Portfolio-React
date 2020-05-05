import React, {useEffect} from 'react'
import {Banner} from '../components/Banner'
import img from '../../../assets/undraw_portfolio_website_lidw.svg'
import Aos from "aos"
import 'aos/dist/aos.css'

export const Home = () => {

    useEffect(() => {
        Aos.init({duration: 3000})
    }, [])

    return<div className="home-container" id="home">
        <img src={img} className="home-hero" data-aos="fade-up"/>
        <div className="home-skew"/>
        <Banner/>
    </div>
}