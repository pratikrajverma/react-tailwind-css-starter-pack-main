import React from 'react'
import { Tamplate } from '../components/Tamplate'
import image from '../assets/signup.png'
import frame from '../assets/frame.png'

const Signup = ({setLoginbtn}) => {
  return (
    <div className='bg-black'>
           <Tamplate
            heading={'Join the millions learning to the code with studynotion for free'}
            subheading={'Buils skills for today, tommorw, and beyond.'}
            subheadingInBlue={'Education to future proof your career.'}
            
            btn2={'sign up with google'}
            formType={'Signin'}
            image={image}
            frame={frame}
            setLoginbtn={setLoginbtn}
        />
    </div>
  )
}

export default Signup