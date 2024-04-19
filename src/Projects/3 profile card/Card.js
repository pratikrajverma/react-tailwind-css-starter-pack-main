import React from 'react'
import { FaQuoteLeft, FaQuoteRight  } from "react-icons/fa";



const Card = ({cardData}) => {
  return (
    <div className='flex  flex-col items-center w-[35rem] mx-auto h-[14rem] '>
        <div className=' absolute left-[21rem] top-28 '>
            <img className='w-[8rem] rounded-full aspect-square' src={cardData.image}></img>
            <div className='w-[8rem] absolute -z-10    bottom-[20px] aspect-square bg-sky-300 rounded-full'></div>
        </div>

        <h1 className='font-bold text-2xl m-2'>{cardData.name}</h1>


        <h1 className='text-sky-300 font-semibold mb-5'>{cardData.job}</h1>

        <div className='text-sky-300 mb-3'><FaQuoteLeft /></div>

        <h1 className='min-h-[6rem] mb-3' >{cardData.text}</h1>

        <div className='text-sky-300'><FaQuoteRight />
</div>
    </div>
  )
}

export default Card