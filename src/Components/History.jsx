import React from 'react'
import { CustomContext } from '../Hooks/CustomProvider';
import { useContext } from 'react';

const History = () => {

  const { info } = useContext(CustomContext);


  return (
    <div className='max-w-xs w-full '>
      <div>
        <h1 className='text-white mt-10 border-b-1 mb-2 pb-2 text-lg font-semibold'>HISTORY</h1>
      </div>
      <div className='overflow-scroll p-2 max-h-70'>
     {info.length > 0 ?
        info.map((item, index) => (
          <div className={`flex justify-between  bg-white text-black 
      p-2 rounded-xs mt-4 border-r-8  ${item.isNegative ? 'border-red-500' : 'border-green-500'}`} key={index}>
            <p>{item.text}</p>
            <p >{!item.isNegative ? "+" : "-"}₱{item.amount}</p>
          </div>
        ))
     : <p className='text-red-600 text-center'>no history found</p> }
      </div>
     
    </div>
  )
}

export default History
