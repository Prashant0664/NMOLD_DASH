import React from 'react'
import "../Styles/Home.css"
import Card from '../Components/Home/Card'
import Table from '../Components/Home/Table'
const Home = () => {
  return (
    <>
      <div className='ml-[5%] w-[95%] h-[100vh] px-[2rem] mt-[2rem] mb-[4rem]'>
        <div className=''>
          <div className=' font-bold text-[20px] '>
            &lt; DASHBOARD
          </div>
          <Card />
          <Table />
        </div>
      </div>
    </>
  )
}

export default Home