import React, { useContext, useEffect } from 'react'
import Header from './Components/Header'
import Blogs from './Components/Blogs'
import Pagination from './Components/Pagination'
import { AppContext } from './context/appContext'

const Main = () => {
  const {fetchBlogsdata} = useContext(AppContext)

  useEffect(() => {
    fetchBlogsdata()
  }, []) //

  return (
    <div >
        <Header/>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default Main