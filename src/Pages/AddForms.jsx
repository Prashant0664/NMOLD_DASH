import React from 'react'
import AddProduct from '../Components/AddForms/AddProduct'
import AddInvoice from '../Components/AddForms/AddInvoice'

const AddForms = () => {
  return (
    <>
        <div className='  w-[100%]  h-[100vh] px-[2rem] mt-[2rem] flex justify-center '>
            <div className=''>
                <AddProduct />
                {/* <AddInvoice/> */}
            </div>
        </div>
    </>
  )
}

export default AddForms