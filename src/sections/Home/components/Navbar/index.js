import React, {useEffect, useState} from 'react'
import Logo from '../SvgComponent'
import {NavContainer, NavUl, NavLi, NavA} from './styles'
import {Link} from 'react-scroll'


export const Navbar = () => {

    const [showFixed, setShowFixed] = useState(false)

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 10
            showFixed !== newShowFixed && 
            setShowFixed(newShowFixed)
        }

        document.addEventListener('scroll', onScroll)

        return () => document.removeEventListener('scroll', onScroll)
    }, [showFixed])

    const renderNav = (fixed) => (
    <NavContainer fixed={fixed}>
        <NavUl>
        <NavLi><NavA href="#" className="home-navbar-link" fixed={fixed}><Link smooth={true} duration={3000} to="home"><Logo/></Link></NavA></NavLi>
        <NavLi><NavA href="#" className="home-navbar-link" fixed={fixed}><Link smooth={true} duration={3000} to="home">Home</Link></NavA></NavLi>
        <NavLi><NavA href="#" className="home-navbar-link" fixed={fixed}><Link smooth={true} duration={3000} to="about">About</Link></NavA></NavLi>
        <NavLi><NavA href="#" className="home-navbar-link" fixed={fixed}><Link smooth={true} duration={3000} to="services">Services</Link></NavA></NavLi>
        <NavLi><NavA href="#" className="home-navbar-link" fixed={fixed}><Link smooth={true} duration={3000} to="portfolio">Portfolio</Link></NavA></NavLi>
    </NavUl>
    </NavContainer>
    )

    return(
        <>
        {renderNav()}
        {showFixed && renderNav(true)}
        </>
    )
}