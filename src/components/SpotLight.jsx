import React from 'react'

export default function SpotLight() {

    const data = [
        { id: 1, image: 'image1.jpg' },
        { id: 2, image: 'image2.jpg' },
        { id: 3, image: 'image3.jpg' },
        { id: 4, image: 'image1.jpg' },
        { id: 5, image: 'image2.jpg' },
        { id: 6, image: 'image3.jpg' },
        { id: 7, image: 'image1.jpg' },
        { id: 8, image: 'image2.jpg' },
        { id: 9, image: 'image3.jpg' },
        { id: 10, image: 'image1.jpg' },
        { id: 11, image: 'image2.jpg' },
        { id: 12, image: 'image3.jpg' },
    ];

    const displayData = data.map((item) => {
        return(<div className='spotLight' key={item.id}>
            {`image ${item.id}`}
        </div>)
    })

    return (
        <div className='spotLights'>
            <h2 className='spotLight-title'>In The Spotlight</h2>
            <div className='spotLight-container'>
                {displayData}

            </div>
        </div>

    )
}
