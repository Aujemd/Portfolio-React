import React, {useEffect} from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import Aos from "aos"
import 'aos/dist/aos.css'

export const Stats = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, [])

    return<div className="about-list" data-aos="fade-left">
         <ListGroup>
          <ListGroupItem className="about-list-item"><i className="mr-2 fas fa-check-circle about-list-icon"></i> HTML/CSS</ListGroupItem>
          <ListGroupItem className="about-list-item"><i className="mr-2 fas fa-check-circle about-list-icon"></i> Web Design</ListGroupItem>
          <ListGroupItem className="about-list-item"><i className="mr-2 fas fa-check-circle about-list-icon"></i> UI/UX Design</ListGroupItem>
          <ListGroupItem className="about-list-item"><i className="mr-2 fas fa-check-circle about-list-icon"></i> Backend Architecture</ListGroupItem>
          <ListGroupItem className="about-list-item"><i className="mr-2 fas fa-check-circle about-list-icon"></i> Secure Applications</ListGroupItem>
        </ListGroup>
    </div>


}