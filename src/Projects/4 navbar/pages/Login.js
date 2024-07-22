import React from 'react'
import { Tamplate } from '../components/Tamplate'
import image from '../assets/login.png'
import frame from '../assets/frame.png'
const Login = ({setLoginbtn}) => {
  return (
    <div className='bg-black'>
        <Tamplate
            heading={'welcome back'}
            subheading={'Buils skills for today, tommorw, and beyond.'}
            subheadingInBlue={'Education to future proof your career.'}
  
            btn2={'Login with google'}
            formType={'Login'}
            image={image}
            frame={frame}
            setLoginbtn={setLoginbtn}
        />
    </div>
  )
}

export default Login