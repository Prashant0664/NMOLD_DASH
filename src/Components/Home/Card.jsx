import React from 'react'
import {homedatacart} from "../../Data/index"
const Card = () => {

    
    return (
        <>
            <div className='w-full overflow-x-scroll flex mt-8 gap-4'>
                {homedatacart.map((item, index)=> {
                    return (<div className='dashboard-top-cards shadow-lg flex items-center justify-center flex-col'>
                        <div className='dash-top-card-img flex items-center justify-center p-4 rounded-[10px]'>
                            <img src={item.img} alt="" className='w-[2rem] h-[2rem]' />
                        </div>
                        <div className='mt-2 font-semibold text-[16px] '>
                            {item.name}
                        </div>
                        <div className=' font-bold text-[19px]'>
                            {item.value}
                        </div>
                        <div className='mt-3 text-[11px]'>
                            <span className='text-[#34A853]'>{item.percentage}%</span>
                            &nbsp;
                            From Previous Period
                        </div>
                    </div>
                    )
                })}

            </div>
        </>
    )
}

export default Card