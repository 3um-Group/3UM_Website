import three_um_logo from '@/public/assets/3UM-dark.png';
import footerItems from '@/utils/footer-items';
import socials from '@/utils/social-links';
import { FacebookFilled } from "@ant-design/icons"
import { LinkedinFilled } from '@ant-design/icons';
import { YoutubeFilled } from '@ant-design/icons';
import NewsLetter from "./NewsLetter";

import Image from 'next/image';
import Link from 'next/link';



const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-950 px-4 py-8 text-gray-200 sm:px-6 md:px-28 md:py-14">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-12">
          <div className="flex flex-col gap-5 lg:w-2/3">
            <Link href="/">
              <Image
                src={three_um_logo}
                alt="company logo"
                width={100}
                height={100}
                className="z-30 h-fit w-fullr"
              />
            </Link>
            <p className="font-paragraph-size-200 font-medium">
              The web3 development platform
            </p>
            <div className="flex flex-wrap gap-3">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-all hover:text-gray-500"
                >
                  <img
                    alt={social.alt}
                    loading="lazy"
                    width="16"
                    height="16"
                    decoding="async"
                    data-nimg="1"
                    className="h-4 w-fit"
                    style={{ color: "transparent" }}
                    src={social.img}
                  />
                </a>
              ))}
            </div>
            <NewsLetter />
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-12 xl:gap-16 mt-8 lg:mt-0">
            {['Comapany'].map((category) => (
              <div key={category} className="flex flex-col gap-4">
                {/* <h5 className="font-eyebrow-size-100 font-bold text-gray-50">{category}</h5> */}
                <ul className="flex flex-col gap-2">
                  {/* Add your specific links here */}
                  {footerItems.map((item) => (
                    <>
                      <li><a href={item.href} className="font-paragraph-size-200 w-fit font-medium text-gray-200 transition-all hover:text-gray-400">{item.label}</a></li>
                      {/* <li><a href="#" className="font-paragraph-size-200 w-fit font-medium text-gray-200 transition-all hover:text-gray-400">{item.label}</a></li> */}
                    </>

                  ))}

                  {/* Add more list items as needed */}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mx-auto w-full max-w-7xl mt-8 pt-4 border-t border-gray-800">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="font-paragraph-size-100 text-gray-200 text-sm sm:text-base">
            Copyright© 2024 3UM. All rights reserved <a href="#" className="hover:underline">Terms of service</a>
          </p>
          <a href="#" className="font-button-size-100 mt-4 sm:mt-0 rounded-lg bg-gray-100 px-4 py-2 text-sm text-gray-700 sm:py-3 sm:text-base">
            Powered by 3UM
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
