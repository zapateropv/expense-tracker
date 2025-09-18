import React from 'react'
import { useContext } from 'react'
import { CustomContext } from '../Hooks/CustomProvider'

const Balance = () => {

 const {info} = useContext(CustomContext)
 const balance = info.reduce((a, b) => a + Number(b.amount), 0)

 
  
  return (
    <div className='flex flex-col justify-center items-center max-w-xs w-full text-white  '>
      <div>
        <h1 className='mt-10 text-2xl'>Expense Tracker</h1>
      </div>
      <div className='flex flex-col justify-center items-start w-full'>
        <h2 className='mt-15'>YOUR BALANCE</h2>
        <p className='text-4xl'>₱{balance}.00</p>
      </div>
    </div>
  )
}



export default Balance
