import React from 'react'
import {Navbar} from '../components/Navbar'
import {Banner} from '../components/Banner'

export const Home = () => {
    return<div className="home-container">
        <Navbar/>
        <div className="home-hero"/>
        <div className="home-skew"/>
        <Banner/>
        <div className="home-social"/>
    </div>
}