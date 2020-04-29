import React from 'react'
import { Progress } from 'reactstrap'

export const AboutStats = () => {
    return <div className="about-stats">
    <p className="about-stats-skills-title">HTML/CSS</p> 
    <p className="about-stats-percentage">90%</p> 
    <Progress value='90'color="orange"/>
    <p className="about-stats-skills-title">Web Design</p>
    <p className="about-stats-percentage">75%</p> 
    <Progress value='75'color="orange"/>
    <p className="about-stats-skills-title">UI/UX Design</p>
    <p className="about-stats-percentage">60%</p> 
    <Progress value='60'color="orange"/>
    <p className="about-stats-skills-title">Architecture Backend</p>
    <p className="about-stats-percentage">70%</p> 
    <Progress value='70'color="orange"/>
    <p className="about-stats-skills-title">Secure Applications</p>
    <p className="about-stats-percentage">60%</p> 
    <Progress value='60'color="orange"/>
    </div>
}