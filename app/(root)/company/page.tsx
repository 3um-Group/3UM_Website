import empower from '@/public/assets/empower.png'
import brain from '@/public/assets/brain_image.png'
import road_map from '@/public/assets/road_map.png'
import logo from '@/public/assets/IMG_0701 1.png'

import Form from '@/components/company_components/Form';
import Career from '@/components/company_components/Career';
import Media from '@/components/company_components/Media';

import Image from 'next/image';
import Link from 'next/link';


const page = () => {
  return (
    <>
      <header className='flex flex-col'>
        <div className=' flex flex-row my-10 justify-center'>
          <div className='image-container rounded-xl'>
            <Image alt='empower' src={empower} className="sm:object-contain bg-blend-darken rounded-3xl brightness-75 image min-h-28" />
            <div className='text-white absolute self-center text-2xl font-bold left-[10%] sm:top-[30%] top-[10%] z-10 w-2/3'>3UM empowers its <br />interconnected community</div>
          </div>
        </div>

        <div className='sm:flex hidden flex-row justify-center gap-16 opacity-70'>
          <Link href='#about' className='text-blue-700 font-bold'>About us</Link>
          <Link href='#mission'>Mission & Vision</Link>
          <Link href='#roadmap'>Roadmap</Link>
          <Link href='#career'>Career</Link>
          <Link href='#media'>Press & Media</Link>
          <Link href='#contact'>Contact us</Link>
        </div>
      </header>

      <section id="about" className='flex flex-col my-16 sm:my-16 items-center'>
        <div className='text-2xl font-bold opacity-75'>About 3UM</div>
        <span className='opacity-75 text-center w-5/6 my-6'>3UM is a groundbreaking technology company revolutionizing how people interact with cutting-edge technologies such as Web3, AI, and quantum computing. As we prepare for our Series A funding and upcoming token launch, our primary focus is to raise capital for a global expansion and attract investors. To achieve this, we need to establish a robust online presence that demonstrates our commitment to making advanced technologies accessible and user-friendly. Our main objective is to create a website that not only showcases our innovative solutions but also provides an exceptional user experience through intuitive interface design and engaging content.</span>
        <Image alt='brain' src={brain} width={250} />
      </section>

      <section id="mission" className='flex flex-col my-16 items-center'>
        <div className='text-2xl font-bold opacity-75'>Mission & Vision</div>
        <span className='opacity-75 text-center w-5/6 my-6'>To achieve this, we need to establish a robust online presence that demonstrates our commitment to making advanced technologies accessible and user-friendly. Our main objective is to create a website that not only showcases our innovative solutions but also provides an exceptional user experience through intuitive interface design and engaging content.</span>
      </section>

      <section id="roadmap" className='flex flex-col my-16 items-center'>
        <div className='text-2xl font-bold opacity-75'>Roadmap</div>
        <span className='opacity-75 text-center w-5/6 my-6'>To achieve this, we need to establish a robust online presence that demonstrates our commitment to making advanced technologies accessible and user-friendly. Our main objective is to create a website that not only showcases our innovative solutions but also provides an exceptional user experience through intuitive interface design and engaging content.</span>
        <Image alt='roadmap' src={road_map} className='w-2/3' />
      </section>

      <Career />


      <section id="media" className='flex flex-col my-16 items-center'>
        <div className='text-2xl font-bold opacity-75'>Press & Media</div>

        {/*Mobile */}
        <div className='sm:hidden flex flex-col w-3/5 items-center mb-20'>
          <Image alt='logo' src={logo} width={100} className='object-contain mt-10' />
          <span className=' text-blue-700 text-center cursor-pointer'>Download 3UM Logo Files</span>
          <span className='opacity-75 text-center my-6'>Download the 3UM logo including blue, white, and black versions. The blue version is preferred with the other colors available for readability on different backgrounds.</span>
        </div>


        {/*Desktop */}
        <div className='sm:flex hidden flex-row w-3/5 justify-between mb-20'>
          <span className='opacity-75 text-start w-2/3 my-6 relative'>Download the 3UM logo including blue, white, and black versions. The blue version is preferred with the other colors available for readability on different backgrounds.
            <span className='absolute text-blue-700 -bottom-8 -right-5 cursor-pointer'>Download 3UM Logo Files</span>
          </span>
          <Image alt='logo' src={logo} width={100} className='object-contain' />
        </div>

        <Media />
      </section>

      <section id="contact" className='flex flex-col my-16 items-center'>
        <div className='text-2xl font-bold opacity-75'>Contact us</div>
        <span className='opacity-75 text-center sm:w-2/3 w-full my-6'>Thank you for your interest in 3UM.  Please use the form below to submit your inquiry, and our team will respond as soon as we can.</span>
        <Form />
      </section>


    </>
  )
}

export default page