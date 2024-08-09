import React from 'react'

const DeleteConfirmation = ({ ids, setids }) => {
    return (
        <>
            <div className={`${ids === 4 ? "" : "hidden"}`}>
                <div className='bg-white m-auto w-[379px] mt-[15%] p-4 flex flex-col gap-6 rounded-xl'>
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 241 192" fill="none">
                            <path d="M120.5 12C99.6465 12 79.2612 16.9265 61.9221 26.1566C44.583 35.3866 31.0688 48.5056 23.0885 63.8546C15.1082 79.2036 13.0202 96.0932 17.0885 112.388C21.1568 128.682 31.1988 143.649 45.9445 155.397C60.6902 167.145 79.4773 175.145 99.9302 178.386C120.383 181.627 141.583 179.964 160.849 173.606C180.115 167.248 196.583 156.482 208.168 142.668C219.754 128.854 225.938 112.614 225.938 96C225.938 73.7218 214.829 52.3561 195.056 36.603C175.282 20.85 148.464 12 120.5 12ZM120.5 168C102.626 168 85.1525 163.777 70.2904 155.866C55.4283 147.954 43.8447 136.709 37.0044 123.553C30.1642 110.397 28.3744 95.9201 31.8616 81.9535C35.3487 67.9869 43.9561 55.1577 56.5953 45.0883C69.2344 35.0189 85.3377 28.1616 102.869 25.3835C120.4 22.6053 138.571 24.0312 155.085 29.4807C171.599 34.9302 185.714 44.1586 195.644 55.9989C205.575 67.8393 210.875 81.7597 210.875 96C210.875 115.096 201.353 133.409 184.405 146.912C167.456 160.414 144.469 168 120.5 168Z" fill="black" />
                            <path d="M112.969 48H128.031V114H112.969V48ZM120.5 132C118.266 132 116.082 132.528 114.224 133.517C112.366 134.506 110.918 135.911 110.063 137.556C109.208 139.2 108.984 141.01 109.42 142.756C109.856 144.502 110.932 146.105 112.512 147.364C114.092 148.623 116.105 149.48 118.296 149.827C120.487 150.174 122.759 149.996 124.823 149.315C126.887 148.634 128.652 147.48 129.893 146C131.134 144.52 131.797 142.78 131.797 141C131.797 138.613 130.607 136.324 128.488 134.636C126.37 132.948 123.496 132 120.5 132Z" fill="black" />
                        </svg>
                    </div>
                    <div className=''>
                        <h1 className='text-[1.5rem] text-center'>Confirm Delete</h1>
                    </div>
                    <div className=''>
                        <form className='flex gap-6 justify-evenly'>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className='btn-small-w' onClick={() => { setids(0) }}>Confirm</div>
                            </div>
                            <div className='flex justify-center items-center mt-8 mb-6'>
                                <div className='btn-small-w' style={{backgroundColor:"#1BB7EA"}} onClick={() => { setids(0) }}>Cancel</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteConfirmation