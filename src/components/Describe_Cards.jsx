import React from 'react'

export default function Card({image, title, content}) {
    return (
        <div className='describe-container'>
            <div className='describe-content'>
                <h2>{title}</h2>
                {content}
                <button className='describe-button'>Get Started</button>
            </div>
            <img alt='' src={image} className='describe-image'/>
        </div>
    )
}
