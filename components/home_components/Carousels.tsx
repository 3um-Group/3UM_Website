'use client'

import backgoundImage from '@/public/assets/dontaelopez_An_abstract_brain_ecosystem_3D_ultra_high_resolutio_a46c4c0f-dbaa-4b85-add7-1f874396beaf 1.png'
import Image from "next/image"
import React from 'react'

import { ArrowLeft, ArrowRight } from 'lucide-react'


const Carousels = () => {
    const [carousels, setCarousels] = React.useState(0);
    const [transitioning, setTransitioning] = React.useState(false);

    const carouselChange = (number: number) => {
        if (carousels === number) {
            return;
        }

        if(number<0){
            number=2;
        }

        setTransitioning(true);
        setTimeout(() => {
            setTransitioning(false);
        }, 500)
        setTimeout(() => {
            setCarousels((number%3));

        }, 1000);
    }


    return (

        <div className="flex flex-col items-center bg-white p-0 my-5">
            <section
                className="sm:w-2/3 w-full relative">        

                <div className="w-full">
                    {
                        carousels === 0 &&
                        <div className={`relative flex transition-opacity duration-1000 ease-in-out ${transitioning ? 'opacity-30' : 'opacity-100'}`}>
                            <Image src={backgoundImage} alt="background Image" className="bg-black bg-blend-darken rounded-3xl" />
                            <div className="absolute self-center ml-16 w-2/5 flex flex-col">
                                <div className='text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-8'>3UM Open’s $50M Series A, Eyes Token Sale</div>
                                <button className='border-2 border-white w-32 h-8 rounded-full text-white'>Learn More</button>
                            </div>

                        </div>
                    }

                    {
                        carousels === 1 &&
                        <div className={`relative flex transition-opacity duration-1000 ease-in-out ${transitioning ? 'opacity-30' : 'opacity-100'}`}>
                            <Image src={backgoundImage} alt="background Image" className="bg-black bg-blend-darken rounded-3xl" />
                            <div className="absolute self-center ml-16 w-2/5 flex flex-col">
                                <div className='text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-8'>3UM Open’s $50M Series A, Eyes Token Sale</div>
                                <button className='border-2 border-white w-32 h-8 rounded-full text-white'>Learn More</button>
                            </div>

                        </div>
                    }

                    {
                        carousels === 2 &&
                        <div className={`relative flex transition-opacity duration-1000 ease-in-out ${transitioning ? 'opacity-30' : 'opacity-100'}`}>
                            <Image src={backgoundImage} alt="background Image" className="bg-black bg-blend-darken rounded-3xl" />
                            <div className="absolute self-center ml-16 w-2/5 flex flex-col">
                                <div className='text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl mb-8'>3UM Open’s $50M Series A, Eyes Token Sale</div>
                                <button className='border-2 border-white w-32 h-8 rounded-full text-white'>Learn More</button>
                            </div>

                        </div>
                    }


                </div>
                <ArrowRight className='absolute text-white top-[45%] right-[0%] size-10 bg-gray-500 hover:bg-gray-600 cursor-pointer' onClick={()=>{carouselChange(carousels+1)}}/>
                <ArrowLeft className='absolute text-white top-[45%] left-[0%] size-10 bg-gray-500 hover:bg-gray-600 cursor-pointer' onClick={()=>{carouselChange(carousels-1)}}/>
            </section>


            <div className="flex flex-row gap-5 mt-2 mb-5 sm:text-lg text-md text-center sm:font-bold">
                <div className={`cursor-pointer ${carousels === 0 ? 'text-blue-900' : 'opacity-50'}`} onClick={() => { carouselChange(0) }}>Inside Our World</div>
                <div className={`cursor-pointer ${carousels === 1 ? 'text-blue-900' : 'opacity-50'}`} onClick={() => { carouselChange(1) }}>Around Our Community</div>
                <div className={`cursor-pointer ${carousels === 2 ? 'text-blue-900' : 'opacity-50'}`} onClick={() => { carouselChange(2) }}>The Academic Ledger</div>
            </div>

        </div>





    )
}

export default Carousels