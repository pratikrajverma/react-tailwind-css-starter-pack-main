import React, { useState } from 'react'
import './card.css'
const Card = (props) => {
    let description =  props.tour.info.substr(0,200);
    const[readmore,setreadmore] = useState(false);
    

    const btnHandler = ()=>{
        props.clickhandler(props.tour.id)
    }



  return (
    <div className='flex flex-col gap-2 p-4 w-[19rem] rounded-xl  h-max card'>
        <img className='w-[17rem] aspect-square object-cover ' src={props.tour.image}></img>

        <p className='text-lime-500 font-bold text-xl'>₹{props.tour.price}</p>

        <p className='font-bold text-xl'>{props.tour.name}</p>

        <p>{readmore ? props.tour.info : description}

            <span className='text-sky-500 ml-2 cursor-pointer' onClick={()=>setreadmore(!readmore)}>{readmore ? 'Show Less' : 'read more'}</span>
        </p>

        <button onClick={btnHandler} className='py-1 mb-4 px-10  hover:bg-red-600  hover:text-white  rounded-md bg-red-100 font-semibold text-2xl  border-[1px] border-black mx-auto'> Not interested</button>
    </div>
  )
}

export default Card