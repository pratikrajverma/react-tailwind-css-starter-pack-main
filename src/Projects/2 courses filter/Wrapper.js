import React, { useEffect, useState } from 'react'
import {filterData, apiUrl } from './data';
import Filters from './Filters';
import Navbar from './Navbar';
import Courses from './Courses';


const Wrapper = () => {
const[data,setdata] = useState(0);
const[click,setclick] = useState('All');


  useEffect(() =>{
    const fetchdata = async() =>{
        const response = await fetch(apiUrl);
        const output = await response.json();
        setdata(output.data);
         
    }

    fetchdata();
  },[])



  return (
    <div className='bg-gray-500 min-h-[100vh] h-max pb-10'> 
      <Navbar></Navbar>

      <Filters filterData={filterData} click={click} setclick={setclick} ></Filters>

      <Courses courses={data} click={click}></Courses>

    </div>
  )
}

export default Wrapper