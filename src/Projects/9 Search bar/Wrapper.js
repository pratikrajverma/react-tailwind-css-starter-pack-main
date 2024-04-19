import React, { useState } from 'react'

const Wrapper = () => {
    // const items = ['A item 1', 'B item 2', 'C item 3', 'D item 4', 'E item 5', 'F item 6', 'G item 7'];

    // const filteredItems = items.filter(item => item.toLocaleLowerCase.include(searchitem.toLocaleLowerCase))

    const[searchitem, setSearchitem] = useState('')
  return (
    <div>ssdfsd fdsf dsf
        <input type='text' placeholder='search...' onChange={(e)=>setSearchitem(e.target.value)}/>
        <ul>
            {
                {/* filteredItems.map((item, index)=>(
                    <li key={index}>
                        {item}
                    </li>
                ))         */}
            }
        </ul>
    </div>
  )
}

export default Wrapper