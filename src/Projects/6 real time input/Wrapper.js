import React, { useState } from 'react'

const Wrapper = () => {

    const[input,setInput] = useState()

  return (
    <div>
        <p>real time input by user</p>
        <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} className='outline-dashed oun'/>
        <p>your input is : {input}</p>
    </div>
  )
}

export default Wrapper