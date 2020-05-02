import React from 'react'
import {Carousel} from '../components/Carousel'

export const Portfolio = () => {
    return <div className="portfolio-container">
        <div className="portfolio-titles">
            <h2 className="portfolio-subtitle text-orange">Portfolio</h2>
            <h1 className="portfolio-title">Lastest Projects</h1>
        </div>
        <Carousel/>
        <div className="portfolio-controls">
            <a href="#"><i className="fas fa-angle-left"></i></a>
            <a href="#"><i className="fas fa-angle-right"></i></a>
        </div>
    </div>
}