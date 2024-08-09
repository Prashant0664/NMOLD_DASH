import React from 'react'
import PurchaseAllComponent from '../Components/PurchaseAll/PurchaseAll'
const PurchaseAll = () => {
  return (
    <div className='ml-[5%]  w-[95%] h-[100vh] px-[2rem] mt-[2rem]'>
      <div className=''>
        <div className=' font-semibold text-[20px] mb-5'>
          &lt;  All Products
        </div>
        <PurchaseAllComponent />
      </div>
    </div>
  )
}

export default PurchaseAll 