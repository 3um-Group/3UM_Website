import three_um_logo from '@/public/assets/3UM-dark.png';
import { FacebookFilled } from "@ant-design/icons"
import { LinkedinFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';

import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-950 px-4 py-8 text-gray-200 sm:px-6 md:px-28 md:py-14">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 pb-8 lg:flex-row lg:justify-between lg:gap-12">
        <div className="flex flex-col gap-5 border-white-950 border-opacity-10 sm:flex-row sm:justify-between lg:flex-col lg:border-b lg:border-none lg:pb-12">
          <div className="flex flex-col gap-5">
            <div>
              <Link href='/'>

                <Image
                  src={three_um_logo}
                  alt='company logo'
                  width={100}
                  height={100}
                  className='z-30 h-fit w-fullr'
                />

              </Link>
            </div>
            <p className="font-paragraph-size-200 font-medium">Your company tagline</p>
            <div className="flex flex-wrap gap-3">
              {/* Social media icons */}
            </div>
          </div>
          <div className="mt-6 lg:mt-24">
            <h6 className="font-heading-size-100 font-extrabold text-gray-50">Newsletter Signup</h6>
            <p className="font-paragraph-size-200 pb-3 pt-1 font-medium">Sign up for our newsletter.</p>
            <button className="group relative h-full w-full rounded-lg transition-all focus:shadow-purple sm:w-auto">
              <span className="flex h-full w-full flex-row items-center justify-center gap-2 rounded-lg transition-all bg-gray-100 text-gray-700 hover:text-gray-500 active:bg-gray-50 active:bg-gradient-to-br active:from-gradient-vibrant-blue-100 active:to-gradient-vibrant-blue-200 active:bg-clip-text active:text-transparent active:shadow-gray-lg font-button-size-200 px-4 py-3 sm:w-auto">
                Subscribe
              </span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12 xl:gap-16">
          {['Products', 'Developers', 'Community', 'Company', 'Contact'].map((category) => (
            <div key={category} className="flex flex-col gap-4">
              <h6 className="font-eyebrow-size-100 font-bold text-gray-50">{category}</h6>
              <ul className="flex flex-col gap-2">
                <li><a href="#" className="font-paragraph-size-200 w-fit font-medium text-gray-200 transition-all hover:text-gray-400">Link 1</a></li>
                <li><a href="#" className="font-paragraph-size-200 w-fit font-medium text-gray-200 transition-all hover:text-gray-400">Link 2</a></li>
                {/* Add more list items as needed */}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-4 border-white-950 border-opacity-30 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8 lg:border-t lg:pt-9">
        <p className="font-paragraph-size-100 text-gray-200 text-sm sm:text-base">
          2024 Your Company Name · <a href="#" className="hover:underline">Terms of service</a>
        </p>
        <a href="#" className="font-button-size-100 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 sm:py-3 sm:text-base">
          Powered by Your Company
        </a>
      </div>
    </footer>
  );
}

export default Footer