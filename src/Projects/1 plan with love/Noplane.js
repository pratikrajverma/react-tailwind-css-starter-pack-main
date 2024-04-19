import React from 'react'

const Noplane = ({setrelode}) => {
  return (
    <div className='flex  flex-col items-center justify-center gap-10 mt-14'>
        <div className='font-bold text-3xl'>No plane left  </div>
        <button className='py-3 px-10 bg-green-200' onClick={ () =>  setrelode(true) }> Relode Plan</button>
    </div>
  )
}

export default Noplane