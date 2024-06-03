'use client'
import React from 'react'
import leaderShip from '@/public/assets/leadership.png';
import products from '@/public/assets/products.png';
import app from '@/public/assets/app.png'
import Card from '@/components/Card';
import logo from '@/public/assets/IMG_0701 1.png'

const Media = () => {
    const [media, setMedia] = React.useState(0);
    return (
        <>
            {/*Mobile */}
            <div className='sm:hidden flex flex-row justify-between gap-4 mt-10 p-x-10'>
                <div className={`${media === 0 ? 'text-blue-500' : ''} opacity-75 cursor-pointer text-center`} onClick={() => { setMedia(0) }}>Make an Impact</div>
                <div className={`${media === 1 ? 'text-blue-500' : ''} opacity-75 cursor-pointer`} onClick={() => { setMedia(1) }}>Equity</div>
                <div className={`${media === 2 ? 'text-blue-500' : ''} opacity-75 cursor-pointer text-center`} onClick={() => { setMedia(2) }}>Financial Rewards</div>
            </div>
            <div className='sm:hidden flex flex-row justify-center my-5'>
                {
                    media === 0 &&
                    <Card
                        image={leaderShip}
                        Symbol={logo}
                        typeOfSymbol='image'
                        title='LeaderShip'
                        content='Text text more text and more, more text. More text and more, more text more text and more, more text...'
                        date=''
                        mobile={true}

                    />
                }
                {
                    media === 1 &&
                    <Card
                        image={products}
                        Symbol={logo}
                        typeOfSymbol='image'
                        title='Products'
                        content='Text text more text and more, more text. More text and more, more text more text and more, more text...'
                        date=''
                        mobile={true}

                    />
                }
                {
                    media === 2 &&
                    <Card
                        image={app}
                        Symbol={logo}
                        typeOfSymbol='image'
                        title='Apps'
                        content='Text text more text and more, more text. More text and more, more text more text and more, more text...'
                        date=''
                        mobile={true}

                    />
                }
            </div>

            {/*Desktop */}
            <div className='sm:flex hidden flex-row justify-around w-4/5'>
                <Card
                    image={leaderShip}
                    Symbol={logo}
                    typeOfSymbol='image'
                    title='LeaderShip'
                    content='Text text more text and more, more text. More text and more, more text more text and more, more text...'
                    date=''
                    mobile={false}

                />

                <Card
                    image={products}
                    Symbol={logo}
                    typeOfSymbol='image'
                    title='Products'
                    content='Text text more text and more, more text. More text and more, more text more text and more, more text...'
                    date=''
                    mobile={false}

                />

                <Card
                    image={app}
                    Symbol={logo}
                    typeOfSymbol='image'
                    title='Apps'
                    content='Text text more text and more, more text. More text and more, more text more text and more, more text...'
                    date=''
                    mobile={false}

                />
            </div>
        </>
    )
}

export default Media