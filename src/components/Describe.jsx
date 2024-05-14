import React from 'react'
import imageExport from '../exportAssets/imageExport'
import Card from './Describe_Cards';

export default function Describe() {
    const [sectionNum, setSectionNum] = React.useState(0);

    return (
        <div className='describe'>
            <h2>Step Into the Internet of Tomorrow</h2>
            <div className='jump-button'>
                <div onClick={() => { setSectionNum(0) }} style={{ cursor: 'pointer', opacity: sectionNum === 0 ? 1 : 0.5 }}>3UM Finance</div>
                <div onClick={() => { setSectionNum(1) }} style={{ cursor: 'pointer', opacity: sectionNum === 1 ? 1 : 0.5 }}>3UM Genesis</div>
                <div onClick={() => { setSectionNum(2) }} style={{ cursor: 'pointer', opacity: sectionNum === 2 ? 1 : 0.5 }}>ABQ Protocol</div>
            </div>

            {sectionNum === 0 &&
                <Card
                    image={imageExport.image3}
                    title='3UM Finance'
                    content=' 3UM Finance simplifies finance by combining traditional, decentralized, and digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />
            }

            {sectionNum === 1 &&
                <Card
                    image={imageExport.image1}
                    title='3UM Genesis'
                    content=' 3UM Finance simplifies finance by combining traditional, decentralized, and digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />}

            {sectionNum === 2 &&
                <Card
                    image={imageExport.image}
                    title='ABQ Protocol'
                    content=' 3UM Finance simplifies finance by combining traditional, decentralized, and digital financial tools in one platform. It allows users to easily manage, create, and invest in various financial products using the latest in blockchain and AI technology.'
                />}

        </div>
    )
}
