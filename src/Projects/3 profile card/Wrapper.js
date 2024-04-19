import React from 'react'
import reviews from './data';
import Header from './Header';
import Cards from './Cards';


const Wrapper = () => {
  return (
    <div className='flex flex-col items-center gap-[4rem] h-[100vh] bg-gray-300'>
        <Header></Header>

        <Cards cards={reviews }></Cards>
    </div>
  )
}

export default Wrapper