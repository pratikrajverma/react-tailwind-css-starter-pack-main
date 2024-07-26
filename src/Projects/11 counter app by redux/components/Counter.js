import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/slices/CounterSlice';
import { DiAptana } from 'react-icons/di';

const Counter = () => {
    const count = useSelector((state)=> state.counter.value )
    const dispatch = useDispatch();
    return (
        <div>
            <button
            onClick={()=>dispatch(increment())}>Increment</button>
            <br />
            <div>
                {
                    count
                }
            </div>

            <br />
            <button 
            onClick={()=>dispatch(decrement())}>Increment</button>
        </div>
    )
}

export default Counter