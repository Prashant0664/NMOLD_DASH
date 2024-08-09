import React from 'react'
import "../Styles/Navbar.css"
import Expand from "../Assets/sidebarexp.png"
import A from "../Assets/Customers.png"
import B from "../Assets/Outsourcing.png"
import C from "../Assets/fluent-mdl2_product-list.png"
import D from "../Assets/Dashboard.png"
import E from "../Assets/tabler_category-filled.png"
import F from "../Assets/mage_tag-check.png"
const Navbar = () => {
  return (
    <>
        <div className='w-[5%] block navbar-main h-[100vh] absolute left-0 top-[4rem]'>
            <div className='flex items-center flex-col gap-[1.5rem] justify-center pt-[1.5rem]'>
            <div className=''>
                    <img src={Expand} alt='' className='h-[2.5rem]'/>
                </div>
                <div className=''>
                    <img src={D} alt='' className='h-[2.5rem]'/>
                </div>
                <div className=''>
                    <img src={A} alt='' className='h-[2.5rem]'/>
                </div>
                <div className=''>
                    <img src={F} alt='' className='h-[2.5rem]'/>
                </div>
                <div className=''>
                    <img src={B} alt='' className='h-[2.5rem]'/>
                </div>
                <div className=''>
                    <img src={E} alt='' className='h-[2.5rem]'/>
                </div>
                <div className=''>
                    <img src={C} alt='' className='h-[2.5rem]'/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar