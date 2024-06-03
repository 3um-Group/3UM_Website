import Image from "next/image"

type cardType = {
  image: any,
  Symbol: any,
  typeOfSymbol: string,
  title: string,
  date: string,
  content: string,
  mobile: boolean
}

const Card = ({ image, Symbol, typeOfSymbol, title, date, content, mobile }: cardType) => {


  return (
    <div className={`${mobile? 'w-3/4':'w-1/4'} text-start flex flex-col border border-blue-200 rounded-3xl`}>
      <Image alt='web3' src={image} className='mb-auto' />
      <div className='p-3 flex flex-col'>
        <div className='text-blue-600'>{title}</div>
        <div className='font-bold my-2'>{date}</div>
        <span>{content}</span>
        {typeOfSymbol === 'image' ? <Image src={Symbol} alt='' width={35} className='self-end' /> : <Symbol className='self-end w-9 my-2 text-xl' />}
      </div>
    </div>
  )
}

export default Card