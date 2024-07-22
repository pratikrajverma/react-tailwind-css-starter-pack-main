import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Card = ({title, author, category,date, content , tags}) => {
  const {brightBtn} = useContext(AppContext)

  return (
    <div className={`${brightBtn?'bg-gray-300 text-black':'bg-black text-white'} border p-2 `}>
        <p>{title}</p>  
        <p>
            By <span>{author}</span> on <span>{category}</span>
        </p>
        <p>Published on: {date}</p>
        <p>{content}</p>

        {
            tags.map((tag, index) => (
                <span key={index} className='text-blue-400 mr-5'>{tag}, </span>
            ))
        }

    </div>
  )
}

export default Card