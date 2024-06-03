'use client'

import web3 from '@/public/assets/web3.png'
import AI from '@/public/assets/Ai.png';
import Quantum from '@/public/assets/Quantum.png';

import Image from 'next/image';
import React from 'react';


const ProductCard = ({ content, title, image, mobile }: { content: string, title: string, image: any, mobile: boolean }) => {

    return (
        <div className={`${mobile ? 'w-3/4':'w-1/4'} text-center flex flex-col border border-blue-200 rounded-lg pt-3`}>
            <span >{content}</span>
            <div className='text-gradient text-2xl font-bold mt-auto'> {title}</div>
            <Image alt='produce' src={image} className='mt-auto' />
        </div>

    )
}

const Product = () => {
    const [selectPost, setSelectPost] = React.useState(0);

    return (
        <>
            {/*Mobile Version */}
            <div className='sm:hidden flex flex-row justify-between gap-8 mt-10'>
                <div className={`${selectPost===0? 'text-blue-500':''} opacity-75 cursor-pointer`} onClick={()=>{setSelectPost(0)}}>Web3</div>
                <div className={`${selectPost===1? 'text-blue-500':''} opacity-75 cursor-pointer`} onClick={()=>{setSelectPost(1)}}>AI</div>
                <div className={`${selectPost===2? 'text-blue-500':''} opacity-75 cursor-pointer`} onClick={()=>{setSelectPost(2)}}>Quantum Computing</div>
            </div>
            <div className='sm:hidden flex flex-row justify-center my-5'>
            {
                selectPost === 0 &&
                <ProductCard
                    content='We partner and integrate with likeminded entities to advance models of ownership with the power of'
                    title='Web3'
                    image={web3}
                    mobile={true}
                />
            }
            {
                selectPost === 1 &&
                <ProductCard
                    content='Become an AI-Powered Business for Improved Decisioning and Advance Your Business with'
                    title='AI'
                    image={AI}
                    mobile={true}

                />
            }
            {
                selectPost === 2 &&
                <ProductCard
                    content='Everything you ever wanted to know about qubits, and spooky action of'
                    title='Quantum Computing'
                    image={Quantum}
                    mobile={true}

                />
            }
            </div>





            {/*Desktop Version */}
            <div className='sm:flex flex-row m-20 mb-10 justify-between hidden'>
                <ProductCard
                    content='We partner and integrate with likeminded entities to advance models of ownership with the power of'
                    title='Web3'
                    image={web3}
                    mobile={false}

                />

                <ProductCard
                    content='Become an AI-Powered Business for Improved Decisioning and Advance Your Business with'
                    title='AI'
                    image={AI}
                    mobile={false}

                />

                <ProductCard
                    content='Everything you ever wanted to know about qubits, and spooky action of'
                    title='Quantum Computing'
                    image={Quantum}
                    mobile={false}

                />

            </div>
            <button className='bg-white mt-0 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1'>VIEW MORE</button>
        </>
    )
}

export default Product