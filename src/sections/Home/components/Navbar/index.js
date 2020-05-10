import React, {useEffect, useState} from 'react'
import Logo from '../SvgComponent'
import {NavContainer, NavUl, NavLi, NavA, MainUl} from './styles'


export const Navbar = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false)
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

    const toggleMenu = () => {
        let flag = isMenuVisible
        flag = !flag
        setIsMenuVisible(flag)
    }

    const renderNav = (fixed) => (
    <NavContainer fixed={fixed}>
        <MainUl>
            <i className="fas fa-bars home-navbar-button" onClick={toggleMenu}></i>
            <Logo className="home-navbar-brand"/>
            <NavUl isMenuVisible={isMenuVisible}>
            <NavLi><NavA href="#home" className="home-navbar-link" fixed={fixed}>Home</NavA></NavLi>
            <NavLi><NavA href="#about" className="home-navbar-link" fixed={fixed}>About</NavA></NavLi>
            <NavLi><NavA href="#services" className="home-navbar-link" fixed={fixed}>Services</NavA></NavLi>
            <NavLi><NavA href="#portfolio" className="home-navbar-link" fixed={fixed}>Portfolio</NavA></NavLi>
            </NavUl>
        </MainUl>
    </NavContainer>
    )

    return(
        <>
        {renderNav()}
        {showFixed && renderNav(true)}
        </>
    )
}