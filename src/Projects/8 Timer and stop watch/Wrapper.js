import React, { useEffect, useState } from 'react'

const Wrapper = () => {

    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if(timer > 0){
            const time = setTimeout(() => {
                setTimer(timer - 1 );
            }, 1000);
            clearTimeout(time)
        }

    },[timer])


    const timmerHandler = ()=>{
        time()
    }


  return (
    <div className='flex flex-col'>
        <div className='border'>
            <p>Timer</p>
            <div className='flex'><input type="number" onChange={(e)=>setTimer(e.target.value)}/> <button onClick={timmerHandler}>Start</button></div>
            <p className='border'>{timer}</p>
        </div>

        <div></div>
    </div>
  )
}

export default Wrapper