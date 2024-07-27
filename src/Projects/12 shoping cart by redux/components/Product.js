import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/slices/cartSlice";
import toast from "react-hot-toast";

const Product = ({ post }) => {
 
  const { cart } = useSelector((state) => state);

  const dispatch = useDispatch()


  const removeFromCart =  ()=>{
    dispatch(remove(post.id));
    toast.error('Items removed from cart ')
  }
  
  const addToCart = () => {
    dispatch(add(post));
    toast.success('Items added to success')
  };



  return (
    
      <div className="p-5 border-2 rounded-xl hover:shadow-gray-300 hover:shadow-xl flex flex-col gap-5">
        <p className="font-bold">{post.title.substr(0,10)}...</p>
        <p className="text-sm">{post.description.substr(0,100)}...</p>
        <div>
          <img src={post.image}   className="w-[100px] h-[100px]"/>
        </div>
        <p>{post.price}</p>

          <div className="border group bg-green-400 text-white font-bold text-center rounded-md">
            {cart.some((p) => p.id === post.id) ? (
              <button onClick={removeFromCart} className="  w-full"> Remove</button>
            ) : (
              <button onClick={addToCart} className="  w-full"> Add to cart</button>
            )}
          </div>
      </div>
 
  );
};

export default Product;
