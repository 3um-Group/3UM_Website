import React from 'react'
import topImage from '../assets/1BF9F1D4-C54E-479F-946F-A0BA0CC09547 1.png'

export default function Introduce() {
    return (
        <div className='introduce'>
            <img alt='' src={topImage} className='introduce-image'/>
            <h1 className='introduce-title'>Humanizing Technology</h1>
            <span className='introduce-pargraph'>3UM is <span style={{color: 'darkblue'}}>reimagining</span> how people, businesses, and companies interact with technology like <span className='special-words'>Web3, AI, Quantum</span>, and more</span>
            <button className='introduce-button'>Get Involved</button>

        </div>
    )
}
