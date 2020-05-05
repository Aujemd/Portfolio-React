import React from 'react'
import {Card} from '../components/Card'

export const Services = () => {
    return <div className="services-container" id="services">
      <div className="services-titles">
        <h2 className="services-subtitle">Services</h2>
        <h1 className="services-title">Services I Provide</h1>
      </div>
      <div className="services-cards">
          <Card title={'Frotend Development'}
          text = {'Complete development of your page or app on modern technologies for can see it in the web.'}
          icon = {<i className="fas fa-code"></i>}
          />
          <Card title={'Web Design'}
          text={'Creation, layout and implementation of your website.'}
          icon = {<i className="far fa-object-group"></i>}
          />
          <Card title={'UI/UX'}
          text = {'Design and features to get the best performance and interactivity of your applications.'}
          icon = {<i className="far fa-star"></i>}
          />
          <Card title={'Backend Development'}
          text={'Complete development of backend of your applications.'}
          icon = {<i className="fas fa-project-diagram"></i>}

          />
          <Card title={'Secure applications'}
          text={'Implemented of modern protocols to make your applications more secure.'}
          icon = {<i className="fas fa-unlock-alt"></i>}
          />
          <Card title={'Mobile Applications'}
          text={'Design and creations of your web applications in React Native for mobile.'}
          icon = {<i className="fas fa-mobile-alt"></i>}
          />
      </div>
    </div>
}