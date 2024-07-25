import React, { useContext, useEffect } from 'react'
 
import { AppContext } from './context/appContext'
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom'
import Home from './pages/Home'
import { BlogPage } from './pages/BlogPage'
import TagPage from './pages/TagPage'
import { CategoryPage } from './pages/CategoryPage'

const Main = () => {
  const {fetchBlogsdata} = useContext(AppContext)

  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation();



  useEffect(() => {
    const page = searchParams.get('page') ?? 1

    if(location.pathname.includes('tags')){
      const tag = location.pathname.split('/').at(-1).replaceAll('-',' ');
      fetchBlogsdata(Number(page), tag)
    }
    else if(location.pathname.includes('categories'))
      {
        const category = location.pathname.split('/').at(-1).replaceAll('-',' ');
        fetchBlogsdata(Number(page), null, category)
        
      }else{
        fetchBlogsdata(Number(page));
      }

  }, [location.pathname, location.search]) //

  return (
    <div  className='select-none'>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/blogs/:blogId' element={<BlogPage/>} />
          <Route path='/tags/:tag' element={<TagPage/>} />
          <Route path='/categories/:category' element={<CategoryPage/>} />

        </Routes>
    </div>
  )
}

export default Main