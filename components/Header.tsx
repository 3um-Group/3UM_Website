'use client'
import React, { useState, useEffect } from 'react';
import three_um_logo from '@/public/assets/3UM-light.png';
import Image from 'next/image';
import Link from 'next/link';
import navItems from '@/utils/nav-items';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        handleResize(); // Set initial width
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Prevent body scroll when menu is open
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    return (
        <>
            <nav className="sticky top-0 z-50 shadow-md w-full">
                <div className="relative flex flex-row items-center border-b border-gray-100 bg-transparent xl:bg-white-700 xl:backdrop-blur-md">
                    <div className="relative z-30 mx-auto flex w-full items-center justify-between px-4 sm:px-6 py-4 xl:max-w-7xl xl:px-0">
                        <div className="flex justify-start">
                            <Link href='/'>
                                <Image
                                    src={three_um_logo}
                                    alt='company logo'
                                    width={80}
                                    height={80}
                                    className='z-30 h-auto w-auto max-h-[50px]'
                                />
                            </Link>
                        </div>

                        <div className="hidden xl:flex flex-row items-center gap-4 justify-center mx-auto">
                            {navItems.map((item) => (
                                <div key={item.id} className="font-label-size-200 group flex items-center gap-1 font-semibold">
                                    <div className="z-30 cursor-pointer items-center rounded-lg px-2 py-1.5 text-gray-950 transition-all group-hover:bg-gray-100 group-hover:text-gray-900">
                                        <Link href={item.href}>
                                            {item.label}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <div className="z-30 hidden xl:flex items-center gap-2">
                            <button className="font-button-size-100 px-4 py-2 bg-transparent text-gray-950 hover:bg-gray-100 rounded-lg transition-all">
                                Contact sales
                            </button>
                            <button className="font-button-size-100 px-4 py-2 bg-gradient-to-br from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-white-950 rounded-lg transition-all hover:shadow-gray-lg">
                                Sign in
                            </button>
                        </div>

                        <button
                            onClick={toggleMenu}
                            title="Toggle mobile navigation menu"
                            className="z-30 ml-auto flex items-center xl:hidden h-10 w-10 justify-center"
                        >
                            <div className="relative w-6 h-6">
                                <span className={`absolute h-0.5 w-full bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}></span>
                                <span className={`absolute h-0.5 w-full bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'top-3'}`}></span>
                                <span className={`absolute h-0.5 w-full bg-gray-700 transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'
                    } overflow-y-auto`}
                style={{ top: '72px', height: 'calc(100vh - 72px)' }}
            >
                <div className="flex flex-col items-center gap-4 p-4 w-full">
                    {navItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.href}
                            className="text-gray-950 text-lg font-semibold py-2 w-full text-center"
                            onClick={toggleMenu}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <button className="mt-4 font-button-size-100 px-4 py-3 bg-transparent text-gray-950 hover:bg-gray-100 rounded-lg transition-all w-full">
                        Contact sales
                    </button>
                    <button className="mt-2 font-button-size-100 px-4 py-3 bg-gradient-to-br from-gradient-vibrant-blue-100 to-gradient-vibrant-blue-200 text-white-950 rounded-lg transition-all hover:shadow-gray-lg w-full">
                        Sign in
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;