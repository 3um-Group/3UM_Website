'use client'
import three_um_logo from '@/public/assets/IMG_0701 1.png';
import vector from '@/public/assets/Vector.png';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';
import { usePathname } from 'next/navigation';


const Header = () => {
    const [toggle, setToggle] = useState(false);
    const pathName = usePathname();



    return (
        <div className="w-full p-3 pl-5 flex flex-row items-center sm:border-none border-b border-gray-300">
            {/*DestTop vision */}
            <div className="min-w-10">
                <Link href='/' className='block'>
                    <Image
                        src={three_um_logo}
                        alt='company logo'
                        width={40}
                        height={40}
                        className='cursor-pointer'
                    />
                </Link>
            </div>

            <div className='sm:flex flex-1 flex-row justify-center items-center gap-16 mr-10 hidden'>
                <Link href='/company'
                    className={pathName.includes('company') ? 'border-b-2 border-blue-500 p-5' : 'p-5'} >Company</Link>
                <Link href='/ecosystem'
                    className={pathName.includes('ecosystem') ? 'border-b-2 border-blue-500 p-5' : 'p-5'}>Ecosystem</Link>
                <Link href='/community'
                    className={pathName.includes('community') ? 'border-b-2 border-blue-500 p-5' : 'p-5'}>Community</Link>
                <Link href='/resources'
                    className={pathName.includes('resources') ? 'border-b-2 border-blue-500 p-5' : 'p-5'} >Resources</Link>
                <Link href='/started'
                    className={pathName.includes('started') ? 'border-b-2 border-blue-500 p-5' : 'rounded-full bg-blue-900 text-white py-1 px-6'} >Get Started</Link>

            </div>

            {/*Mobile vision incomplete*/}
            <div className='text-2xl font-bold sm:hidden ml-auto mr-auto'>3UM</div>

            <div className='sm:hidden'>
                <Image alt='icon' src={vector} width={30} height={30} onClick={() => { setToggle((old) => (!old)) }} className='cursor-pointer ' />
                {
                    toggle &&
                    <nav className='fixed top-0 left-0 w-full h-full z-20 bg-white' >
                        <div className='flex flex-row p-3 pl-5 mb-0 border-b border-gray-200 items-center'>
                            <Link href='/' className='block'>
                                <Image
                                    src={three_um_logo}
                                    alt='company logo'
                                    width={40}
                                    height={40}
                                    className='cursor-pointer'
                                />
                            </Link>

                            <div className='text-2xl font-bold ml-auto mr-auto'>3UM</div>
                            <Image alt='icon' src={vector} width={30} height={30} onClick={() => { setToggle((old) => (!old)) }} className='m-0 cursor-pointer object-contain' />


                        </div>

                        <div className='flex flex-col items-center gap-2 h-8/12 mb-5'>
                            <Link
                                href='/'
                                onClick={() => { setToggle((old) => (!old)) }}
                                className={`${pathName === '/root' ? 'text-blue-500 bg-blue-100' : ''}  hover:bg-gray-200 w-full text-center py-1 px-2 my-0`} >
                                HOME
                            </Link>
                            <Link
                                href='/company'
                                onClick={() => { setToggle((old) => (!old)) }}
                                className={`${pathName.includes('company') ? 'text-blue-500 bg-blue-100' : ''}  hover:bg-gray-200 w-full text-center py-1 px-2 my-0`} >
                                COMPANY
                            </Link>
                            <Link
                                href='/ecosystem'
                                onClick={() => { setToggle((old) => (!old)) }}
                                className={`${pathName.includes('ecosystem') ? 'text-blue-500 bg-blue-100' : ''}  hover:bg-gray-200 w-full text-center py-1 px-2 my-0`}  >
                                ECOSYSTEM</Link>
                            <Link
                                href='/community'
                                onClick={() => { setToggle((old) => (!old)) }}
                                className={`${pathName.includes('community') ? 'text-blue-500 bg-blue-100' : ''}  hover:bg-gray-200 w-full text-center py-1 px-2 my-0`}  >
                                COMMUNITY
                            </Link>
                            <Link
                                href='/resources'
                                onClick={() => { setToggle((old) => (!old)) }}
                                className={`${pathName.includes('resource') ? 'text-blue-500 bg-blue-100' : ''}  hover:bg-gray-200 w-full text-center py-1 px-2 my-0`}  >
                                RESOURCE
                            </Link>
                            <Link
                                href='/legald'
                                onClick={() => { setToggle((old) => (!old)) }}
                                className={`${pathName.includes('legal') ? 'text-blue-500 bg-blue-100' : ''}  hover:bg-gray-200 w-full text-center py-1 px-2 my-0`}  >
                                LEGAL
                            </Link>
                        </div>

                        <div className='flex flex-col pt-5 gap-3 items-center border-t border-gray-200'>
                            <Link href='/started'
                                className={pathName.includes('started') ? 'border-b-2 border-blue-500 p-5' : 'rounded-full bg-blue-700 text-white py-1 px-6'} >Get Started</Link>
                            <Link href='/sign-in' className='text-blue-500'>LOGIN</Link>
                        </div>

                    </nav>
                }

            </div>
        </div>
    )
}

export default Header