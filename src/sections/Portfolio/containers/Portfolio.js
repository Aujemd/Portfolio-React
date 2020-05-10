import React from 'react'
import Slider from "react-slick";
import {CarouselItem} from '../components/CarouselItem'
import platzivideo from '../../../assets/Platzivideo.png'
import ticketSystem from '../../../assets/TicketSystem.png'
import smartphones from '../../../assets/Smartphones.png'
import product from '../../../assets/Product.png'
import restaurant from '../../../assets/restaurant.png' 
import petgram from '../../../assets/petgram.png'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FF703F", borderRadius: '40px'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#FF703F", borderRadius: '40px'}}
        onClick={onClick}
      />
    );
  }

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    cssEase: "ease-out",
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>
  };

export const Portfolio = () => {
    return <div className="portfolio-container" id="portfolio">
        <div className="portfolio-titles">
            <h2 className="portfolio-subtitle text-orange">Portfolio</h2>
            <h1 className="portfolio-title">Latest Projects</h1>
        </div>
        <div className="portfolio-carousel">
            <Slider {...settings} className="portfolio-carousel-slider">
                <CarouselItem image={restaurant} title={'Your Restaurant'} link={'https://aujemd.github.io/Your-Restaurant/'} text={'Web Design - HTML/CSS'} index={1}/>
                <CarouselItem image={smartphones} title={'Smartphones Page'} link={'https://aujemd.github.io/Website-smartphones/'} text={'Web Design - HTML/CSS'} index={2}/>
                <CarouselItem image={product} title={'Book Page'} link={'https://aujemd.github.io/Website-Product/'} text={'Web Design - HTML/CSS'} index={3}/>
                <CarouselItem image={platzivideo} title={'PlatziVideo'} link={'https://platzi-video-topaz.now.sh/'} text={'Fronted Development - React.js'}index={4}/>
                <CarouselItem image={petgram} title={'Petgram'} link={'https://petgram-tan-nu.now.sh/'} text={'Fronted Development - React.js'}index={5}/>
                <CarouselItem image={ticketSystem} title={'Ticket System'} link={'https://app-system-of-tickets.herokuapp.com/'} text={'Backend Development - HTML/PHP'}index={6}/>
            </Slider>
        </div>
    </div>
}