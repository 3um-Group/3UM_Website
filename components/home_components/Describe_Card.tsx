import Image from "next/image"


type cardType = {
  image: any,
  title: string,
  content: string
}

export default function Card({ image, title, content }: cardType) {
  return (
    <div className="overflow-hidden">

      {/*computer version*/}
      <div className='sm:flex justify-center gap-6 mt-0 hidden'>
        <div className='flex flex-col border-l-2 border-black mr-5 w-1/3 py-2.5 px-5 my-5 mx-7'>
          <div className='font-bold text-xl opacity-75'>{title}</div>
          {content}
        </div>
        <Image alt="" src={image} className="max-w-80" />
      </div>

      {/*mobile version*/}
      <div className='sm:hidden flex flex-col items-center gap-6 mt-0'>
        <Image alt="" src={image} className="max-w-60 object-contain" />

        <div className='flex flex-col border-l-2mr-5 w-2/3 py-2.5 px-5 my-5 mx-7 text-center'>
          <div className='font-bold text-xl opacity-75'>{title}</div>
          {content}
        </div>
      </div>
    </div>

  )
}