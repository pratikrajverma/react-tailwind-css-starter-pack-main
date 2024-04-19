import React, { useState } from 'react'

const Wrapper = () => {
    const[count,setCount] = useState(0)

  return (
    <div className='flex flex-col items-center justify-center text-4xl font-bold '>
        <div>Hii this is counter app....</div>
        <div className='flex items-center gap-10 border p-5'>
            <button className='p-5' onClick={()=>setCount(count-1)} >-</button>
            <span>{count}</span>
            <button className='p-5' onClick={()=>setCount(count+1)}>+</button>
        </div>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}

export default Wrapper