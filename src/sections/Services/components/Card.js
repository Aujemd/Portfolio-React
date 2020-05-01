import React from 'react'

export const Card = props => {

    const {title, text, icon} = props

    return <div className="services-card shadow-lg rounded">
        {icon || <i className="fas fa-code"></i>}
        <p className="services-card-title">{title || 'Frontend Development'}</p>
        <p className="services-card-text">{text || 'Complete development of your page or app on web technologies for can see it in the web'}</p>
    </div>
}