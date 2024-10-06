import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/list/List'

const Single = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="container">
        <Navbar />
        <div className="top flex p-[20px] gap-[20px]">
          <div className="left myBoxShadow w-1/2 flex flex-col h-[300px] p-[20px] gap-[10px]">
            <p className='text-gray-500'>Information</p>
            <div className="infoContainer flex justify-center gap-[30px] w-[100%] mt-[10px]">
              <img src="https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="rounded-full size-[80px]" alt="" />
              <div className="personalInfo flex flex-col gap-[5px]">
                <div className='text-[30px] font-bold'><span>Jane Doe</span></div>
                <div className='text-gray-500 font-medium'><span>Email: </span><span>howinfg@gmail.com</span></div>
                <div className='text-gray-500 font-medium'><span>Phone: </span><span>+8536796</span></div>
                <div className='text-gray-500 font-medium'><span>Address: </span><span>FLTD</span></div>
                <div className='text-gray-500 font-medium'><span>Country: </span><span>Hong Kong</span></div>
              </div>
            </div>
            <button className='bg-red-200 rounded p-2 w-[20%] self-end font-bold text-gray-700'>Edit</button>
          </div>
          <div className="right myBoxShadow w-1/2 h-[300px]">
          <Chart customHeight={250} title={"User Spending (Last 6 Months)"}/>
          </div>
        </div>

        <div className="bottom flex flex-col items-center">
          <h1 className="title">History Information</h1>
          <List/>
        </div>
      </div>
    </div>
  )
}

export default Single