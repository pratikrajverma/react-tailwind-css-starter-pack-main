import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Header = () => {
  const {setBrightBtn} = useContext(AppContext)
  return (
    <div className='sticky font-semibold top-0 p-2 bg-gray-200 flex justify-center'>
      <div className=' text-4xl text-center mb-5 '>
        CODE help blogs

      </div>
      <div className='border border-pink-500 translate-x-[200px] flex gap-4 bg-gray-400 items-center'>
        <div className='w-10 h-10 rounded-full border border-black bg-gray-100  active:scale-95'
        onClick={()=>setBrightBtn(true)} ></div>
        <div className='w-10 h-10 rounded-full border border-black bg-black active:scale-95'
        onClick={()=>setBrightBtn(false)} ></div>
      </div>
    </div>
  )
}

export default Header