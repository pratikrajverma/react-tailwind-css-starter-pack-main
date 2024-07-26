import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/appContext';
import { baseUrl } from '../baseUrl';
import Card from '../Components/Card';
import Header from '../Components/Header';
 
import Blogs from '../Components/Blogs';

export const BlogPage = () => {
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigation = useNavigate();
  const { loading, setLoading } = useContext(AppContext);
  const blogId = location.pathname.split('/').at(-1);

  async function fetchrelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`
 
 
    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log('blogs fetched', data)
      setBlog(data.posts)
      setRelatedBlogs(data.posts)

    } catch (error) {
      console.error(error);
      setBlog(null);
      setRelatedBlogs([])
    }
    setLoading(false);
  }


  useEffect(() => {

    if (blogId) {
      fetchrelatedBlogs()
    }
  }, [location.pathname])


  return (
    <div>
      <Header />

      <div>
        <button onClick={() => navigation(-1)}>
          back
        </button>
      </div>

      {
        loading ? <p>loading.....</p> : blog ? (
          <div>
            <Blogs />

            <h2>Related Blogs</h2>

            {
              relatedBlogs.map(post => (
                <Card key={post.id} title={post.title} author={post.author} category={post.category} date={post.date} content={post.content} tags={post.tags} />
              ))

            }
          </div>
        ) : (<p>No blogs found</p>)
      }
    </div>
  
  )
}
