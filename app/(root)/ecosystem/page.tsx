import Image from "next/image";
import Link from "next/link";

import empower from '@/public/assets/ecosystem/empower_ecosystem.png'
import finance from '@/public/assets/ecosystem/finance.png';
import verse from '@/public/assets/ecosystem/verse.png'
import genesis from '@/public/assets/ecosystem/genesis.png'

const page = () => {
  return (
    <header className="flex flex-col items-center">
      <div className=' flex flex-row my-10 justify-center relative '>
        <div className='image-container rounded-xl'>
          <Image alt='empower' src={empower} className="bg-black bg-blend-darken rounded-3xl brightness-75 image" />
          <div className='text-white absolute self-center text-2xl font-bold left-[10%] top-[30%] z-10'>3UM empowers its <br />interconnected community</div>
        </div>
      </div>

      <div className='flex flex-row justify-center gap-16 opacity-70'>
        <Link href='#ID' className='text-blue-700 font-bold'>3UM ID</Link>
        <Link href='#finance'>3UM Finance</Link>
        <Link href='#genesis'>3UM Genesis</Link>
        <Link href='#protocol'>ABQ Protocol</Link>
        <Link href='#verse'>3UM Verse</Link>
        <Link href='#projects'>Projects</Link>
        <Link href='#acamedy'>Acamedy</Link>
        <Link href='#partners'>Partners</Link>
      </div>

      <section id="ID" className='flex flex-col my-16 items-center'>
        <div className='text-2xl font-bold opacity-75'>3UM ID</div>
        <span className='opacity-75 text-center w-2/3 my-6'>3UM ID is a groundbreaking technology company revolutionizing how people interact with cutting-edge technologies such as Web3, AI, and quantum computing. As we prepare for our Series A funding and upcoming token launch, our primary focus is to raise capital for a global expansion and attract investors. </span>
      </section>

      <section id="finance" className='border border-blue-400 my-16 w-3/4 rounded-xl relative flex flex-col items-center'>
        <div className="flex flex-col pl-8 absolute">
          <div className="text-2xl font-bold opacity-75 py-5 self-center"> 3UM Finance</div>
          <div className="w-7/12 px-8 leading-7">The rise of web3 in the financial industry has been increasing day by day. Let us look at the benefits of web3 in the financial industry.
            <br />Decentralized System <br />
            Anyone, regardless of location or identification, can use web3 to access financial services. DeFi ensures that its services are customized to its client's requirements and needs by giving them more control over their funds.
            <br />Unrestricted Access <br />
            Individuals who do not have access to a bank account can still use it to perform financial transactions at any time. Everyone has access to Defi, and there is no middleman to interfere with user's financial matters.
          </div>
        </div>
        <Image alt='finance' src={finance} height={540} className="ml-auto" />

        <button className='bg-white absolute mt-8 cursor-pointer border-[2px] border-blue-700 text-gradient rounded-full px-8 py-1 bottom-5'>START YOUR FREE TRIAL</button>
      </section>

      <section id="genesis" className='border border-blue-400 w-3/4 my-16 rounded-xl relative flex flex-col items-center'>
        <div className="flex flex-col pl-8 absolute">
          <div className="text-2xl font-bold opacity-75 py-5 self-center"> 3UM Genesis</div>
          <div className="w-7/12 px-8 leading-7">
          Genesis is an exclusively Web3 & SaaS Web Templates UI Kit, meticulously crafted with Figma. This template is not just another web design. It's a comprehensive solution for developers and designers aiming to build top-tier Web3 & SaaS websites with ease.
          <br /><br />
          Genesis leverages all Figma features, including design system, typography, iconography, auto layout, dynamic components & variants. You can use our set vector UI kit symbols to build your product design. All symbols and objects are vector-based and easily editable.
          </div>
        </div>
        <Image alt='genesis' src={genesis} height={540} className="ml-auto" />
      </section>

      <section id="verse" className='border border-blue-400 w-3/4 my-16 rounded-xl relative flex flex-col items-center'>
        <div className="flex flex-col pl-8 absolute">
          <div className="text-2xl font-bold opacity-75 py-5 self-center"> 3UM Verse</div>
          <div className="w-7/12 px-8 leading-7">
          Violet Verse's decentralized CMS allows anyone with a crypto wallet to engage with their media dApp and earn rewards in crypto. Their blockchain will be used to host content and push content live. For instance, voting on drafts will trigger a multi-signature wallet action. The article and writer will get paid in tandem, and the writer's bylines are captured in the smart contract.  This solves three problems: misinformation, copyright infringement, and writers needing to get paid. The article and writer will get paid in tandem, and the writer's bylines are captured in the smart contract.  This solves three problems: misinformation, copyright infringement, and writers needing to get paid.
          </div>
        </div>
        <Image alt='verse' src={verse} height={540} className="ml-auto" />
      </section>

      
    </header>
  )
}

export default page