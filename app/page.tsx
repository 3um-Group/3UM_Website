import Link from 'next/link';
import { SignedOut, SignedIn } from '@clerk/nextjs';

import three_um_logo from '@/public/assets/IMG_0701 3.png';
import logo from '@/public/assets/IMG_0699 2.png';
import ID from '@/public/assets/ID.png';

import Image from 'next/image';


const page = () => {

  return (
    <>
      <div className='flex flex-col items-center mt-12'>

        <>
          <Image src={three_um_logo} alt='company logo' width={100} height={100} />
          <div className='flex flex-row mb-5'>
            <Image src={logo} alt='logo' width={150} height={100} />
            <Image src={ID} alt='ID' width={100} height={100} />
          </div>

        </>
        <span className='w-1/3 text-center mt-5 opacity-80'>Hybrid Identit for public and private identity powered by 3UM and The ABQ Protocol</span>

        <Link href='./root' className='border-2 border-black rounded-full w-60 text-center h-9 mt-5 flex items-center justify-center'>Goto Home</Link>

        <SignedOut>
          <Link href='sign-in' className='border-2 border-black rounded-full w-60 h-9 mt-3 flex items-center justify-center bg-black text-white'>Login</Link>
        </SignedOut>
      </div>


    </>
  )
}

export default page