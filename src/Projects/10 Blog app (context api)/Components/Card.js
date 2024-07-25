import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Card = ({title, author, category,date, content , tags}) => {
  const {brightBtn} = useContext(AppContext)

  return (
    <div className={`${brightBtn?'bg-gray-300 text-black':'bg-black text-white'} border p-2 `}>
        <p>{title}</p>  
        <p>
            By <span>{author}</span> on <span className='text-xl font-semibold hover:text-red-400 text-red-600'>{category}</span>
        </p>
        <p>Published on: {date}</p>
        <p>{content}</p>
<div className='p-2 border-2  overflow-hidden bg-gray-200'>
        {
            tags.map((tag, index) => (
                <span key={index} className=' hover:font-bold  
                 text-blue-500 font-mono mr-8     underline'>#{tag} </span>
            ))
        }</div>

    </div>
  )
}

export default Card