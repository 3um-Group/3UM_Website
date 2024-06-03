'use client'
import React from 'react'

const Career = () => {
    const [career, setCareer] = React.useState(0);

    return (
        <>
            {/*Mobile Version */}
            <div className='sm:hidden flex flex-row justify-between gap-4 mt-10 p-x-10'>
                <div className={`${career === 0 ? 'text-blue-500' : ''} opacity-75 cursor-pointer text-center`} onClick={() => { setCareer(0) }}>Make an Impact</div>
                <div className={`${career === 1 ? 'text-blue-500' : ''} opacity-75 cursor-pointer`} onClick={() => { setCareer(1) }}>Equity</div>
                <div className={`${career === 2 ? 'text-blue-500' : ''} opacity-75 cursor-pointer text-center`} onClick={() => { setCareer(2) }}>Financial Rewards</div>
            </div>
            <div className='sm:hidden flex flex-row justify-center my-5'>
                {
                    career===0 && 
                    <div className='border border-blue-300 rounded-2xl w-6/12 flex flex-col p-3 overflow-hidden'>
                    <div className='text-blue-500 text-xl font-bold self-center my-3 text-center'>Make an Impact</div>
                    <span className='opacity-75'>We move fast, put innovative SaaS product into our customers’ hands, and iterate and learn as they scale their ecosystems.</span>
                </div>
                }
                {
                    career===1 &&
                    <div className='border border-blue-300 rounded-2xl w-6/12 flex flex-col p-3 overflow-hidden'>
                    <div className='text-blue-500 text-xl font-bold self-center my-3'>Equity</div>
                    <span className='opacity-75'>Ownership in a #1 rated platform and the trusted choice of Global Fortune 50 companies and leading organizations worldwide has its perks</span>
                </div>
                }
                {
                    career===2 &&
                    <div className='border border-blue-300 rounded-2xl w-6/12 flex flex-col p-3 overflow-hidden'>
                    <div className='text-blue-500 text-xl font-bold self-center my-3 text-center'>Financial Rewards</div>
                    <span className='opacity-75'>We offer generous retirement savings options for both US and UK employees to help you build a solid foundation for the future.</span>
                </div>
                }
            </div>

            {/*Desktop  */}
            <section id="career" className='sm:flex hidden flex-col my-16 items-center overflow-hidden'>
                <div className='text-2xl font-bold opacity-75'>Building Careers to Build Great Lives</div>
                <span className='opacity-75 text-center w-3/4 my-6'>Join us and shape enterprise blockchain technology, working to make it radically simple for organizations to adopt so that our societies will fully benefit from decentralized models and technologies.</span>
                <div className='flex flex-row justify-between w-2/3'>

                    <div className='border border-blue-300 rounded-2xl w-1/4 flex flex-col p-3 overflow-hidden'>
                        <div className='text-blue-500 text-xl font-bold self-center my-3'>Make an Impact</div>
                        <span className='opacity-75'>We move fast, put innovative SaaS product into our customers’ hands, and iterate and learn as they scale their ecosystems.</span>
                    </div>

                    <div className='border border-blue-300 rounded-2xl w-1/4 flex flex-col p-3 overflow-hidden'>
                        <div className='text-blue-500 text-xl font-bold self-center my-3'>Equity</div>
                        <span className='opacity-75'>Ownership in a #1 rated platform and the trusted choice of Global Fortune 50 companies and leading organizations worldwide has its perks</span>
                    </div>

                    <div className='border border-blue-300 rounded-2xl w-1/4 flex flex-col p-3 overflow-hidden'>
                        <div className='text-blue-500 text-xl font-bold self-center my-3'>Financial Rewards</div>
                        <span className='opacity-75'>We offer generous retirement savings options for both US and UK employees to help you build a solid foundation for the future.</span>
                    </div>

                </div>
                <button className='bg-white mt-8 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1'>OPEN POSITIONS</button>

            </section>

        </>
    )
}

export default Career