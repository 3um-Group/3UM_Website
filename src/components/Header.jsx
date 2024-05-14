import React from 'react'
import logo from '../assets/IMG_0701 1.png'

export default function Header() {
    return (

        <div className='header-top'>
            <img src={logo} className='logoImage' alt='' />
            <div className='header-right'>
                <span className='header-word'>Company</span>
                <span className='header-word'>Ecosystem</span>
                <span className='header-word'>Community</span>
                <span className='header-word'>Resource</span>
            </div>

        </div>

    )
}
