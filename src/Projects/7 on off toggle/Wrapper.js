import React, { useState } from 'react'

const Wrapper = () => {

    const [toggle, setToggle] = useState(false)

    return (
        <div className={`flex justify-center items-start h-[100vh]  ${toggle ? 'bg-red-500' : 'bg-blue-400'}`}>
            <div className='border flex gap-10 '>
                <input type="checkbox" onClick={() => setToggle(!toggle)} />
                <p>
                    {
                        toggle ? 'on' : 'off'
                    }
                </p>
            </div>
        </div>
    )
}

export default Wrapper