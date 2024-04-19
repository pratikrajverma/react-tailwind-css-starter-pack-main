import React, { useState } from 'react'
 import Card from './Card' 
import { LuChevronLeftCircle ,  LuChevronRightCircle} from "react-icons/lu";
 

const Cards = ({cards}) => {
    const[index,setindex] = useState(0);

    const leftHandler = () => {
        if(index===0)
        {
            setindex(cards.length-1);
        }else{
            setindex(index-1);
        }
    }

    const rightHandler = () => {
        if(index===cards.length-1)
        {
            setindex(0);
        }else{
            setindex(index+1);
        }
    }

    const surpeiseHandler = () => {
            setindex(Math.floor(Math.random() *cards.length))
    }



  return (
    <div className='flex flex-col items-center justify-center h-[30rem] gap-5 hover:shadow-xl transition-all duration-700 bg-white  -mt-10  mb-8  w-[40rem] '>
        <Card key={cards[index].id} cardData={cards[index]}></Card>

        <div className='text-sky-300 flex gap-6 text-2xl'>
            <button onClick={leftHandler} className=' active:text-sky-500'><LuChevronLeftCircle /></button>
            <button onClick={rightHandler} className=' active:text-sky-500'><LuChevronRightCircle /></button>
        </div>

        <button onClick={surpeiseHandler} className='py-2 bg-sky-300 px-8 active:scale-95 transition-all duration-300 rounded-md text-white text-2xl font-semibold hover:bg-sky-500'>Surprise Me</button>
    </div>
  )
}

export default Cards