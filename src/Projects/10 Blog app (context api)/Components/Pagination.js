import React, { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Pagination = () => {
  const {page, handlePageChange,totalPages} = useContext(AppContext)
  
  return (
    <div className='flex gap-4 p-5 sticky bottom-0 bg-gray-200'>
      {
        page > 1 && (
          <button
          className='p-2 bg-blue-200 rounded-md font-bold cursor-pointer'
          onClick={()=>handlePageChange(page-1)}>Previous</button>
        )
      }

      {
        page < totalPages && (
          <button
                 className='p-2 bg-blue-200 rounded-md font-bold cursor-pointer'
          onClick={()=>handlePageChange(page+1)}>Next</button>
        )
      }

      <div>
        <p>Pages {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination