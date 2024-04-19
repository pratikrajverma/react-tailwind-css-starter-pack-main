import React from 'react'
import Card from './Card';
const Courses = ({courses , click}) => {
    let allcourses = [];
    if(click==='All')
    {
        const arrayofaray = Object.values(courses);
        arrayofaray.forEach((value)=>{
            value.forEach((course)=>{
                allcourses.push(course)
            })
        })
    }
    else{
        allcourses = courses[click];
    }


  return (
    <div className='flex flex-wrap justify-center gap-6 mt-6'>
        {
                allcourses.map((card)=>{
                return <Card key={card.id} card={card}></Card>
            })
        }
    </div>
  )
}

export default Courses