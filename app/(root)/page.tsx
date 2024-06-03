import Carousels from '@/components/home_components/Carousels';
import Describe from '@/components/home_components/Describe';
import Product from '@/components/home_components/Product';

import stone from '@/public/assets/stone.png'
import three_UM from '@/public/assets/IMG_0701 1.png';

import Nasa from '@/public/assets/company_logos/IMG_0829 1.png';
import wells from '@/public/assets/company_logos/IMG_0695.png';
import ibm from '@/public/assets/company_logos/IMG_0693.png';
import consensys from '@/public/assets/company_logos/IMG_0166.png';
import fidelity from '@/public/assets/company_logos/IMG_0167 1.png';
import lock from '@/public/assets/company_logos/IMG_0169.png';
import google from '@/public/assets/company_logos/IMG_0170.png';
import credit from '@/public/assets/company_logos/IMG_0172 2.png';

import logo from '@/public/assets/IMG_0701 1.png';
import header1 from '@/public/assets/Rectangle 23.png';
import header2 from '@/public/assets/Rectangle 23 (1).png';
import header3 from '@/public/assets/Rectangle 23 (2).png';
import header4 from '@/public/assets/Rectangle 23 (3).png';
import header5 from '@/public/assets/Rectangle 23 (4).png';
import header6 from '@/public/assets/Rectangle 23 (5).png';

import { ArrowRightOutlined } from '@ant-design/icons';

import Card from '@/components/Card';

import Image from 'next/image';


export default function Home() {
  return (
    <>
      <div className='flex flex-col items-center -mt-3 overflow-hidden'>
        <div className='m-12 mb-2 font-bold text-3xl text-center'>Humanizing Technology</div>
        <span className='m-0 w-4/5 sm:w-2/5 text-center opacity-75 font-bold'>3UM is <span style={{ color: 'darkblue' }}>reimagining</span> how people, businesses, and companies interact with technology like <span className='text-gradient'>Web3, AI, Quantum</span>, and more</span>
      </div>
      <Carousels />
      <Describe />
      <div className="flex flex-col items-center m-10">
        <div className="mb-5 text-2xl font-bold text-center w-3/5 opacity-70">3UM Product and Ecosystem</div>
        <div className='w-2/3 text-center opacity-70'>Get new business applications live faster, so your team can solve real problems for real people. Launch powerful dapps on highly customizable, fully dedicated infrastructure that's built to scale.</div>

        <Product />

        <div className='mt-12 sm:flex flex-col items-center gap-5 hidden'>
          <div className='font-bold text-3xl opacity-70'>How it works</div>
          <span className='text-center w-2/3 opacity-75'>3UM offers the full stack of services needed for the next generation of Enterprise Decentralized applications. Delivered as fully managed Enterprise SaaS with borderless connectivity across Microsoft Azure, Amazon Web Services, dedicated and hybrid deployments.</span>
          <div className='flex flex-row justify-center relative border border-blue-200 rounded-3xl'>
            <Image alt='How It Work' src={stone} className='' />
            <Image alt='logo' src={three_UM} className='absolute self-end max-w-9 bottom-3 right-3' />
          </div>
          <button className='bg-white mt-0 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1'>VIEW MORE</button>

        </div>

      </div>


      <div className='flex flex-col items-center mt-25'>
        <h2 className='sm:w-1/3 w-2/3 text-center mb-2.5 opacity-75 text-2xl font-bold'>Engineered by a World-Class Team & Distinguished Partners</h2>
        <span className='sm:w-1/2 w-3/4 text-center opacity-70 mb-6'>Our breakthroughs are crafted by a team of experts in technology, and academia, alongside globally recognized partners, setting new standards in innovation</span>
        <div className='flex flex-wrap justify-center w-3/5 gap-6'>
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={Nasa} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={wells} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={ibm} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={consensys} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={fidelity} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={lock} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={google} />
          <Image alt='company logo' className='max-h-28 max-w-28 object-contain' src={credit} />

        </div>
      </div>
      <div className='flex flex-col items-center my-20 gap-12'>
        <div className="flex flex-col items-center">
          <h2 className='w-1/3 text-center mb-2.5 opacity-75 text-2xl font-bold'>3UM Blog</h2>
          <span className='text-center opacity-70 mb-6'>Follow along for the latest on the 3UM ecosystem and community information.</span>

          {/*Mobile */}
          <div className='sm:hidden flex flex-row justify-center'>
            <Card
              image={header1}
              Symbol={logo}
              typeOfSymbol='image'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={true}
            />
          </div>

          {/*Desktop */}
          <div className='sm:flex flex-row justify-around hidden'>

            <Card
              image={header1}
              Symbol={logo}
              typeOfSymbol='image'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={false}
            />
            <Card
              image={header2}
              Symbol={logo}
              typeOfSymbol='image'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={false}

            />
            <Card
              image={header3}
              Symbol={logo}
              typeOfSymbol='image'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={false}

            />

          </div>
          <button className='bg-white mt-8 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1'>VIEW ALL BLOGS</button>

        </div>



        <div className='flex flex-col items-center'>
          <h2 className='w-1/3 text-center mb-2.5 opacity-75 text-2xl font-bold'>Newsletter</h2>
          <span className='w-1/2 text-center opacity-70 mb-6'>Get your monthly dose of developer tutorials, product updates, and the latest projects to watch from the world of web3.</span>
          {/*Mobile */}
          <div className='sm:hidden flex flex-row justify-center'>
            <Card
              image={header4}
              Symbol={ArrowRightOutlined}
              typeOfSymbol='symbol'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={true}

            />
          </div>

          {/* Desktop*/}
          <div className='sm:flex hidden flex-row justify-around'>

            <Card
              image={header4}
              Symbol={ArrowRightOutlined}
              typeOfSymbol='symbol'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={false}

            />
            <Card
              image={header5}
              Symbol={ArrowRightOutlined}
              typeOfSymbol='symbol'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
            More text and more, more text more text and more, more text...'
              mobile={false}

            />
            <Card
              image={header6}
              Symbol={ArrowRightOutlined}
              typeOfSymbol='symbol'
              title='Article Title About Something'
              date='May 06'
              content='Text text more text and more, more text.
              More text and more, more text more text and more, more text...'
              mobile={false}

            />
          </div>
          <button className='bg-white mt-8 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1'>VIEW ALL ANNOUNCEMENTS</button>



        </div>

      </div>
    </>

  );
}
