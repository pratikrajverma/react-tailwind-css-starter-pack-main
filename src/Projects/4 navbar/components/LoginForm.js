import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
const LoginForm = ({ setLoginbtn }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const [showpassword, setShowpassword] = useState(false)
    const navigate = useNavigate()

    const changehandler = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }


    const loginHandler = (event) => {
        event.preventDefault();
        console.log(formData);
        toast.success('loged in');
        setLoginbtn(false);
        navigate('/dashboard')
    }


    return (
        <div>
            <form className='flex flex-col   gap-y-5   '
                onSubmit={loginHandler}>
                <label className='w-full '>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>
                        Email address<sup className='text-pink-200'>*</sup>
                    </p>
                    <input type='email'
                        required
                        placeholder='Enter email id'
                        onChange={changehandler}
                        value={formData.email}
                        name='email'
                        className='bg-gray-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] border-b border-richblack-200'>
                    </input>

                </label>

                <label className='relative'>
                    <p className='text-[0.875rem] text-richblack-5 mt-5 leading-[1.375rem]'>
                        Password<sup className='text-pink-200'> *</sup>
                    </p>

                    <input type={showpassword ? 'text' : 'password'}
                        required
                        placeholder='password'
                        onChange={changehandler}
                        value={formData.password}
                        name='password'
                        className='bg-gray-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]
                                 border-b border-richblack-200 outline-none'>
                    </input>

                    <span className='text-richblack-200 cursor-pointer absolute right-3 bottom-[30px] text-2xl '
                        onClick={() => setShowpassword((pre) => !pre)}>
                        {
                            showpassword ? (<AiOutlineEyeInvisible />) : (<AiOutlineEye />)
                        }
                    </span>



                    <p className='text-blue-100 text-xs mt-1 max-w-max ml-auto'>Forgot password</p>


                </label>

                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type='submit'
                >
                    login
                </button>

            </form>


        </div>

    )
}

export default LoginForm