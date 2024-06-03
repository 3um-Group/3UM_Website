import three_um_logo from '@/public/assets/white_logo.png';
import { FacebookFilled } from "@ant-design/icons"
import { LinkedinFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center mt-12 w-full bg-black text-white'>



      <div className='sm:flex hidden flex-row w-full justify-around mt-12'>
        <div className='flex flex-col gap-5'>
          <span className='font-bold text-xl'>Company</span>
          <span>About Us</span>
          <span>Mission & Vision</span>
          <span>Roadmap</span>
          <span>Careers</span>
          <span>Press & Media</span>
          <span>Contact Us</span>
        </div>

        <div className='flex flex-col gap-5'>
          <span className='font-bold text-xl'>Econsystem</span>
          <span>3UM.ID</span>
          <span>3UM Finance</span>
          <span>3UM Genesis</span>
          <span>ABQ Protocol</span>
          <span>3UM Verse</span>
          <span>Real World Projects</span>
          <span>Pilot Prpgrams</span>
          <span>Learning Academy</span>
          <span>Partner</span>
        </div>

        <div className='flex flex-col gap-5'>
          <span className='font-bold text-xl'>Community</span>
          <span>Community Home</span>
          <span>3UM for StartUps</span>
          <span>3UM for Developers</span>
          <span>3UM x Creators</span>
          <span>Governance</span>
          <span>Events</span>
          <span>Local Chapters</span>
          <span>Ecosystem Jobs</span>
        </div>

        <div className='flex flex-col gap-5'>
          <span className='font-bold text-xl'>Resources</span>
          <span>Documentation</span>
          <span>Tutorials & Guides</span>
          <span>Blog</span>
          <span>FAQs</span>
          <span>Support Center</span>
          <span>Case Studies</span>
          <span>Apple For Research</span>
          <span>Study</span>
        </div>

        <div className='flex flex-col gap-5'>
          <span className='font-bold text-xl'>Legal</span>
          <span>Legal Home</span>
          <span>Terms of Use</span>
          <span>Privacy Policy</span>
        </div>

      </div>

      {/*Desktop version */}
      <div className='sm:flex hidden flex-row justify-between w-full'>
        <div className='flex flex-row  my-5 mx-20 mb-10 items-center gap-7'>
          <Image alt='3UM Logo' src={three_um_logo} className='object-contain' />
          <div className='opacity-75'>Copyright© 2024 3UM. All rights reserved.</div>
        </div>
        <div className='flex flex-row gap-5 my-5 mx-20 mb-10'>

          <FacebookFilled className='text-4xl opacity-80' />
          <LinkedinFilled className='text-4xl opacity-80' />
          <YoutubeFilled className='text-4xl opacity-80' />
        </div>
      </div>

      {/*Mobile Version */}
      <div className='flex flex-row items-center sm:hidden pt-5 w-full'>
        <Image alt='3UM Logo' src={three_um_logo} className='object-contain ml-5 mr-auto' />

        <div className='flex flex-row mr-5 ml-auto gap-3 '>
          <FacebookFilled className='text-4xl opacity-80' />
          <LinkedinFilled className='text-4xl opacity-80' />
          <YoutubeFilled className='text-4xl opacity-80' />
        </div>
      </div>
      <div className='opacity-75 mb-4 mt-2'>Copyright© 2024 3UM. All rights reserved.</div>


    </footer>
  )
}

export default Footer