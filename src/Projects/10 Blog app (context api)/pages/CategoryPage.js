import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../Components/Pagination'
import { BlogPage } from './BlogPage'
import Header from '../Components/Header'
import Blogs from '../Components/Blogs'

export const CategoryPage = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const category = location.pathname.split('/').at(-1)
  return (
    <div>
      <Header />

      <div>
        <button onClick={() => navigation(-1)}>
          back
        </button>
      </div>


      <h2>
        Blogs On <span> #{category}</span>
      </h2>

      <Blogs />

      <Pagination />

    </div>
    
  )
}
