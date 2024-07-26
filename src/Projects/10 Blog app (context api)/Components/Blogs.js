import React, { useContext } from 'react'
import Spinner from './Spinner'
import Card from './Card'
import { AppContext } from '../context/appContext'

const Blogs = () => {
  const { posts, loading } = useContext(AppContext)

  return (
    <div>
      {
        loading ? (
          <Spinner />
        ) : (
          posts.length === 0 ? (<div>
            No blog posts found
          </div>) : (
            <div className='flex flex-col gap-5'>
              {
                posts.map(post => (
                  <Card key={post.id} title={post.title} id={post.id} author={post.author} category={post.category} date={post.date} content={post.content} tags={post.tags} />
                ))

              }
            </div>
          )
        )
      }
    </div>
  )
}

export default Blogs