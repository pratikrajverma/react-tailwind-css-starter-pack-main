import React from 'react'
import Header from '../Components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaTags } from 'react-icons/fa'
import { BlogPage } from './BlogPage'
import Pagination from '../Components/Pagination'
import Blogs from '../Components/Blogs'

const TagPage = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const tag = location.pathname.split('/').at(-1)
  return (
    <div>
      <Header/>

      <div>
        <button onClick={()=>navigation(-1)}>
          back
        </button>
      </div>


      <h2>
        Blogs On <span> #{tag}</span>
      </h2>

      <Blogs/>

      <Pagination/>

    </div>
  )
}

export default TagPage