import React, { useState } from 'react'

const Product = ({post}) => {
  const [selected , setSelected] = useState(false);

  const btnHandler = () =>{
    setSelected(!selected)
  }

  return (
    <div>
      <div>
        <p>{post.title}</p>
        <p>{post.description}</p>
        <div>
          <img src={post.image} width={200}/>
        </div>
        <p>{post.price}</p>
        <div>
          <button onClick={btnHandler}>
              {
                selected ? <p>Remove Item</p> : <p>Add Item</p>
              }
          </button>

        </div>
      </div>

      
    </div>
  )
}

export default Product