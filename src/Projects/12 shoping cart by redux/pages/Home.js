import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
    const API_URL = 'https://fakestoreapi.com/products'

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([]);

    async function fetchProductData(){
      setLoading(true);
      try{
        const response = await fetch(API_URL)
        const data = await response.json()
        console.log(data)
        setPosts(data)
      }catch(e){
        console.log('error in fetch product data', e)
        setPosts([]);
      }

      setLoading(false) 
      
    }

    useEffect(()=>{
      fetchProductData()
    },[])
    return (
    <div>
       {
        loading ? <Spinner/> : (
         posts.length > 0 ? ( 
            <div>
              {
                posts.map((post)=>(
                  <Product key={post.id} post={post}/>
                ))
              }
            </div>
         ) : <p>No posts found</p>
        )
       }

    </div>
  )
}

export default Home