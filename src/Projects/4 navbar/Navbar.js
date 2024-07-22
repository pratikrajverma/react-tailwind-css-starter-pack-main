import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({setLoginbtn,loginbtn}) => {
    
    const navigate = useNavigate()

    const logoutHandler = () => {
        setLoginbtn(true)
        toast.success('logged out')
        navigate('/')
    }

    return (
        <div className='flex justify-around bg-black '>
            <div>
                <ul className='  text-white flex  gap-5 py-4'>
                    <Link to='/'><li>
                        <p>Home</p>
                    </li></Link>

                    <Link to='/about'><li>
                        <p>About</p>
                    </li></Link>

                    <Link to='/contact'><li>
                        <p>Contact</p>
                    </li></Link>
                </ul>
            </div>


            {/* login and signup button */}
            <div>
                <ul className='  text-white flex  gap-5 py-4'>
                     {
                        loginbtn && <Link  to='/login'>
                            <li>
                                <p>Login</p>
                            </li>
                        </Link>
                     }

                     {
                        loginbtn && <Link  to='/signup'>
                            <li>
                                <p>Signup</p>
                            </li>
                        </Link>
                     }

                     {
                        !loginbtn && <Link  to='/dashboard'> 
                            <li>
                                <p>Dashboard</p>
                            </li>
                        </Link>
                     }

                     {
                        !loginbtn &&  
                            <li onClick={logoutHandler}>
                                <p>Logout</p>
                            </li>
                        
                     }
                </ul>
            </div>
        </div>
    )
}

export default Navbar