import React, { useState } from 'react'
import data from './data'
import Cards from './Cards';
import Header from './Header';
import Noplane from './Noplane';

const Wrapper = () => {
  const[ tours ,setdata] = useState(data);
  const[relode,setrelode]  = useState(false);

  if(relode==true)
  {
    setdata(data);
    setrelode(false);
  }

  function clickhandler(id) {
    const newarray = tours.filter((tour)=>{
      if(tour.id !== id)
      {
        return tour;
      }
    })
    setdata(newarray);
  }


   

  return (
    <div >
        <Header></Header>

        {tours.length === 0 ? <Noplane setrelode={setrelode} > </Noplane> : <Cards tours = { tours } clickhandler={clickhandler}></Cards>}
    </div>
  )
}

export default Wrapper