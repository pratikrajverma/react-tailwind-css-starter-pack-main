import React from 'react'
import { FaCartShopping } from "react-icons/fa6"; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div >
        <div className='flex justify-around items-center bg-green-200 py-2 overflow-y-hidden h-10'>
           <NavLink to='/'> <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg' className='p-5' width={100}/></NavLink>

            <div className='flex justify-center gap-5 items-center'>
           <NavLink to='/'>
             <p className='font-bold hover:bg-green-400 p-1 px-3 rounded-md duration-300'>Home</p> 
           </NavLink>    

           <NavLink to='/cart'>
                <FaCartShopping />

           </NavLink> 
            </div>

        </div>
    </div>
  )
}

export default Navbar