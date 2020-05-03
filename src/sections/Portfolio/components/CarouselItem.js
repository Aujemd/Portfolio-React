import React from 'react'
import Yasuo from '../../../assets/Yasuo.jpg'
export const CarouselItem = props => {
    const {image, title, link, text} = props
    return <div className="portfolio-carousel-item rounded">
        <img className="portfolio-carousel-item-image rounded" src={image || Yasuo}/>
        <a className="portfolio-carousel-item-title" href={link}>{title || 'Yasuo'}</a>
        <p className="portfolio-carousel-item-text">{text || 'Yasuo'}</p>
    </div>
}