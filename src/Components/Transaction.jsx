import React from 'react'
import useCustom from '../Hooks/useCustom'
import { useContext } from 'react'
import { CustomContext } from '../Hooks/CustomProvider'

const Transaction = () => {

  const {text,setText, amount, setAmount, submitBtn} = useContext(CustomContext)

  return (
    <div className='max-w-xs w-full'>
      <div>
        <h1 className='text-white text-lg border-b-1 pb-2  mt-10 font-semibold'>
            Add new transaction
        </h1>
      </div>
      <div>
        <h2 className='text-white mt-5 mb-2'>Text</h2>
        <input placeholder='Enter text...' className='bg-white text-black w-full outline-none
        p-1 rounded-xs text-sm' value={text} onChange={(e) => setText(e.target.value)}/>
      </div>
      <div>
        <h2 className='text-white mt-5 mb-2'>Amount <br></br>(negative-expense, positive-income)</h2>
        <input placeholder='Enter text...' type='number' className='bg-white text-black w-full outline-none
        p-1 rounded-xs text-sm' value={amount} onChange={(e) => setAmount(e.target.value)}/>
      </div>
      <div>
        <button className='w-full hover:bg-violet-600 cursor-pointer mt-5 font-bold bg-violet-500 text-white p-2 rounded-sm'
        onClick={submitBtn}>Add transaction</button>
      </div>
    </div>
  )
}

export default Transaction
