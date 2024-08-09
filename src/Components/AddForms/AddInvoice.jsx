import React from 'react'

const AddInvoice = () => {
    return (
        <>
            <div className='home-table2-type3  rounded-xl flex justify-center'>
                <div className='pt-[1.6rem] flex flex-col items-center w-full '>
                    <div className='font-bold text-[25px] text-center'>
                        Add Invoice
                    </div>
                    <div className='w-[95%] mt-2'>
                    </div>
                    <div className='mt-4 w-[95%]'>
                        <div className=''>
                            <form className='flex flex-col gap-6'>
                                <div className=' add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Customer Name</label>
                                    <div className='mt-1'>
                                        <input type='text' placeholder='Name' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className=' add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Invoice Date</label>
                                    <div className='mt-1'>
                                        <input type='date' placeholder='date' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className=' add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Purchase Numbere</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='Purchase Number' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className=' add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Amount</label>
                                    <div className='mt-1'>
                                        <input type="number" placeholder='Amount' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className=' add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Due Amount</label>
                                    <div className='mt-1'>
                                        <input type='number' placeholder='Due /-' className='login-input4 w-full' />
                                    </div>
                                </div>
                                <div className=' add-items-class'>
                                    <label className='px-[10px] text-[15px]'>Due Date</label>
                                    <div className='mt-1'>
                                        <input type='date' placeholder='Due Dtae' className='login-input4 w-full' />
                                    </div>
                                </div>
                            </form>
                            <div className='flex justify-center items-center mt-8 mb-6 w-full'>
                                <div className='btn w-[300px]' onClick={() => { }}>Add</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddInvoice