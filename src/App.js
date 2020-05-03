import React from 'react'
import {Home} from './sections/Home/containers/Home'
import {About} from './sections/About/containers/About'
import {Services} from './sections/Services/containers/Services'
import {Portfolio} from './sections/Portfolio/containers/Portfolio'
import {Footer} from './sections/Footer/containers/Footer'

import './sass/App.scss';
export const App = () => {
    return <>
    <Home />
    <About/>
    <Services/>
    <Portfolio/>
    <Footer/>
    </>
}