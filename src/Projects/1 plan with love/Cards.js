import React from 'react'
import Card from './Card'
const Cards = ({tours, clickhandler }) => {

  return (
    <div className='flex flex-wrap gap-8 justify-center mt-[4rem]'>
        {
            tours.map((tour) =>{
                return <Card key={tour.id}  tour={tour} clickhandler={clickhandler}></Card>
            })
        }
    </div>
  )
}



export default Cards