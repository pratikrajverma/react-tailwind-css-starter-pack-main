import React, { useState } from 'react'

const Wrapper = () => {
    const items = ['A item 1', 'B item 2', 'C item 3', 'D item 4', 'E item 5', 'F item 6', 'G item 7', 'itemBol','itemCat','itemDog','itemApple','itemApplebol','itemapplecat','itembolcat'];
    const [searchitem, setSearchitem] = useState('')

    const filteredItems = items.filter(item => item.toLowerCase().replace(' ','').includes(searchitem.toLowerCase().replace(' ','')))

    return (
        <div>
            <div className='flex justify-center'>
            <div className='flex flex-col items-start w-[50%] border mt-10 gap-5  '>
                <input type='text' placeholder='search...' onChange={(e) => setSearchitem(e.target.value)}
                    className='h-10  w-full bg-fuchsia-200 px-4 font-bold text-fuchsia-700'
                />
                {searchitem && <ul className='opacity-100 transition-opacity duration-500'>
                    {
                        filteredItems.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>}
            </div>
            </div>

            <div>
                <p>Total available items</p>
                <ul>
                    {
                        items.map((item, index) => (
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>


        </div>
    )
}

export default Wrapper