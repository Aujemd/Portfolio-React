import React from 'react'
import Yasuo from '../../../assets/Yasuo.jpg'
export const CarouselItem = () => {
    return <div className="portfolio-carousel-item rounded">
        <img className="portfolio-carousel-item-image" src={Yasuo}/>
        <a className="portfolio-carousel-item-title" href='#'>Yasuo</a>
        <p className="portfolio-carousel-item-text">Yasuo</p>
    </div>
}