'use client'
import { SignUp } from '@clerk/nextjs';
import React from 'react';
import dark from '@/public/assets/Ellipse_dark.png';
import light from '@/public/assets/Ellipse_light.png';
import Image from 'next/image';

const page = () => {

    const [data, setData] = React.useState({
        goal: '',
        work: '',
        company: {
            name: '',
            industry: '',
            location: ''
        }
    })

    const [progress, setProgress] = React.useState(4);

    return (
        <>
            <div className='h-[70vh] w-[30vw] rounded-lg border border-gray-200'>
                {
                    progress === 0 &&
                    <div className='flex flex-col items-center'>
                        <div className='flex flex-row gap-7 my-10'>
                            <Image alt='' src={light}/>
                            <Image alt='' src={dark}/>
                            <Image alt='' src={dark}/>
                        </div>
                        <h3 className='text-xl font-bold mb-10'>What is your goal?</h3>
                        
                        <select className='w-2/3 h-10 border border-gray-200 text-center'>
                            <option className='h-10'>--select--</option>
                        </select>
                    </div>
                }
                {
                    progress > 3 && <SignUp />
                }
            </div>

        </>
    )
}

export default page