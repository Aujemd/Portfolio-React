import React, {useEffect, useState} from 'react'
import Logo from '../SvgComponent'
import {NavContainer, NavUl, NavLi, NavA} from './styles'


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
        <NavLi><NavA href="#home" className="home-navbar-link" fixed={fixed}><Logo/></NavA></NavLi>
        <NavLi><NavA href="#home" className="home-navbar-link" fixed={fixed}>Home</NavA></NavLi>
        <NavLi><NavA href="#about" className="home-navbar-link" fixed={fixed}>About</NavA></NavLi>
        <NavLi><NavA href="#services" className="home-navbar-link" fixed={fixed}>Services</NavA></NavLi>
        <NavLi><NavA href="#portfolio" className="home-navbar-link" fixed={fixed}>Portfolio</NavA></NavLi>
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