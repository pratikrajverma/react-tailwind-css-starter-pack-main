import React from 'react'
import LoginForm from './LoginForm'
import  SignupForm  from './SignupForm'
export const Tamplate = ({ heading, subheading, subheadingInBlue, btn1, btn2, formType,setLoginbtn, image, frame }) => {
  return (
    <div className='flex w-3/4 gap-10 mx-auto bg-black text-white'>

      <div className='w-[40%] gap-5 flex flex-col'>
        <h1 className='text-2xl'>{heading}</h1>

        <p>{subheading} <span className="text-blue-500">{subheadingInBlue}</span></p>

      
        {
          formType === 'Login' ? (
            <LoginForm setLoginbtn={setLoginbtn}/>
          ) : (
            <SignupForm setLoginbtn={setLoginbtn}/>
          )
        }

        
        
        <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='h-[1px] bg-gray-400 w-full'></div>
                <p className=' font-medium [leading-snug]' >OR</p>
                <div className='h-[1px] bg-gray-400 w-full'></div>
            </div>
     
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">{btn2}</button>

      </div>

      <div className='w-[50%]  relative'>
        <img src={frame} width={400} className='absolute top-5 left-5 ' /> 
       <img src={image} width={400} className='absolute ' /> 

      </div>

    </div>
  )
}
