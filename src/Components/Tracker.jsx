import React from 'react'
import { useContext } from 'react'
import { CustomContext } from '../Hooks/CustomProvider';

const Tracker = () => {

  const { info } = useContext(CustomContext);

  const incomeItems = info.filter(item => item.amount > 0).reduce((a, b) => a + Number(b.amount), 0)
  const expenseItems = info.filter(item => item.amount < 0).reduce((a, b) => a + Number(b.amount), 0);
  const balance = incomeItems + expenseItems




  return (
    <div className='flex justify-evenly items-center gap-10 p-4 bg-white rounded-xs
    shadow-2xl mt-10 max-w-xs w-full '>
        <div className='flex flex-col items-center justify-center '>
            <h1 className='font-semibold'>INCOME</h1>      
              <p className='text-green-700 text-lg' >₱{incomeItems}.00</p>       
        </div>
          
        <div className='flex flex-col items-center justify-center'>
            <h1 className='font-semibold'>EXPENSE</h1>
            <p className='text-red-700 text-lg'>₱{expenseItems}.00</p>
        </div>
    </div>
  )
}

export default Tracker
