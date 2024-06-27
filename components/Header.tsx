'use client'
import three_um_logo from '@/public/assets/IMG_0701 1.png';
import vector from '@/public/assets/Vector.png';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { usePathname } from 'next/navigation';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();



    return (
        //     <header className="flex flex-col sm:flex-row justify-between items-center p-4 bg-white shadow-md sticky top-0 z-50">
        //     <div className="flex justify-between items-center w-full sm:w-auto">
        //       <div className="logo">
        //         {/* Insert SVG or image tag for logo here */}
        //       </div>
        //       <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        //         {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        //       </button>
        //     </div>
        //     <nav className={`flex flex-col sm:flex sm:flex-row gap-8 ${isOpen ? 'block' : 'hidden'} sm:block mx-auto`}>

        //       <a href="/discover" className="text-gray-600 hover:text-gray-900">Discover</a>
        //       <a href="/partners" className="text-gray-600 hover:text-gray-900">Partners</a>
        //       <a href="/stories" className="text-gray-600 hover:text-gray-900">Stories</a>
        //     </nav>
        //   </header>

        // <nav className="sticky top-0 z-50">
        //     <div className='relative flex flex-row items-center border-b border-gray-100 bg-transparent xl:bg-white-700 xl:backdrop-blur-md'>
        //         <div className='relative z-30 mx-auto flex w-full flex-row items-center justify-between bg-white-700 px-6 py-4 backdrop-blur-md xl:max-w-4xl xl:bg-transparent xl:px-0 xl:backdrop-filter-none'>
        //             <div className="flex w-[162px] justify-start">
        //                 <Link href='/' className='z-30 w-28'>
        //                     <Image
        //                         src={three_um_logo}
        //                         alt='company logo'
        //                         width={50}
        //                         height={60}
        //                         className='z-30 h-fit w-fullr'
        //                     />
        //                 </Link>

        //             </div>
        //             <div className='hidden flex-row items-center gap-4 xl:flex'>
        //                 <div className='font-label-size-200 group flex items-center gap-1 font-semibold'>
        //                     <div className='z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900'>
        //                         Our Company
        //                     </div>
        //                 </div>
        //                 <div className='font-label-size-200 group flex items-center gap-1 font-semibold'>
        //                     <div className='z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900'>
        //                         Our Company
        //                     </div>
        //                 </div>
        //                 <div className='font-label-size-200 group flex items-center gap-1 font-semibold'>
        //                     <div className='z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900'>
        //                         Our Company
        //                     </div>
        //                 </div>

        //             </div>
        //             <div className="z-30 hidden items-center gap-2 xl:flex"><a data-testid="navigation-link" href="/contact-sales">
        //                 <div className="group relative h-full rounded-lg transition-all focus:shadow-purple"><span
        //                     className="flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-transparent text-gray-950 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:bg-gradient-to-br active:from-gradient-vibrant-blue-100 active:to-gradient-vibrant-blue-200 active:bg-clip-text active:text-transparent active:shadow-gray-lg font-button-size-100 px-4 py-3">Contact
        //                     sales</span></div>
        //             </a><a data-testid="navigation-link"
        //                 href="https://auth.alchemy.com/?redirectUrl=https%3A%2F%2Fdashboard.alchemy.com%2Fsignup%2F">
        //                     <div className="group relative h-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50"><span
        //                         className="flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gradient-to-br from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-white-950 hover:bg-clip-text hover:text-transparent hover:shadow-gray-lg font-button-size-100 px-4 py-3">Sign
        //                         in</span></div>
        //                 </a></div>
        //         </div>
        //     </div>
        // </nav>

        <nav className="sticky top-0 z-50">
            <div className='relative flex flex-row items-center border-b border-gray-100 bg-transparent xl:bg-white-700 xl:backdrop-blur-md'>
                <div className='relative z-30 mx-auto flex w-full flex-row items-center justify-between bg-white-700 px-6 py-4 backdrop-blur-md xl:max-w-4xl xl:bg-transparent xl:px-0 xl:backdrop-filter-none'>
                    <div className="flex w-[162px] justify-start">
                        <Link href='/'>

                            <Image
                                src={three_um_logo}
                                alt='company logo'
                                width={50}
                                height={60}
                                className='z-30 h-fit w-fullr'
                            />

                        </Link>
                        <div className="md:hidden">
                            <button type="button" onClick={() => setIsOpen(!isOpen)}>
                                {isOpen ? <XIcon className="h-6 w-6 text-white" /> : <MenuIcon className="h-6 w-6 text-white" />}
                            </button>
                        </div>
                    </div>
                    <div className={`flex-row items-center gap-4 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
                        {/* Your existing menu items go here */}

                        <div className='font-label-size-200 group flex items-center gap-1 font-semibold'>
                            <div className='z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900'>
                                Our Company
                            </div>
                        </div>
                        <div className='font-label-size-200 group flex items-center gap-1 font-semibold'>
                            <div className='z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900'>
                                Our Company
                            </div>
                        </div>
                        <div className='font-label-size-200 group flex items-center gap-1 font-semibold'>
                            <div className='z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900'>
                                Our Company
                            </div>
                        </div>
                    </div>
                    <div className="z-30 hidden items-center gap-2 xl:flex">
                        {/* Your existing right-side content goes here */}

                        <div className="group relative h-full rounded-lg transition-all focus:shadow-purple"><span
                            className="flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-transparent text-gray-950 hover:bg-gray-100 hover:text-gray-700 active:bg-gray-50 active:bg-gradient-to-br active:from-gradient-vibrant-blue-100 active:to-gradient-vibrant-blue-200 active:bg-clip-text active:text-transparent active:shadow-gray-lg font-button-size-100 px-4 py-3">Contact
                            sales</span></div>
        
                        <div className="group relative h-full rounded-lg transition-all hover:bg-blue-100 active:bg-blue-50"><span
                            className="flex h-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gradient-to-br from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-white-950 hover:bg-clip-text hover:text-transparent hover:shadow-gray-lg font-button-size-100 px-4 py-3">Sign
                            in</span></div>
            </div>
        </div>
      </div >
    </nav >





    )
}

export default Header